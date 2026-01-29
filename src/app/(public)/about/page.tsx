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
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
          About
        </h1>
        <p className="text-xl text-dark/50 mb-16">
          Munich, Germany
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio */}
          <div className="space-y-6 text-lg text-dark/70 leading-relaxed">
            <p className="text-2xl text-dark font-medium leading-snug">
              I&apos;m a Machine Learning Engineer who traded selling software
              for building it. Best career decision I ever made.
            </p>
            <p>
              These days I work at <span className="text-dark font-medium">OVHcloud</span>,
              where I help build the AI/Quantum platform. I write Go for backend services
              and Rust for the CLI tools that ML engineers use to wrangle their models
              and containers. It&apos;s the kind of work where you get to think about
              distributed systems, API design, and making complex things feel simple.
            </p>
            <p>
              Before that, I spent three years at <span className="text-dark font-medium">Exxeta</span> doing
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
            <p className="text-dark/50 italic">
              BA in Business Psychology, because apparently I like to understand
              why systems (and people) behave the way they do.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-12">
            <div>
              <p className="text-sm font-medium text-dark/40 mb-6">What I work with daily</p>
              <div className="flex flex-wrap gap-3">
                {primarySkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm border-2 border-dark/20 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-dark/40 mb-6">Also comfortable with</p>
              <div className="flex flex-wrap gap-3">
                {otherSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm border border-dark/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Fun facts */}
            <div className="p-6 bg-accent/10 rounded-2xl">
              <p className="text-sm font-medium text-dark/40 mb-4">The boring details</p>
              <ul className="space-y-2 text-dark/70">
                <li>3+ years building production systems</li>
                <li>Fluent in microservices, RESTful APIs, and coffee</li>
                <li>Can explain Kubernetes to your manager</li>
                <li>Former salesperson turned engineer (the good kind of pivot)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-24 pt-16 border-t border-dark/10">
          <p className="text-sm font-medium text-dark/40 mb-6">Let&apos;s connect</p>
          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:marco_alexander_braun@proton.me"
              className="text-lg font-medium hover:text-accent transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/marco-braun-b11423145"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/BrownieBrown"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
