"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-lg font-medium tracking-tight font-mono text-accent">
            ~/dev
          </Link>

          <div className="flex items-center gap-8 font-mono text-sm">
            <Link href="/about" className="hover:text-accent transition-colors">
              /about
            </Link>
            <Link href="/blog" className="hover:text-accent transition-colors">
              /logs
            </Link>
            <Link href="/experience" className="hover:text-accent transition-colors">
              /exp
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
