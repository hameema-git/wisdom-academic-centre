import Image from "next/image"

const galleryImages = [
  "/gallery/gallery1.png",
  "/gallery/gallery2.png",
  "/gallery/gallery3.png",
  "/gallery/gallery4.png",
  "/gallery/gallery5.png",
  "/gallery/gallery6.png",
  "/gallery/gallery8.png",
]

export function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase">
            Gallery
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Life at Wisdom Academy
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore our classrooms, seminars, achievements,
            activities and student success stories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}