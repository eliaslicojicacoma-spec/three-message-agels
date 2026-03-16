import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Three Angels Message",
  description: "Plataforma missionária digital com Bíblia, estudos e recursos cristãos.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  )
}
