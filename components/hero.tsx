import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Phone, ChevronRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background - Deep blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#1a3a5c]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>
      
      {/* Wave pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-background">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                WISDOM
                <span className="block text-blue-300">Academic Centre</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 font-medium italic">
                Empowering Minds, Building Futures
              </p>
            </div>
            
            {/* <p className="text-lg text-blue-100/80 leading-relaxed max-w-xl">
              Expert coaching for +1, +2 (State & CBSE) in Science, Commerce & Humanities. 
              Also offering degree courses: B.COM, BBA, M.COM & MBA.
            </p> */}

            <p className="text-lg text-blue-100/80 leading-relaxed max-w-xl">
  Where academic excellence meets future success —
  personalized coaching for School, +1, +2, Degree and
  Professional courses with modern learning methodologies.
</p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold text-lg px-8">
                <Link href="#contact">
                  Enroll Now
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-2 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent">
                <Link href="#courses">View Courses</Link>
              </Button>
            </div>
            
            {/* Quick Contact */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a href="tel:9633212968" className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors">
                <div className="p-2 bg-white/10 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="font-semibold">9633212968</span>
              </a>
              <a href="tel:7012119132" className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors">
                <div className="p-2 bg-white/10 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="font-semibold">7012119132</span>
              </a>
        
            <a href="tel:7012119132" className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors">
                <div className="p-2 bg-white/10 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="font-semibold">9746773682</span>
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                  <Users className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">14+</p>
                  <p className="text-sm text-blue-200">Years Excellence</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                  <MapPin className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">3</p>
                  <p className="text-sm text-blue-200">Branches in Kochi</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Visual - Large Logo */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-blue-400/30 rounded-3xl blur-3xl scale-110" />
              
              {/* Logo card */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
                <Image
                  src="/logo.png"
                  alt="Wisdom Academic Centre"
                  width={280}
                  height={280}
                  className="rounded-2xl"
                />
                <div className="text-center mt-6">
                  {/* <h2 className="text-4xl font-bold text-white">WISDOM</h2>
                  <p className="text-xl text-blue-200">Academic Centre</p> */}
                  {/* <div className="mt-4 px-4 py-2 bg-white/10 rounded-xl">
                    <p className="text-sm text-blue-200">
                      <span className="font-semibold text-white">Reg No:</span> UDYAM-KL-02-0017499
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
