import React from "react"
import Link from "next/link"
import { ArrowRight, Code, Bot, MonitorSmartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Hero } from "@/components/home/hero"
import { WhyChooseUs } from "@/components/home/why-choose-us"

const previewServices = [
  {
    title: "Next.js Development",
    description: "Server-first React applications offering unparalleled speed and SEO optimization.",
    icon: Code,
    href: "/services/nextjs-development"
  },
  {
    title: "AI Solutions",
    description: "Intelligent systems integrating LLMs, computer vision, and predictive analytics.",
    icon: Bot,
    href: "/services/ai-solutions"
  },
  {
    title: "Mobile Apps",
    description: "High-performance native iOS, Android, and cross-platform Flutter applications.",
    icon: MonitorSmartphone,
    href: "/services/mobile-apps"
  }
]

export default function Home() {
  return (
    <>
      <Hero />
      
      <Section id="services-preview">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Core Services</h2>
              <p className="text-muted-foreground text-lg">
                We deliver end-to-end digital engineering tailored to modern enterprise needs.
              </p>
            </div>
            <Button render={<Link href="/services" />} variant="ghost" className="group">
              View all 21 services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewServices.map((service, index) => (
              <Card key={index} variant="glass" className="relative overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Build secure, scalable, and responsive solutions tailored to your business operations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={service.href} className="text-primary text-sm font-medium hover:underline inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <WhyChooseUs />
    </>
  )
}
