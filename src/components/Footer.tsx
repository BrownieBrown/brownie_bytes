import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-2xl font-medium tracking-tight mb-4">
              marco braun
            </p>
            <p className="text-sm opacity-70">
              Building thoughtful software.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium mb-4">Pages</p>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm opacity-70">Home</Link>
              <Link href="/about" className="text-sm opacity-70">About</Link>
              <Link href="/blog" className="text-sm opacity-70">Blog</Link>
              <Link href="/experience" className="text-sm opacity-70">Experience</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              <a href="mailto:marco_alexander_braun@proton.me" className="text-sm opacity-70">
                Email
              </a>
              <a href="https://github.com/BrownieBrown" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/marco-braun-b11423145" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
