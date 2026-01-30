import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

interface PageProps {
  params: { slug: string };
}

async function getPost(slug: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
    });
    return post;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Marco Braun`,
    description: post.excerpt || post.title,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPost(params.slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <Link href="/blog" className="text-sm text-dark/40 hover:text-dark">
          ← Back to logs
        </Link>

        <article className="mt-12">
          <header className="mb-12">
            <p className="text-sm text-dark/40 mb-4">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-lg max-w-none">
            {post.content.split("\n").map((paragraph: string, index: number) => (
              <p key={index} className="text-dark/80 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
