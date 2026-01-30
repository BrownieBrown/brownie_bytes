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

  const title = `${post.title} | Marco Braun`;
  const description = post.excerpt || post.title;

  return {
    title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.createdAt.toISOString(),
      authors: ["Marco Braun"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
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
        <Link href="/blog" className="text-sm text-dark/40 hover:text-accent font-mono">
          $ cd ../logs
        </Link>

        <article className="mt-12">
          <header className="mb-12">
            <p className="text-sm text-dark/40 font-mono mb-4">
              {"// "}{new Date(post.createdAt).toISOString().split('T')[0]}
            </p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight font-mono">
              <span className="text-accent">#</span> {post.title}
            </h1>
          </header>

          <div className="terminal p-6 rounded-lg font-mono">
            <p className="text-green-400/60 mb-4">$ cat {post.slug}.md</p>
            <div className="text-green-400/90 leading-relaxed space-y-4">
              {post.content.split("\n").map((paragraph: string, index: number) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
