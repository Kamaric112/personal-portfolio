export const personalInfo = {
  name: "Truong Quang Nguyen",
  title: "Software Engineer",
  email: "qu.truong99@gmail.com",
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
       Contribute to Front-end Vuejs & Back-end Node.js/Typescript development for Homegate & Immoscout24 search features, impacting 2M+ monthly users.
      Lead and organize a Vue 2 to Vue 3 migration, including Vite/Vitest integration, reducing build time by 60% and test start time by 65%.
     Active participation in epics ideation, shaping and refinement.
       Work with AWS cloud technologies including Lambda, DynamoDB, SQS, SNS and S3 in a microservices architecture.
       Cloud Provider: AWS
       Tracking: Sentry, Datadog
       CI/CD: Github Actions
       Documentation: Backstage
    `.trim(),
  },
  {
    company: "Royal HaskoningDHV",
    position: "Full-stack Developer",
    period: "2023 - 2024",
    description: `
       Developed multiple internal web applications from scratch, utilizing Django, Vue3, and TypeScript, to streamline project management and collaboration among a team of engineers.
       Created and published internal npm packages for frontend, including a Component Library and Base State Management, significantly accelerating development cycles and ensuring consistency across projects.
       Implemented comprehensive unit tests for frontend and backend modules, enhancing code reliability.
       Tracking: Sentry
       Cloud Provider: Azure
       Organized internal Python training sessions among engineers within the company.
    `.trim(),
  },
  {
    company: "FPT Software",
    position: "Junior Full-stack Developer",
    period: "2022 - 2023",
    description: `
       Created user interface elements for various pages following the Figma design by UI/UX designer.
       Built reusable components for repeated use in the project and contributed in the generalization of the styling configuration.
    `.trim(),
  },
];

export const education = [
  {
    institution:
      "University of Information Technology, Vietnam National University",
    degree: "B.S of Computer Science",
    period: "2024 - Present",
  },
  {
    institution: "Bach Khoa University",
    degree: "B.S of Engineering",
    period: "2017-2021",
  },
];

export const certifications = [
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
