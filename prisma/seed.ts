import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create admin user
  const adminPassword = await bcrypt.hash("admin123", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      name: "Admin User",
      password: adminPassword,
      role: "ADMIN",
    },
  });
  console.log("Created admin user:", admin.email);

  // Create sample blog posts
  const posts = [
    {
      title: "Getting Started with Next.js 14",
      slug: "getting-started-with-nextjs-14",
      content: `Next.js 14 brings exciting new features to the React ecosystem. In this post, we'll explore the App Router, Server Components, and more.

The App Router is a new way to build applications in Next.js. It uses React Server Components by default, which means your components render on the server unless you explicitly mark them as client components.

Server Components offer several benefits:
- Reduced JavaScript bundle size
- Direct access to backend resources
- Improved initial page load

To get started, simply create a new Next.js project and start building in the app directory. Each folder represents a route segment, and page.tsx files define the UI for that route.

Happy coding!`,
      excerpt:
        "Explore the new features in Next.js 14 including the App Router and Server Components.",
      published: true,
    },
    {
      title: "Building a REST API with Prisma",
      slug: "building-rest-api-with-prisma",
      content: `Prisma is a modern database toolkit that makes working with databases enjoyable. Let's build a REST API using Prisma and Next.js API routes.

First, define your schema in prisma/schema.prisma. Prisma uses a declarative syntax that's easy to understand and maintain.

Once your schema is ready, run 'npx prisma migrate dev' to create the database tables. Prisma will also generate a type-safe client that you can use in your application.

In your API routes, import the Prisma client and use it to perform CRUD operations. The client provides full TypeScript support, so you get autocomplete and type checking.

Prisma also includes Prisma Studio, a GUI for viewing and editing your data. Run 'npx prisma studio' to open it in your browser.`,
      excerpt:
        "Learn how to build a type-safe REST API using Prisma ORM with Next.js.",
      published: true,
    },
    {
      title: "Authentication Best Practices",
      slug: "authentication-best-practices",
      content: `Security is crucial for any web application. Here are some authentication best practices to follow.

Always hash passwords before storing them. Use a library like bcrypt with a sufficient work factor (12 is a good starting point).

Implement proper session management. Use HTTP-only cookies for session tokens to prevent XSS attacks. Set appropriate expiration times and implement refresh token rotation.

Use HTTPS everywhere. Never transmit sensitive data over unencrypted connections.

Implement rate limiting to prevent brute force attacks. Lock accounts after multiple failed login attempts.

Consider using established authentication libraries like NextAuth.js instead of rolling your own. They handle many edge cases and security considerations for you.`,
      excerpt:
        "Essential security practices for implementing authentication in web applications.",
      published: true,
    },
  ];

  for (const post of posts) {
    const created = await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    });
    console.log("Created post:", created.title);
  }

  // Create sample experiences
  const experiences = [
    {
      company: "Tech Company Inc.",
      title: "Senior Software Engineer",
      description:
        "Led development of microservices architecture. Mentored junior developers and conducted code reviews. Implemented CI/CD pipelines and improved deployment efficiency by 40%.",
      startDate: new Date("2022-01-01"),
      endDate: null,
      current: true,
      order: 1,
    },
    {
      company: "Startup Labs",
      title: "Full Stack Developer",
      description:
        "Built and maintained multiple web applications using React and Node.js. Collaborated with design team to implement responsive user interfaces. Reduced page load time by 60%.",
      startDate: new Date("2020-03-01"),
      endDate: new Date("2021-12-31"),
      current: false,
      order: 2,
    },
    {
      company: "Digital Agency",
      title: "Junior Developer",
      description:
        "Developed client websites and internal tools. Learned agile methodologies and participated in sprint planning. Created reusable component libraries.",
      startDate: new Date("2018-06-01"),
      endDate: new Date("2020-02-28"),
      current: false,
      order: 3,
    },
  ];

  for (const exp of experiences) {
    const created = await prisma.experience.create({
      data: exp,
    });
    console.log("Created experience:", created.title, "at", created.company);
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
