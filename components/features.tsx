import { Users, Target, Lightbulb, ClipboardCheck, Clock, Award } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Our team of highly qualified teachers brings years of experience and deep subject expertise to every classroom.",
  },
  {
    icon: Target,
    title: "Result Oriented",
    description: "We focus on achieving excellent academic results through strategic preparation and performance tracking.",
  },
  {
    icon: Lightbulb,
    title: "Concept Based Learning",
    description: "We emphasize understanding core concepts rather than rote memorization for lasting knowledge.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Tests & Doubt Clearing",
    description: "Frequent assessments and dedicated doubt-clearing sessions ensure no student is left behind.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Multiple batch timings available to accommodate students&apos; school schedules and other commitments.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Years of consistent results and positive reviews reflect our commitment to academic excellence.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#1a3a5c]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-500 text-slate-900 text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            The Wisdom Advantage
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Discover what makes Wisdom Academic Centre the preferred choice for 
            students across Kochi.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-yellow-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-blue-100/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
