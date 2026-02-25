import { Scissors, Sparkles, CircleDot, Clock } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Corte",
    description:
      "Corte de pelo con acabado profesional. Incluye lavado y peinado.",
    price: "$9.000",
    duration: "30 min",
  },
  {
    icon: Scissors,
    title: "Corte + Barba",
    description:
      "Combo: corte a elección y perfilado de barba con toalla caliente.",
    price: "$10.000",
    duration: "50 min",
  },
  {
    icon: Sparkles,
    title: "Barba",
    description:
      "Perfilado de barba premium con toalla caliente y productos de primera calidad.",
    price: "$5.000",
    duration: "25 min",
  },
  {
    icon: CircleDot,
    title: "Perfilado de Cejas",
    description:
      "Definición y perfilado de cejas para un look prolijo y natural.",
    price: "$1.500",
    duration: "10 min",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-primary" />
            <span className="font-sans text-xs font-medium tracking-[0.3em] text-primary">
              NUESTROS SERVICIOS
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold tracking-wider text-foreground md:text-5xl">
            QUÉ OFRECEMOS
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-sans text-sm font-light leading-relaxed text-muted-foreground">
            Servicios premium con los mejores productos y la atención que te merecés
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
            >
              <service.icon className="mb-6 h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mb-2 font-serif text-lg font-semibold tracking-wider text-card-foreground">
                {service.title}
              </h3>
              <p className="mb-6 font-sans text-sm font-light leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="flex items-center justify-center gap-4 border-t border-border pt-4">
                <span className="font-serif text-xl font-bold text-primary">
                  {service.price}
                </span>
                <span className="flex items-center gap-1 font-sans text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {service.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
