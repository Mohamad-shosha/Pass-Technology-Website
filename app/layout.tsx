import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pass Technology - From the Present to the Future | UAE Tech Startup",
  description:
    "Pass Technology is a UAE-based parent company that owns and operates five innovative applications: Dr. Broker App, Dr. Lawyer App, JAD App, Bulky Store, and Glosa Store across real estate, legal services, entertainment, and e-commerce.",
  keywords:
    "Pass Technology, UAE startup, mobile apps, technology solutions, Dr. Broker, Dr. Lawyer, JAD App, Bulky Store, Glosa Store",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
