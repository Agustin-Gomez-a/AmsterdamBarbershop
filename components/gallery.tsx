"use client"
import { useState } from "react"
import Image, { type StaticImageData } from "next/image"
import img5Copa6 from "@/components/img/5 copa6.jpg"
import img5Copa7 from "@/components/img/5 copa7.jpg"
import img5Copa8 from "@/components/img/5 copa8.jpg"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Instagram } from "lucide-react"

type GalleryItem = { src: string | StaticImageData; alt: string }

const galleryImages: GalleryItem[] = [
  {
    src: "/images/gallery-1.jpg",
    alt: "",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "",
  },
  {
    src: img5Copa6,
    alt: "Buzz cut limpio",
  },
  { src: img5Copa7, alt: "Detalle de navaja clásica" },
  { src: img5Copa8, alt: "Texturizado moderno" },
]

export function Gallery() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<GalleryItem | null>(null)
  return (
    <section id="galeria" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-primary" />
            <span className="font-sans text-xs font-medium tracking-[0.3em] text-primary">
              NUESTRO TRABAJO
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold tracking-wider text-foreground md:text-5xl">
            GALERIA
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-sans text-sm font-light leading-relaxed text-muted-foreground">
            Cada corte es una obra de arte. Mira nuestros trabajos mas recientes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              onClick={() => {
                setCurrent(image)
                setOpen(true)
              }}
              key={index}
              className="group relative aspect-square overflow-hidden rounded-sm ring-1 ring-border/60 shadow-lg transition-all duration-300 hover:shadow-2xl hover:ring-primary/40"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:rotate-[0.5deg]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-sans text-xs font-medium tracking-wider text-foreground">
                  {image.alt}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/amsterdambarbershopp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-sm border border-border px-8 py-4 font-serif text-sm font-medium tracking-[0.2em] text-foreground/70 transition-all hover:border-primary hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
            SEGUINOS EN INSTAGRAM
          </a>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-4xl bg-background/90 p-0 shadow-2xl backdrop-blur-md">
            <DialogHeader className="sr-only">
              <DialogTitle>Vista previa</DialogTitle>
            </DialogHeader>
            {current && (
              <div className="relative h-[70vh] w-full">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
