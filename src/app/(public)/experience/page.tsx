import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Marco Braun",
  description: "Professional experience in ML engineering, cloud infrastructure, and software development.",
};

const experiences = [
  {
    id: "1",
    hash: "a1b2c3d",
    company: "OVHcloud",
    location: "Munich, Germany",
    title: "Machine Learning Engineer",
    startDate: "Aug 2024",
    endDate: null,
    current: true,
    description: "Design and develop cloud-native AI/Quantum platform infrastructure, implementing control plane features and API enhancements using Go for backend services and Rust for the ovhai CLI tool.",
    highlights: [
      "Architect and implement RESTful APIs following microservices patterns for AI Training, Notebooks, Deploy, and Endpoints products",
      "Build CLI capabilities in Rust that streamline workflows for ML engineers working with containers and computational resources",
      "Collaborate with frontend teams to deliver cohesive user experiences through the Manager interface",
      "Participate in technical design discussions and code reviews to maintain high code quality standards",
    ],
    technologies: ["Go", "Rust", "Kubernetes", "Docker", "Microservices", "REST APIs"],
  },
  {
    id: "2",
    hash: "e4f5g6h",
    company: "Exxeta",
    location: "Munich, Germany",
    title: "Software Developer",
    startDate: "2021",
    endDate: "2024",
    current: false,
    description: "Consulting and software development for enterprise clients in the automotive sector, focusing on cloud migrations, microservices architecture, and secure system design.",
    highlights: [
      "Led architectural redesign and AWS cloud migration of a major automotive manufacturer's global document management system",
      "Implemented solutions using AWS Lambda, S3, CloudFront, and API Gateway with global CDN distribution",
      "Designed microservices-based backend systems using Spring Boot, Node.js, and Go with Apache Kafka for real-time data processing",
      "Implemented enterprise security measures including OAuth 2.0, RBAC, encryption, and GDPR compliance",
      "Established CI/CD pipelines with Jenkins and Docker, improving deployment reliability through infrastructure as code",
    ],
    technologies: ["AWS", "Spring Boot", "Node.js", "Go", "Kafka", "Docker", "Terraform"],
  },
  {
    id: "3",
    hash: "i7j8k9l",
    company: "Personio, Trbo, Reachbird",
    location: "Munich, Germany",
    title: "Sales & Account Management",
    startDate: "2017",
    endDate: "2021",
    current: false,
    description: "Built the foundation for understanding user needs and product development through client-facing roles at Munich tech startups.",
    highlights: [],
    technologies: [],
  },
];

const education = {
  hash: "m0n1o2p",
  degree: "Bachelor of Arts - Business Psychology",
  school: "Hochschule Fresenius",
  location: "Munich, Germany",
  year: "2017",
};

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="font-mono mb-16">
          <p className="text-dark/40 mb-2">$ git log --oneline --graph</p>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-accent">
            # Experience
          </h1>
          <p className="text-xl text-dark/50 mt-4">
            // 3+ years building production systems
          </p>
        </div>

        {/* Work Experience - Git Log Style */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 pb-12 border-l-2 border-dark/10 last:border-l-0">
              {/* Git commit dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-dark border-4 border-white" />

              {/* Commit header */}
              <div className="font-mono mb-4">
                <span className="text-accent">{exp.hash}</span>
                <span className="text-dark/40"> - </span>
                <span className="text-dark/60">{exp.startDate} {exp.current ? "→ HEAD" : `→ ${exp.endDate}`}</span>
                {exp.current && (
                  <span className="ml-2 text-xs bg-green-400/20 text-green-600 px-2 py-0.5 rounded">
                    HEAD
                  </span>
                )}
              </div>

              {/* Commit message */}
              <div className="mb-4">
                <h2 className="text-2xl font-medium font-mono">
                  <span className="text-accent">&gt;</span> {exp.title}
                </h2>
                <p className="text-dark/60 font-mono">
                  @ {exp.company} <span className="text-dark/30">|</span> {exp.location}
                </p>
              </div>

              <p className="text-dark/70 leading-relaxed mb-4">{exp.description}</p>

              {exp.highlights.length > 0 && (
                <div className="terminal p-4 rounded-lg mb-4">
                  <p className="text-green-400/60 font-mono text-sm mb-3">$ cat CHANGELOG.md</p>
                  <ul className="space-y-2 font-mono text-sm">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-green-400/80">
                        <span className="text-green-400/40">- </span>{highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 font-mono">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-dark/5 rounded text-dark/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16 pt-16 border-t border-dark/10">
          <p className="text-sm font-mono text-dark/40 mb-8">// education</p>
          <div className="font-mono">
            <p className="mb-2">
              <span className="text-accent">{education.hash}</span>
              <span className="text-dark/40"> - </span>
              <span className="text-dark/60">{education.year}</span>
              <span className="ml-2 text-xs bg-dark/10 text-dark/60 px-2 py-0.5 rounded">
                tag: v0.1.0
              </span>
            </p>
            <h2 className="text-xl font-medium">
              <span className="text-accent">&gt;</span> {education.degree}
            </h2>
            <p className="text-dark/60">
              @ {education.school} <span className="text-dark/30">|</span> {education.location}
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="mt-16 pt-16 border-t border-dark/10">
          <a
            href="https://www.linkedin.com/in/marco-braun-b11423145"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm bg-dark text-green-400 px-6 py-3 rounded hover:bg-dark/80 transition-colors"
          >
            $ open linkedin://marco-braun
          </a>
        </div>
      </div>
    </div>
  );
}
