"use client"

import React, { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

const stats = [
  { label: "Projects Completed", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 120, suffix: "+" },
  { label: "Countries Served", value: 15, suffix: "" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Apps Published", value: 45, suffix: "+" },
  { label: "Support Hours", value: 24, suffix: "/7" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest))
      }
    })
  }, [springValue])

  return (
    <div className="flex items-baseline justify-center gap-1 font-heading text-5xl font-bold text-foreground">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </div>
  )
}

export function WhyChooseUs() {
  return (
    <Section className="bg-muted/30 border-y">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Trilogicx?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We don&apos;t just write code; we build scalable digital solutions that drive real business growth. Our track record speaks for itself.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2 flex flex-col items-center p-6 bg-background rounded-2xl shadow-sm border">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
