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
    "Systems & autonomous agents engineer building local-first platforms, cryptographic rails, and low-level tooling.",
  summary:
    "Systems & autonomous agents engineer building local-first platforms, cryptographic rails, and low-level tooling. Focus on high-throughput cryptographic engines, freestanding post-quantum cryptography, agentic runtime environments, and low-level OS/security architectures.",
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
        "Engineered e-commerce backend services, RESTful APIs, and system workflows using Python and Django.",
    },
    {
      company: "Freelance / Independent R&D",
      link: "https://github.com/nathfavour",
      badges: ["Remote"],
      title: "Systems & Full Stack Engineer",
      logo: ParabolLogo,
      start: "2023",
      end: "present",
      description:
        "Architecting autonomous agent protocols, cryptographic settlement systems, and low-level developer tooling across Zig, Rust, Python, and TypeScript.",
    },
  ],
  skills: [
    "Zig",
    "Rust",
    "Python",
    "TypeScript",
    "WebAssembly",
    "RISC-V",
    "Cryptography (PQC)",
    "Autonomous Agents",
    "Solana",
    "Distributed Systems",
    "Linux / OS Internals",
    "Django",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Git",
  ],
  projectTiers: [
    {
      name: "Flagship",
      description: "Primary unified product platform",
      projects: [
        {
          title: "Kylrix",
          techStack: ["Local-First", "AI Agents", "Passkeys", "Crypto Checkout"],
          description:
            "Unified, local-first workspace combining private notes, vaults, and autonomous AI agents with passkey authentication and non-custodial crypto checkout.",
          logo: ConsultlyLogo,
          link: {
            label: "github.com",
            href: "https://github.com/nathfavour/kylrix",
          },
        },
      ],
    },
    {
      name: "Core Systems",
      description: "Low-level kernels, cryptographic primitives, and execution engines",
      projects: [
        {
          title: "keystone-zig",
          techStack: ["Zig", "RISC-V", "TEE", "Enclave Security"],
          description:
            "RISC-V enclave security framework in Zig for isolated agent execution.",
          logo: EvercastLogo,
          link: {
            label: "github.com",
            href: "https://github.com/nathfavour/keystone-zig",
          },
        },
        {
          title: "poly16duo",
          techStack: ["Zig", "WebAssembly", "Post-Quantum", "SIMD"],
          description:
            "Post-quantum cryptographic primitives in Zig compiled to freestanding WebAssembly.",
          logo: BarepapersLogo,
          link: {
            label: "github.com",
            href: "https://github.com/nathfavour/poly16duo",
          },
        },
        {
          title: "settlerengine",
          techStack: ["Crypto Rails", "Settlement Engine", "Agents", "Payments"],
          description:
            "High-throughput payment engine enabling direct crypto transactions between autonomous software agents.",
          logo: ParabolLogo,
          link: {
            label: "github.com",
            href: "https://github.com/nathfavour/settlerengine",
          },
        },
        {
          title: "clarigggzOS",
          techStack: ["Kernel", "RISC-V", "Smart Glasses", "OS Architecture"],
          description:
            "Operating system kernel targeting RISC-V architectures for smart glasses.",
          logo: BimLogo,
          link: {
            label: "github.com",
            href: "https://github.com/nathfavour/clarigggzOS",
          },
        },
      ],
    },
    {
      name: "Protocols & Tools",
      description: "Decentralized protocols, agent compilers, and privacy rails",
      projects: [
        {
          title: "anyisland",
          techStack: ["Package Manager", "Autonomous Agents", "Distribution"],
          description:
            "Decentralized package manager for distributing agentic software.",
          logo: ParabolLogo,
          link: {
            label: "github.com",
            href: "https://github.com/nathfavour/anyisland",
          },
        },
        {
          title: "ship",
          techStack: ["Programming Language", "Compiler", "Code Generation"],
          description:
            "Programming language built specifically for agent-driven code generation.",
          logo: Minimal,
          link: {
            label: "github.com",
            href: "https://github.com/nathfavour/ship",
          },
        },
        {
          title: "TMP",
          techStack: ["Messaging Protocol", "Web3", "In-App Inboxes"],
          description:
            "Decentralized messaging protocol replacing SMTP for Web3 and in-app inboxes.",
          logo: JarockiMeLogo,
          link: {
            label: "github.com",
            href: "https://github.com/nathfavour/TMP",
          },
        },
        {
          title: "shadowprism",
          techStack: ["Solana", "Privacy Protocol", "Aggregator"],
          description: "Privacy protocol aggregator for Solana.",
          logo: MonitoLogo,
          link: {
            label: "github.com",
            href: "https://github.com/nathfavour/shadowprism",
          },
        },
      ],
    },
  ],
  projects: [
    {
      title: "Kylrix",
      techStack: ["Local-First", "AI Agents", "Passkeys", "Crypto Checkout"],
      description:
        "Unified, local-first workspace combining private notes, vaults, and autonomous AI agents with passkey authentication and non-custodial crypto checkout.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/nathfavour/kylrix",
      },
    },
    {
      title: "keystone-zig",
      techStack: ["Zig", "RISC-V", "TEE", "Enclave Security"],
      description:
        "RISC-V enclave security framework in Zig for isolated agent execution.",
      logo: EvercastLogo,
      link: {
        label: "github.com",
        href: "https://github.com/nathfavour/keystone-zig",
      },
    },
    {
      title: "poly16duo",
      techStack: ["Zig", "WebAssembly", "Post-Quantum", "SIMD"],
      description:
        "Post-quantum cryptographic primitives in Zig compiled to freestanding WebAssembly.",
      logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/nathfavour/poly16duo",
      },
    },
    {
      title: "settlerengine",
      techStack: ["Crypto Rails", "Settlement Engine", "Agents", "Payments"],
      description:
        "High-throughput payment engine enabling direct crypto transactions between autonomous software agents.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/nathfavour/settlerengine",
      },
    },
    {
      title: "clarigggzOS",
      techStack: ["Kernel", "RISC-V", "Smart Glasses", "OS Architecture"],
      description:
        "Operating system kernel targeting RISC-V architectures for smart glasses.",
      logo: BimLogo,
      link: {
        label: "github.com",
        href: "https://github.com/nathfavour/clarigggzOS",
      },
    },
    {
      title: "anyisland",
      techStack: ["Package Manager", "Autonomous Agents", "Distribution"],
      description:
        "Decentralized package manager for distributing agentic software.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/nathfavour/anyisland",
      },
    },
    {
      title: "ship",
      techStack: ["Programming Language", "Compiler", "Code Generation"],
      description:
        "Programming language built specifically for agent-driven code generation.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/nathfavour/ship",
      },
    },
    {
      title: "TMP",
      techStack: ["Messaging Protocol", "Web3", "In-App Inboxes"],
      description:
        "Decentralized messaging protocol replacing SMTP for Web3 and in-app inboxes.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/nathfavour/TMP",
      },
    },
    {
      title: "shadowprism",
      techStack: ["Solana", "Privacy Protocol", "Aggregator"],
      description: "Privacy protocol aggregator for Solana.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/nathfavour/shadowprism",
      },
    },
  ],
} as const;
