"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { caseStudies, portfolioCategories, PortfolioCategory } from "@/lib/data/portfolio"

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | "All">("All")

  const filteredStudies = activeCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory)

  return (
    <>
      <Section className="bg-muted/30 pt-24 md:pt-32 pb-16 md:pb-24 border-b">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our track record of transforming complex challenges into elegant, scalable digital solutions across diverse industries.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            <Button
              variant={activeCategory === "All" ? "default" : "outline"}
              onClick={() => setActiveCategory("All")}
              className="rounded-full"
            >
              All Work
            </Button>
            {portfolioCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Grid with Framer Motion */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((study) => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col bg-card rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={study.imageUrl}
                      alt={study.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-md">
                        {study.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <div className="text-sm text-primary font-medium mb-2">{study.client}</div>
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-1">
                      {study.summary}
                    </p>
                    <Link 
                      href={`/portfolio/${study.slug}`} 
                      className="inline-flex items-center font-medium text-primary hover:text-accent transition-colors mt-auto"
                    >
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              No projects found in this category.
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}
