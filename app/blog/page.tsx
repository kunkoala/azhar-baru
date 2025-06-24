import { Page } from "@/components/Page";
import { BlogPosts } from "@/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function BlogPage() {
  return (
    <Page>
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">
        Writings & Thoughts
      </h1>
      <BlogPosts />
    </Page>
  );
}
