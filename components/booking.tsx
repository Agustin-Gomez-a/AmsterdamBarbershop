"use client"

import { useState } from "react"
import { Calendar, Clock, User, MessageCircle } from "lucide-react"

const timeSlots = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
]

const barbers = ["Lucas", "Martin", "Diego"]

const days = [
  { label: "Lunes", short: "LUN" },
  { label: "Martes", short: "MAR" },
  { label: "Miercoles", short: "MIE" },
  { label: "Jueves", short: "JUE" },
  { label: "Viernes", short: "VIE" },
  { label: "Sabado", short: "SAB" },
]

export function Booking() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null)
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [name, setName] = useState("")

  const handleWhatsAppBooking = () => {
    if (!selectedTime || !selectedBarber || !selectedDay) return

    const message = encodeURIComponent(
      `Hola! Soy ${name || "cliente"}. Quiero reservar un turno para el ${selectedDay} a las ${selectedTime} con ${selectedBarber}. Gracias!`
    )
    // Replace with actual WhatsApp number
    window.open(`https://wa.me/5491100000000?text=${message}`, "_blank")
  }

  const isComplete = selectedTime && selectedBarber && selectedDay

  return (
    <section id="turnos" className="bg-secondary py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-primary" />
            <span className="font-sans text-xs font-medium tracking-[0.3em] text-primary">
              RESERVA TU TURNO
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold tracking-wider text-foreground md:text-5xl">
            AGENDA TU VISITA
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-sans text-sm font-light leading-relaxed text-muted-foreground">
            Lunes a Sabados de 10:00 a 20:00 hs. Selecciona dia, horario y peluquero.
          </p>
        </div>

        <div className="space-y-10">
          {/* Name input */}
          <div>
            <label className="mb-3 flex items-center gap-2 font-sans text-xs font-medium tracking-[0.2em] text-muted-foreground">
              <User className="h-4 w-4 text-primary" />
              TU NOMBRE
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingresa tu nombre"
              className="w-full rounded-sm border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Day Selection */}
          <div>
            <label className="mb-3 flex items-center gap-2 font-sans text-xs font-medium tracking-[0.2em] text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              DIA
            </label>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {days.map((day) => (
                <button
                  key={day.label}
                  onClick={() => setSelectedDay(day.label)}
                  className={`rounded-sm border px-3 py-3 font-serif text-xs font-medium tracking-wider transition-all ${
                    selectedDay === day.label
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {day.short}
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div>
            <label className="mb-3 flex items-center gap-2 font-sans text-xs font-medium tracking-[0.2em] text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              HORARIO
            </label>
            <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`rounded-sm border px-2 py-3 font-sans text-xs font-medium transition-all ${
                    selectedTime === time
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Barber Selection */}
          <div>
            <label className="mb-3 flex items-center gap-2 font-sans text-xs font-medium tracking-[0.2em] text-muted-foreground">
              <User className="h-4 w-4 text-primary" />
              PELUQUERO
            </label>
            <div className="grid grid-cols-3 gap-3">
              {barbers.map((barber) => (
                <button
                  key={barber}
                  onClick={() => setSelectedBarber(barber)}
                  className={`rounded-sm border px-4 py-4 font-serif text-sm font-medium tracking-wider transition-all ${
                    selectedBarber === barber
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {barber}
                </button>
              ))}
            </div>
          </div>

          {/* Summary & CTA */}
          {isComplete && (
            <div className="rounded-sm border border-primary/30 bg-background p-6">
              <p className="mb-1 font-sans text-xs tracking-[0.2em] text-primary">
                TU RESERVA
              </p>
              <p className="font-sans text-sm text-foreground">
                {selectedDay} a las{" "}
                <span className="font-semibold text-primary">{selectedTime}</span> hs
                con{" "}
                <span className="font-semibold text-primary">{selectedBarber}</span>
              </p>
            </div>
          )}

          <button
            onClick={handleWhatsAppBooking}
            disabled={!isComplete}
            className={`flex w-full items-center justify-center gap-3 rounded-sm py-4 font-serif text-sm font-semibold tracking-[0.2em] transition-all ${
              isComplete
                ? "bg-[#25D366] text-white hover:bg-[#20BD5A]"
                : "cursor-not-allowed bg-muted text-muted-foreground"
            }`}
          >
            <MessageCircle className="h-5 w-5" />
            CONFIRMAR RESERVA POR WHATSAPP
          </button>
        </div>
      </div>
    </section>
  )
}
