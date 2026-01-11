"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Navbar } from "@/components/navbar"
import { PhoneCall, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <main className="flex-1">
        <section className="w-full py-24 md:py-32 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-blue/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
            <div className="h-[40rem] w-[40rem] bg-gradient-to-r from-blue-100/40 to-teal-100/40 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  Company Secretary
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
                  <TextGenerateEffect words="Professional Corporate & Legal Advisory Services" />
                </h1>
                <p className="text-gray-600 md:text-xl max-w-[600px]">
                  Ritik Madnani & Associates provides comprehensive corporate, legal, and business advisory services
                  with over 4 years of expertise in corporate law, compliance, and regulatory affairs.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white border-0"
                    size="lg"
                    asChild
                  >
                    <Link href="/services">
                      Our Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                    asChild
                  >
                    <Link href="https://wa.me/919503716686">Schedule a Consultation</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto lg:ml-auto relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-300/30 to-teal-300/30 blur-xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <p className="text-xs text-gray-500 text-center mt-2 px-4">
          Disclaimer: The contents or claims in the website issued by the advertiser are the sole and exclusive
          responsibility of the Advertiser. The Institute of Company Secretaries of India does not own any
          responsibility whatsoever for such contents or claims by the Advertiser.
        </p>
      </main>
    </div>
  )
}