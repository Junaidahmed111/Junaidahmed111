import printing from "@/public/3d-printing.webp";
import bOne from "@/public/B-one.png";
import plantPerfect from "@/public/plant-perfect.png";
import stupidMonkeys from "@/public/StupidMonkeys.png";
import tahirElectronics from "@/public/tahir-electronics.png";
import hope from "@/public/hope-medical.webp";
import dadigram from "@/public/dadigram.png";
import maxvid from "@/public/maxvid.webp";
import adminPanel from "@/public/admin-panel.png";
import rootedFlavors from "@/public/rooted-flavors.png";
import mechProtocol from "@/public/mech-protocol.png";
import renaissance from "@/public/renaissance-art.webp";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Software Engineer",
    location: "Greyfibre · Remote",
    description:
      "I was leading the frontend development at Greyfibre, working on a SaaS application. My role involves architecting and developing the frontend using Next.js and TypeScript, while closely collaborating with backend engineers working with Django and Python.",
    icon: React.createElement(FaReact),
    date: "Juy 2024 - Oct 2025",
  },
  {
    title: "Software Engineer",
    location: "GSOFT · Pakistan",
    description:
      "As a Software Engineer at GSOFT, I contributed to the development of cutting-edge AI SaaS applications. I leveraged my expertise in Next.js, React Native and TypeScript to build scalable and efficient software solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2024 - Present",
  },
  {
    title: "Full Stack Developer",
    location: "Upwork · Freelance · Remote",
    description:
      "I work as a Full Stack Developer at Upwork, specializing in AI SAAS Applications with NextJs, React Native, PostgreSQL, Unipile and other technologies as per requirements. My role involves collaborating with global clients to deliver high-quality solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Present",
  },
  {
    title: "Front-End Freelancer",
    location: "Fiverr · Remote",
    description:
      "I worked as a front-end developer for 6 months at Fiverr. But it was affecting my studies so I stopped after working for 6 months. Some of the projects from my Fiverr journey are at the last in the Projects Section.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Stupid Monkeys",
    description:
      "A magnificent NFT Website. I developed this website for my Client. It's developed according to the design guidelines.",
    tags: [
      "NextJs",
      "ReactJs",
      "ThreeJs",
      "TypeScript",
      "Framer Motion",
      "IPFS",
      "Web3",
    ],
    imageUrl: stupidMonkeys,
    link: "https://stupid-monkeys.vercel.app/",
  },
  {
    title: "Rooted Flavors",
    description:
      "An e-commerce website for culturally rooted herbal remedies and wellness solutions. Features personalized health assessments with AI-powered product recommendations.",
    tags: ["NextJs", "ReactJs", "TypeScript", "TailwindCSS", "AI Integration"],
    imageUrl: rootedFlavors,
    link: "https://rootedflavors.com/",
  },
  {
    title: "B-one Consulting",
    description:
      "This is a website built for my client on Fiverr. This website shows my strong grip on Front-End.",
    tags: ["NextJs", "Three.Js", "Framer Motion", "TailwindCSS", "TypeScript"],
    imageUrl: bOne,
    link: "https://b-one-consulting.vercel.app/",
  },
  {
    title: "MECH Protocol",
    description:
      "A decentralized platform for autonomous robotic economies. Features task payments, simulated machine hours, and M2M microtransactions for robotic networks.",
    tags: ["NextJs", "ReactJs", "TypeScript", "TailwindCSS", "Web3"],
    imageUrl: mechProtocol,
    link: "https://www.mechprotocol.com/",
  },
  {
    title: "Plant Perfect",
    description:
      "An e-commerce store specializing in seeds, mushroom growing kits, soil enhancers, and grow lights. A complete shopping experience for gardening enthusiasts.",
    tags: ["NextJs", "React", "TailwindCSS", "TypeScript", "E-commerce"],
    imageUrl: plantPerfect,
    link: "http://fwogg0woo8osc0gcgcosg4wc.217.196.51.116.sslip.io/",
  },
  {
    title: "Tahir Electronics",
    description:
      "An e-commerce platform for electronics and home appliances in Pakistan. Features fans, cables, cameras, solar panels, and trusted brands like Royal Fans and Wahid Fans.",
    tags: ["NextJs", "React", "TailwindCSS", "TypeScript", "E-commerce"],
    imageUrl: tahirElectronics,
    link: "https://www.tahirelectronics.pk/",
  },
  {
    title: "E-commerce Multi-tenant Dashboard",
    description:
      "A powerful multi-tenant admin dashboard serving multiple e-commerce stores through a single customized admin panel.",
    tags: [
      "NextJs",
      "TypeScript",
      "TailwindCSS",
      "Multi-tenant",
      "Admin Panel",
    ],
    imageUrl: adminPanel,
    link: "http://fwogg0woo8osc0gcgcosg4wc.217.196.51.116.sslip.io/admin",
  },
  {
    title: "Dadigram",
    description:
      "An Instagram growth platform powered by AI and real-human experts. Features automated follower growth, no bots, guaranteed organic growth.",
    tags: ["NextJs", "TypeScript", "TailwindCSS", "AI", "Growth Platform"],
    imageUrl: dadigram,
    link: "https://dadigram.com/",
  },
  {
    title: "Renaissance Art",
    description:
      "This is an old project I did for my Fiverr client. It's like an one page blog.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: renaissance,
    link: "https://devadeelahmad.github.io/RenaissanceArt/",
  },
  {
    title: "Hope Medical",
    description:
      "This is a website I created for my client on Fiverr and this is a paid template and I configured it according to my client's needs.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: hope,
    link: "https://devadeelahmad.github.io/HopeMedical/",
  },
  {
    title: "Max Vid",
    description:
      "This is an old project I did for my Fiverr client. It was a paid template and I had to configure it according to his needs.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: maxvid,
    link: "https://devadeelahmad.github.io/MaxVid/",
  },
  {
    title: "3d-Et",
    description:
      "This is an old project I did for my Fiverr client. It was for his physical workshop where he did 3d Printing.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: printing,
    link: "https://devadeelahmad.github.io/3dPrinting/",
  },
] as const;

export const skillsData = [
  "NextJs",
  "ReactJs",
  "NodeJs",
  "ExpressJs",
  "TypeScript",
  "JavaScript",
  "Solidity",
  "Git",
  "MongoDB",
  "Redux",
  "Tailwind CSS",
  "Vercel",
  "AWS S3",
  "PostgreSQL",
  "GraphQL",
  "Framer Motion",
  "Shadcn/ui",
  "FlowBite",
  "Prisma",
  "Sanity.io",
  "Wordpress",
  "Elementor",
  "HTML",
  "CSS",
  "SCSS",
  "Bootstrap",
  "C",
  "C++",
  "C#",
  "Java",
  "GO",
] as const;
