"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import heroImg from "@/components/img/5 copa5.jpg"

export function LoadingOverlay() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const hide = () => {
      const app = document.getElementById("app-content")
      if (app) {
        app.classList.remove("opacity-0", "translate-y-2")
        app.classList.add("opacity-100", "translate-y-0")
      }
      setShow(false)
    }
    const t = setTimeout(() => hide(), 5000)
    return () => clearTimeout(t)
  }, [])

  if (!show) return null
  return (
    <div className="fixed inset-0 z-50">
      <Image src={heroImg} alt="Amsterdam BarberShop" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <span className="font-serif text-sm tracking-[0.3em] text-foreground">CARGANDO</span>
      </div>
    </div>
  )
}
