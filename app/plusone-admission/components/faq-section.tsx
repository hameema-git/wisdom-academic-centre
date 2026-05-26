"use client"

import { useState } from "react"
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react"

const faqs = [
  {
    question: "Is trial allotment the final allotment?",
    answer:
      "No. Trial allotment is only for checking your current allotment status and option priority. Students can still rearrange, add, or remove options after trial allotment.",
  },

  {
    question: "Can I change options after submitting application?",
    answer:
      "Yes. HSCAP usually allows option rearrangement and editing during the official correction period.",
  },

  {
    question: "What happens if I don't confirm admission?",
    answer:
      "Failure to confirm admission within the official deadline may result in cancellation of allotment and removal from future allotment processes.",
  },

  {
    question: "How many school options should I add?",
    answer:
      "Students are strongly advised to add maximum possible school and course options to improve allotment chances.",
  },

  {
    question: "Can CBSE and ICSE students apply?",
    answer:
      "Yes. Students from CBSE, ICSE, and other recognized equivalent boards can apply according to HSCAP rules.",
  },

  {
    question: "What is permanent admission?",
    answer:
      "Permanent admission means the student fully confirms the allotted seat and exits future allotment rounds.",
  },

  {
    question: "What is temporary admission?",
    answer:
      "Temporary admission allows students to secure the current allotment while waiting for higher options in later allotments.",
  },

  {
    question: "Can I participate in further allotments after temporary admission?",
    answer:
      "Yes. Students taking temporary admission can still participate in future allotments for higher preference schools or courses.",
  },

  {
    question: "What documents are required during admission?",
    answer:
      "Students may need SSLC mark list, transfer certificate, Aadhaar card, community certificate, income certificate, passport-size photo, and bonus certificates if applicable.",
  },

  {
    question: "How is WGPA calculated?",
    answer:
      "WGPA (Weightage Grade Point Average) is calculated based on qualifying examination grades, weightage subjects, bonus points, and official HSCAP norms.",
  },
]

export function FAQSection() {

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Heading */}

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-5">

            <HelpCircle className="w-4 h-4" />

            <span className="text-sm font-semibold">
              Student Support
            </span>

          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">

            Frequently Asked Questions

          </h2>

          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">

            Common doubts students and parents ask during
            HSCAP Plus One admissions.

          </p>

        </div>

        {/* FAQ List */}

        <div className="space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index

            return (

              <div
                key={index}
                className="
                  bg-slate-50
                  border
                  border-slate-200
                  rounded-[2rem]
                  overflow-hidden
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >

                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    text-left
                    px-7
                    py-6
                  "
                >

                  <span className="text-lg font-semibold text-slate-900 pr-5">

                    {faq.question}

                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >

                  <div className="overflow-hidden">

                    <div className="px-7 pb-7 text-slate-600 leading-relaxed">

                      {faq.answer}

                    </div>

                  </div>

                </div>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}