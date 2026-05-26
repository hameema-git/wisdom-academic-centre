"use client"

import {
  CircleCheck,
  TriangleAlert,
  Clock3,
  FileCheck2,
} from "lucide-react"

const allotmentPoints = [
  {
    icon: CircleCheck,
    title: "Trial Allotment",
    description:
      "Trial allotment helps students review current allotment status and modify school or course options before final allotments.",
  },

  {
    icon: FileCheck2,
    title: "Main Allotments",
    description:
      "Main allotments are officially published by HSCAP based on WGPA, reservation rules, and school preferences.",
  },

  {
    icon: Clock3,
    title: "Admission Deadline",
    description:
      "Students must confirm temporary or permanent admission within the official admission deadline.",
  },

  {
    icon: TriangleAlert,
    title: "Cancellation Warning",
    description:
      "Failure to confirm admission may result in cancellation of allotment and removal from future allotment rounds.",
  },
]

export function AllotmentProcess() {
  return (
    <section
      id="allotment"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Heading */}

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-5">

            <CircleCheck className="w-4 h-4" />

            <span className="text-sm font-semibold">
              HSCAP Allotment Guidance
            </span>

          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">

            Allotment Process

          </h2>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">

            Understand how HSCAP trial allotments,
            main allotments, and admission confirmations work.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-6">

          {allotmentPoints.map((item, index) => {

            const Icon = item.icon

            return (

              <div
                key={index}
                className="
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-gradient-to-br
                  from-slate-50
                  to-white
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
                  bg-blue-100
                  flex
                  items-center
                  justify-center
                  mb-6
                ">

                  <Icon className="w-8 h-8 text-blue-700" />

                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">

                  {item.title}

                </h3>

                <p className="text-slate-600 leading-relaxed">

                  {item.description}

                </p>

              </div>
            )
          })}

        </div>

        {/* Important Notice */}

        <div className="
          mt-12
          rounded-3xl
          bg-red-50
          border
          border-red-200
          p-6
        ">

          <div className="flex items-start gap-4">

            <TriangleAlert className="w-6 h-6 text-red-600 shrink-0 mt-1" />

            <div>

              <h4 className="font-bold text-red-900 mb-2">

                Important Notice

              </h4>

              <p className="text-red-800 text-sm leading-relaxed">

                Students should regularly check the official HSCAP portal
                for allotment updates, admission deadlines,
                correction windows, and supplementary allotment notifications.

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}