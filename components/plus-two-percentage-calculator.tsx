
"use client"

import { useState } from "react"

import {
  Calculator,
  Trophy,
  Percent,
  Copy,
  Plus,
  Trash2,
  User,
} from "lucide-react"

type Subject = {
  name: string
  obtained: number | ""
  maximum: number | ""
}

export function PlusTwoPercentageCalculator() {

  const [studentName, setStudentName] = useState("")

  const [subjects, setSubjects] = useState<Subject[]>([
    {
      name: "English",
      obtained: "",
      maximum: 200,
    },

    {
      name: "Second Language",
      obtained: "",
      maximum: 200,
    },

    {
      name: "",
      obtained: "",
      maximum: 200,
    },

    {
      name: "",
      obtained: "",
      maximum: 200,
    },

    {
      name: "",
      obtained: "",
      maximum: 200,
    },

    {
      name: "",
      obtained: "",
      maximum: 200,
    },
  ])

  const updateSubject = (
    index: number,
    field: keyof Subject,
    value: string
  ) => {

    const updated = [...subjects]

    updated[index] = {
      ...updated[index],
      [field]:
        field === "name"
          ? value
          : value === ""
          ? ""
          : Number(value),
    }

    setSubjects(updated)
  }

  const addSubject = () => {

    setSubjects([
      ...subjects,

      {
        name: "",
        obtained: "",
        maximum: 200,
      },
    ])
  }

  const removeSubject = (index: number) => {

    const updated = subjects.filter(
      (_, i) => i !== index
    )

    setSubjects(updated)
  }

  const totalObtained = subjects.reduce(
    (sum, subject) =>
      sum + Number(subject.obtained || 0),
    0
  )

  const totalMaximum = subjects.reduce(
    (sum, subject) =>
      sum + Number(subject.maximum || 0),
    0
  )

  const percentage =
    totalMaximum > 0
      ? (
          (totalObtained / totalMaximum) *
          100
        ).toFixed(2)
      : "0.00"

  const getPerformance = () => {

    const value = Number(percentage)

    if (value >= 90)
      return "Excellent Performance"

    if (value >= 75)
      return "Very Good Performance"

    if (value >= 60)
      return "Good Performance"

    if (value >= 40)
      return "Average Performance"

    return "Needs Improvement"
  }

//   const copyResult = async () => {

//     const text = `
// 🎓 Kerala Plus Two Result 2026

// ${studentName ? `👤 Student: ${studentName}\n` : ""}

// 📊 Percentage: ${percentage}%

// 📝 Total Marks: ${totalObtained}/${totalMaximum}

// 🏆 Performance: ${getPerformance()}

// ✨ Calculated using WISDOM Academic Centre Result Utility
// `

//     await navigator.clipboard.writeText(text)

//     alert("Result copied successfully!")
//   }

const copyResult = async () => {

  const text = `
🎓 Kerala Plus Two Result 2026

${studentName ? `👤 Student: ${studentName}\n` : ""}

📊 Percentage: ${percentage}%

📝 Total Marks: ${totalObtained}/${totalMaximum}

🏆 Performance: ${getPerformance()}

✨ Calculated using WISDOM Academic Centre Result Utility

🌐 Website:
https://wisdomacademiccentre.com

🚀 Check Results & Percentage:
https://wisdomacademiccentre.com/results-2026
`

  await navigator.clipboard.writeText(text)

  alert("Result copied successfully!")
}

  return (

    <section
      id="percentage-calculator"
      className="py-20 bg-white"
    >

      <div className="container mx-auto px-4 max-w-7xl">

        {/* Heading */}

        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold mb-5">

            <Calculator className="w-4 h-4" />

            Kerala Plus Two Result 2026 Utility

          </div>

          <h2 className="text-4xl font-bold text-slate-900 mb-4">

            Plus Two Percentage Calculator

          </h2>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">

            Add your Plus Two subjects, marks obtained,
            and maximum marks to calculate percentage instantly.

          </p>

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}

          <div className="bg-slate-50 border border-slate-200 rounded-[32px] p-8 shadow-sm">

            {/* Student Name */}

            <div className="mb-8">

              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">

                <User className="w-4 h-4" />

                Student Name (Optional)

              </label>

              <input
                type="text"
                value={studentName}
                onChange={(e) =>
                  setStudentName(e.target.value)
                }
                placeholder="Enter your name"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  focus:border-blue-500
                  transition-all
                  duration-300
                "
              />

            </div>

            {/* Header */}

            <div className="flex items-center justify-between mb-8">

              <h3 className="text-2xl font-bold text-slate-900">

                Enter Subject Details

              </h3>

              <button
                onClick={addSubject}
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-blue-700
                  hover:bg-blue-800
                  text-white
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >

                <Plus className="w-4 h-4" />

                Add Subject

              </button>

            </div>

            {/* Subjects */}

            <div className="space-y-6">

              {subjects.map((subject, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    border
                    border-slate-200
                    rounded-[28px]
                    p-5
                    shadow-sm
                    hover:shadow-md
                    transition-all
                    duration-300
                  "
                >

                  <div className="flex items-center justify-between mb-5">

                    <h4 className="font-semibold text-slate-900">

                      Subject {index + 1}

                    </h4>

                    {subjects.length > 1 && (

                      <button
                        onClick={() =>
                          removeSubject(index)
                        }
                        className="
                          text-red-500
                          hover:text-red-700
                          transition-all
                        "
                      >

                        <Trash2 className="w-5 h-5" />

                      </button>

                    )}

                  </div>

                  <div className="grid gap-4">

                    {/* Subject Name */}

                    <div>

                      <label className="block text-sm font-medium text-slate-700 mb-2">

                        Subject Name

                      </label>

                      <input
                        type="text"
                        value={subject.name}
                        onChange={(e) =>
                          updateSubject(
                            index,
                            "name",
                            e.target.value
                          )
                        }
                        placeholder="Enter subject name"
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-slate-200
                          bg-white
                          shadow-sm
                          px-4
                          py-3
                          focus:outline-none
                          focus:ring-2
                          focus:ring-blue-500
                          focus:border-blue-500
                          transition-all
                          duration-300
                        "
                      />

                    </div>

                    {/* Marks */}

                    <div className="grid grid-cols-2 gap-4">

                      <div>

                        <label className="block text-sm font-medium text-slate-700 mb-2">

                          Marks Obtained

                        </label>

                        <input
                          type="number"
                          min="0"
                          value={subject.obtained}
                          onChange={(e) =>
                            updateSubject(
                              index,
                              "obtained",
                              e.target.value
                            )
                          }
                          placeholder="Enter marks"
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            shadow-sm
                            px-4
                            py-3
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            focus:border-blue-500
                            transition-all
                            duration-300
                          "
                        />

                      </div>

                      <div>

                        <label className="block text-sm font-medium text-slate-700 mb-2">

                          Maximum Marks

                        </label>

                        <input
                          type="number"
                          min="1"
                          value={subject.maximum}
                          onChange={(e) =>
                            updateSubject(
                              index,
                              "maximum",
                              e.target.value
                            )
                          }
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            shadow-sm
                            px-4
                            py-3
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            focus:border-blue-500
                            transition-all
                            duration-300
                          "
                        />

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            {/* RESULT CARD */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                bg-gradient-to-br
                from-blue-950
                via-blue-900
                to-slate-900
                text-white
                shadow-2xl
                border
                border-white/10
              "
            >

              {/* Glow */}

              <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

              <div className="relative z-10 p-8">

                {/* Logo */}

                <div className="flex items-center gap-4 mb-10">

                  <img
                    src="/logo.png"
                    alt="WISDOM"
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      border
                      border-white/10
                      shadow-xl
                    "
                  />

                  <div>

                    <h3 className="text-2xl font-bold tracking-wide">

                      WISDOM Academic Centre

                    </h3>

                    <p className="text-cyan-200 text-sm">

                      Kerala Plus Two Result 2026

                    </p>

                  </div>

                </div>

                {/* Student Name */}

                {studentName && (

                  <div className="mb-8">

                    <p className="text-blue-100 text-sm mb-2">

                      Student Name

                    </p>

                    <h3 className="text-3xl font-bold text-cyan-300">

                      {studentName}

                    </h3>

                  </div>

                )}

                {/* Percentage */}

                <div className="text-center mb-10">

                  <p className="text-blue-100 mb-4 text-lg">

                    Calculated Percentage

                  </p>

                  <h2
                    className="
                      text-7xl
                      md:text-8xl
                      font-black
                      tracking-tight
                      text-cyan-300
                      drop-shadow-lg
                    "
                  >

                    {percentage}%

                  </h2>

                </div>

                {/* Stats */}

                <div className="grid grid-cols-2 gap-4 mb-8">

                  <div
                    className="
                      bg-white/10
                      border
                      border-white/10
                      rounded-2xl
                      p-5
                      backdrop-blur-sm
                    "
                  >

                    <p className="text-blue-100 text-sm mb-2">

                      Total Marks

                    </p>

                    <h3 className="text-3xl font-bold">

                      {totalObtained}

                    </h3>

                    <p className="text-cyan-200 text-sm">

                      out of {totalMaximum}

                    </p>

                  </div>

                  <div
                    className="
                      bg-white/10
                      border
                      border-white/10
                      rounded-2xl
                      p-5
                      backdrop-blur-sm
                    "
                  >

                    <p className="text-blue-100 text-sm mb-2">

                      Performance

                    </p>

                    <h3 className="text-xl font-bold text-cyan-300">

                      {getPerformance()}

                    </h3>

                  </div>

                </div>

                {/* Copy Button */}

                <button
                  onClick={copyResult}
                  className="
                    w-full
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    bg-cyan-400
                    hover:bg-cyan-300
                    text-slate-900
                    font-bold
                    py-4
                    rounded-2xl
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    shadow-xl
                  "
                >

                  <Copy className="w-5 h-5" />

                  Copy Result Card

                </button>

                {/* Footer */}

                <div className="mt-6 text-center">

                  <p className="text-blue-200 text-sm">

                    Generated using WISDOM Academic Centre

                  </p>

                </div>

              </div>

            </div>

            {/* Note */}

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-[28px] p-6">

              <div className="flex items-start gap-3">

                <Percent className="w-6 h-6 text-amber-700 mt-1 shrink-0" />

                <p className="text-amber-900 text-sm leading-relaxed">

                  This calculator provides estimated percentage
                  based on entered marks and subject combinations.
                  Final admissions and rankings depend on official
                  university and DHSE rules.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}