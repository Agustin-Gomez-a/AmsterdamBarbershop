"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

export function LoadingOverlay() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("amsterdam-loaded")
    if (alreadyLoaded) {
      const app = document.getElementById("app-content")
      if (app) {
        app.classList.remove("opacity-0", "translate-y-2")
        app.classList.add("opacity-100", "translate-y-0")
      }
      return
    }

    setShow(true)
    const hide = () => {
      const app = document.getElementById("app-content")
      if (app) {
        app.classList.remove("opacity-0", "translate-y-2")
        app.classList.add("opacity-100", "translate-y-0")
      }
      sessionStorage.setItem("amsterdam-loaded", "true")
      setShow(false)
    }
    const t = setTimeout(() => hide(), 2000)
    return () => clearTimeout(t)
  }, [])

  if (!show) return null
  return (
    <div className="fixed inset-0 z-50 bg-background">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        <Image
          src="/images/logo.png"
          alt="Amsterdam BarberShop"
          width={100}
          height={100}
          className="rounded-full"
          priority
        />
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <span className="font-serif text-xs tracking-[0.3em] text-foreground/60">CARGANDO</span>
      </div>
    </div>
  )
}

