import React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string
  children: React.ReactNode
  id?: string
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, id, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("py-16 md:py-24 lg:py-32 overflow-hidden", className)}
        {...props}
      >
        {children}
      </section>
    )
  }
)
Section.displayName = "Section"
