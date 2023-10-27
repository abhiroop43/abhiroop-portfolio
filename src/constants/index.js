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
  hyperledger,
  csharp,
  angular,
  sql,
  nextjs,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  wipro,
  dohabank,
  adcb,
  gcaa,
  adpg,
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
    title: "Technical Lead",
    icon: web,
  },
  {
    title: "Full Stack Web Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: backend,
  },
  {
    title: "AI/ML Engineer",
    icon: creator,
  },
];

const technologies = [
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
    name: "C Sharp",
    icon: csharp,
  },
  {
    name: "SQL Server",
    icon: sql,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Hyperledger",
    icon: hyperledger,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Software Engineering Lead",
    company_name: "Abu Dhabi Ports Group",
    icon: adpg,
    iconBg: "#fff",
    date: "October 2017 - Present",
    points: [
      "Managing a cross-functional team of several Developers and QAs.",
      "Collaborating with stakeholders to deliver high-quality software products.",
      "Mentoring team members to improve operational efficiency.",
      "Participating in code reviews and leading the system design.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "UAE General Civil Aviation Authority",
    icon: gcaa,
    iconBg: "#fff",
    date: "July 2015 - September 2017",
    points: [
      "Leading the team to implement full stack web and mobile solutions using .NET, Angular and React Native.",
      "Developing the organization's intranet portal using Microsoft SharePoint.",
      "Streamline the application testing process through automated unit testing to enhance code quality and reduce defects.",
      "Implement business processes through Nintex and K2 BlackPearl.",
    ],
  },
  {
    title: "Systems Analyst",
    company_name: "Abu Dhabi Commercial Bank",
    icon: adcb,
    iconBg: "#fff",
    date: "December 2013 - July 2015",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Doha Bank",
    icon: dohabank,
    iconBg: "#fff",
    date: "September 2012 - December 2013",
    points: [
      "End to end development and maintenance the Internet Banking and eRemittance System of the bank.",
      "Work closely with the Support Team to resolve any pending tickets from the customers.",
      "Implementing integrations with external systems and APIs through Tibco Middleware.",
      "Improve application quality and performance by adhering to modern coding standards and best practices.",
    ],
  },
  {
    title: "Project Engineer",
    company_name: "Wipro Technologies",
    icon: wipro,
    iconBg: "#fff",
    date: "June 2011 - September 2012",
    points: [
      "Develop full stack web solutions using ASP.NET MVC.",
      "Developing intranet portals for stakeholders using Microsoft SharePoint and InfoPath.",
      "Map and implement complex business processes using Nintex Workflows.",
      "Supported the integration of third party APIs for data exchange between the applications.",
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
    name: "Chat Level 9k",
    description:
      "AI powered chat application built with Next.js, Tailwind, Prisma, MySQL and OpenAI that allows users to generate content, write code, generate images, sounds and videos too.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    application_link: "https://chat.abhiroopsantra.dev/",
  },
  {
    name: "Expense Tracker",
    description:
      "The Expense Tracker is a mobile app built with React Native to manage your expenses and also give you a heads-up of upcoming expenses.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/abhiroop43/expense-tracker",
    application_link: null,
  },
  {
    name: "3D Portfolio",
    description:
      "My personal portfolio website built using Next.js, Tailwind and Three.js.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    application_link: "https://abhiroopsantra.dev/",
  },
];

export { services, technologies, experiences, testimonials, projects };
