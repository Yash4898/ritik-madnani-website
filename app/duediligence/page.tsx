"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import {motion} from "framer-motion"

export default function DueDiligence() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <main className="flex-1">
      <section className="w-full relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-900">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-20 w-72 h-72 rounded-full border-2 border-white"></div>
              <div className="absolute bottom-32 right-32 w-96 h-96 rounded-full border border-white"></div>
              <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full border border-white opacity-50"></div>
            </div>
  
            <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10 py-12 md:py-14">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center space-y-6 text-center"
              >
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
                Our Services
              </h1>
              {/* <p className="text-xl md:text-xl text-cyan-300 font-light max-w-2xl">
                Comprehensive Professional Solutions
              </p> */}

              <nav className="flex items-center justify-center space-x-2 pt-4">
                <Link
                  href="/"
                  className="text-cyan-300 hover:text-cyan-200 transition-colors font-medium text-sm md:text-base"
                >
                  Home
                </Link>
                <span className="text-white/50">/</span>
                <span className="text-white/80 font-medium text-sm md:text-base">Services</span>
              </nav>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-24 md:py-32 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-blue/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
            <div className="h-[40rem] w-[40rem] bg-gradient-to-r from-blue-100/40 to-teal-100/40 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative max-w-6xl">
            <div className="mb-8">
              <Button variant="ghost" asChild className="mb-4">
                <Link href="/services" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Services
                </Link>
              </Button>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600 mb-4">
                Due Diligence
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                We provide financial, tax and corporate law due diligence support to our clients for inbound and outbound
                transactions.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 mb-12">
              <div className="space-y-6">
                <BackgroundGradient className="rounded-[22px] p-8 bg-white shadow-md border border-gray-100">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                    Our Due Diligence Services
                  </h2>
                  <ul className="space-y-3">
                    {[
                      "Review of corporate records, statutory filings, financial and legal documents",
                      "Shareholding structures analysis",
                      "Regulatory compliances assessment",
                      "Litigations and contractual obligations review",
                      "Detailed reports with actionable insights for risk mitigation and strategic planning",
                    ].map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-1 mt-1">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </BackgroundGradient>
              </div>

              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                  <Image
                    src="/images/due delligence.png"
                    alt="Due Diligence Services"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white border-0"
                size="lg"
                asChild
              >
                <Link href="https://wa.me/919503716686?text=Hi%2C%20I%27m%20interested%20in%20your%20Due%20Diligence%20services.%20I%20need%20assistance%20with%20financial%20and%20legal%20due%20diligence%20for%20my%20transaction.">
                  Get Due Diligence Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}