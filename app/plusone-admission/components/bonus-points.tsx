"use client"

import {
  Award,
  ShieldCheck,
  Star,
  School,
  BadgePlus,
} from "lucide-react"

const bonusItems = [
  {
    icon: Award,
    title: "NCC / Scouts & Guides",
    description:
      "Eligible students may receive bonus points based on approved co-curricular participation.",
  },

  {
    icon: Star,
    title: "Little KITES",
    description:
      "Little KITES members with eligible grades may receive bonus consideration.",
  },

  {
    icon: ShieldCheck,
    title: "Ex-servicemen Category",
    description:
      "Dependents of ex-servicemen may receive applicable bonus benefits.",
  },

  {
    icon: School,
    title: "Same School Bonus",
    description:
      "Students applying to the same school where they studied SSLC may receive bonus points.",
  },

  {
    icon: BadgePlus,
    title: "Reservation Categories",
    description:
      "Eligible reservation and community categories follow official government norms.",
  },
]

export function BonusPoints() {
  return (
    <section
      id="bonus"
      className="py-24 bg-slate-50"
    >
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Heading */}

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-5">

            <Award className="w-4 h-4" />

            <span className="text-sm font-semibold">
              Additional Weightage
            </span>

          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">

            Bonus Points

          </h2>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">

            HSCAP provides bonus points and weightage
            benefits for eligible students according to official norms.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {bonusItems.map((item, index) => {

            const Icon = item.icon

            return (

              <div
                key={index}
                className="
                  bg-white
                  rounded-[2rem]
                  border
                  border-slate-200
                  p-7
                  hover:shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >

                <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-cyan-100
                  flex
                  items-center
                  justify-center
                  mb-6
                ">

                  <Icon className="w-8 h-8 text-cyan-700" />

                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">

                  {item.title}

                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">

                  {item.description}

                </p>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}