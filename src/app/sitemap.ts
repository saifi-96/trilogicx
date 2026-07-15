import { MetadataRoute } from 'next'
import { services } from '@/lib/data/services'
import { caseStudies } from '@/lib/data/portfolio'
import { posts } from '@/lib/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trilogicx.com'

  // Core static pages
  const routes = ['', '/services', '/portfolio', '/about', '/contact', '/careers', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic Service pages
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic Portfolio pages
  const portfolioRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/portfolio/${study.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Dynamic Blog pages
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  return [...routes, ...serviceRoutes, ...portfolioRoutes, ...blogRoutes]
}
