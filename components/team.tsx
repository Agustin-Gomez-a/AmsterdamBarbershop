import Image from "next/image"
import luchoImg from "@/components/img/lucho.jpg"
import ramaImg from "@/components/img/rama.jpg"
import agustinaImg from "@/components/img/agustina.jpg"
import { Instagram, MessageCircle } from "lucide-react"

const barbers = [
  {
    name: "Lucho",
    role: "Barbero",
    image: luchoImg,
    instagram: "https://www.instagram.com/lucianogomezaranda/",
    instagramHandle: "@lucianogomezaranda",
    whatsapp: "5493813031559",
  },
  {
    name: "Rama",
    role: "Barbero",
    image: ramaImg,
    instagram: "https://www.instagram.com/rama97_carrazano",
    instagramHandle: "@rama97_carrazano",
    whatsapp: "5493815711323",
  },
  {
    name: "Agustina",
    role: "Barbera",
    image: agustinaImg,
    instagram: "https://www.instagram.com/agustina.akd",
    instagramHandle: "@agustina.akd",
    whatsapp: "5493814489414",
  },
]

export function Team() {
  return (
    <section id="equipo" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-primary" />
            <span className="font-sans text-xs font-medium tracking-[0.3em] text-primary">
              CONOCÉNOS
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold tracking-wider text-foreground md:text-5xl">
            NUESTRO EQUIPO
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-sans text-sm font-light leading-relaxed text-muted-foreground">
            Tres profesionales apasionados por su trabajo, listos para darte el mejor estilo.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {barbers.map((barber) => (
            <div
              key={barber.name}
              className="group relative overflow-hidden rounded-md border border-white/10 bg-card/70 shadow-xl ring-1 ring-border/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-2xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={barber.image}
                  alt={`${barber.name} - ${barber.role} en Amsterdam BarberShop`}
                  fill
                  className="object-cover md:grayscale md:contrast-110 md:brightness-90 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              <div className="relative -mt-16 px-6 pb-6">
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-bold tracking-wider text-foreground">
                    {barber.name}
                  </h3>
                  <p className="mb-4 font-sans text-xs font-medium tracking-[0.2em] text-primary">
                    {barber.role.toUpperCase()}
                  </p>

                  <div className="flex flex-col gap-3">
                    <a
                      href={barber.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-sm border border-white/10 bg-background/30 px-4 py-2.5 font-sans text-sm text-foreground/80 shadow ring-1 ring-white/10 transition-all hover:bg-background/50 hover:text-primary"
                    >
                      <Instagram className="h-4 w-4" />
                      {barber.instagramHandle}
                    </a>
                    <a
                      href={`https://wa.me/${barber.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-sm border border-emerald-400/40 bg-gradient-to-br from-emerald-500 to-emerald-600 px-4 py-2.5 font-sans text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 ring-1 ring-emerald-300/30 transition-all hover:from-emerald-600 hover:to-emerald-700 hover:shadow-2xl hover:shadow-emerald-900/40 active:scale-[0.98]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Contactar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
