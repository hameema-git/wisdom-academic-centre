"use client"

import {
  Calculator,
  Award,
  BookOpen,
  BadgeCheck,
} from "lucide-react"

const wgpaPoints = [

  "WGPA (Weightage Grade Point Average) is the main score used for Plus One allotment in HSCAP.",

  "WGPA is calculated using SSLC marks, subject weightage, bonus points, and reservation benefits.",

  "Science stream admissions may include Mathematics subject weightage.",

  "Bonus points may be available for NCC, SPC, Scouts & Guides, Little KITES, Sports achievements and eligible categories.",

  "Higher WGPA improves the chances of getting preferred schools and courses.",

  "Students should enter marks and bonus details carefully while applying online."
]

export function WGPA() {

  return (

    <section
      id="wgpa"
      className="py-20 bg-slate-50"
    >

      <div className="container mx-auto px-4 max-w-6xl">

        {/* Heading */}

        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-sm font-semibold mb-5">

            <Calculator className="w-4 h-4" />

            How HSCAP WGPA Works

          </div>

          <h2 className="text-4xl font-bold text-slate-900 mb-4">

            Weighted Grade Point Average (WGPA)

          </h2>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">

            Understand how HSCAP calculates allotment rank using
            WGPA, bonus points, subject weightage and reservation benefits.

          </p>

        </div>

        {/* Main Card */}

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

          {/* Top Banner */}

          <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white p-8">

            <div className="flex items-center gap-4 mb-4">

              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">

                <Calculator className="w-8 h-8" />

              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  How WGPA Works
                </h3>

                <p className="text-blue-100">
                  Important for Plus One allotment ranking
                </p>

              </div>

            </div>

            <p className="text-blue-50 leading-relaxed">

              HSCAP allotments are not based only on total marks.
              Subject weightage, bonus points, reservation rules,
              and stream eligibility can significantly affect allotment rank.

            </p>

          </div>

          {/* Content */}

          <div className="p-8 grid md:grid-cols-2 gap-6">

            {wgpaPoints.map((point, index) => (

              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-4
                  rounded-2xl
                  border
                  border-slate-200
                  p-5
                  hover:shadow-md
                  transition-all
                  duration-300
                "
              >

                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">

                  {index % 4 === 0 && (
                    <Calculator className="w-5 h-5 text-blue-700" />
                  )}

                  {index % 4 === 1 && (
                    <Award className="w-5 h-5 text-blue-700" />
                  )}

                  {index % 4 === 2 && (
                    <BookOpen className="w-5 h-5 text-blue-700" />
                  )}

                  {index % 4 === 3 && (
                    <BadgeCheck className="w-5 h-5 text-blue-700" />
                  )}

                </div>

                <p className="text-slate-700 leading-relaxed">
                  {point}
                </p>

              </div>

            ))}

          </div>

          {/* Bottom Note */}

          <div className="border-t border-slate-200 bg-amber-50 p-6">

            <p className="text-amber-900 leading-relaxed text-sm">

              <span className="font-semibold">
                Important:
              </span>{" "}

              Final WGPA calculation and allotment decisions are made only by the official HSCAP system.
              Students should always verify details using the official HSCAP portal and prospectus.

            </p>

          </div>

        </div>

      </div>

    </section>
  )
}