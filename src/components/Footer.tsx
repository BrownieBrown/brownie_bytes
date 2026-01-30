import Link from "next/link";

export default function Footer() {
  return (
    <footer className="terminal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 font-mono">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-2xl font-medium tracking-tight mb-4 text-accent">
              &gt; marco_
            </p>
            <p className="text-sm text-green-400/60">
              console.log(&apos;hello world&apos;)
            </p>
          </div>
          <div>
            <p className="text-sm text-green-400/60 mb-4">// pages</p>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-green-400/80 hover:text-accent">~/home</Link>
              <Link href="/about" className="text-sm text-green-400/80 hover:text-accent">~/about</Link>
              <Link href="/blog" className="text-sm text-green-400/80 hover:text-accent">~/logs</Link>
              <Link href="/experience" className="text-sm text-green-400/80 hover:text-accent">~/experience</Link>
            </div>
          </div>
          <div>
            <p className="text-sm text-green-400/60 mb-4">// connect</p>
            <div className="flex flex-col gap-2">
              <a href="mailto:marco_alexander_braun@proton.me" className="text-sm text-green-400/80 hover:text-accent">
                $EMAIL
              </a>
              <a href="https://github.com/BrownieBrown" target="_blank" rel="noopener noreferrer" className="text-sm text-green-400/80 hover:text-accent">
                $GITHUB
              </a>
              <a href="https://www.linkedin.com/in/marco-braun-b11423145" target="_blank" rel="noopener noreferrer" className="text-sm text-green-400/80 hover:text-accent">
                $LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
