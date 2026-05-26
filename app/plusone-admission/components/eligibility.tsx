"use client"

import {
  CheckCircle2,
  GraduationCap,
  AlertTriangle,
} from "lucide-react"

const eligibilityPoints = [
  "Students who passed SSLC, CBSE, ICSE or equivalent examinations can apply for HSCAP admission.",

  "Applicants must secure the minimum eligible grade or marks prescribed officially by HSCAP.",

  "CBSE students applying for Mathematics stream must have studied Standard Mathematics in Class 10.",

  "Admissions are prepared based on WGPA (Weightage Grade Point Average).",

  "Bonus points are applicable for NCC, NSS, Scouts & Guides, Sports achievements and eligible categories.",

  "Reservation rules follow official Government and DHSE norms.",

  "Students applying to multiple districts must submit separate applications for each district."
]

export function Eligibility() {
  return (
    <section
      id="eligibility"
      className="py-24 bg-slate-50"
    >
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Heading */}

        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-5">

            <GraduationCap className="w-4 h-4" />

            <span className="text-sm font-semibold">
              Admission Eligibility
            </span>

          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">

            Eligibility & Admission Criteria

          </h2>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">

            Important eligibility conditions, admission requirements,
            reservation norms, and HSCAP admission rules students
            should know before applying.

          </p>

        </div>

        {/* Main Card */}

        <div className="
          bg-white
          rounded-[2rem]
          shadow-sm
          border
          border-slate-200
          p-8 md:p-10
        ">

          <div className="grid gap-6">

            {eligibilityPoints.map((point, index) => (

              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-4
                  border-b
                  border-slate-100
                  pb-5
                  last:border-0
                  last:pb-0
                "
              >

                <CheckCircle2 className="
                  w-6
                  h-6
                  text-green-600
                  mt-1
                  shrink-0
                " />

                <p className="text-slate-700 leading-relaxed">

                  {point}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Warning Box */}

        <div className="
          mt-10
          rounded-3xl
          bg-red-50
          border
          border-red-200
          p-6
        ">

          <div className="flex items-start gap-4">

            <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />

            <div>

              <h4 className="font-bold text-red-900 mb-2">

                Important Verification Warning

              </h4>

              <p className="text-red-800 text-sm leading-relaxed">

                Incorrect marks, invalid bonus claims, wrong reservation
                details, or false information may result in cancellation
                of application or admission during verification.

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}