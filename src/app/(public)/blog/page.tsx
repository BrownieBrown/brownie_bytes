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
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-16">
          Logs
        </h1>

        {posts.length > 0 ? (
          <>
            <div className="space-y-12">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                  <div className="grid md:grid-cols-4 gap-4 py-8 border-b border-dark/10">
                    <p className="text-sm text-dark/40">
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <div className="md:col-span-3">
                      <h2 className="text-2xl font-medium mb-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-dark/60">{post.excerpt}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {pagination.totalPages > 1 && (
              <div className="flex gap-4 mt-12">
                {pagination.page > 1 && (
                  <Link
                    href={`/blog?page=${pagination.page - 1}`}
                    className="text-sm font-medium"
                  >
                    Previous
                  </Link>
                )}
                <span className="text-sm text-dark/40">
                  {pagination.page} / {pagination.totalPages}
                </span>
                {pagination.page < pagination.totalPages && (
                  <Link
                    href={`/blog?page=${pagination.page + 1}`}
                    className="text-sm font-medium"
                  >
                    Next
                  </Link>
                )}
              </div>
            )}
          </>
        ) : (
          <p className="text-dark/60">No posts yet. Check back soon.</p>
        )}
      </div>
    </div>
  );
}
