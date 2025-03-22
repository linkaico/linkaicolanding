import { getPostBySlug, getAllPosts } from '@/lib/wordpress';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 60; // Revalidate every 60 seconds

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/blog" className="text-primary mb-8 inline-block">
        ← Back to Blog
      </Link>
      
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        
        <div className="text-gray-500 mb-6">
          Published on {new Date(post.date).toLocaleDateString()}
        </div>
        
        {post._embedded && post._embedded['wp:featuredmedia'] && (
          <div className="mb-8">
            <img 
              src={post._embedded['wp:featuredmedia'][0].source_url} 
              alt={post.title.rendered} 
              className="w-full rounded-lg"
            />
          </div>
        )}
        
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </div>
  );
} 