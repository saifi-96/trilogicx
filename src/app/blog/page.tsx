import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/data/blog"

export const metadata: Metadata = {
  title: "Blog | Trilogicx",
  description: "Insights, technical deep-dives, and company news from the Trilogicx team.",
}

export default function BlogPage() {
  return (
    <>
      <Section className="bg-muted/30 pt-24 md:pt-32 pb-16 md:pb-24 border-b">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Our <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Technical deep-dives, design philosophies, and engineering best practices from our expert team.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={post.id}
                className="group flex flex-col bg-background rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-md">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="text-primary text-sm font-medium inline-flex items-center mt-auto group-hover:text-accent transition-colors">
                    Read Article
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
