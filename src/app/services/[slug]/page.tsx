import React from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/data/services"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find(s => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.title} Services | Trilogicx`,
    description: service.description,
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <article>
      {/* Hero */}
      <Section className="bg-muted/30 pt-24 md:pt-32 pb-16 md:pb-24 border-b">
        <Container>
          <div className="max-w-4xl space-y-8">
            <Link href="/services" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <service.icon className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                {service.title}
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              {service.description}
            </p>

            <div className="pt-4 flex gap-4">
              <Link href="/contact">
                <Button variant="gradient" size="lg">
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Details */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Why Choose Trilogicx for {service.title}?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach to {service.title.toLowerCase()} is rooted in deep technical expertise and a commitment to delivering scalable, high-performance solutions. We don&apos;t just build software; we engineer digital ecosystems that drive business growth.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Dedicated team of senior engineers and architects",
                  "Agile methodology ensuring rapid delivery and iteration",
                  "Strict adherence to industry best practices and security standards",
                  "Comprehensive post-launch support and maintenance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-muted rounded-3xl p-8 md:p-12 flex flex-col justify-center border shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-muted-foreground mb-8">
                Let&apos;s discuss how our {service.title.toLowerCase()} services can help you achieve your business objectives.
              </p>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Work Email</label>
                  <input type="email" className="w-full p-3 rounded-lg border bg-background" placeholder="hello@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Details</label>
                  <textarea className="w-full p-3 rounded-lg border bg-background" rows={4} placeholder="Tell us about your needs..." />
                </div>
                <Button variant="gradient" className="w-full h-12">Submit Request</Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </article>
  )
}
