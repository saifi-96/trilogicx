import React from "react"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

import { Logo } from "@/components/ui/logo"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <Logo />
            <p className="text-muted-foreground text-sm max-w-sm">
              Trilogicx is a premium software development agency specializing in next-generation web applications, AI integration, and robust mobile solutions.
            </p>
            <div className="flex gap-4">
              <Link href="https://twitter.com/trilogicx" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary">
                  <FaTwitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/company/trilogicx" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary">
                  <FaLinkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://facebook.com/trilogicx" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary">
                  <FaFacebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link href="https://instagram.com/trilogicx" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary">
                  <FaInstagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Park Road, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@trilogicx.com" className="hover:text-primary transition-colors">info@trilogicx.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+923119606735" className="hover:text-primary transition-colors">+92 311 9606735</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to get the latest news and insights delivered to your inbox.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-muted/50 border-transparent focus-visible:border-primary"
                required
              />
              <Button variant="gradient" className="w-full">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Trilogicx. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
