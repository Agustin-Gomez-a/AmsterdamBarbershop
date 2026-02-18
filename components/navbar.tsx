"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Galeria", href: "#galeria" },
  { label: "Turnos", href: "#turnos" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
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
          aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background/98 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-sm px-4 py-3 font-sans text-sm font-medium tracking-wide text-foreground/70 transition-colors hover:bg-secondary hover:text-primary"
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
      )}
    </header>
  )
}
