import React from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/data/blog"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | Trilogicx Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <article>
      <Section className="bg-muted/30 pt-24 md:pt-32 pb-16 border-b">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <div className="flex justify-center mb-8">
              <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </div>
            
            <Badge variant="secondary" className="px-3 py-1 mb-4">
              {post.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Container className="py-12">
        <div className="max-w-4xl mx-auto aspect-video w-full rounded-3xl overflow-hidden bg-muted border shadow-sm mb-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-2xl mx-auto prose prose-neutral dark:prose-invert prose-lg">
          <p className="lead text-xl text-muted-foreground mb-12">
            {post.excerpt}
          </p>
          
          {post.content.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
              <div className="space-y-4">
                {section.body.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </article>
  )
}
