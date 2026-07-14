import React from "react"
import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/lib/data/services"

export const metadata: Metadata = {
  title: "Our Services | Trilogicx",
  description: "Explore the comprehensive suite of digital engineering, AI, and mobile app development services offered by Trilogicx.",
}

export default function ServicesPage() {
  return (
    <>
      <Section className="bg-muted/30 pt-24 md:pt-32 pb-16 md:pb-24 border-b">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Engineering <span className="text-primary">Digital Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From robust enterprise software to cutting-edge AI integrations, we deliver end-to-end technological solutions designed to scale your business and outpace the competition.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <Card 
                key={service.slug} 
                variant="glass" 
                className="group relative overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="mt-auto pt-6">
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="text-primary text-sm font-medium hover:underline inline-flex items-center group-hover:text-accent transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
