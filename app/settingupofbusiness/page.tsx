"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"

export default function SettingUpOfBusiness() {
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
      <p className="text-xl md:text-xl text-cyan-300 font-light max-w-2xl">
      End-to-End Professional Services
      </p>

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
          {/* Background decorations */}
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
                Setting up of Business
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                We offer comprehensive end-to-end solutions for setting up business entity in India or outside India. Our
                services encompass name approval, drafting of constitutional documents, obtaining PAN, TAN, GST, and other
                regulatory registrations.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 mb-12">
              <div className="space-y-6">
                <BackgroundGradient className="rounded-[22px] p-8 bg-white shadow-md border border-gray-100">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                    Our Business Formation Services
                  </h2>
                  <ul className="space-y-3">
                    {[
                      "Private Limited Companies",
                      "Public Limited Companies",
                      "Section 8 (Non-Profit) Companies",
                      "NBFCs (Non-Banking Financial Companies)",
                      "Limited Liability Partnerships (LLPs)",
                      "Partnership Firms",
                      "Other Form of Organisation",
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
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                    alt="Business Formation Services"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {[
                {
                  title: "Name Approval",
                  description: "Assistance with name availability check and approval from relevant authorities",
                },
                {
                  title: "Documentation",
                  description:
                    "Drafting of Memorandum of Association, Articles of Association, and other constitutional documents",
                },
                {
                  title: "Registration Process",
                  description: "Complete handling of registration process with ROC and other regulatory bodies",
                },
                {
                  title: "PAN & TAN",
                  description: "Obtaining Permanent Account Number and Tax Deduction Account Number",
                },
                {
                  title: "GST Registration",
                  description: "Goods and Services Tax registration for business operations",
                },
                {
                  title: "Bank Account Opening",
                  description: "Assistance with opening current account and other banking requirements",
                },
              ].map((item, index) => (
                <BackgroundGradient
                  key={index}
                  className="rounded-[22px] p-6 bg-white shadow-md border border-gray-100 h-full"
                >
                  <h3 className="text-lg font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </BackgroundGradient>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
                Why Choose Us for Business Formation?
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Expert Guidance</h4>
                      <p className="text-gray-600">Over 3.5 years of experience in corporate law and business formation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">End-to-End Service</h4>
                      <p className="text-gray-600">Complete support from name approval to post-incorporation compliance</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Regulatory Compliance</h4>
                      <p className="text-gray-600">Ensuring all legal and regulatory requirements are met</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Timely Delivery</h4>
                      <p className="text-gray-600">Quick and efficient processing of all documentation and registrations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
                Ready to Start Your Business?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Contact us today for a consultation and let us help you set up your business with complete legal compliance
                and professional guidance.
              </p>
              <Button
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white border-0"
                size="lg"
                asChild
              >
                <Link href="https://wa.me/919503716686?text=Hi%2C%20I%27m%20interested%20in%20your%20Setting%20up%20of%20Business%20services.%20I%20would%20like%20to%20know%20more%20about%20company%20formation%20and%20business%20registration%20services.">
                  Get Started Today
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