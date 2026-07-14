import React from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { caseStudies } from "@/lib/data/portfolio"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find(s => s.slug === slug)
  if (!study) return {}
  return {
    title: `${study.title} | Trilogicx Portfolio`,
    description: study.summary,
  }
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    notFound()
  }

  // Find next study for navigation
  const currentIndex = caseStudies.findIndex((s) => s.slug === slug)
  const nextStudy = caseStudies[currentIndex + 1] || caseStudies[0]

  return (
    <article>
      {/* Hero */}
      <Section className="bg-muted/30 pt-24 md:pt-32 pb-16 md:pb-24 border-b">
        <Container>
          <div className="max-w-4xl space-y-6">
            <Link href="/portfolio" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="px-3 py-1">
                {study.category}
              </Badge>
              <span className="text-sm font-medium text-primary">{study.client}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              {study.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {study.summary}
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Image */}
      <Container className="py-12">
        <div className="aspect-video w-full rounded-3xl overflow-hidden bg-muted border shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={study.imageUrl} 
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>
      </Container>

      {/* Content Placeholder */}
      <Section className="pt-0">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert prose-lg">
            <h2>The Challenge</h2>
            <p>
              In today&apos;s fast-paced digital environment, {study.client} faced significant hurdles in modernizing their legacy systems. They required a robust, scalable solution that could handle increased user loads while maintaining uncompromising security and performance standards.
            </p>
            <h2>Our Solution</h2>
            <p>
              Trilogicx partnered with {study.client} to architect a complete digital transformation. Leveraging modern frameworks and cloud infrastructure, we rebuilt their platform from the ground up. Our cross-functional team of engineers and designers worked iteratively to ensure every feature aligned with business objectives.
            </p>
            <h2>The Results</h2>
            <ul>
              <li>Improved platform performance by over 40%</li>
              <li>Reduced operational overhead and infrastructure costs</li>
              <li>Significantly increased user engagement and retention</li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Next Project */}
      <Section className="bg-muted/30 border-t">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left bg-background p-8 md:p-12 rounded-3xl border shadow-sm">
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Next Project</p>
              <h3 className="text-2xl md:text-3xl font-bold">{nextStudy.title}</h3>
            </div>
            <Link href={`/portfolio/${nextStudy.slug}`}>
              <Button variant="gradient" size="lg" className="rounded-full px-8">
                View Case Study
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </article>
  )
}
