"use client"

import {
  FileText,
  CreditCard,
  School,
  BadgeCheck,
  ImageIcon,
  AlertCircle,
} from "lucide-react"

const documents = [
  {
    icon: FileText,
    title: "SSLC / Class 10 Marksheet",
    description:
      "Original mark list and photocopy for verification.",
  },

  {
    icon: School,
    title: "Transfer Certificate (TC)",
    description:
      "TC issued from the previous school.",
  },

  {
    icon: CreditCard,
    title: "Aadhaar Card",
    description:
      "Student Aadhaar for identity verification.",
  },

  {
    icon: BadgeCheck,
    title: "Community & Income Certificates",
    description:
      "Required for reservation and fee benefits.",
  },

  {
    icon: BadgeCheck,
    title: "NCC / NSS / Scouts Certificates",
    description:
      "Documents required for claiming bonus points.",
  },

  {
    icon: ImageIcon,
    title: "Passport Size Photo",
    description:
      "Recent passport-size photographs may be required.",
  },
]

export function RequiredDocuments() {
  return (
    <section
      id="documents"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Heading */}

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-5">

            <FileText className="w-4 h-4" />

            <span className="text-sm font-semibold">
              Admission Verification
            </span>

          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">

            Required Documents

          </h2>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">

            Students should keep both original documents and photocopies
            ready during allotment confirmation and admission.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {documents.map((doc, index) => {

            const Icon = doc.icon

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

                  {doc.title}

                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">

                  {doc.description}

                </p>

              </div>
            )
          })}

        </div>

        {/* Notice */}

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

                Verification Notice

              </h4>

              <p className="text-amber-800 text-sm leading-relaxed">

                Missing certificates or incorrect reservation documents
                may affect allotment confirmation. Students should verify
                all uploaded details before final admission.

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}