import Link from "next/link";
import { prisma } from "@/lib/prisma";

async function getFeaturedPosts() {
  try {
    return await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      take: 3,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        createdAt: true,
      },
    });
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts();

  const highlights = [
    { label: "Current", value: "ML Engineer @ OVHcloud" },
    { label: "Focus", value: "Go, Rust, Cloud Infrastructure" },
    { label: "Previously", value: "AWS & Microservices @ Exxeta" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-sm font-medium text-dark/40 mb-6">Munich, Germany</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-none mb-8">
            Hi, I&apos;m<br />
            <span className="text-accent">Marco Braun</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark/60 max-w-2xl mb-6">
            Machine Learning Engineer crafting APIs and CLIs that don&apos;t make you want to throw your laptop.
          </p>
          <p className="text-lg text-dark/40 max-w-xl mb-12">
            Former salesperson who realized building software is way more fun than selling it—now helping ML engineers do their best work.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium bg-dark text-white px-6 py-3 rounded-full hover:bg-dark/80 transition-colors"
            >
              More about me
            </Link>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-sm font-medium border border-dark/20 px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              See experience
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium border border-dark/20 px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              Read blog
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-24 border-t border-dark/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div key={item.label}>
                <p className="text-sm font-medium text-dark/40 mb-2">{item.label}</p>
                <p className="text-xl font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-24 border-t border-dark/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-sm font-medium text-dark/40 mb-8">What I do</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-medium mb-4">Build AI Platform Infrastructure</h2>
              <p className="text-dark/60 leading-relaxed">
                At OVHcloud, I work on the control plane for AI/Quantum products.
                Think APIs that let data scientists spin up GPU clusters without crying,
                and CLI tools that make container orchestration feel almost pleasant.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-4">Design Distributed Systems</h2>
              <p className="text-dark/60 leading-relaxed">
                Microservices, event-driven architectures, the whole distributed systems
                circus. I&apos;ve migrated legacy systems to the cloud and lived to tell the tale.
                GDPR compliance included, because enterprise clients don&apos;t mess around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 border-t border-dark/10 bg-dark/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-sm font-medium text-dark/40 mb-8">Tech I enjoy</p>
          <div className="flex flex-wrap gap-3">
            {["Go", "Rust", "C++", "Python", "TypeScript", "Kubernetes", "Docker", "AWS", "Terraform", "PostgreSQL", "Kafka"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm border border-dark/10 rounded-full bg-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-24 border-t border-dark/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-sm font-medium text-dark/40 mb-8">Latest posts</p>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <p className="text-sm text-dark/40 mb-2">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-dark/60 line-clamp-2">{post.excerpt}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 border-t border-dark/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Want to work together?</h2>
          <p className="text-dark/60 mb-8 max-w-md mx-auto">
            I&apos;m always open to interesting conversations about cloud infrastructure,
            distributed systems, or why Rust is worth the learning curve.
          </p>
          <a
            href="mailto:marco_alexander_braun@proton.me"
            className="inline-flex items-center gap-2 text-sm font-medium bg-dark text-white px-6 py-3 rounded-full hover:bg-dark/80 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  );
}
