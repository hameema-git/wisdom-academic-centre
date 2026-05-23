import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GraduationCap,
  BookOpen,
  Calculator,
  Palette,
  Briefcase,
  Atom,
  Languages,
  Globe,
  PenTool,
  Landmark,
} from "lucide-react"

const courses = [
  {
    icon: BookOpen,
    title: "1 - 10 State Syllabus",
    description:
      "Complete foundation coaching for Kerala State syllabus students from Class 1 to 10 with personal attention and concept-based learning.",
    subjects: [
      "Mathematics",
      "Science",
      "English",
      "Malayalam",
      "Social Science",
    ],
    color: "bg-blue-500/20 text-blue-400",
  },

  {
    icon: Languages,
    title: "1 - 10 CBSE",
    description:
      "Comprehensive CBSE coaching focused on strong fundamentals, school exams and academic excellence.",
    subjects: [
      "Mathematics",
      "Science",
      "English",
      "Hindi",
      "Social Science",
    ],
    color: "bg-cyan-500/20 text-cyan-400",
  },

  {
    icon: Atom,
    title: "+1 & +2 Science",
    description:
      "Expert coaching for State Board & CBSE students with strong focus on entrance-oriented preparation.",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "Computer Science",
    ],
    color: "bg-green-500/20 text-green-400",
  },

  {
    icon: Calculator,
    title: "+1 & +2 Commerce",
    description:
      "Advanced coaching for Commerce students with exam-focused training and conceptual clarity.",
    subjects: [
      "Accountancy",
      "Business Studies",
      "Economics",
      "Mathematics",
      "Computer Applications",
    ],
    color: "bg-yellow-500/20 text-yellow-400",
  },

  {
  icon: Calculator,
  title: "+1 & +2 Commerce CBSE",
  description:
    "Comprehensive coaching for Commerce students with strong focus on business, finance, economics and career-oriented academic excellence for both State & CBSE students.",

  subjects: [
    // "English",
    "Accountancy",
    "Business Studies",
    "Economics",
    // "Mathematics",
    // "Applied Mathematics",
    // "Entrepreneurship",
    "Informatics Practices",
    "Computer Science",
    // "Physical Education",
    // "Legal Studies",
  ],

  color: "bg-yellow-500/20 text-yellow-400",
},

  {
    icon: Globe,
    title: "+1 & +2 Humanities",
    description:
      "Professional mentoring for Humanities students with modern teaching methodologies and academic guidance.",
    subjects: [
      "History",
      "Political Science",
      "Sociology",
      "Psychology",
      "Economics",
    ],
    color: "bg-pink-500/20 text-pink-400",
  },

  {
    icon: GraduationCap,
    title: "Degree Courses",
    description:
      "Complete academic support for undergraduate students across commerce and management streams.",
    subjects: [
      "B.COM",
      "BBA",
      "BA",
      "BCA",
      "BSc",
    ],
    color: "bg-purple-500/20 text-purple-400",
  },

  {
    icon: Briefcase,
    title: "Post Graduate",
    description:
      "Industry-focused post graduate coaching with advanced academic and professional guidance.",
    subjects: [
      "M.COM",
      "MBA",
      "MA",
      "MSc",
    ],
    color: "bg-red-500/20 text-red-400",
  },

  // {
  //   icon: PenTool,
  //   title: "Entrance Coaching",
  //   description:
  //     "Specialized entrance-oriented training programs with mock tests, mentorship and performance tracking.",
  //   subjects: [
  //     "NEET",
  //     "JEE",
  //     "CUET",
  //     "KEAM",
  //     "SSC",
  //   ],
  //   color: "bg-orange-500/20 text-orange-400",
  // },

  {
    icon: Landmark,
    title: "Skill Development",
    description:
      "Career-focused skill enhancement programs designed to prepare students for future opportunities.",
    subjects: [
      "Spoken English",
      "Communication",
      "Computer Skills",
      "Interview Training",
    ],
    color: "bg-indigo-500/20 text-indigo-400",
  },
]

export function Courses() {
  return (
    <section
      id="courses"
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0f2847]/10 to-[#1a3a5c]/20" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-5 shadow-lg">
            Our Academic Programs
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
            Learn. Grow.
            <span className="block text-primary">
              Achieve Excellence.
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            WISDOM Academic Centre offers comprehensive coaching
            programs from primary classes to post-graduation,
            helping students build strong academic foundations
            and achieve future success.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border border-border/50 bg-card/70 backdrop-blur-xl hover:border-primary/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-3xl"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="relative z-10">

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl ${course.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <course.icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <CardTitle className="text-2xl font-bold text-foreground">
                  {course.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-5 relative z-10">

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {course.description}
                </p>

                {/* Subjects */}
                <div className="flex flex-wrap gap-2">
                  {course.subjects.map((subject, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full font-medium border border-primary/10 hover:bg-primary hover:text-white transition"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Boards */}
        <div className="mt-16 flex flex-wrap justify-center gap-5">

          <div className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full text-lg shadow-2xl hover:scale-105 transition">
            Kerala State Syllabus
          </div>

          <div className="px-8 py-4 bg-yellow-500 text-slate-900 font-bold rounded-full text-lg shadow-2xl hover:scale-105 transition">
            CBSE Curriculum
          </div>

          {/* <div className="px-8 py-4 bg-blue-500 text-white font-bold rounded-full text-lg shadow-2xl hover:scale-105 transition">
            Entrance Coaching
          </div> */}

        </div>
      </div>
    </section>
  )
}