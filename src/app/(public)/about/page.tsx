import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Marco Braun",
  description: "Machine Learning Engineer based in Munich. Building cloud-native AI infrastructure at OVHcloud.",
};

export default function AboutPage() {
  const primarySkills = [
    "Go",
    "Rust",
    "C++",
    "Python",
    "TypeScript",
    "Kubernetes",
    "Docker",
    "AWS",
    "Terraform",
  ];

  const otherSkills = [
    "PostgreSQL",
    "Kafka",
    "React",
    "Node.js",
    "Spring Boot",
    "FastAPI",
    "Redis",
    "MongoDB",
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="font-mono mb-16">
          <p className="text-dark/40 mb-2">$ cat README.md</p>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-accent">
            # About
          </h1>
          <p className="text-xl text-dark/50 mt-4">
            {"// munich, germany"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio */}
          <div className="space-y-6 text-lg text-dark/70 leading-relaxed">
            <p className="text-2xl text-dark font-medium leading-snug font-mono">
              <span className="text-accent">&gt;</span> I&apos;m a Machine Learning Engineer who traded selling software
              for building it. Best career decision I ever made.
            </p>
            <p>
              These days I work at <code className="bg-dark/5 px-2 py-1 rounded text-dark">OVHcloud</code>,
              where I help build the AI/Quantum platform. I write Go for backend services
              and Rust for the CLI tools that ML engineers use to wrangle their models
              and containers. It&apos;s the kind of work where you get to think about
              distributed systems, API design, and making complex things feel simple.
            </p>
            <p>
              Before that, I spent three years at <code className="bg-dark/5 px-2 py-1 rounded text-dark">Exxeta</code> doing
              consulting work for automotive clients. I led a cloud migration that moved
              a global document system to AWS, built microservices with Spring Boot and Kafka,
              and learned that enterprise security requirements are no joke.
            </p>
            <p>
              And yes, before I became an engineer, I worked in sales and account management
              at a few Munich startups. Turns out understanding what people actually need
              makes you a better developer. Who knew that soft skills would come in handy
              when writing hard code?
            </p>
            <p className="text-dark/50 font-mono text-sm">
              {"/* BA in Business Psychology, because apparently I like to understand why systems (and people) behave the way they do. */"}
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-12">
            <div className="terminal p-6 rounded-lg">
              <p className="text-green-400/60 font-mono mb-4">$ cat skills.json | jq &apos;.primary&apos;</p>
              <div className="flex flex-wrap gap-2">
                {primarySkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm border border-green-400/30 rounded text-green-400 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="terminal p-6 rounded-lg">
              <p className="text-green-400/60 font-mono mb-4">$ cat skills.json | jq &apos;.also_know&apos;</p>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm border border-green-400/20 rounded text-green-400/70 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Fun facts */}
            <div className="terminal-amber p-6 rounded-lg font-mono">
              <p className="text-accent/60 mb-4">$ ./facts.sh</p>
              <ul className="space-y-2 text-accent">
                <li><span className="text-white">[INFO]</span> 3+ years building production systems</li>
                <li><span className="text-white">[INFO]</span> Fluent in microservices, RESTful APIs, and coffee</li>
                <li><span className="text-white">[INFO]</span> Can explain Kubernetes to your manager</li>
                <li><span className="text-white">[WARN]</span> Former salesperson turned engineer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-24 pt-16 border-t border-dark/10">
          <p className="text-sm font-mono text-dark/40 mb-6">{"// connect"}</p>
          <div className="terminal inline-block p-6 rounded-lg font-mono">
            <p className="text-green-400/60 mb-4">$ cat .env</p>
            <div className="space-y-2">
              <p>
                <span className="text-green-400/60">EMAIL=</span>
                <a href="mailto:marco_alexander_braun@proton.me" className="text-accent hover:underline">
                  &quot;marco_alexander_braun@proton.me&quot;
                </a>
              </p>
              <p>
                <span className="text-green-400/60">LINKEDIN=</span>
                <a href="https://www.linkedin.com/in/marco-braun-b11423145" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  &quot;/in/marco-braun&quot;
                </a>
              </p>
              <p>
                <span className="text-green-400/60">GITHUB=</span>
                <a href="https://github.com/BrownieBrown" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  &quot;/BrownieBrown&quot;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
