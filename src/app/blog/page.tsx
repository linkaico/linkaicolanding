import { getAllPosts } from '@/lib/wordpress';
import Link from 'next/link';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getAllPosts();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <article key={post.id} className="border rounded-lg overflow-hidden shadow-lg">
            {post._embedded && post._embedded['wp:featuredmedia'] && (
              <div className="h-48 overflow-hidden">
                <img 
                  src={post._embedded['wp:featuredmedia'][0].source_url} 
                  alt={post.title.rendered} 
                  className="w-full object-cover"
                />
              </div>
            )}
            
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                  {post.title.rendered}
                </Link>
              </h2>
              
              <div 
                className="prose prose-sm mb-4"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              
              <div className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 