import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ritik Madnani - Company Secretary",
  description: "Practising Company Secretary in Jalgaon, India. CS services for businesses and startups.",
  keywords: [
    "Top CS Firms In Jalgaon",
    "Coporate Law",
    "Legal Advisory",
    "CS Firms In Jalgaon",
    "Company Secretaries In Jalgaon",
    "Practising Company Secretary",
    "Jalgaon",
    "Ritik Madnani"
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
