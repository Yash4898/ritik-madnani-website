"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { CardHoverEffect } from "@/components/ui/card-hover-effect"
import Link from "next/link"
import { TracingBeam } from "@/components/ui/tracing-beam"

export const expertise = [
  {
    title: "Companies Act Compliance",
    description:
      "Expert knowledge of the Companies Act and related regulations, ensuring your business remains fully compliant with all statutory requirements.",
    link: "#",
  },
  {
    title: "Corporate Governance",
    description:
      "Implementation of best practices in corporate governance, enhancing transparency and accountability in your organization.",
    link: "#",
  },
  {
    title: "SEBI Regulations",
    description:
      "Specialized expertise in Securities and Exchange Board of India (SEBI) regulations for listed companies and securities market participants.",
    link: "#",
  },
  {
    title: "Foreign Exchange Management",
    description: "Guidance on FEMA regulations for businesses with international operations or foreign investments.",
    link: "#",
  },
  {
    title: "Intellectual Property Rights",
    description:
      "Assistance with trademark registration, copyright protection, and other intellectual property matters.",
    link: "#",
  },
  {
    title: "Corporate Legal Advisory",
    description:
      "General corporate legal advisory services to help navigate complex business and regulatory environments.",
    link: "#",
  },
]

export default function ExpertisePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <TracingBeam>
        <main className="flex-1 w-full">
          
          {/* HERO SECTION */}
          <section className="w-full relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-900">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-20 w-72 h-72 rounded-full border-2 border-white"></div>
              <div className="absolute bottom-32 right-32 w-96 h-96 rounded-full border border-white"></div>
              <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full border border-white opacity-50"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent"></div>

            <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10 py-12 md:py-14">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center space-y-6 text-center"
              >
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
                  Our Expertise
                </h1>
                
                <nav className="flex items-center justify-center space-x-2 pt-4">
                  <Link 
                    href="/" 
                    className="text-cyan-300 hover:text-cyan-200 transition-colors font-medium text-sm md:text-base"
                  >
                    Home
                  </Link>
                  <span className="text-white/50">/</span>
                  <span className="text-white/80 font-medium text-sm md:text-base">Expertise</span>
                </nav>
              </motion.div>
            </div>
          </section>

          {/* EXPERTISE INTRO SECTION */}
          <section className="w-full py-16 md:py-20 bg-white">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto space-y-4"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Areas of Specialization
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Specialized knowledge and experience in key corporate and regulatory areas
                </p>
              </motion.div>
            </div>
          </section>

          {/* EXPERTISE CARDS SECTION */}
          <section className="w-full py-12 md:py-20 bg-gray-50">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
              <CardHoverEffect items={expertise} />
            </div>
          </section>
        </main>
      </TracingBeam>
    </div>
  )
}
