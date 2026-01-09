"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Navbar } from "@/components/navbar"

export default function SEBIAndListingCompliances() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="flex-1">
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
                SEBI & Listing Compliances
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                We offer specialized advisory and compliance services under SEBI Regulations and listing requirements,
                ensuring that listed companies and SEBI-registered entities effectively fulfill their statutory and
                regulatory requirements.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 mb-12">
              <div className="space-y-6">
                <BackgroundGradient className="rounded-[22px] p-8 bg-white shadow-md border border-gray-100">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                    Our SEBI Services
                  </h2>
                  <ul className="space-y-3">
                    {[
                      "End-to-end Compliance and Secretarial support in process of Initial Public Offerings (IPOs) on SME/Main Board platforms",
                      "Drafting and reviewing of Draft Red Herring Prospectus/Red Herring Prospectus and liaison with merchant bankers, RTA, exchanges, and other intermediaries",
                      "Listing compliance under SEBI (LODR) Regulations, 2015 and other applicable SEBI Regulations",
                      "Handling Quarterly and annual disclosures, report filings, and corporate governance compliance",
                      "Drafting of Scheme of ESOP/ESOS its, implementation and regulatory filings",
                      "Insider trading compliance",
                      "Drafting of policies as per SEBI mandates",
                      "Registration with SEBI, RBI etc for Investment Advisors, Portfolio Managers, Research Analysts, Other SEBI registered intermediaries",
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
                    src="/images/sebi.jpg"
                    alt="SEBI Compliance Services"
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
                <Link href="https://wa.me/919503716686?text=Hi%2C%20I%27m%20interested%20in%20your%20SEBI%20%26%20Listing%20Compliances%20services.%20I%20need%20help%20with%20SEBI%20regulations%20and%20listing%20compliance%20requirements.">
                  Get SEBI Compliance Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-gray-200 py-6 md:py-0 bg-gray-50">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16 px-4 md:px-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ritik Madnani & Associates. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="/terms-of-service"
              className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
        <p className="text-xs text-gray-500 text-center mt-2">
          Disclaimer: As per the guidelines of the Institute of Company Secretaries of India, we are not allowed to
          solicit work or advertise. By accessing this website, you acknowledge that you are seeking information about
          us on your own accord and that there has been no form of solicitation, advertisement or inducement by us or
          our members.
        </p>
      </footer>
    </div>
  )
}