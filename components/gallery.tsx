"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  "/gallery/gallery1.png",
  "/gallery/gallery2.png",
  "/gallery/gallery3.png",
  "/gallery/gallery4.png",
  "/gallery/gallery5.png",
  "/gallery/gallery6.png",
  // "/gallery/gallery7.png",
  "/gallery/gallery8.png",
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      if (e.key === "Escape") {
        setSelectedImage(null)
      }

      if (e.key === "ArrowRight") {
        nextImage()
      }

      if (e.key === "ArrowLeft") {
        prevImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    if (selectedImage !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [selectedImage])

  const nextImage = () => {
    if (selectedImage === null) return

    setSelectedImage((selectedImage + 1) % galleryImages.length)
  }

  const prevImage = () => {
    if (selectedImage === null) return

    setSelectedImage(
      (selectedImage - 1 + galleryImages.length) %
        galleryImages.length
    )
  }

  return (
    <section
      id="gallery"
      className="py-24 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">

          <span className="text-primary font-semibold uppercase tracking-wider">
            Gallery
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Life at Wisdom Academy
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore our classrooms, achievements,
            seminars and memorable moments.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {galleryImages.map((image, index) => (

            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="overflow-hidden rounded-2xl shadow-xl cursor-pointer group"
            >

              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={500}
                className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

          ))}

        </div>

      </div>

      {selectedImage !== null && (

        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="absolute top-6 right-6 text-white bg-black/50 p-3 rounded-full hover:bg-black"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>

          <button
            className="absolute left-4 md:left-10 bg-black/50 p-3 rounded-full text-white hover:bg-black"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
          >
            <ChevronLeft size={35} />
          </button>

          <button
            className="absolute right-4 md:right-10 bg-black/50 p-3 rounded-full text-white hover:bg-black"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            <ChevronRight size={35} />
          </button>

          <div
            className="relative w-[95vw] md:w-[85vw] max-w-6xl h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >

            <Image
              src={galleryImages[selectedImage]}
              alt="Gallery Preview"
              fill
              priority
              className="object-contain rounded-xl"
            />

          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 text-white px-5 py-2 rounded-full text-sm">

            {selectedImage + 1} / {galleryImages.length}

          </div>

        </div>

      )}

    </section>
  )
}