import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Marco Braun",
  description: "Professional experience in ML engineering, cloud infrastructure, and software development.",
};

const experiences = [
  {
    id: "1",
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
  degree: "Bachelor of Arts - Business Psychology",
  school: "Hochschule Fresenius",
  location: "Munich, Germany",
  year: "2017",
};

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-4">
          Experience
        </h1>
        <p className="text-xl text-dark/50 mb-16">
          3+ years building production systems
        </p>

        {/* Work Experience */}
        <div className="space-y-20">
          {experiences.map((exp) => (
            <div key={exp.id} className="grid md:grid-cols-4 gap-8">
              <div>
                <p className="text-sm text-dark/40 mb-1">
                  {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                </p>
                {exp.current && (
                  <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    Current
                  </span>
                )}
              </div>
              <div className="md:col-span-3">
                <h2 className="text-2xl font-medium mb-1">{exp.title}</h2>
                <p className="text-dark/60 mb-4">
                  {exp.company} <span className="text-dark/30">·</span> {exp.location}
                </p>
                <p className="text-dark/70 leading-relaxed mb-4">{exp.description}</p>

                {exp.highlights.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index} className="text-dark/60 text-sm pl-4 border-l-2 border-dark/10">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-dark/5 rounded-full text-dark/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-24 pt-16 border-t border-dark/10">
          <p className="text-sm font-medium text-dark/40 mb-8">Education</p>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-sm text-dark/40">{education.year}</p>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-xl font-medium mb-1">{education.degree}</h2>
              <p className="text-dark/60">
                {education.school} <span className="text-dark/30">·</span> {education.location}
              </p>
            </div>
          </div>
        </div>

        {/* Download CV */}
        <div className="mt-16 pt-16 border-t border-dark/10">
          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.linkedin.com/in/marco-braun-b11423145"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium border border-dark/20 px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
