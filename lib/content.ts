/**
 * Page content for the tagline card and the sections below the hero.
 *
 * Everything marked TODO is placeholder copy. Swap in your real details;
 * the components render whatever is in these arrays, so adding or removing
 * an item needs no component changes.
 */

/** Tagline: short line about you, shown in the card beneath the portrait photo. */
export const tagline =
  "I like building things, solving problems, and figuring out how things work.";

/** About section, right below the hero. One string per paragraph. */
export const about = [
  "I'm a software developer who loves building things, exploring new technologies, and turning random ideas into actual projects.",
  "Outside of coding, you'll probably find me at the gym, playing guitar, or picking up yet another hobby I swear I'll stick with. I'm naturally curious, a little ambitious, and always looking for something new to get into. Apparently, sitting still isn't really my thing.",
];

/** Stats row shown in the hero, under the role. */
// TODO: confirm these numbers
export const stats = [
  { value: "+2", label: "Years of experience" },
  { value: "+10", label: "Projects completed" },
  { value: "+5", label: "Technologies shipped" },
];

export type Project = {
  name: string;
  description: string;
  /** Tech used, shown as small tags. */
  tags: string[];
  /** Live site or repo. Without one, the row isn't a link. */
  href?: string;
  /** Icon on the orange tile (see the map in components/sections/Projects.tsx). */
  icon: "music" | "briefcase" | "puzzle" | "dumbbell" | "planet" | "sparkles";
  /** Optional status pill next to the name, e.g. "Work in progress". */
  status?: string;
};

export const projects: Project[] = [
  {
    name: "AI-Powered Documentation Assistant",
    icon: "sparkles",
    status: "Work in progress",
    description:
      "Building an AI-powered developer assistant that connects to GitHub repositories, indexes codebases, and allows developers to ask questions about their projects using natural language. Currently working on the application architecture, repository ingestion pipeline, and RAG implementation.",
    tags: [
      "Next.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "LLMs",
      "RAG",
    ],
  },
  {
    name: "Spotifiler",
    href: "https://spotifiler.vercel.app/",
    icon: "music",
    description:
      "Built a Spotify-powered music app using React. Worked with components, props, state, hooks, and integrated the Spotify Developer API to fetch user data. Implemented OAuth authentication and deployed the app on Vercel.",
    tags: [
      "React.js",
      "HTML & CSS",
      "Spotify OAuth",
      "Spotify API",
      "JavaScript",
      "Tailwind",
    ],
  },
  {
    name: "Fragments Microservice",
    href: "https://github.com/JuustinJoseph/fragments",
    icon: "puzzle",
    description:
      "Designed and implemented a cloud-based microservice using Node.js and Express.js to manage and convert text and image fragments for a manufacturing ecosystem. Deployed the microservice to AWS Lambda with API Gateway, ensuring scalability and cost-efficiency. Integrated GitHub Actions for automated CI/CD, streamlining deployments. Developed functionality for format conversion, utilizing Sharp.js for image processing and text parsers for text transformation.",
    tags: ["Node.js", "Express.js", "AWS Lambda", "GitHub Actions", "Sharp.js"],
  },
  {
    name: "Brogram",
    href: "https://brogram-beta.vercel.app/",
    icon: "dumbbell",
    description:
      "Developed a Workout Tracking Web App using React hosted on Vercel, managing workout plans and user progress. Optimized data persistence using local storage, ensuring workout progress is saved across sessions.",
    tags: ["React.js", "HTML & CSS", "JavaScript"],
  },
  {
    name: "FreelanceU",
    href: "https://prj666-1.onrender.com/",
    icon: "briefcase",
    description:
      "Developed a modern freelancing platform using React.js and Styled-Components to deliver a seamless user experience. Implemented AWS Cognito for secure authentication and AWS S3 for optimized static asset delivery, with hosting managed via AWS Amplify. Built a scalable backend using Node.js, Express.js, and MongoDB to ensure efficient data handling and performance.",
    tags: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB / Mongoose",
      "AWS Cognito",
      "AWS S3",
      "AWS Amplify",
    ],
  },
  {
    name: "The APOD Project",
    href: "https://nasa-react-app-ahfr.onrender.com/",
    icon: "planet",
    description:
      "A Vite + React app that fetches and displays NASA's Astronomy Picture of the Day (APOD). It retrieves the image, title, and description using the Fetch API and presents them in a clean, responsive layout using HTML and CSS. The app ensures a smooth user experience with fast loading times and a simple yet visually appealing design. 🚀",
    tags: ["React.js", "Vite", "HTML & CSS", "JavaScript", "NASA API"],
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  summary: string;
  /** Bullet points: a short bold label, then the detail. */
  highlights: { label: string; text: string }[];
};

/** Work history, newest first. */
export const experience: Job[] = [
  {
    role: "Software Developer",
    company: "Maxwell Merchant Solutions",
    period: "May 2025 – Present",
    summary:
      "Developing and maintaining production software solutions across frontend, backend, and cloud environments.",
    highlights: [
      {
        label: "Full-Stack Development",
        text: "Building and maintaining business applications using Angular, Next.js, React, TypeScript, C#, and ASP.NET Core.",
      },
      {
        label: "API & Enterprise Integrations",
        text: "Developing and maintaining integrations using Dell Boomi, connecting enterprise systems such as ServiceNow through APIs, data transformations, and automated workflows.",
      },
      {
        label: "Backend & Database Engineering",
        text: "Building REST APIs, designing database schemas, developing stored procedures, and optimizing SQL queries using Microsoft SQL Server.",
      },
      {
        label: "Cloud Infrastructure",
        text: "Working with AWS services including S3, Lambda, ECS, and ECR to support application hosting, document management, and cloud-based workloads.",
      },
      {
        label: "Event-Driven Architecture",
        text: "Working with Apache Kafka to support asynchronous communication and integration between services.",
      },
      {
        label: "DevOps & CI/CD",
        text: "Working with Docker, GitHub Actions, and Octopus Deploy to automate build and deployment workflows.",
      },
      {
        label: "System Modernization",
        text: "Contributing to the maintenance and modernization of legacy applications and services, including VB.NET and WCF-based systems.",
      },
      {
        label: "Production Support",
        text: "Troubleshooting application issues, investigating integration failures, and improving system reliability.",
      },
    ],
  },
  {
    role: ".NET Developer (Co-op)",
    company: "City of Vaughan",
    period: "May 2023 – December 2023",
    summary:
      "Contributed to the development, maintenance, and improvement of internal municipal applications, working across software development, database management, and business process automation.",
    highlights: [
      {
        label: "Application Development",
        text: "Developed and maintained full-stack applications using C#, .NET Core, HTML, CSS, JavaScript, and Microsoft SQL Server.",
      },
      {
        label: "Application Modernization",
        text: "Improved the Water Meter application by enhancing existing functionality, troubleshooting issues, and implementing fixes using .NET Core and SQL Server.",
      },
      {
        label: "Access Control & Security",
        text: "Updated the Purchasing Solution Catalogue by implementing role-based access control through Active Directory to manage user permissions.",
      },
      {
        label: "Workflow Automation",
        text: "Developed an internal Lieu Time tracking solution using Power Apps and Power Automate to streamline employee time tracking and approval processes.",
      },
      {
        label: "Database Management",
        text: "Worked with Microsoft SQL Server to maintain application data, write queries, and support database-related development.",
      },
      {
        label: "Business Process Analysis",
        text: "Participated in meetings with business stakeholders to gather requirements, understand operational needs, and define project scope.",
      },
      {
        label: "Development Collaboration",
        text: "Used Azure DevOps for source control, work item tracking, and collaboration throughout the development lifecycle.",
      },
      {
        label: "Application Support",
        text: "Investigated bugs, debugged existing applications, and delivered fixes to improve functionality and reliability.",
      },
    ],
  },
];

/** Tools & Stack, grouped by area. Each item renders as a small chip. */
export const stack = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    items: ["C#", "VB.NET", "ASP.NET Core", "Node.js", "Express.js", "Python"],
  },
  {
    category: "Databases",
    items: ["Microsoft SQL Server", "MongoDB"],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "AWS S3",
      "AWS Lambda",
      "AWS ECS",
      "AWS ECR",
      "AWS Amplify",
      "Docker",
    ],
  },
];

export type School = {
  program: string;
  school: string;
  location: string;
  period: string;
  /** Short achievements, shown as chips. */
  honours: string[];
  summary: string;
};

/** Education, newest first. */
export const education: School[] = [
  {
    program: "Advanced Diploma in Computer Programming & Analysis",
    school: "Seneca Polytechnic",
    location: "Toronto, Ontario",
    period: "September 2021 – December 2024",
    honours: [
      "Graduated with Honours",
      "GPA: 3.8 / 4.0",
      "President's Honour List",
    ],
    summary:
      "Focused on software development, object-oriented programming, database management, web application development, and software engineering principles.",
  },
];

/** Contact form status messages. */
export const contactForm = {
  success: "Thanks! Your message is on its way. I'll get back to you soon.",
  invalid: "Please fill in your name, a valid email and a message.",
  failed:
    "Something went wrong sending your message. Please try again or email me directly.",
};
