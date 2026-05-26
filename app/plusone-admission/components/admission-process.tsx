"use client"

import {
  Laptop,
  ListChecks,
  FileSearch,
  BadgeCheck,
  ArrowUpCircle,
  AlertTriangle,
} from "lucide-react"

const steps = [
  {
    step: "1",
    icon: Laptop,
    title: "Apply Online",
    description:
      "Submit HSCAP application, personal details, school options, and course preferences carefully through the official portal.",
  },

  {
    step: "2",
    icon: ListChecks,
    title: "Check Trial Allotment",
    description:
      "Review trial allotment results and rearrange school or course options if needed before final allotments.",
  },

  {
    step: "3",
    icon: FileSearch,
    title: "View Main Allotment",
    description:
      "Check official allotment results published by HSCAP and verify your allotted school and stream.",
  },

  {
    step: "4",
    icon: BadgeCheck,
    title: "Confirm Admission",
    description:
      "Take permanent or temporary admission within the official deadline by submitting required documents.",
  },

  {
    step: "5",
    icon: ArrowUpCircle,
    title: "Wait for Higher Options",
    description:
      "Students taking temporary admission can participate in higher allotment rounds for better options.",
  },
]

export function AdmissionProcess() {
  return (
    <section
      id="process"
      className="py-24 bg-slate-50"
    >
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Heading */}

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-5">

            <ListChecks className="w-4 h-4" />

            <span className="text-sm font-semibold">
              Step-by-Step Guidance
            </span>

          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">

            Admission Process

          </h2>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">

            Simple step-by-step HSCAP Plus One admission guidance
            for students and parents.

          </p>

        </div>

        {/* Steps */}

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

          {steps.map((item, index) => {

            const Icon = item.icon

            return (

              <div
                key={index}
                className="
                  relative
                  overflow-hidden
                  bg-white
                  rounded-[2rem]
                  border
                  border-slate-200
                  p-7
                  text-center
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
              >

                {/* Step Number */}

                <div className="
                  absolute
                  top-4
                  right-4
                  text-5xl
                  font-black
                  text-slate-100
                ">

                  {item.step}

                </div>

                {/* Icon */}

                <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-blue-100
                  flex
                  items-center
                  justify-center
                  mx-auto
                  mb-5
                ">

                  <Icon className="w-8 h-8 text-blue-700" />

                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">

                  {item.title}

                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">

                  {item.description}

                </p>

              </div>
            )
          })}

        </div>

        {/* Important Warning */}

        <div className="
          mt-12
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

                Important Admission Warning

              </h4>

              <p className="text-red-800 text-sm leading-relaxed">

                Failure to confirm admission within the official
                deadline may result in cancellation of allotment.
                Students should regularly check HSCAP notifications
                and allotment status.

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}