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
    { label: "status", value: "ML Engineer @ OVHcloud" },
    { label: "stack", value: "Go, Rust, Cloud Infrastructure" },
    { label: "prev", value: "AWS & Microservices @ Exxeta" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <p className="text-sm font-mono text-dark/40 mb-6">// munich, germany</p>
          <div className="font-mono mb-8">
            <p className="text-dark/40 text-lg mb-2">$ whoami</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-none">
              <span className="text-accent">marco_braun</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-dark/60 max-w-2xl mb-6 font-mono">
            <span className="text-dark/40">$</span> Machine Learning Engineer crafting APIs and CLIs that don&apos;t make you want to throw your laptop.
          </p>
          <p className="text-lg text-dark/40 max-w-xl mb-12">
            Former salesperson who realized building software is way more fun than selling it—now helping ML engineers do their best work.
          </p>
          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-dark text-green-400 px-6 py-3 rounded hover:bg-dark/80 transition-colors"
            >
              cat README.md
            </Link>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 border border-dark/20 px-6 py-3 rounded hover:border-accent hover:text-accent transition-colors"
            >
              git log
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-dark/20 px-6 py-3 rounded hover:border-accent hover:text-accent transition-colors"
            >
              tail -f logs
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info - Terminal Style */}
      <section className="py-16 terminal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 font-mono">
          <p className="text-green-400/60 mb-6">$ env | grep marco</p>
          <div className="space-y-2">
            {highlights.map((item) => (
              <p key={item.label}>
                <span className="text-green-400/60">{item.label.toUpperCase()}=</span>
                <span className="text-accent">&quot;{item.value}&quot;</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-24 border-t border-dark/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-sm font-mono text-dark/40 mb-8">// what_i_do</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-medium mb-4 font-mono">
                <span className="text-accent">&gt;</span> Build AI Platform Infrastructure
              </h2>
              <p className="text-dark/60 leading-relaxed">
                At OVHcloud, I work on the control plane for AI/Quantum products.
                Think APIs that let data scientists spin up GPU clusters without crying,
                and CLI tools that make container orchestration feel almost pleasant.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-4 font-mono">
                <span className="text-accent">&gt;</span> Design Distributed Systems
              </h2>
              <p className="text-dark/60 leading-relaxed">
                Microservices, event-driven architectures, the whole distributed systems
                circus. I&apos;ve migrated legacy systems to the cloud and lived to tell the tale.
                GDPR compliance included, because enterprise clients don&apos;t mess around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Package.json style */}
      <section className="py-16 terminal-amber">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 font-mono">
          <p className="text-accent/60 mb-4">$ cat package.json | jq &apos;.dependencies&apos;</p>
          <div className="text-accent">
            <p>{"{"}</p>
            <div className="pl-4 space-y-1">
              {["Go", "Rust", "C++", "Python", "TypeScript", "Kubernetes", "Docker", "AWS", "Terraform", "PostgreSQL", "Kafka"].map((tech, i, arr) => (
                <p key={tech}>
                  <span className="text-white">&quot;{tech.toLowerCase()}&quot;</span>: <span className="text-green-400">&quot;latest&quot;</span>{i < arr.length - 1 ? "," : ""}
                </p>
              ))}
            </div>
            <p>{"}"}</p>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-24 border-t border-dark/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-sm font-mono text-dark/40 mb-8">// recent_logs</p>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <p className="text-sm text-dark/40 font-mono mb-2">
                    [{new Date(post.createdAt).toISOString().split('T')[0]}]
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
          <h2 className="text-3xl md:text-4xl font-medium mb-4 font-mono">
            <span className="text-accent">&gt;</span> Want to work together?
          </h2>
          <p className="text-dark/60 mb-8 max-w-md mx-auto">
            I&apos;m always open to interesting conversations about cloud infrastructure,
            distributed systems, or why Rust is worth the learning curve.
          </p>
          <a
            href="mailto:marco_alexander_braun@proton.me"
            className="inline-flex items-center gap-2 font-mono text-sm bg-dark text-green-400 px-6 py-3 rounded hover:bg-dark/80 transition-colors"
          >
            $ mail -s &quot;Hello&quot; marco
          </a>
        </div>
      </section>
    </>
  );
}
