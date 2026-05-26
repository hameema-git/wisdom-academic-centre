import Image from "next/image"
import Link from "next/link"

import {
  ExternalLink,
  ArrowLeft,
  GraduationCap,
  FileText,
} from "lucide-react"

import { PlusTwoPercentageCalculator } from "@/components/plus-two-percentage-calculator"

const resultLinks = [

  {
    title: "Official HSE Result Portal",
    url: "https://results.hse.kerala.gov.in/results/",
  },

//   {
//     title: "Kerala Results Portal",
//     url: "https://keralaresults.nic.in/",
//   },

  {
    title: "DigiLocker Results",
    url: "https://results.digilocker.gov.in/",
  },

]

export default function Results2026Page() {

  return (

    <main className="min-h-screen bg-slate-50">

      {/* HERO */}

      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white py-20">

        <div className="container mx-auto px-4 max-w-6xl">

          {/* TOP BAR */}

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">

            {/* LOGO */}

            <div className="flex items-center gap-4">

              <Image
                src="/logo.png"
                alt="WISDOM Logo"
                width={70}
                height={70}
                className="rounded-2xl"
              />

              <div>

                <h2 className="text-2xl font-bold">
                  WISDOM Academic Centre
                </h2>

                <p className="text-blue-100">
                  Kerala Plus Two Result Support
                </p>

              </div>

            </div>

            {/* BACK BUTTON */}

            <Link
              href="/"
              className="
                inline-flex
                items-center
                gap-2
                bg-white/10
                hover:bg-white/20
                border
                border-white/20
                px-5
                py-3
                rounded-full
                transition-all
              "
            >

              <ArrowLeft className="w-4 h-4" />

              Back to Main Website

            </Link>

          </div>

          {/* HEADING */}

          <div className="text-center">

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6">

              <GraduationCap className="w-4 h-4" />

              Kerala DHSE Plus Two Result 2026

            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">

              Check Your Plus Two Result

            </h1>

            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">

              Official result links, marksheet guidance,
              percentage calculator and student support tools.

            </p>

          </div>

        </div>

      </section>

      {/* RESULT LINKS */}

      <section className="py-20">

        <div className="container mx-auto px-4 max-w-6xl">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold text-slate-900 mb-4">

              Official Result Links

            </h2>

            <p className="text-slate-600 text-lg">

              Use official government portals to check your result safely.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {resultLinks.map((item, index) => (

              <Link
                key={index}
                href={item.url}
                target="_blank"
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-3xl
                  p-8
                  hover:shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-5">

                  <ExternalLink className="w-7 h-7 text-blue-700" />

                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">

                  {item.title}

                </h3>

                <p className="text-blue-700 font-semibold">

                  Open Portal

                </p>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* HOW TO CHECK */}

      <section className="pb-20">

        <div className="container mx-auto px-4 max-w-5xl">

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

            <div className="flex items-center gap-3 mb-6">

              <FileText className="w-7 h-7 text-blue-700" />

              <h2 className="text-3xl font-bold text-slate-900">

                How to Check Result

              </h2>

            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed">

              <p>1. Open any official result portal.</p>

              <p>2. Enter your Register Number.</p>

              <p>3. Enter your Date of Birth.</p>

              <p>4. Click Submit to view marks.</p>

              <p>5. Download provisional marksheet.</p>

            </div>

          </div>

        </div>

      </section>

      {/* CALCULATOR */}

      <PlusTwoPercentageCalculator />

    </main>

  )
}