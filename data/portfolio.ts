export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  type: "full-time" | "freelance" | "contract" | "remote";
  duration: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export const portfolioData = {
  name: "Omar Hosny",
  logoText: `{urfavdev}`,
  headline:
    "Front-End Developer building responsive, high-performance web applications",
  role: "Front-End Developer",
  bio: "With over five years of experience, I build maintainable frontend architectures that teams love to work in and users love to browse. Expert-level focus on React and Node.js. Tech Stack: React  •  Next.js  •  TypeScript  •  Node.js.",
  location: "Alexandria, Egypt",
  email: "omarhosnydev@gmail.com",
  phone: "+20 106 104 5532",

  about: {
    summary: `I’m a frontend developer who enjoys building thoughtful, user-focused interfaces. I like taking ideas — sometimes messy or abstract — and turning them into clear, usable products.

I pay attention to performance, accessibility, and clean structure because I believe good frontend work should feel simple for users and stay simple for developers`,
    focus: [
      "Performance Optimization",
      "Scalable Architecture",
      "Component Libraries",
      "Team Leadership",
    ],
  },

  techStack: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Redux Toolkit",
    "React Query",
    "Zustand",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Prisma",
    "REST APIs",
    "Git",
    "Figma",
  ],

  projects: [] as Project[],

  experience: [
    {
      id: "1",
      role: "Front-End Developer",
      company: "Remza Investment Company",
      location: "Bahrain (Remote)",
      type: "remote",
      duration: "2020 – 2025",
      description:
        "Developed and maintained modern web applications using React and Next.js for a leading investment company.",
      achievements: [
        "Engineered a dedicated Driver Application and Operation Web App to streamline logistics and internal business workflows",
        "Built reusable, dynamic UI components using functional components and hooks to optimize performance across devices",
        "Implemented state management solutions (Redux Toolkit, Context API) to handle complex data flow",
        "Integrated frontend applications with RESTful APIs, handling authentication, data fetching, and edge cases",
        "Ensured 100% responsiveness and accessibility, consistently improving Lighthouse scores for performance and SEO",
      ],
    },
    {
      id: "2",
      role: "Front-End Developer",
      company: "Arch 17",
      location: "China (Remote)",
      type: "remote",
      duration: "2018 – 2020",
      description:
        "Translated Figma designs into pixel-perfect, mobile-first responsive interfaces for international clients.",
      achievements: [
        "Translated Figma designs into pixel-perfect, mobile-first responsive interfaces",
        "Led modernization of legacy front-end codebases using React and modern best practices",
        "Integrated frontend with APIs and optimized UI performance and load times",
        "Collaborated with cross-functional teams to deliver stable product releases",
      ],
    },
  ] as Experience[],

  skills: [
    {
      name: "Languages & Frameworks",
      skills: [
        { name: "JavaScript" },
        { name: "React.js" },
        { name: "Next.js" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "TypeScript" },
      ],
    },
    {
      name: "State Management",
      skills: [
        { name: "Redux Toolkit" },
        { name: "React Query" },
        { name: "RTK Query" },
        { name: "Zustand" },
        { name: "Context API" },
      ],
    },
    {
      name: "Backend & Tools",
      skills: [
        { name: "REST APIs" },
        { name: "MongoDB" },
        { name: "Prisma" },
        { name: "Git" },
        { name: "Figma" },
        { name: "SEO" },
      ],
    },
  ] as SkillCategory[],

  education: {
    degree: "Bachelor of Engineering – Minor in Computer Science",
    institution: "University",
    year: "Graduated 2017",
  } as Education,

  socials: [
    { name: "GitHub", url: "https://github.com/Omar-hosny", icon: "Github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/omar-hosny72/",
      icon: "Linkedin",
    },
    { name: "Email", url: "mailto:omarhosnydev@gmail.com", icon: "Mail" },
  ],
};

export type PortfolioData = typeof portfolioData;
