"use client"

import { useState } from "react"

import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Send,
  CheckCircle2,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    const subject = "WISDOM Website Enquiry"

    const body = `
Name: ${formData.name}

Phone: ${formData.phone}

Enquiry:
${formData.message}
    `

    window.open(
      `mailto:wisdomacademykochi@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
    )

    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
    }, 4000)

    setFormData({
      name: "",
      phone: "",
      message: "",
    })
  }

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0f2847]/10 to-[#071120]" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="inline-block px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-5 shadow-lg">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Let’s Connect With
            <span className="block text-primary">
              WISDOM
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Admissions, academic guidance and enquiries —
            our team is ready to help you.
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* LEFT - FORM */}
          <Card className="border border-border/50 bg-card/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">

            <CardContent className="p-8">

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Send an Enquiry
                </h3>

                <p className="text-muted-foreground text-sm">
                  We’ll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-4">

                {/* Name */}
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="h-12 rounded-xl"
                />

                {/* Phone */}
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="h-12 rounded-xl"
                />

                {/* Message */}
                <textarea
                  rows={5}
                  placeholder="Type your enquiry..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                />

                {/* Submit */}
                <Button
                  onClick={handleSubmit}
                  className="w-full h-12 rounded-xl text-base font-semibold shadow-xl"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Enquiry
                </Button>

                {/* Success */}
                {submitted && (
                  <div className="flex items-center gap-2 text-green-500 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5" />
                    Opening your mail app...
                  </div>
                )}

              </div>

            </CardContent>
          </Card>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            {/* Main Contact Card */}
            <Card className="border border-border/50 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-3xl shadow-2xl overflow-hidden h-full">

              <CardContent className="p-8 flex flex-col justify-between h-full">

                <div>

                  <h3 className="text-3xl font-bold mb-4">
                    Connect With WISDOM
                  </h3>

                  <p className="text-primary-foreground/80 leading-relaxed mb-8">
                    Reach out to us for admissions,
                    career guidance, courses and academic support.
                  </p>

                  {/* Info */}
                  <div className="space-y-5">

                    {/* Phone */}
                    <a
                      href="tel:9633212968"
                      className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition p-4 rounded-2xl"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <Phone className="w-6 h-6" />
                      </div>

                      <div>
                        <p className="text-sm text-white/70">
                          Call Us
                        </p>

                        <p className="font-semibold">
                          +91 9633212968
                        </p>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/919633212968"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition p-4 rounded-2xl"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6" />
                      </div>

                      <div>
                        <p className="text-sm text-white/70">
                          WhatsApp
                        </p>

                        <p className="font-semibold">
                          Chat With Us
                        </p>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:wisdomacademykochi@gmail.com"
                      className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition p-4 rounded-2xl"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <Mail className="w-6 h-6" />
                      </div>

                      <div>
                        <p className="text-sm text-white/70">
                          Email
                        </p>

                        <p className="font-semibold break-all">
                          wisdomacademykochi@gmail.com
                        </p>
                      </div>
                    </a>

                    {/* Location */}
                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">

                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6" />
                      </div>

                      <div>
                        <p className="text-sm text-white/70">
                          Location
                        </p>

                        <p className="font-semibold">
                          Kochi, Kerala
                        </p>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Social */}
                <div className="pt-8">

                  <p className="text-sm text-white/70 mb-4">
                    Follow Us
                  </p>

                  <div className="flex gap-4">

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/919633212968"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>

                  </div>

                </div>

              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}