import Link from "next/link";

const posts = [
  { slug: "hello-world", title: "Hello World" },
  { slug: "nextjs-routing", title: "Understanding Next.js Routing" },
];

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="list-disc pl-6 space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link className="text-blue-600 hover:underline" href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
