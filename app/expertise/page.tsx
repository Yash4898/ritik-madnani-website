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
      <Navbar />
      <TracingBeam>
      <main className="full">
      <section className="w-full py-24 md:py-32 relative">
            <div className="absolute inset-0 bg-grid-blue/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
              <div className="h-[40rem] w-[40rem] bg-gradient-to-r from-blue-100/40 to-teal-100/40 rounded-full blur-3xl"></div>
            </div>

            <div className="container max-w-4xl mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">Expertise</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
                  Areas of Specialization
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Specialized knowledge and experience in key corporate areas
                </p>
              </motion.div>
            </div>
            <div className="w-full max-w-4xl mx-auto">
            <CardHoverEffect items={expertise} />
            </div>
          </div>
        </section>
      </main>
      </TracingBeam>
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