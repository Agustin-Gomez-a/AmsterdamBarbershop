import Image from "next/image"
import { Instagram } from "lucide-react"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Corte fade moderno",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Barba con toalla caliente",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Pompadour estilizado",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Herramientas profesionales",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Buzz cut limpio",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Sillon de barberia premium",
  },
]

export function Gallery() {
  return (
    <section id="galeria" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-sm ${
                index === 0 || index === 5 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 transition-all duration-500 group-hover:bg-primary/20" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-sans text-xs font-medium tracking-wider text-foreground">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
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
      </div>
    </section>
  )
}
