/**
 * WordPress API integration utilities
 */

// Replace with your WordPress site URL
const API_URL = process.env.WORDPRESS_API_URL || 'https://your-wordpress-site.com/wp-json';

/**
 * Fetches data from the WordPress REST API
 */
export async function fetchAPI(path: string) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(`${API_URL}${path}`, { headers });
  
  if (!res.ok) {
    console.error(`Failed to fetch API: ${res.status} ${res.statusText}`);
    throw new Error(`Failed to fetch API: ${res.status} ${res.statusText}`);
  }
  
  const json = await res.json();
  return json;
}

/**
 * Fetches posts from WordPress
 */
export async function getAllPosts() {
  const data = await fetchAPI('/wp/v2/posts?_embed&per_page=100');
  return data;
}

/**
 * Fetches a single post by slug
 */
export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(`/wp/v2/posts?slug=${slug}&_embed`);
  return data[0];
}

/**
 * Fetches pages from WordPress
 */
export async function getAllPages() {
  const data = await fetchAPI('/wp/v2/pages?_embed&per_page=100');
  return data;
}

/**
 * Fetches a single page by slug
 */
export async function getPageBySlug(slug: string) {
  const data = await fetchAPI(`/wp/v2/pages?slug=${slug}&_embed`);
  return data[0];
}

/**
 * If you're using WPGraphQL, you can use this function instead
 */
export async function fetchGraphQL(query: string, { variables }: { variables?: any } = {}) {
  // Replace with your WPGraphQL endpoint
  const graphqlEndpoint = process.env.WORDPRESS_GRAPHQL_URL || 'https://your-wordpress-site.com/graphql';
  
  const res = await fetch(graphqlEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  
  return json.data;
} 