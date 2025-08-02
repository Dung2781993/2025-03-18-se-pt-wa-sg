import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next.js App",
  description: "A multi-page Next.js + Tailwind app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <header className="bg-white shadow p-4 mb-8">
          <nav className="max-w-4xl mx-auto flex gap-6 text-blue-600 font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}