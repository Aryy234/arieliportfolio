import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import FluidCursor from "@/components/FluidCursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio | Ingeniero en Ciencias de la Computación",
  description: "Portfolio profesional de un ingeniero en ciencias de la computación",
  viewport: {
    width: "device-width",
    initialScale: 1,

  },
  generator: 'v0.dev'  // Corregir indentación
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <FluidCursor />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
