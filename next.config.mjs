/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Fuerza a usar la raíz del proyecto actual para evitar el warning de múltiples lockfiles
    root: process.cwd(),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    qualities: [75, 90],
  },
}

export default nextConfig
