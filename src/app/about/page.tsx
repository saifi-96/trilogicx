import React from "react"
import { Metadata } from "next"
import { Target, Lightbulb, ShieldCheck, MapPin } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "About Us | Trilogicx",
  description: "Learn about Trilogicx's mission, our team, and how we're innovating digital solutions from Islamabad to the world.",
}

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We don't just follow trends; we set them by integrating the latest AI and cloud architectures into practical business solutions."
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    description: "Every line of code and every pixel is meticulously crafted and rigorously tested to meet premium enterprise standards."
  },
  {
    icon: Target,
    title: "Client Success",
    description: "Your growth is our metric for success. We build long-term partnerships focused on driving real, measurable ROI."
  }
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-muted/30 pt-24 md:pt-32 pb-16 md:pb-24 border-b">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight">
              Innovating <span className="text-primary">Digital Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Trilogicx is a premier technology agency based in Islamabad. We specialize in engineering high-performance web applications, native mobile experiences, and intelligent AI systems that power forward-thinking enterprises.
            </p>
          </div>
        </Container>
      </Section>

      {/* Leadership & Story */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Story & Leadership</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded with a vision to bridge the gap between complex business challenges and elegant technological solutions, Trilogicx has grown into a powerhouse of digital innovation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Led by CEO <strong>Sidra Arshad</strong>, our team of world-class engineers and designers operate at the bleeding edge of the tech industry. We believe that great software isn&apos;t just about writing code—it&apos;s about understanding the human experience and delivering flawless performance.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <Avatar className="h-16 w-16 border-2 border-primary">
                  <AvatarImage src="https://placehold.co/100x100/0F172A/FFFFFF?text=SA" alt="Sidra Arshad" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-lg">Sidra Arshad</div>
                  <div className="text-muted-foreground">Chief Executive Officer</div>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-video lg:aspect-square w-full rounded-3xl overflow-hidden bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://placehold.co/800x800/0F172A/FFFFFF?text=Trilogicx+Office" 
                alt="Trilogicx Team Collaboration" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-md rounded-2xl border flex items-center gap-4 shadow-lg">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Global Headquarters</h4>
                  <p className="text-sm text-muted-foreground">Park Road, Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section className="bg-muted/30 border-t">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide our decision-making and shape our engineering culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 border shadow-sm hover:shadow-md transition-shadow">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
