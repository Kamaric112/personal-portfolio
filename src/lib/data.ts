export const personalInfo = {
  name: "Truong Quang Nguyen",
  title: "Software Engineer",
  email: "truong.ngquang112@gmail.com",
  location: "Ho Chi Minh City, Vietnam",
  bio: "I craft elegant, intuitive digital experiences with clean, efficient code. My focus is on creating products that combine beauty and functionality. Trying my best everyday to improve myself and my skills.",
  avatar: "/ProfilePicture.jpg",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nguyenquangtruong/",
      username: "@nguyenquangtruong",
    },
  ],
};

export interface Skill {
  id: string;
  name: string;
  order: number;
}

export const skills: Skill[] = [
  { id: "vue", name: "Vue", order: 0 },
  { id: "react", name: "React", order: 1 },
  { id: "typescript", name: "TypeScript", order: 2 },
  { id: "nodejs", name: "Node.js", order: 3 },
  { id: "database", name: "Database", order: 4 },
  { id: "aws", name: "AWS", order: 5 },
  { id: "aws-serverless", name: "AWS Serverless", order: 6 },
  { id: "sentry", name: "Sentry", order: 7 },
  { id: "git", name: "Git", order: 8 },
  { id: "github", name: "Github", order: 9 },
  { id: "cicd", name: "CI/CD", order: 10 },
  { id: "agile", name: "Agile", order: 11 },
  { id: "jira", name: "Jira", order: 12 },
];

export const skillsLearning: Skill[] = [
  { id: "fastify", name: "Fastify", order: 0 },
  { id: "elasticsearch", name: "ElasticSearch", order: 1 },
];

export const experiences = [
  {
    company: "SMG - Swiss Marketplace Group",
    position: "Full-stack Developer",
    period: "June 2024 - Present",
    description: `
   Stack: Vue.js, Node.js, Typescript, AWS services (Lambda, SQS, CDK, DynamoDB), Vite, Vitest, Jest, Cypress, Datadog, Github Actions
Contribute to the full-stack development (Vue.js, Node.js/TypeScript) of core search and search notification features for Homegate & ImmoScout24, directly impacting over 2 million monthly active users.
Lead two Vue 2 to Vue 3 migrations, decouple them into dedicated repositories. Incorporating Vite and Vitest, reducing application build time by 75% and cutting test execution times by 65%.
Improve front-end performance by reducing bundle size by 20% through lazy-loading and subpath imports for multiple internal component libraries
Design and implement a daily newsletter system, increasing the active subscriber count by 500%.
Develop an extended search feature for soft 404 listing pages, enhancing SEO performance and improving the overall user experience by retaining otherwise lost traffic.
Lead the AI development tools integration intitiave (Cursor Bugbot, MCPs, Agents.md) into the team's workflow, including an automated PR reviewer and general coding conventions for LLMs.
Guide new team members through onboarding, including team processes and code pairing sessions.
    `.trim(),
  },
  {
    company: "Royal HaskoningDHV",
    position: "Full-stack Developer",
    period: "2023 - 2024",
    description: `
     Stack: React.js, Typescript, Django, Azure, Sentry, Material UI, Storybook
Develop multiple internal web applications utilizing Django, React, and TypeScript.
Automated the end-to-end customer geodata workflow by developing a custom importer and interactive Leaflet.js map visualization, significantly reducing manual processing steps and improving operational efficiency.
Created and maintained internal NPM package for a shared front-end state management, significantly reducing code duplication across applications.
Created and maintained a shared Component Library using MUI and Storybook, enforcing design consistency across multiple projects
    `.trim(),
  },
  {
    company: "FPT Software",
    position: "Junior Full-stack Developer",
    period: "2022 - 2023",
    description: `
      Stack: React.js, Typescript
Developed Frontend dashboards for IOT devices for clients and customers using React.js
Acted as the primary point of contact for external clients to gather, analyze, and translate functional requirements into technical specifications.peated use in the project and contributed in the generalization of the styling configuration.
    `.trim(),
  },
];

export const education = [
  {
    institution:
      "University of Information Technology, Vietnam National University",
    degree: "B.S of Computer Science",
    period: "Jan 2024 - Oct 2025",
  },
  {
    institution: "Bach Khoa University",
    degree: "B.S of Engineering",
    period: "Sep 2017 - Oct 2021",
  },
];

export const certifications = [
  {
    name: "AWS Solutions Architect - Associate",
    degree: "AWS-SA-C03",
  },
  {
    name: "IELTS - International English Language Testing System",
    degree: "IELTS 7.5",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    degree: "AZ-900",
  },
];

export const projects = [
  {
    id: "homegate",
    title: "Homegate",
    description:
      "Participate and maintained the core search and search notification on Homegate, the largest real estate platform in Switzerland.",
    image: "/HomegateEntryPages.png",
    images: ["/HomegateEntryPages.png", "/HomegateSRP.png"],
    technologies: [
      "Vuejs",
      "Typescript",
      "NodeJS",
      "AWS",
      "Severless",
      "Sentry",
    ],
    link: "https://www.homegate.ch",
  },
  {
    id: "immoscout24",
    title: "ImmoScout24",
    description:
      "Participate and maintained the core search and search notification on ImmoScout24, one of the largest real estate platform in Switzerland.",
    image: "/IS24EntryPages.png",
    images: ["/IS24EntryPages.png", "/IS24SRP.png"],
    technologies: [
      "Vuejs",
      "Typescript",
      "NodeJS",
      "AWS",
      "Severless",
      "Sentry",
    ],
    link: "https://www.immoscout24.ch",
  },
  {
    id: "personalPortfolio",
    title: "Personal Portfolio",
    description:
      "A personal portfolio website to showcase my projects and skills. Viewable on all devices.",
    image: "/PersonalPortfolio.png",
    images: ["/PersonalPortfolio.png"],
    technologies: ["React", "Typescript", "TailwindCSS"],
    link: "https://truongnguyen-portfolio.netlify.app/",
  },
];
