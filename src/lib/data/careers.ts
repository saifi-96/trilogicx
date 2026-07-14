export type JobType = "Full-time" | "Part-time" | "Contract" | "Freelance"
export type JobLocation = "Islamabad, Pakistan" | "Remote" | "Hybrid"

export type Job = {
  id: string
  title: string
  department: string
  location: JobLocation
  type: JobType
  description: string
  requirements: string[]
}

export const careers: Job[] = [
  {
    id: "job-1",
    title: "Senior Next.js Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We are looking for an expert Next.js developer to lead architecture and development on high-traffic, performance-critical web applications.",
    requirements: [
      "5+ years of React experience",
      "Deep understanding of Next.js App Router, SSR, and RSC",
      "Experience with Tailwind CSS and Framer Motion",
      "Strong TypeScript fundamentals"
    ]
  },
  {
    id: "job-2",
    title: "Flutter Engineer",
    department: "Mobile Engineering",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    description: "Join our mobile team to build beautiful, natively compiled cross-platform applications for iOS and Android.",
    requirements: [
      "3+ years of Flutter & Dart experience",
      "Published at least 2 apps on App Store/Play Store",
      "Familiarity with native iOS/Android development is a plus",
      "Experience with state management (Riverpod/Provider)"
    ]
  },
  {
    id: "job-3",
    title: "AI Solutions Architect",
    department: "AI & Machine Learning",
    location: "Remote",
    type: "Full-time",
    description: "Lead the integration of Large Language Models (LLMs) and custom AI pipelines into our enterprise client systems.",
    requirements: [
      "Experience with OpenAI APIs, LangChain, or LlamaIndex",
      "Strong Python and Node.js skills",
      "Background in deploying machine learning models to production",
      "Understanding of RAG architecture"
    ]
  },
  {
    id: "job-4",
    title: "UI/UX Design Lead",
    department: "Design",
    location: "Hybrid",
    type: "Full-time",
    description: "We need a visionary designer to craft stunning, premium digital experiences for SaaS and consumer mobile products.",
    requirements: [
      "Exceptional Figma skills and design system creation",
      "Strong portfolio demonstrating high-end SaaS/App design",
      "Experience with micro-animations and interaction design",
      "Ability to mentor junior designers"
    ]
  },
  {
    id: "job-5",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Contract",
    description: "Help us streamline our deployment pipelines, optimize cloud infrastructure, and ensure high availability across client projects.",
    requirements: [
      "AWS / GCP certification preferred",
      "Experience with Docker, Kubernetes, and Terraform",
      "Strong background in CI/CD (GitHub Actions/GitLab CI)",
      "Linux system administration expertise"
    ]
  },
  {
    id: "job-6",
    title: "Technical Project Manager",
    department: "Operations",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    description: "Bridge the gap between engineering teams and clients, ensuring timely delivery of complex technical projects.",
    requirements: [
      "3+ years managing software development lifecycles (Agile/Scrum)",
      "Strong technical background (former developer preferred)",
      "Excellent client-facing communication skills",
      "Experience using Jira or Linear"
    ]
  }
]
