"use client"

import Link from "next/link"

import {
  GraduationCap,
  ExternalLink,
  FileText,
  Calculator,
  MessageCircle,
} from "lucide-react"

export function Hero() {

  return (

    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white pt-36 pb-24">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="max-w-5xl mx-auto">

          {/* TOP HEADER */}

          <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-10">

            {/* LOGO */}

            <Link
              href="/"
              className="flex items-center gap-4"
            >

              <img
                src="/logo1.png"
                alt="WISDOM Academic Centre"
                className="w-16 h-16 rounded-2xl object-cover border border-white/10 shadow-lg"
              />

              <div className="text-left">

                <h2 className="text-2xl font-bold tracking-wide">
                  WISDOM
                </h2>

                <p className="text-blue-100 text-sm">
                  Academic Centre
                </p>

              </div>

            </Link>

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
                text-sm
                font-medium
                transition-all
                duration-300
              "
            >

              ← Back to Main Website

            </Link>

          </div>

          {/* CENTER CONTENT */}

          <div className="text-center">

            {/* TOP BADGE */}

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">

              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>

              <GraduationCap className="w-4 h-4" />

              <span className="text-sm font-medium">
                HSCAP 2026 Admission Guidance
              </span>

            </div>

            {/* MAIN HEADING */}

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">

              Plus One Admission <br />

              <span className="text-cyan-300">
                Help Centre
              </span>

            </h1>

            {/* DESCRIPTION */}

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-10">

              Student Guidance Portal for HSCAP Plus One Admissions 2026.
              Get allotment updates, admission process guidance,
              WGPA support, bonus point details, important dates,
              required documents, and official HSCAP resources.

            </p>

            {/* MAIN BUTTONS */}

            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">

              <Link
                href="https://hscap.kerala.gov.in/"
                target="_blank"
                className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >

                Official HSCAP Portal

                <ExternalLink className="w-4 h-4" />

              </Link>

              <Link
                href="/prospectus.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 px-7 py-3 rounded-full transition-all duration-300"
              >

                <FileText className="w-4 h-4" />

                Download Prospectus

              </Link>

              <Link
                href="#wgpa"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >

                <Calculator className="w-4 h-4" />

                WGPA Guide

              </Link>

            </div>

            {/* QUICK NAVIGATION */}

            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">

              <a
                href="#dates"
                className="bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2 rounded-full text-sm transition"
              >
                Important Dates
              </a>

              <a
                href="#eligibility"
                className="bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2 rounded-full text-sm transition"
              >
                Eligibility
              </a>

              <a
                href="#documents"
                className="bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2 rounded-full text-sm transition"
              >
                Documents
              </a>

              <a
                href="#allotment"
                className="bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2 rounded-full text-sm transition"
              >
                Allotment
              </a>

              <a
                href="#faq"
                className="bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2 rounded-full text-sm transition"
              >
                FAQs
              </a>

            </div>

            {/* IMPORTANT NOTICE */}

            <div className="max-w-4xl mx-auto bg-white/10 border border-cyan-400/20 rounded-3xl p-6 backdrop-blur-sm">

              <h3 className="text-xl font-semibold text-cyan-300 mb-3">

                Important Admission Guidance

              </h3>

              <div className="grid md:grid-cols-2 gap-4 text-left text-blue-100">

                <div>
                  • Trial allotment is NOT final allotment.
                </div>

                <div>
                  • Students can rearrange options after trial allotment.
                </div>

                <div>
                  • Temporary admission allows waiting for higher options.
                </div>

                <div>
                  • Students applying to multiple districts require separate applications.
                </div>

              </div>

            </div>

            {/* WHATSAPP HELP */}

            <div className="mt-10">

              <Link
                href="https://wa.me/919633212968"
                target="_blank"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
              >

                <MessageCircle className="w-5 h-5" />

                Get Admission Help on WhatsApp

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}