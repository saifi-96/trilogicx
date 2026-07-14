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
        "flex items-center gap-3 font-bold text-2xl tracking-tight text-foreground select-none group",
        className
      )}
      {...props}
    >
      <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-primary/90 to-accent shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/40 group-hover:-rotate-3">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
        >
          {/* Top Diamond / Triangle representation */}
          <path
            d="M12 2L3 7L12 12L21 7L12 2Z"
            fill="currentColor"
            fillOpacity="0.3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Left Face */}
          <path
            d="M3 7V17L12 22V12L3 7Z"
            fill="currentColor"
            fillOpacity="0.1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right Face */}
          <path
            d="M21 7V17L12 22V12L21 7Z"
            fill="currentColor"
            fillOpacity="0.8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Center line emphasis for the 'T' and 'Tri' effect */}
          <path
            d="M12 2V22M3 7L12 12M21 7L12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-xl leading-none tracking-tight">
          Trilogicx
        </span>
      </div>
    </div>
  )
}
