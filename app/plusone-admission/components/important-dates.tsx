"use client"

import {
  CalendarDays,
  AlertCircle,
  BookOpen,
} from "lucide-react"

const dates = [
  {
    title: "Application Starts",
    date: "May 25, 2026",
    description:
      "Online submission of HSCAP applications begins officially.",
  },

  {
    title: "Last Date to Apply",
    date: "June 3, 2026",
    description:
      "Final date for online application submission.",
  },

  {
    title: "Trial Allotment",
    date: "June 8, 2026",
    description:
      "Students can review allotment status and rearrange options.",
  },

  {
    title: "First Allotment",
    date: "June 15, 2026",
    description:
      "First official main allotment published by HSCAP.",
  },

  {
    title: "Second Allotment",
    date: "June 22, 2026",
    description:
      "Second allotment for remaining seats and upgrades.",
  },

  {
    title: "Third Allotment",
    date: "June 29, 2026",
    description:
      "Final main allotment before supplementary rounds.",
  },

  {
    title: "Classes Begin",
    date: "July 2, 2026",
    description:
      "Expected commencement of Plus One classes.",
  },
]

export function ImportantDates() {
  return (
    <section
      id="dates"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Heading */}

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-5">

            <CalendarDays className="w-4 h-4" />

            <span className="text-sm font-semibold">
              HSCAP 2026 Schedule
            </span>

          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">

            Important Admission Dates

          </h2>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">

            Expected HSCAP Plus One admission schedule for the academic year
            2026–27. Students are advised to regularly check the official
            HSCAP portal for updates and corrections.

          </p>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {dates.map((item, index) => (

            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-gradient-to-br
                from-blue-50
                via-white
                to-cyan-50
                p-7
                shadow-sm
                hover:shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >

              <div className="
                w-14
                h-14
                rounded-2xl
                bg-blue-100
                flex
                items-center
                justify-center
                mb-5
                group-hover:bg-blue-600
                transition
              ">

                <CalendarDays className="w-7 h-7 text-blue-700 group-hover:text-white transition" />

              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">

                {item.title}

              </h3>

              <p className="text-blue-700 font-bold text-lg mb-3">

                {item.date}

              </p>

              <p className="text-slate-600 leading-relaxed text-sm">

                {item.description}

              </p>

            </div>

          ))}

        </div>

        {/* Important Notice */}

        <div className="
          mt-12
          rounded-3xl
          bg-amber-50
          border
          border-amber-200
          p-6
        ">

          <div className="flex items-start gap-4">

            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />

            <div>

              <h4 className="font-bold text-amber-900 mb-2">

                Important Notice

              </h4>

              <p className="text-amber-800 leading-relaxed text-sm">

                The above schedule is based on currently available HSCAP
                updates and previous admission patterns. Official dates
                may change according to DHSE notifications.

              </p>

            </div>

          </div>

        </div>

        {/* Student Tip */}

        <div className="
          mt-6
          rounded-3xl
          bg-blue-50
          border
          border-blue-100
          p-6
        ">

          <div className="flex items-start gap-4">

            <BookOpen className="w-6 h-6 text-blue-700 shrink-0 mt-1" />

            <div>

              <h4 className="font-bold text-blue-900 mb-2">

                Student Tip

              </h4>

              <p className="text-blue-800 leading-relaxed text-sm">

                Do not wait until the last date to submit applications.
                Carefully verify marks, reservation category, school codes,
                bonus points, and option priority before final submission.

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}