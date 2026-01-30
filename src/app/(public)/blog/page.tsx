import { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Logs | Brownie Bytes",
  description: "Thoughts on software development.",
};

interface PageProps {
  searchParams: { page?: string };
}

async function getPosts(page: number, limit: number = 10) {
  const skip = (page - 1) * limit;

  try {
    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          createdAt: true,
        },
      }),
      prisma.post.count({ where: { published: true } }),
    ]);

    return {
      posts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch {
    return {
      posts: [],
      pagination: { page: 1, limit, total: 0, totalPages: 0 },
    };
  }
}

export default async function BlogPage({ searchParams }: PageProps) {
  const page = parseInt(searchParams.page || "1");
  const { posts, pagination } = await getPosts(page);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="font-mono mb-16">
          <p className="text-dark/40 mb-2">$ tail -f /var/log/marco.log</p>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-accent">
            # Logs
          </h1>
        </div>

        {posts.length > 0 ? (
          <>
            <div className="terminal p-6 rounded-lg">
              <div className="space-y-6">
                {posts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                    <div className="font-mono">
                      <p className="text-green-400/60 text-sm mb-1">
                        [{new Date(post.createdAt).toISOString().replace('T', ' ').split('.')[0]}]
                      </p>
                      <h2 className="text-xl text-green-400 group-hover:text-accent transition-colors">
                        <span className="text-green-400/40">&gt; </span>
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-green-400/60 mt-1 pl-4">{post.excerpt}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {pagination.totalPages > 1 && (
              <div className="flex gap-4 mt-8 font-mono text-sm">
                {pagination.page > 1 && (
                  <Link
                    href={`/blog?page=${pagination.page - 1}`}
                    className="text-dark/60 hover:text-accent"
                  >
                    $ prev
                  </Link>
                )}
                <span className="text-dark/40">
                  [{pagination.page}/{pagination.totalPages}]
                </span>
                {pagination.page < pagination.totalPages && (
                  <Link
                    href={`/blog?page=${pagination.page + 1}`}
                    className="text-dark/60 hover:text-accent"
                  >
                    $ next
                  </Link>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="terminal p-6 rounded-lg font-mono">
            <p className="text-green-400/60">$ cat logs</p>
            <p className="text-accent mt-2">Error: No logs found. Check back soon.</p>
            <p className="text-green-400/40 mt-4">
              <span className="cursor-blink">&gt;</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
