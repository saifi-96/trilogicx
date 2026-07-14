export type PortfolioCategory = "Healthcare" | "Education" | "Finance" | "Travel" | "AI" | "E-Commerce"

export type CaseStudy = {
  id: string
  title: string
  client: string
  category: PortfolioCategory
  summary: string
  imageUrl: string
  slug: string
}

export const portfolioCategories: PortfolioCategory[] = [
  "Healthcare", "Education", "Finance", "Travel", "AI", "E-Commerce"
]

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    title: "MedSync Telehealth Platform",
    client: "MedHealth Providers",
    category: "Healthcare",
    summary: "Developed a comprehensive telehealth web application using Next.js and WebRTC, enabling secure video consultations, real-time patient record synchronization, and an integrated billing system that increased provider efficiency by 40%.",
    imageUrl: "/images/portfolio/portfolio_medsync_1784070802160.png",
    slug: "medsync-telehealth",
  },
  {
    id: "cs-2",
    title: "EduLearn LMS App",
    client: "Global Tech University",
    category: "Education",
    summary: "Built a cross-platform mobile application with Flutter for a leading online academy. The app features offline video playback, interactive quizzes, and real-time progress tracking, resulting in a 200% increase in mobile student engagement.",
    imageUrl: "/images/portfolio/portfolio_edulearn_1784070810113.png",
    slug: "edulearn-lms",
  },
  {
    id: "cs-3",
    title: "FinTrack Dashboard",
    client: "FinTech Innovations",
    category: "Finance",
    summary: "Engineered a high-performance financial dashboard using React and real-time WebSocket data. The platform provides institutional investors with sub-second portfolio analytics, custom charting, and automated risk reporting.",
    imageUrl: "/images/portfolio/portfolio_fintrack_1784070818197.png",
    slug: "fintrack-dashboard",
  },
  {
    id: "cs-4",
    title: "Wanderlust Booking Engine",
    client: "Global Stay Group",
    category: "Travel",
    summary: "Modernized a legacy travel booking engine by migrating to a Next.js App Router architecture. Implemented aggressive static generation and edge caching, which reduced average page load times from 3.5s to 0.8s and boosted conversion rates by 22%.",
    imageUrl: "/images/portfolio/portfolio_globalstay_1784070826555.png",
    slug: "wanderlust-booking",
  },
  {
    id: "cs-5",
    title: "Cognitive Document Analyzer",
    client: "LegalTech Innovations",
    category: "AI",
    summary: "Integrated a customized Large Language Model (LLM) to automatically review and summarize complex legal contracts. The AI solution reduced manual document processing time by 85% while maintaining a 99% accuracy rate on critical clause extraction.",
    imageUrl: "https://placehold.co/600x400/0F172A/FFFFFF?text=AI+Analyzer",
    slug: "cognitive-analyzer",
  },
  {
    id: "cs-6",
    title: "SwiftCart Mobile Storefront",
    client: "Urban Retail Brand",
    category: "E-Commerce",
    summary: "Designed and developed a lightning-fast native iOS e-commerce application. Leveraged Apple Pay integration, AR product previews, and a personalized recommendation engine to drive a 35% increase in average order value.",
    imageUrl: "https://placehold.co/600x400/0F172A/FFFFFF?text=SwiftCart+App",
    slug: "swiftcart-storefront",
  }
]
