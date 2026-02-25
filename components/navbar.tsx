"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Turnos", href: "#turnos" },
  { label: "Equipo", href: "#equipo" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const showBackground = isScrolled || isMobileMenuOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showBackground
        ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Amsterdam BarberShop Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="hidden font-serif text-lg font-semibold tracking-wider text-primary sm:block">
            AMSTERDAM
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium tracking-wide text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#turnos"
            className="rounded-sm bg-primary px-6 py-2.5 font-serif text-sm font-semibold tracking-widest text-primary-foreground transition-all hover:bg-gold-light hover:text-background"
          >
            RESERVAR
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-foreground md:hidden"
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu — Glass Effect */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-white/10 bg-background/60 backdrop-blur-2xl">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-sm px-4 py-3 font-sans text-sm font-medium tracking-wide text-foreground/80 transition-all hover:bg-white/5 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#turnos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 rounded-sm bg-primary px-6 py-3 text-center font-serif text-sm font-semibold tracking-widest text-primary-foreground transition-all hover:bg-gold-light"
            >
              RESERVAR
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-primary via-gold-light to-primary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  )
}
