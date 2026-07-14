"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 font-bold text-xl tracking-tight text-foreground select-none",
        className
      )}
      {...props}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white shadow-md">
        <span className="text-lg leading-none">T</span>
      </div>
      <span>Trilogicx</span>
    </div>
  )
}
