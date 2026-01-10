import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat, Quicksand } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: "--font-quicksand",
})

export const metadata: Metadata = {
  title: "NOIR BARBER | Corte de cabelo e barba, do jeito certo",
  description:
    "Barbearia premium com profissionais experientes, ambiente confortável e agendamento rápido. Corte de cabelo, barba e tratamentos capilares.",
  generator: "GGABS TECH & DESIGN",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
