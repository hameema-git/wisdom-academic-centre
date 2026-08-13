"use client"

import Image from "next/image"
import Link from "next/link"

import {
  MapPin,
  Users,
  Phone,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {

  return (

    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        pt-28
        md:pt-24
      "
    >

      {/* BACKGROUND */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#071529]
          via-[#0b2342]
          to-[#14365e]
        "
      />

      {/* GLOW EFFECTS */}

      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            top-20
            right-10
            w-72
            h-72
            bg-blue-400/10
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-20
            left-10
            w-96
            h-96
            bg-cyan-500/10
            rounded-full
            blur-3xl
          "
        />

      </div>

      {/* MAIN CONTAINER */}

      <div
        className="
          container
          mx-auto
          px-4
          py-16
          md:py-24
          relative
          z-10
        "
      >

        <div
          className="
            grid
            lg:grid-cols-2
            gap-14
            items-center
          "
        >

          {/* LEFT CONTENT */}

          <div className="space-y-8">

            {/* TITLE */}

            <div className="space-y-5">

              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-extrabold
                  text-white
                  leading-tight
                "
              >

                WISDOM

                <span className="block text-blue-300">
                  Academic Centre
                </span>

              </h1>

              <p
                className="
                  text-xl
                  md:text-3xl
                  text-blue-100
                  italic
                  font-medium
                "
              >

                Empowering Minds, Building Futures

              </p>

            </div>

            {/* DESCRIPTION */}

            <p
              className="
                text-base
                md:text-xl
                text-blue-100/80
                leading-relaxed
                max-w-2xl
              "
            >

              Where academic excellence meets future success —
              personalized coaching for School, +1, +2,
              Degree and Professional courses with modern
              learning methodologies.

            </p>

            {/* QUICK ACTION BUTTONS */}

            <div className="flex flex-col sm:flex-row gap-4 pt-2">

              {/* PLUS ONE */}

              {/* <Link
                href="/plusone-admission"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  via-blue-500
                  to-indigo-600
                  px-6
                  py-3
                  text-sm
                  md:text-base
                  font-semibold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-blue-500/40
                "
              >

                <span className="relative flex h-3 w-3">

                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      rounded-full
                      bg-cyan-300
                      opacity-75
                      animate-ping
                    "
                  ></span>

                  <span
                    className="
                      relative
                      inline-flex
                      h-3
                      w-3
                      rounded-full
                      bg-cyan-100
                    "
                  ></span>

                </span>

                🎓 Plus One Admission 2026

              </Link> */}
{/* 
              <Link
  href="https://wisdom-academy-onam-exam-portal.netlify.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    bg-gradient-to-r
    from-green-500
    via-emerald-500
    to-teal-600
    px-6
    py-3
    text-sm
    md:text-base
    font-semibold
    text-white
    shadow-xl
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-green-500/40
  "
>
  <span className="relative flex h-3 w-3">
    <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>
    <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
  </span>

  📚 Onam Exam Portions
</Link> */}

              {/* PLUS TWO RESULT */}

              {/* <Link
                href="/results-2026"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-pink-500
                  via-red-500
                  to-orange-500
                  px-6
                  py-3
                  text-sm
                  md:text-base
                  font-semibold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-pink-500/40
                "
              >

                <span className="relative flex h-3 w-3">

                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      rounded-full
                      bg-white
                      opacity-75
                      animate-ping
                    "
                  ></span>

                  <span
                    className="
                      relative
                      inline-flex
                      h-3
                      w-3
                      rounded-full
                      bg-white
                    "
                  ></span>

                </span>

                🎉 Plus Two Result 2026

              </Link> */}

            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5">

              <Button
                asChild
                size="lg"
                className="
                  bg-yellow-400
                  hover:bg-yellow-300
                  text-slate-900
                  font-semibold
                  text-lg
                  px-8
                  py-6
                  rounded-xl
                  shadow-xl
                "
              >

                <Link href="#contact">

                  Enroll Now

                  <ChevronRight className="ml-1 h-5 w-5" />

                </Link>

              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="
                  border-2
                  border-white
                  text-white
                  hover:bg-white
                  hover:text-slate-900
                  bg-transparent
                  text-lg
                  px-8
                  py-6
                  rounded-xl
                "
              >

                <Link href="#courses">
                  View Courses
                </Link>

              </Button>

            </div>

            {/* CONTACT NUMBERS */}

            <div className="flex flex-wrap items-center gap-6 pt-4">

              <a
                href="tel:9633212968"
                className="
                  flex
                  items-center
                  gap-2
                  text-white
                  hover:text-yellow-300
                  transition-colors
                "
              >

                <div
                  className="
                    p-2
                    rounded-full
                    bg-white/10
                    backdrop-blur-sm
                  "
                >

                  <Phone className="h-5 w-5" />

                </div>

                <span className="font-semibold">
                  9633212968
                </span>

              </a>

              <a
                href="tel:7012119132"
                className="
                  flex
                  items-center
                  gap-2
                  text-white
                  hover:text-yellow-300
                  transition-colors
                "
              >

                <div
                  className="
                    p-2
                    rounded-full
                    bg-white/10
                    backdrop-blur-sm
                  "
                >

                  <Phone className="h-5 w-5" />

                </div>

                <span className="font-semibold">
                  7012119132
                </span>

              </a>

              <a
                href="tel:9746773682"
                className="
                  flex
                  items-center
                  gap-2
                  text-white
                  hover:text-yellow-300
                  transition-colors
                "
              >

                <div
                  className="
                    p-2
                    rounded-full
                    bg-white/10
                    backdrop-blur-sm
                  "
                >

                  <Phone className="h-5 w-5" />

                </div>

                <span className="font-semibold">
                  9746773682
                </span>

              </a>

            </div>

            {/* STATS */}

            <div className="flex flex-wrap gap-10 pt-8">

              <div className="flex items-center gap-4">

                <div
                  className="
                    p-4
                    rounded-2xl
                    bg-white/10
                    backdrop-blur-sm
                  "
                >

                  <Users className="h-7 w-7 text-yellow-300" />

                </div>

                <div>

                  <p className="text-3xl font-bold text-white">
                    14+
                  </p>

                  <p className="text-blue-200">
                    Years Excellence
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div
                  className="
                    p-4
                    rounded-2xl
                    bg-white/10
                    backdrop-blur-sm
                  "
                >

                  <MapPin className="h-7 w-7 text-yellow-300" />

                </div>

                <div>

                  <p className="text-3xl font-bold text-white">
                    3
                  </p>

                  <p className="text-blue-200">
                    Branches in Kochi
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div
            className="
              hidden
              lg:flex
              items-center
              justify-center
              relative
            "
          >

            {/* OUTER GLOW */}

            <div
              className="
                absolute
                inset-0
                bg-blue-400/20
                blur-3xl
                rounded-full
              "
            />

            {/* LOGO CARD */}

            <div
              className="
                relative
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                rounded-[40px]
                p-10
                shadow-2xl
              "
            >

              <Image
                src="/logo.png"
                alt="Wisdom Academic Centre"
                width={320}
                height={320}
                className="rounded-3xl w-auto h-auto"
              />

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM WAVE */}

      <div className="absolute bottom-0 left-0 right-0">

        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 fill-background"
        >

          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L0,120Z" />

        </svg>

      </div>

    </section>

  )
}