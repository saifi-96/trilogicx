"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun, MonitorSmartphone, Code, Cloud, Bot, Blocks } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { Container } from "@/components/layout/container"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const services = [
  {
    title: "Web Applications",
    href: "/services/web-applications",
    description: "High-performance React & Next.js applications.",
    icon: Code,
  },
  {
    title: "Mobile Apps",
    href: "/services/mobile-apps",
    description: "Native and cross-platform mobile solutions.",
    icon: MonitorSmartphone,
  },
  {
    title: "AI Solutions",
    href: "/services/ai-solutions",
    description: "Integrate intelligent models and automation.",
    icon: Bot,
  },
  {
    title: "Cloud Services",
    href: "/services/cloud-services",
    description: "Scalable infrastructure and deployment.",
    icon: Cloud,
  },
  {
    title: "Enterprise Software",
    href: "/services/enterprise-software",
    description: "Robust internal tools and platforms.",
    icon: Blocks,
  },
]

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.title}>
                        <Link href={service.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <service.icon className="h-4 w-4 text-primary group-hover:text-primary-foreground" />
                              <div className="text-sm font-medium leading-none">
                                {service.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-primary-foreground/80 mt-1.5">
                              {service.description}
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                    <li className="md:col-span-2">
                      <Link href="/services" legacyBehavior passHref>
                        <NavigationMenuLink
                          className="flex items-center justify-center rounded-md bg-muted p-2 text-sm font-medium hover:bg-primary/10 transition-colors text-primary"
                        >
                          View all 21 services &rarr;
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/portfolio" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    Portfolio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="gradient">Let&apos;s Talk</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-8">
                <Link href="/services" className="text-lg font-medium hover:text-primary transition-colors">Services</Link>
                <Link href="/portfolio" className="text-lg font-medium hover:text-primary transition-colors">Portfolio</Link>
                <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors">About</Link>
                <Link href="/careers" className="text-lg font-medium hover:text-primary transition-colors">Careers</Link>
                <Link href="/blog" className="text-lg font-medium hover:text-primary transition-colors">Blog</Link>
                <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors">Contact</Link>
                <div className="mt-4">
                  <Button variant="gradient" className="w-full">Let&apos;s Talk</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
