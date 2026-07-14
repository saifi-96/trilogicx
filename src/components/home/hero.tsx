"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Background Grid Parallax
      gsap.to(bgRef.current, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      // Content fade in
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        }
      )

      // Blobs continuous rotation and mouse parallax setup
      gsap.to(blob1Ref.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear",
      })
      gsap.to(blob2Ref.current, {
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: "linear",
      })
    }, sectionRef)

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 40
      const y = (clientY / window.innerHeight - 0.5) * 40

      gsap.to(blob1Ref.current, {
        x: x * 1.5,
        y: y * 1.5,
        duration: 2,
        ease: "power2.out",
      })
      gsap.to(blob2Ref.current, {
        x: -x * 2,
        y: -y * 2,
        duration: 2.5,
        ease: "power2.out",
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      ctx.revert()
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <Section ref={sectionRef} className="relative min-h-[90vh] flex items-center pt-0 pb-0 overflow-hidden">
      {/* Background Grid */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />

      {/* Decorative Blobs */}
      <div
        ref={blob1Ref}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-screen opacity-50"
      />
      <div
        ref={blob2Ref}
        className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] bg-accent/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-screen opacity-50"
      />

      <Container className="relative z-10">
        <div ref={contentRef} className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
            Next-Generation Digital Agency
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Building Digital Products That <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Power the Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Trilogicx is a premium agency specializing in Next.js, AI Solutions, and cutting-edge mobile apps for forward-thinking companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button render={<Link href="/services" />} variant="gradient" size="lg" className="w-full sm:w-auto h-12 px-8 text-base">
              Explore Services
            </Button>
            <Button render={<Link href="/portfolio" />} variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 text-base bg-background/50 backdrop-blur-sm">
              Our Portfolio
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-muted-foreground">
        <span className="text-xs font-medium uppercase tracking-widest mb-2">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </div>
    </Section>
  )
}
