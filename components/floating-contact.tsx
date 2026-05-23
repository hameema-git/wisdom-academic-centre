"use client"

import {
  MessageCircle,
  Phone,
} from "lucide-react"

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* Call Button */}
      <a
        href="tel:9633212968"
        className="group relative"
      >
        {/* Pulse */}
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30" />

        {/* Main Button */}
        <div className="relative w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-600 shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
          <Phone className="w-7 h-7 text-white" />
        </div>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919633212968?text=Hi%20WISDOM%20Academic%20Centre,%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        {/* Pulse */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />

        {/* Main Button */}
        <div className="relative w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </a>

    </div>
  )
}