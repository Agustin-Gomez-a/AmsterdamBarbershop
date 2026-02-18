import Image from "next/image"
import { Instagram, MessageCircle } from "lucide-react"

const barbers = [
  {
    name: "Lucho",
    role: "Barbero",
    image: "/images/team-lucho.jpg",
    instagram: "https://www.instagram.com/lucianogomezaranda/",
    instagramHandle: "@lucianogomezaranda",
    whatsapp: "5493813031559",
  },
  {
    name: "Rama",
    role: "Barbero",
    image: "/images/team-rama.jpg",
    instagram: "https://www.instagram.com/rama97_carrazano",
    instagramHandle: "@rama97_carrazano",
    whatsapp: "5493815711323",
  },
  {
    name: "Agustina",
    role: "Barbera",
    image: "/images/team-agustina.jpg",
    instagram: "https://www.instagram.com/agustina.akd",
    instagramHandle: "@agustina.akd",
    whatsapp: "5493814489414",
  },
]

export function Team() {
  return (
    <section id="equipo" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-primary" />
            <span className="font-sans text-xs font-medium tracking-[0.3em] text-primary">
              CONOCENOS
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold tracking-wider text-foreground md:text-5xl">
            NUESTRO EQUIPO
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-sans text-sm font-light leading-relaxed text-muted-foreground">
            Tres profesionales apasionados por su trabajo, listos para darte el mejor look.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-3">
          {barbers.map((barber) => (
            <div
              key={barber.name}
              className="group relative overflow-hidden rounded-sm border border-border bg-card transition-all duration-300 hover:border-primary/50"
            >
              {/* Barber Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={barber.image}
                  alt={`${barber.name} - ${barber.role} en Amsterdam BarberShop`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Barber Info */}
              <div className="relative -mt-16 px-6 pb-6">
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-bold tracking-wider text-foreground">
                    {barber.name}
                  </h3>
                  <p className="mb-4 font-sans text-xs font-medium tracking-[0.2em] text-primary">
                    {barber.role.toUpperCase()}
                  </p>

                  {/* Social Links */}
                  <div className="flex flex-col gap-3">
                    <a
                      href={barber.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Instagram className="h-4 w-4" />
                      {barber.instagramHandle}
                    </a>
                    <a
                      href={`https://wa.me/${barber.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-sm bg-[#25D366] px-4 py-2.5 font-sans text-sm font-medium text-white transition-all hover:bg-[#20BD5A]"
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
