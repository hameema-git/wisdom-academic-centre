"use client"

import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919633212968?text=Hi%20WISDOM%20Academic%20Centre,%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">

        {/* Pulse */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />

        {/* Button */}
        <div className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>

      </div>
    </a>
  )
}