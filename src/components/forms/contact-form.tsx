"use client"

import React, { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
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
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
        <div className="h-16 w-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold">Message Sent!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for reaching out. A technical consultant from our team will get back to you within 24 hours.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSuccess(false)}
          className="mt-6"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="first-name" className="text-sm font-medium">First Name</label>
          <Input id="first-name" placeholder="John" className="bg-muted/50" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="last-name" className="text-sm font-medium">Last Name</label>
          <Input id="last-name" placeholder="Doe" className="bg-muted/50" required />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">Work Email</label>
        <Input id="email" type="email" placeholder="john@company.com" className="bg-muted/50" required />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium">Company (Optional)</label>
        <Input id="company" placeholder="Acme Inc." className="bg-muted/50" />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">How can we help?</label>
        <Textarea 
          id="message" 
          placeholder="Tell us about your project requirements..." 
          className="bg-muted/50 min-h-[120px] resize-y"
          required
        />
      </div>

      <Button 
        type="submit" 
        variant="gradient" 
        size="lg" 
        className="w-full text-base h-12"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
      </Button>
      
      <p className="text-xs text-center text-muted-foreground">
        By submitting this form, you agree to our privacy policy.
      </p>
    </form>
  )
}
