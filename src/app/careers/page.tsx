import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { MapPin, Briefcase, ArrowRight, CheckCircle2, Terminal, Coffee, GraduationCap } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { careers } from "@/lib/data/careers"

export const metadata: Metadata = {
  title: "Careers | Trilogicx",
  description: "Join our team of elite engineers and designers in Islamabad or work remotely. Explore our open positions.",
}

const perks = [
  {
    title: "Modern Tech Stack",
    icon: Terminal,
    description: "Work with Next.js 15, Flutter, React Native, and cutting-edge AI models. No legacy code maintenance."
  },
  {
    title: "Flexible Working",
    icon: Coffee,
    description: "Choose between our state-of-the-art office in Islamabad, fully remote, or a hybrid setup that fits your life."
  },
  {
    title: "Continuous Learning",
    icon: GraduationCap,
    description: "Generous budget for courses, conferences, and certifications. We invest heavily in your professional growth."
  }
]

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-muted/30 pt-24 md:pt-32 pb-16 md:pb-24 border-b">
        <Container>
          <div className="max-w-4xl space-y-6">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium">
              We&apos;re Hiring
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight">
              Build the Future <span className="text-primary">With Us</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We are a collective of passionate technologists building premium digital products. If you love solving complex problems and taking ownership, you belong here.
            </p>
          </div>
        </Container>
      </Section>

      {/* Perks Section */}
      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Join Trilogicx?</h2>
            <p className="text-lg text-muted-foreground">
              We provide an environment where top-tier talent can do their best work without corporate red tape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="flex flex-col items-center text-center p-8 bg-muted/50 rounded-2xl border">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <perk.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{perk.title}</h3>
                <p className="text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Open Positions Section */}
      <Section className="bg-muted/30 border-t" id="open-roles">
        <Container>
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Open Positions</h2>
              <p className="text-lg text-muted-foreground">Join our engineering and design teams.</p>
            </div>
            <p className="text-sm font-medium text-muted-foreground bg-background px-4 py-2 rounded-full border shadow-sm">
              {careers.length} roles available
            </p>
          </div>

          <div className="space-y-6">
            {careers.map((job) => (
              <div 
                key={job.id} 
                className="group flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 md:p-8 bg-background rounded-2xl border shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300"
              >
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">{job.department}</Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Briefcase className="h-3 w-3" />
                      {job.type}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold">{job.title}</h3>
                  <p className="text-muted-foreground max-w-2xl">
                    {job.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                    {job.requirements.slice(0, 4).map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between lg:justify-center gap-4 lg:gap-6 border-t lg:border-t-0 lg:border-l pt-6 lg:pt-0 lg:pl-8 mt-4 lg:mt-0 lg:w-64 shrink-0">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 shrink-0" />
                    <span className="font-medium">{job.location}</span>
                  </div>
                  <Link href={`mailto:info@trilogicx.com?subject=Application for ${job.title}`} className="w-full sm:w-auto lg:w-full">
                    <Button variant="gradient" className="w-full group-hover:scale-105 transition-transform duration-300">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Don&apos;t see a role that fits your profile?</p>
            <Link href="mailto:info@trilogicx.com?subject=General Application">
              <Button variant="outline">Submit a General Application</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
