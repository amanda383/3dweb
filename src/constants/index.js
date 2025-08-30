// import { a } from "maath/dist/objectSpread2-284232a6.esm";
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
    // redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    // carrent,
    // jobit,
    // tripguide,
    threejs,
    // github,
    morsecode,
    workinprogress,
    questrade,
    sparklease,
    gamesinsitute,
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
      external: true, link: 'https://drive.google.com/file/d/1SCdGD8GcWtMvYyDv7MNIQ6Ddzj3cdoUd/view?usp=sharing' 
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
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company_name: "The Games Institute",
      icon: gamesinsitute,
      iconBg: "#E6DEDD",
      date: "Jan 2025 - Apr 2025",
      points: [
       "Led fullstack development of research, admin, and classroom platforms using React, Tailwind CSS, Golang, and MongoDB, enabling structured rhetorical analysis across 10+ university-level courses",
       "Developed internal tools for moderators to review and manage user-submitted content, with features for approval workflows, filtering, and reward distribution, improving review efficiency by 30% and reducing platform overhead by 50%",
       "Designed and optimized RESTful API endpoints using Golang, reducing latency by 15% and increasing throughput to support daily requests across three production platforms",
      ],
    },
    {
      title: "Site Reliabilty Engineer Intern ",
      company_name: "Questrade Inc",
      icon: questrade,
      iconBg: "#383E56",
      date: "May 2024 - Aug 2024",
      points: [
        "Introduced a new business solution (Cohesity Cloud) that reduced GCP server recovery time by 90%, enhancing system resilience and minimizing downtime during critical operations",
        "Automated Active Directory tasks with PowerShell, reducing manual effort by 60% and cutting error rates by 40%",
        "Developed and maintained Terraform modules for GCP, facilitating efficient resource management and enabling quicker deployment cycles for cloud infrastructure"
      ],
    },
    {
      title: "Infrastructure and Cloud Operations Intern ",
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
        "Implemented Terraform script to enforce restriction policies, enhancing access control in Azure environments and minimizing unauthorized access risks from Azure vendors by 100%",
        "Deployed Device42’s capabilities to automate inventory updates and streamline asset management processes within VMware environments, reducing manual effort by 90% and minimizing errors",
        "Standardized documentation of infrastructure requirements across new and legacy projects using JIRA and Confluence, reducing deployment errors by 40% and accelerating project delivery by 25%",
      ],
    },
    {
      title: "Front-End Developer Intern",
      company_name: "Sparklease",
      icon: sparklease,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Apr 2022",
      points: [
        "Developed responsive web and mobile features with ASP.NET Core, JavaScript, HTML5, and CSS3, building a multi-method login system with Google SSO, WeChat verification, SMS authentication, and real-time form validation",
        "Revamped vehicle listings with dynamic filters and reusable components, integrating backend APIs to improve user flow and reduce search time by 40%",
        "Optimized site performance by implementing lazy image loading and deferring non-critical JavaScript, reducing page load times by 70% and enhancing user experience",
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