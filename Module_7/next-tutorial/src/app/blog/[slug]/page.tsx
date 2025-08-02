import { notFound } from "next/navigation";

const posts: Record<string, { title: string; content: string }> = {
  "hello-world": {
    title: "Hello World",
    content: "This is the very first blog post!",
  },
  "nextjs-routing": {
    title: "Understanding Next.js Routing",
    content: "Learn how App Router and dynamic routing works in Next.js.",
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) return notFound();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
