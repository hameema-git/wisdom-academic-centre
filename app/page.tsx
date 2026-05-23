import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Courses } from "@/components/courses"
import { Features } from "@/components/features"
import { Branches } from "@/components/branches"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { FloatingContact } from "@/components/floating-contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Courses />
      <Features />
      <Testimonials />
      <Branches />
      <Contact />
      <Footer />
      <FloatingWhatsApp/>
      <FloatingContact/>
    </main>
  )
}
