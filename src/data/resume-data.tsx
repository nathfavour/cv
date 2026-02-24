import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nathaniel Favour Anthony",
  initials: "NF",
  location: "Lagos, Nigeria",
  locationLink: "https://www.google.com/maps/place/Lagos",
  about:
    "Backend Engineer | R&D Enthusiast | AI, Cybersecurity, & Blockchain Architect",
  summary:
    "As a Backend Engineer and R&D Enthusiast, I specialize in building autonomous systems, cryptographic protocols, and private-first ecosystems. I excel in building functional APIs, serverless functions, and agentic software. Currently, I work mostly with Django, Node.js, NestJS, and GraphQL, with a deep interest in AI, Cybersecurity, and Blockchain architecture.",
  avatarUrl: "https://avatars.githubusercontent.com/u/116535483?v=4",
  personalWebsiteUrl: "https://favourryan.netlify.app",
  contact: {
    email: "nathfavour02@gmail.com",
    tel: "+2349019775509",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nathfavour",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nathfavour/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/nathfavour_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "National Open University of Nigeria",
      degree: "Bachelor's Degree in Computer science and Mathematics",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "bAInaryglobe",
      link: "https://bAInaryglobe.com",
      badges: ["Remote"],
      title: "Backend Developer",
      logo: ConsultlyLogo,
      start: "2021",
      end: "2023",
      description:
        "Leading the development of vexeroo, an Ecommerce app. Technologies: Python, Django, REST API",
    },
    {
      company: "Freelancer",
      link: "https://github.com/nathfavour",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: ParabolLogo,
      start: "2023",
      end: "present",
      description:
        "Freelancing on Fiverr, Upwork, Github. Building as many projects as possible with Technologies like Django, Nodejs, Nestjs",
    },
  ],
  skills: [
    "Python",
    "TypeScript",
    "Django",
    "Node.js",
    "Next.js",
    "GraphQL",
    "Rust",
    "Solana",
    "Cryptography",
    "AI Agents",
    "Zero-Knowledge",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "git",
  ],
  projects: [
    {
      title: "anyisland",
      techStack: ["Backend", "AI", "Orchestration", "Python"],
      description:
        "AI-powered, OS-agnostic package manager that orchestrates the decentralized distribution and lifecycle of agentic software.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/nathfavour/anyisland",
      },
    },
    {
      title: "auracrab",
      techStack: ["AI Agents", "System Engineering", "TypeScript", "Node.js"],
      description:
        "Ubiquitous framework for the agentic era, enabling autonomous 'digital butlers' to operate with deep system-level access and reasoning.",
      logo: EvercastLogo,
      link: {
        label: "github.com",
        href: "https://github.com/nathfavour/auracrab",
      },
    },
    {
      title: "Kylrix Vault",
      techStack: ["Cryptography", "Zero-Knowledge", "Security", "Rust"],
      description:
        "A masterpiece of applied mathematics and security engineering, part of the Kylrix suite. Utilizes Zero-Knowledge principles to safeguard sensitive keys.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/nathfavour/vault",
      },
    },
    {
      title: "shadowprism",
      techStack: ["Solana", "Blockchain", "Privacy", "Rust"],
      description:
        "Polyglot privacy sidecar for Solana that aggregates fragmented privacy protocols into a singular, high-performance agentic interface.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/nathfavour/shadowprism",
      },
    },
    {
      title: "privibase",
      techStack: ["Web3", "Backend", "Decentralized", "Node.js"],
      description:
        "Self-hostable, Web3-native backend-as-a-service providing a decentralized and private alternative to legacy cloud infrastructures.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/nathfavour/privibase",
      },
    },
    {
      title: "autocommiter",
      techStack: ["AI", "Tooling", "Developer Experience", "Python"],
      description:
        "AI tool that generates semantic history for commits, acting as a silent architect of the development cycle.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/nathfavour/autocommiter",
      },
    },
  ],
} as const;
