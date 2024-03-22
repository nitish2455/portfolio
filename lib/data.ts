import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Recipes from "@/public/Recipes.png";
import Preplaced from "@/public/preplaced.png";
import Ecommerce from "@/public/ecommerce.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Post Graduation M.C.A.",
    location: "FarukhNagar , Gurgaon",
    description:
      "I graduated after 2 years of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Gurgaon",
    description:
      "I worked as a front-end developer for 6 month in Preplaced. I also upskilled to the Software Developer.",
    icon: React.createElement(CgWorkAlt),
    date: "01-04-2023 - 30-08-2023",
  },
  
] as const;

export const projectsData = [
  {
    title: "Preplaced",
    description:
      "I worked as a front-end developer on this startup project for 6 month. Mentors and mentees can communicate for development process and interview preparation.",
    tags: ["React", "Next.js",  "Tailwind", "Figma", "Rest API"],
    imageUrl: Preplaced,
    projectUrl:"www.preplaced.in/become-a-mentor"
  },
  {
    title: "E-commerce",
    description:
      "Website in which you can buy your favourite things and has log in option , payment gateway and many other features",
    tags: ["React", "Nextjs", "TypeScript", "Redux" , "Tailwind", "Rest API", "Sanity"],
    imageUrl: Ecommerce,
    projectUrl:"https://e-commerce-tawny-one.vercel.app/"
  },
  {
    title: "Recipe Book",
    description:
      "People can search their favourite food recipe in this website and additional feature you can search food dishes according to your calorie count.",
    tags: ["React", "TypeScript", "Tailwind", "Rest API"],
    imageUrl: Recipes,
    projectUrl:"https://recipe-book-a9j4.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Figma",
  "MongoDB",
  "Redux",
  "Material UI",
  "Github",
  "MySQL",
  "Framer Motion",
] as const;
