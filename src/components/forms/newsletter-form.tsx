"use client"

import React, { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "")
    formData.append("subject", "New Newsletter Subscription - Trilogicx")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      if (res.ok) setIsSuccess(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex items-center gap-3 p-3 rounded-lg border bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 animate-in fade-in zoom-in duration-300">
        <CheckCircle2 className="h-5 w-5 shrink-0" />
        <p className="text-sm font-medium">Subscribed successfully!</p>
      </div>
    )
  }

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        className="bg-muted/50 border-transparent focus-visible:border-primary"
        required
      />
      <Button 
        type="submit" 
        variant="gradient" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}
