import Image from "next/image"
import { Instagram, MapPin, Clock, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Amsterdam BarberShop"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <span className="font-serif text-lg font-semibold tracking-wider text-foreground">
                  AMSTERDAM
                </span>
                <p className="font-sans text-xs tracking-wider text-muted-foreground">
                  BARBERSHOP
                </p>
              </div>
            </div>
            <p className="font-sans text-sm font-light leading-relaxed text-muted-foreground">
              Donde la tradición se encuentra con el estilo moderno.
              Tu barbería de confianza desde 2025.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 font-serif text-sm font-semibold tracking-[0.2em] text-primary">
              CONTACTO
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="font-sans text-sm text-foreground">Lunes a Sábados</p>
                  <p className="font-sans text-sm text-muted-foreground">
                    10:00 - 20:00 hs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <a
                  href="https://www.google.com/maps/search/Av.+Belgrano+3598+Local+6+San+Miguel+de+Tucum%C3%A1n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Av. Belgrano 3598 Local 6, San Miguel de Tucumán, Tucumán
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <div className="space-y-1">
                  <p className="font-sans text-sm text-muted-foreground">Lucho: 3813031559</p>
                  <p className="font-sans text-sm text-muted-foreground">Rama: 3815711323</p>
                  <p className="font-sans text-sm text-muted-foreground">Agustina: 3814489414</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Links */}
          <div>
            <h3 className="mb-6 font-serif text-sm font-semibold tracking-[0.2em] text-primary">
              SEGUINOS
            </h3>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/amsterdambarbershopp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
                @amsterdambarbershopp
              </a>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 font-serif text-sm font-semibold tracking-[0.2em] text-primary">
                NAVEGACION
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href="#inicio"
                  className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Inicio
                </a>
                <a
                  href="#servicios"
                  className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Servicios
                </a>
                <a
                  href="#galeria"
                  className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Galería
                </a>
                <a
                  href="#turnos"
                  className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Reservar Turno
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="font-sans text-xs text-muted-foreground">
            &copy; 2025 Amsterdam BarberShop. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
