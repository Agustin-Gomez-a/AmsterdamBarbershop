import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Team } from "@/components/team"
import { Booking } from "@/components/booking"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Booking />
      <Team />
      <Footer />
    </main>
  )
}
