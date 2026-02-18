import type { Metadata, Viewport } from 'next'
import { Oswald, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LoadingOverlay } from '@/components/loading-overlay'

const _oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
})

const _roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Amsterdam BarberShop | Tu Estilo, Nuestra Pasion',
  description:
    'Barberia premium en tu ciudad. Cortes clasicos, barba, rapados y mas. Reserva tu turno ahora.',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${_oswald.variable} ${_roboto.variable}`}>
      <body className="font-sans antialiased">
        <LoadingOverlay />
        <div
          id="app-content"
          className="opacity-0 translate-y-2 transition-all duration-500"
        >
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
