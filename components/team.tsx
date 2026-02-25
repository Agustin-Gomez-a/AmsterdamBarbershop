"use client"

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
      {/* 3D Card Styles */}
      <style jsx global>{`
        .team-card-parent {
          perspective: 1000px;
        }

        .team-card {
          transform-style: preserve-3d;
          background:
            linear-gradient(135deg, #0000 18.75%, rgba(200, 160, 60, 0.08) 0 31.25%, #0000 0),
            repeating-linear-gradient(45deg, rgba(200, 160, 60, 0.08) -6.25% 6.25%, #141414 0 18.75%);
          background-size: 60px 60px;
          background-position: 0 0, 0 0;
          background-color: #141414;
          box-shadow: rgba(142, 142, 142, 0.2) 0px 30px 30px -10px;
          transition: all 0.5s ease-in-out;
        }

        .team-card:hover {
          background-position: -100px 100px, -100px 100px;
          transform: rotate3d(0.5, 1, 0, 15deg);
          box-shadow: rgba(200, 160, 60, 0.15) 0px 40px 40px -10px;
        }

        .team-content-box {
          transition: all 0.5s ease-in-out;
          transform-style: preserve-3d;
        }

        .team-card-title {
          transition: all 0.5s ease-in-out;
          transform: translate3d(0px, 0px, 50px);
        }

        .team-card:hover .team-card-title {
          transform: translate3d(0px, 0px, 60px);
        }

        .team-card-role {
          transition: all 0.5s ease-in-out;
          transform: translate3d(0px, 0px, 40px);
        }

        .team-card:hover .team-card-role {
          transform: translate3d(0px, 0px, 55px);
        }

        .team-card-link {
          transition: all 0.5s ease-in-out;
          transform: translate3d(0px, 0px, 30px);
        }

        .team-card:hover .team-card-link {
          transform: translate3d(0px, 0px, 50px);
        }

        .team-card-image-wrap {
          transition: all 0.5s ease-in-out;
          transform: translate3d(0px, 0px, 20px);
        }

        .team-card:hover .team-card-image-wrap {
          transform: translate3d(0px, 0px, 40px);
        }
      `}</style>

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
            <div key={barber.name} className="team-card-parent">
              <div className="team-card overflow-hidden rounded-md border border-primary/20 p-1.5">
                {/* Image */}
                <div className="team-card-image-wrap relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src={barber.image}
                    alt={`${barber.name} - ${barber.role} en Amsterdam BarberShop`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="team-content-box px-5 pb-5 pt-4">
                  <h3 className="team-card-title font-serif text-2xl font-bold tracking-wider text-foreground">
                    {barber.name}
                  </h3>
                  <p className="team-card-role mb-4 font-sans text-xs font-medium tracking-[0.2em] text-primary">
                    {barber.role.toUpperCase()}
                  </p>

                  <div className="flex flex-col gap-3">
                    <a
                      href={barber.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-card-link flex items-center gap-2 rounded-sm border border-primary/20 bg-background/30 px-4 py-2.5 font-sans text-sm text-foreground/80 transition-colors hover:bg-background/50 hover:text-primary"
                    >
                      <Instagram className="h-4 w-4" />
                      {barber.instagramHandle}
                    </a>
                    <a
                      href={`https://wa.me/${barber.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-card-link flex w-full items-center justify-center gap-2 rounded-sm border border-emerald-400/40 bg-gradient-to-br from-emerald-500 to-emerald-600 px-4 py-2.5 font-sans text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 ring-1 ring-emerald-300/30 transition-colors hover:from-emerald-600 hover:to-emerald-700 active:scale-[0.98]"
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
