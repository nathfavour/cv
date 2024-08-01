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
    "Detail-oriented Backend Engineer dedicated to building functional products.",
  summary:
    "As a Backend Engineer, I specialize in taking products from concept to launch. I excel in building functional APIs, serverless functions, web workers, . Currently, I work mostly with Django, Nodejs, nestjs and GraphQL. I have been building functional products since 2018 both in-office and working remotely with companies worldwide.",
  avatarUrl: "https://avatars.githubusercontent.com/u/116535483?v=4",
  personalWebsiteUrl: "https://jarocki.me",
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
    "API (Application Programming Interface)",
    "Django",
    "Postman",
    "Node.js",
    "Next.js",
    "GraphQL",
    "REST",
    "Relay",
    "WebRTC",
    "AWS",
    "Azure",
    "Github",
    "Gitlab",
    "git",
  ],
  projects: [
    {
      title: "Malaika",
      techStack: [
        "Backend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Bionicpython",
      techStack: [
        "Backend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
