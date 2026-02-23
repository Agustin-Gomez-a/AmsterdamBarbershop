import Image from "next/image"

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/hero.jpg"
      >
        <source src="/video/video1.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Amsterdam BarberShop"
            width={160}
            height={160}
            className="rounded-full"
            priority
          />
        </div>

        {/* Decorative line */}
        <div className="mx-auto mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-primary" />
          <span className="font-sans text-xs font-medium tracking-[0.3em] text-primary">
            BARBERÍA PREMIUM
          </span>
          <span className="h-px w-12 bg-primary" />
        </div>

        <h1 className="font-serif text-5xl font-bold leading-tight tracking-wider text-foreground md:text-7xl lg:text-8xl">
          <span className="text-balance">DONDE EL CORTE,</span>
          <br />
          <span className="text-primary">ES UN ARTE</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-foreground/60 md:text-lg">
          Donde la tradición se encuentra con el estilo moderno.
          Experiencia premium en cada visita.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#turnos"
            className="rounded-sm bg-primary px-10 py-4 font-serif text-sm font-semibold tracking-[0.2em] text-primary-foreground transition-all hover:bg-gold-light hover:text-background"
          >
            RESERVAR TURNO
          </a>
          <a
            href="#servicios"
            className="rounded-sm border border-foreground/20 px-10 py-4 font-serif text-sm font-semibold tracking-[0.2em] text-foreground/80 transition-all hover:border-primary hover:text-primary"
          >
            VER SERVICIOS
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2">
          <span className="font-sans text-[10px] tracking-[0.3em] text-foreground/30">
            SCROLL
          </span>
          <div className="h-8 w-px bg-foreground/20" />
        </div>
      </div>
    </section>
  )
}
