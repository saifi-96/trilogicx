import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { MapPin, Mail, Phone, MessageSquare, Send } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { ContactForm } from "@/components/forms/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Trilogicx",
  description: "Get in touch with Trilogicx. Let's discuss how we can engineer your next digital product.",
}

export default function ContactPage() {
  return (
    <>
      <Section className="bg-muted/30 pt-24 md:pt-32 pb-16 border-b">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight">
              Let&apos;s <span className="text-primary">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you have a specific project in mind or just want to explore possibilities, our engineering team is ready to help you build the future.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Headquarters</h3>
                    <p className="text-muted-foreground">Park Road<br/>Islamabad, Pakistan</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <Link href="mailto:info@trilogicx.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@trilogicx.com
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <Link href="tel:+923119606735" className="text-muted-foreground hover:text-primary transition-colors">
                      +92 311 9606735
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                    <Link href="https://wa.me/923119606735" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                      Message us directly
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-muted border shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://placehold.co/800x400/0F172A/FFFFFF?text=Map+of+Islamabad" 
                  alt="Location Map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background rounded-3xl p-8 md:p-12 border shadow-sm h-fit">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Send a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and a technical consultant will get back to you within 24 hours.
              </p>

              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
