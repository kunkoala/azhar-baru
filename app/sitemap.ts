import { getBlogPosts } from "@/app/blog/utils";
import { BlogPost } from "@/types/blog-post";

export const baseUrl = "https://profile.azharfr.me";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post: BlogPost) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
