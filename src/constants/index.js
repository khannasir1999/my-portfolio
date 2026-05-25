import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  jobit,
  tripguide,
  millat,
  sassytech,
  scaylar,
  rpn,
  asecure,
  pamperpro,
  rpnImg
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Senior Software Engineer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "AI/LLM Integrations",
    icon: backend,
  },
  {
    title: "AWS Solutions",
    icon: creator,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Summer Intern/Frontend Developer",
    company_name: "Millat Tractors",
    icon: millat,
    iconBg: "#383E56",
    date: "July 2021 - August 2021",
    points: [
      "Worked on the frontend of the website using React.js and other related technologies.",
      "learnt best coding practices. ",
      "Collaborated with the backend team to integrate the frontend with the backend.",
      "Implemented responsive design and ensured cross-browser compatibility.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "SA Systems",
    icon: sassytech,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Aug 2023",
    points: [
      "Built ERP modules using Laravel and Vue.js integrated with SQL databases.",
      "Developed API-driven features for seamless business operations.",
      "Independently developed Assets & Depreciation and Club & Members Management modules.",
      "Built a React + Express SPA for displaying real-time property availability in Pakistan.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Scaylar Technologies",
    icon: scaylar,
    iconBg: "#383E56",
    date: "Aug 2023 - July 2025",
    points: [
      "Lead developer on the Asecure Clouds platform for nearly 2 years.",
      "Built serverless AWS components including Lambda, AppSync (GraphQL), API Gateway, DynamoDB, and S3.",
      "Designed microservices and event-driven architectures to improve scalability and release velocity.",
      "Mentored junior developers through code reviews, onboarding documentation, and pair programming.",
      "Built large-scale web scrapers using Zembra and DataForSEO APIs.",
      "Contributed to building an AI voice generation platform using ElevenLabs for Accelerado.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "RedPanda Network",
    icon: rpn,
    iconBg: "#E6DEDD",
    date: "Oct 2025 - Present",
    points: [
      "Working on a MERN-stack web application with focus on scalability, performance optimization, and clean architecture.",
      "Developing and maintaining the production project Pamper Pro.",
      "Leading role in designing and implementing the Node.js backend for the ForEveryYoung mobile application, including API architecture and integrations.",
      "Collaborating with cross-functional teams, conducting code reviews, and enforcing backend best practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Asecure Cloud",
    description:
      "AI Powered Cloud Security & Operations Platform. Everything you need to build, secure, and operate cloud environments across AWS, Azure, and GCP.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "AWS Services",
        color: "green-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: asecure,
    source_code_link: "https://asecure.cloud/",
  },
  {
    name: "BitCompare",
    description:
      "Compare Crypto and Stablecoin Interest Rates. Find the best crypto and stablecoin lending rates, staking rewards, and loan APR across top platforms.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Hasura",
        color: "green-text-gradient",
      },
      {
        name: "Postgres",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe.js",
        color: "text-yellow-500",
      },
    ],
    image: jobit,
    source_code_link: "https://bitcompare.net/",
  },
  {
    name: "Accelerado",
    description:
      "Automated AI-powered calls and texts help your business respond 24/7, follow up instantly, and turn inquiries into booked appointments.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Nest.js",
        color: "green-text-gradient",
      },
      {
        name: "Postgres",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://accelerado.ai/",
  },
];
const projectsIamCurrentlyWorkingOn = [
  {
    name: "Pamper Pro",
    description:
      "A marketplace platform connecting clients with freelance wellness professionals for on-demand wellbeing services, delivered directly to their doorstep.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "pink-text-gradient",
      },
      {
        name: "Persona",
        color: "text-yellow-500",
      },
      {
        name: "Stripe.js",
        color: "text-green-500",
      },
    ],
    image: pamperpro,
    source_code_link: "https://pamper-pro-fe.vercel.app/",
  },
  {
    name: "Red Panda Network",
    description:
      "portfolio website for Red Panda Network, a software development company, built using React.js, Framer Motion, Tailwind CSS, and GSAP.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "GSAP",
        color: "text-yellow-500",
      }
    ],
    image: rpnImg,
    source_code_link: "https://redpanda-web.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects, projectsIamCurrentlyWorkingOn };
