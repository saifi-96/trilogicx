"use client"

import React, { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ServiceForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center space-y-4 animate-in fade-in zoom-in duration-500">
        <div className="h-14 w-14 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-2">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold">Request Received!</h3>
        <p className="text-sm text-muted-foreground">
          Thank you for reaching out. A specialist will contact you shortly.
        </p>
      </div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="service-email" className="text-sm font-medium">Work Email</label>
        <input 
          id="service-email"
          type="email" 
          className="w-full p-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
          placeholder="hello@company.com" 
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="service-details" className="text-sm font-medium">Project Details</label>
        <textarea 
          id="service-details"
          className="w-full p-3 rounded-lg border bg-background min-h-[100px] resize-y focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
          rows={4} 
          placeholder="Tell us about your needs..." 
          required
        />
      </div>
      <Button 
        type="submit" 
        variant="gradient" 
        className="w-full h-12"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  )
}
