import { a } from "maath/dist/objectSpread2-284232a6.esm";
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
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
    morsecode,
    workinprogress,
    questrade,
    sparklease,
    pantryai,
    python,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
      source_code_link: "",
    },
    {
      id: "experience",
      title: "Experience",
      source_code_link: "",
    },
    {
      id: "work",
      title: "Projects",
      source_code_link: "",
    },
    {
      id: "designteam",
      title: "DesignTeam",
      source_code_link: "",
    },
    {
      id: "contact",
      title: "Contact",
      source_code_link: "",
    },

    {
      id: "resume",
      title: "Resume",
      external: true, link: 'https://drive.google.com/file/d/1-G7EOsj_Xop9q2F_CVpVOEM4oT_PMPqu/view?usp=sharing' 
    },
    // {
    //   id: "githublink",
    //   title: "Github",
    //   source_code_link: "/",
    //   icon:'',
    // },
    

  ];

 
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    // {
    //   name: "Python",
    //   icon: python,
    // },
  ];
  
  const experiences = [
    {
      title: "Site Reliabilty Engineer Intern Toronto, Ontario",
      company_name: "Questrade Inc",
      icon: questrade,
      iconBg: "#383E56",
      date: "May 2024 - Aug 2024",
      points: [
        "Introduced a new business solution(Cohesity Cloud) that reduced GCP server recovery time by 90%, enhancing system resilience and minimizing downtime during critical operations.",
        "Implemented PowerShell script for Active Directory, reducing manual effort by 60% and cutting error rates by 40%.",
        "Developed and maintained Terraform modules for GCP, facilitating efficient resource management and enabling quicker deployment cycles for cloud infrastructure."
      ],
    },
    {
      title: "Infrastructure and Cloud Operations Intern Toronto, Ontario",
      company_name: "Questrade Inc",
      icon: questrade,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - Dec 2023",
      points: [
        "Produced comprehensive project plans, inventory lists, quality reviews, status reports, and process documentation that were used by managers to present to stakeholders",
        "Collected and tracked project status updates from team members, ensuring adherence to set deadlines and objectives",
        "Developed, tested, and documented infrastructure automation scripts to optimize operational processes",
        "Resolved and created JIRA tickets documenting project tasks that are used by team members which provided insights for process improvement initiatives",
      ],
    },
    {
      title: "Junior System Administrator Intern",
      company_name: "Questrade Inc",
      icon: questrade,
      iconBg: "#383E56",
      date: "Sept 2022 - Apr 2023",
      points: [
        "Implemented Terraform script to enforce restriction policies, enhancing access control in Azure environments and minimizing unauthorized access risks from Azure vendors by 95%",
        "Deployed Device42’s capabilities to automate inventory updates and streamline asset management processes within VMware environments, reducing manual effort by 90% and minimizing errors",
        "Led the Infrastructure team in eliciting, defining, analyzing, and documenting requirements for both new projects and enhancements to existing applications",
        "Maintained Confluence documentation regarding network configuration and troubleshooting procedures",
      ],
    },
    {
      title: "Front-End Developer Intern",
      company_name: "Sparklease",
      icon: sparklease,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Apr 2022",
      points: [
        "Utilized ASP.NET Core, Javascript, HTML, and CSS to craft interactive and responsive web, mobile and WeChat experiences.",
        "Implemented Google Single Sign-On (SSO) functionality within web and mobile applications, streamlining the authentication process for users",
        "Optimized website performance by implementing lazy loading for images and deferring non-critical JavaScript execution, reducing page load times and enhancing user experience",
        "Evaluated feedback’s from customers’ requests regarding mobile and web accessibility such as visibility and navigation",
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
      name: "Morse Code Puzzle",
      description:
        "Designed an escape room puzzle that simulates Morse Code Riddles using an STM32 Nucleo module. Utilized a switch to receive user input, and 16-character LCD displays to relay information to the player.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: morsecode,
      source_code_link: "https://github.com/amanda383/Morse-Code-Puzzle",
    },
    {
      name: "Muay Thai Tracker",
      description:
        "Designed a swift App that allows users to showcase muay thai skills to the app and it will give you immediate feedback regarding the form. Will be able to track what moves are being completed during the workout.  ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: workinprogress,
      source_code_link: "https://github.com/amanda383/muaythaitracker",
    },
    {
      name: "PantryAI",
      description:
        "Designed a React Native App that allows users to scan their fridge using Object Detection and generate recipes based off of detected ingredients.  ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: pantryai,
      source_code_link: "https://github.com/amanda383/PantryAI",
    },

  ];

  
  
  export { services, technologies, experiences, testimonials, projects };