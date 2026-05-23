import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  BookOpen,
  MessageCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const branches = [
  {
    name: "Chullickal Branch (Main)",

    address:
      "10, 1453, RK Pillai Rd, near Abad Hotel, Panayappilly, Chullickal, Kochi, Kerala 682005",

    phone: "7012119132",

    whatsapp: "7012119132",

    timing: "6 AM - 9 PM",

    mapLink:
      "https://maps.google.com/?q=Wisdom+Academic+Center+Chullickal+Kochi",

    courses: [
      "+1 & +2 Science(State), Commerce(State & CBSE), Humanities",
      "B.COM, BBA, M.COM, MBA",
    ],

    badge: "Main Branch",

    badgeColor: "bg-yellow-500 text-slate-900",
  },

  {
    name: "Statue Branch",

    address:
      "2nd floor, Statue Rd, Koovapadam, Kochi",

    phone: "9746773682",

    whatsapp: "9746773682",

    timing: "6 AM - 9 PM",

    mapLink:
      "https://maps.google.com/?q=Wisdom+Academy+Statue+Branch+Kochi",

    courses: [
      "Class 1-10 (State Board & CBSE)",
    ],

    badge: "School Classes",

    badgeColor: "bg-blue-500 text-white",
  },

  {
    name: "Palluruthy Branch",

    address:
      "Palluruthy, Kochi, Kerala",

    phone: "9633212968",

    whatsapp: "9633212968",

    timing: "6 AM - 9 PM",

    mapLink:
      "https://maps.google.com/?q=Palluruthy+Kochi",

    courses: [
      "Class 1 to +2 (Commerce & Humanities)",
    ],

    badge: "All Classes",

    badgeColor: "bg-green-500 text-white",
  },
]

export function Branches() {
  return (
    <section
      id="branches"
      className="py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2847] via-[#1a3a5c] to-[#0a1628]" />

      {/* Glow Effects */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-block px-4 py-2 bg-yellow-500 text-slate-900 text-sm font-semibold rounded-full mb-4">
            Our Locations
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Find Us Near You
          </h2>

          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Conveniently located branches across Kochi
            to serve students better.
          </p>

        </div>

        {/* Branch Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {branches.map((branch, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 hover:-translate-y-2 transition-all duration-300 rounded-3xl overflow-hidden"
            >
              <CardHeader className="pb-4">

                {/* Top */}
                <div className="flex items-start justify-between mb-3">

                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-yellow-400" />
                  </div>

                  <span
                    className={`px-3 py-1 ${branch.badgeColor} text-xs font-semibold rounded-full`}
                  >
                    {branch.badge}
                  </span>

                </div>

                <CardTitle className="text-xl text-white">
                  {branch.name}
                </CardTitle>

              </CardHeader>

              <CardContent className="space-y-4">

                {/* Address */}
                <div className="flex items-start gap-3">

                  <Navigation className="h-5 w-5 text-blue-300 mt-0.5 shrink-0" />

                  <p className="text-sm text-blue-100">
                    {branch.address}
                  </p>

                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">

                  <Phone className="h-5 w-5 text-blue-300 shrink-0" />

                  <a
                    href={`tel:${branch.phone}`}
                    className="text-sm font-medium text-yellow-400 hover:underline"
                  >
                    {branch.phone}
                  </a>

                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3">

                  <MessageCircle className="h-5 w-5 text-green-400 shrink-0" />

                  <a
                    href={`https://wa.me/91${branch.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-green-400 hover:underline"
                  >
                    Chat on WhatsApp
                  </a>

                </div>

                {/* Timing */}
                <div className="flex items-center gap-3">

                  <Clock className="h-5 w-5 text-blue-300 shrink-0" />

                  <p className="text-sm text-blue-100">
                    {branch.timing}
                  </p>

                </div>

                {/* Courses */}
                <div className="pt-3 border-t border-white/10">

                  <div className="flex items-start gap-3">

                    <BookOpen className="h-5 w-5 text-blue-300 mt-0.5 shrink-0" />

                    <div>

                      <p className="text-xs text-blue-300 font-medium mb-1">
                        Courses Offered:
                      </p>

                      {branch.courses.map((course, i) => (
                        <p
                          key={i}
                          className="text-sm text-white"
                        >
                          {course}
                        </p>
                      ))}

                    </div>

                  </div>

                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 pt-2">

                  {/* Map */}
                  <Button
                    asChild
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold"
                  >
                    <a
                      href={branch.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>

                  {/* WhatsApp */}
                  {/* <a
                    href={`https://wa.me/91${branch.whatsapp}?text=Hi%20${encodeURIComponent(
                      branch.name
                    )},%20I%20would%20like%20to%20know%20more%20about%20your%20courses.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl font-medium transition-all duration-300"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Branch
                  </a> */}

                </div>

              </CardContent>
            </Card>
          ))}

        </div>
      </div>
    </section>
  )
}