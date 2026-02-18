import Image from "next/image"
import heroImg from "@/components/img/5 copa5.jpg"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Image src={heroImg} alt="Amsterdam BarberShop" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <span className="font-serif text-sm tracking-[0.3em] text-foreground">CARGANDO</span>
      </div>
    </div>
  )
}
