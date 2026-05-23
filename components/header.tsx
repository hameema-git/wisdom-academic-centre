"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "Home" },
  // { href: "#branches", label: "Branches" },
  { href: "#courses", label: "Courses" },
  { href: "#features", label: "Why Us" },
  { href: "#branches", label: "Branches" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo1.png"
              alt="Wisdom Academic Centre Logo"
              width={60}
              height={60}
              className="rounded-xl"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary leading-tight">WISDOM</h1>
              <p className="text-xs text-muted-foreground -mt-0.5">Academic Centre</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:9633212968" className="flex items-center gap-2 text-sm font-medium text-primary">
              <Phone className="h-4 w-4" />
              <span>9633212968</span>
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="#contact">Enquire Now</Link>
            </Button>
          </div>

          <a
  href="https://wa.me/919633212968"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg"
>
  <MessageCircle className="w-5 h-5" />
</a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <a href="tel:9633212968" className="flex items-center gap-2 text-sm font-medium text-primary mb-4">
                  <Phone className="h-4 w-4" />
                  <span>9633212968</span>
                </a>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="#contact">Enquire Now</Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
