import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Arjun V S",
    course: "+2 Science Student",
    text: "I am extremely happy with the learning experience at Wisdom Tuition Centre. The faculty really cares about each student&apos;s progress.",
  },
  {
    name: "Sreelakshmi R",
    course: "+1 Commerce Student",
    text: "Optimal location and favourable atmosphere. The teachers explain concepts clearly and are always available for doubt clearing.",
  },
  {
    name: "Mohammed Faisal",
    course: "B.COM Student",
    text: "This place is a supportive learning environment. The regular tests helped me stay on track with my preparation.",
  },
  {
    name: "Anjali Krishna",
    course: "+2 Humanities Student",
    text: "Best tuition centre in Kochi! The concept-based teaching approach made even difficult topics easy to understand.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Student Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our students about their learning experience at Wisdom Academic Centre.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
