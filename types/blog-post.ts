export interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
  };
  content: string;
}
