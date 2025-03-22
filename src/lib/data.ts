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

export const skills = [
  { name: "Vue" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Database" },
  { name: "AWS" },
  { name: "AWS Serverless" },
  { name: "Sentry" },
  { name: "Git" },
  { name: "Github" },
  { name: "CI/CD" },
  { name: "Agile" },
  { name: "Jira" },
];

export const skillsLearning = [{ name: "Fastify" }, { name: "ElasticSearch" }];

export const experiences = [
  {
    company: "SMG - Swiss Marketplace Group",
    position: "Full Stack Developer",
    period: "June 2024 - Present",
    description: `
       Contribute to front-end Vuejs & back-end Node.js/Typescript development for Homegate & Immoscout24 search features, impacting 2M+ monthly users.
      Led and organized a Vue 2 to Vue 3 migration, including Vite/Vitest integration, reducing build time by 60% and test start time by 65%.
     Active participation in epics ideation, shaping and refinement.
       Actively participated in code reviews, ensuring high test coverage, and maintaining and monitoring systems.
       Gain practical experience with AWS cloud technologies including Lambda, DynamoDB, SQS, SNS and S3 in a microservices architecture.
       Cloud Provider: AWS
       Tracking: Sentry, Datadog
       CI/CD: Github Actions.
       Documentation: Backstage.
    `.trim(),
  },
  {
    company: "Royal HaskoningDHV",
    position: "Full Stack developer",
    period: "2023 - 2024",
    description: `
       Develop multiple internal web applications from scratch, utilizing Django, Vue3, and TypeScript, to streamline project management and collaboration among a team of engineers.
       Create and publish internal npm packages for frontend, including a Component Library and Base State Management, significantly accelerating development cycles and ensuring consistency across projects.
       Implement comprehensive unit tests for frontend and backend modules, enhancing code reliability.
       Tracking: Sentry,
       Cloud Provider: Azure
       Organize internal Python training sessions among engineers within the company.
    `.trim(),
  },
  {
    company: "FPT Software",
    position: "Junior Full Stack Developer",
    period: "2022-2023",
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
