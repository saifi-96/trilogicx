import {
  Smartphone, Apple, Layers, AppWindow, Globe, Briefcase, Bot, BrainCircuit,
  MessageSquare, Cloud, Settings, PenTool, Link, ShoppingCart, LayoutTemplate,
  Play, Wrench, Search, Megaphone, Users, LucideIcon
} from "lucide-react"

export type Service = {
  title: string
  slug: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: "Android Development",
    slug: "android",
    description: "High-performance, scalable native Android applications tailored for the Google Play ecosystem.",
    icon: Smartphone,
  },
  {
    title: "iOS Development",
    slug: "ios",
    description: "Premium native iOS experiences built with Swift and optimized for the Apple App Store.",
    icon: Apple,
  },
  {
    title: "Flutter Development",
    slug: "flutter",
    description: "Beautiful, natively compiled, multi-platform applications from a single codebase.",
    icon: Layers,
  },
  {
    title: "React Development",
    slug: "react",
    description: "Dynamic, fast, and responsive user interfaces using the powerful React library.",
    icon: AppWindow,
  },
  {
    title: "Next.js Development",
    slug: "nextjs-development",
    description: "Server-first React applications offering unparalleled speed, SEO, and developer experience.",
    icon: Globe,
  },
  {
    title: "Web Applications",
    slug: "web-applications",
    description: "Custom, scalable web applications that drive your business operations forward.",
    icon: AppWindow,
  },
  {
    title: "Enterprise Software",
    slug: "enterprise-software",
    description: "Robust internal tools and platforms designed to streamline complex business workflows.",
    icon: Briefcase,
  },
  {
    title: "AI Solutions",
    slug: "ai-solutions",
    description: "Intelligent systems integrating LLMs and computer vision to modernize your business.",
    icon: Bot,
  },
  {
    title: "Machine Learning",
    slug: "machine-learning",
    description: "Predictive analytics and data models to uncover insights and automate decision-making.",
    icon: BrainCircuit,
  },
  {
    title: "Chatbot Development",
    slug: "chatbot-development",
    description: "Conversational AI agents to automate customer support and enhance user engagement.",
    icon: MessageSquare,
  },
  {
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Scalable, secure cloud infrastructure and deployment strategies using AWS and Google Cloud.",
    icon: Cloud,
  },
  {
    title: "DevOps",
    slug: "devops",
    description: "Continuous integration, delivery pipelines, and automated infrastructure management.",
    icon: Settings,
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "User-centric, stunning interfaces designed to maximize engagement and conversion.",
    icon: PenTool,
  },
  {
    title: "API Development",
    slug: "api-development",
    description: "Secure, RESTful and GraphQL APIs to seamlessly connect your digital ecosystem.",
    icon: Link,
  },
  {
    title: "E-Commerce",
    slug: "e-commerce",
    description: "High-converting online stores built on modern architectures for speed and scalability.",
    icon: ShoppingCart,
  },
  {
    title: "CMS Development",
    slug: "cms-development",
    description: "Headless content management systems giving your team total control over digital content.",
    icon: LayoutTemplate,
  },
  {
    title: "Play Store Publishing",
    slug: "play-store-publishing",
    description: "End-to-end assistance in launching, optimizing, and ranking your app on Google Play.",
    icon: Play,
  },
  {
    title: "App Maintenance",
    slug: "app-maintenance",
    description: "Continuous updates, bug fixes, and performance monitoring to keep your app running smoothly.",
    icon: Wrench,
  },
  {
    title: "SEO",
    slug: "seo",
    description: "Technical and on-page Search Engine Optimization to increase organic visibility.",
    icon: Search,
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Data-driven marketing campaigns to accelerate growth and acquire targeted users.",
    icon: Megaphone,
  },
  {
    title: "Consulting",
    slug: "consulting",
    description: "Strategic technological guidance to help you navigate digital transformation.",
    icon: Users,
  }
]
