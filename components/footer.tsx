import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#1a3a5c] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Wisdom Academic Centre Logo"
                width={70}
                height={70}
                className="rounded-xl"
              />
              <div>
                <h3 className="text-2xl font-bold">WISDOM</h3>
                <p className="text-sm text-blue-200">Academic Centre</p>
              </div>
            </div>
            <p className="text-sm text-blue-100/80 leading-relaxed">
              Empowering Minds, Building Futures. Providing quality education 
              across Science, Commerce, and Humanities streams since 2014.
            </p>
            <p className="text-xs text-blue-200/60">
              Reg No: UDYAM-KL-02-0017499
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "#courses", label: "Courses" },
                { href: "#features", label: "Why Choose Us" },
                { href: "#branches", label: "Our Branches" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-100/80 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Courses */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-yellow-400">Our Courses</h4>
            <ul className="space-y-3">
              {[
                "+1 & +2 Science",
                "+1 & +2 Commerce (State & CBSE)",
                "+1 & +2 Humanities",
                "B.COM / BBA",
                "M.COM / MBA",
                "Class 1-10 (State & CBSE)",
              ].map((course) => (
                <li key={course}>
                  <span className="text-sm text-blue-100/80">{course}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-yellow-400">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 shrink-0 text-yellow-400" />
                <div className="text-sm">
                  <a href="tel:9633212968" className="hover:text-yellow-400 transition-colors block">9633212968</a>
                  <a href="tel:7012119132" className="hover:text-yellow-400 transition-colors block">7012119132</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 shrink-0 text-yellow-400" />
                <a href="mailto:wisdomacademykochi@gmail.com" className="text-sm hover:text-yellow-400 transition-colors break-all">
                  wisdomacademykochi@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-yellow-400" />
                <span className="text-sm text-blue-100/80">
                  Chullickal, Statue Road & Palluruthy, Kochi
                </span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/wisdomacademy._"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/919633212968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-green-500 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-blue-200/60">
            © {new Date().getFullYear()} Wisdom Academic Centre, Kochi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
