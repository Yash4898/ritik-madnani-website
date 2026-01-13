"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Section } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative w-full py-40 md:py-50 overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/building.jpg"
            alt="Corporate Tower"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-black/20"></div>

        {/* CONTENT */}
        <div className="container px-4 md:px-6 relative z-20">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-white"
      >
        <div className="inline-block rounded-full bg-blue-600/90 px-3 py-1 text-sm">
          Company Secretary
        </div>

        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          <TextGenerateEffect words="Professional Corporate & Legal Advisory Services" />
        </h1>

        <p className="text-gray-200 md:text-xl max-w-[600px]">
          Ritik Madnani & Associates provides comprehensive corporate, legal, and business advisory services
          with over 4 years of expertise in corporate law, compliance, and regulatory affairs.
        </p>

        <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
          <Button
            className="bg-gradient-to-r from-blue-600 to-teal-500 text-white"
            size="lg"
            asChild
          >
            <Link href="/services">
              Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div> 
    </div>
  </div>
</section>
<section className="w-full bg-slate-50 py-28">
  <div className="max-w-7xl mx-auto px-8 py-8">
    {/* Heading */}
    <h2 className="text-5xl text-center text-slate-900 mb-10">
      What We Offer
    </h2>

    {/* Divider */}
    <div className="w-full border-t border-slate-300 mb-24" />

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
      {/* Column 1 */}
      <div className="space-y-6">
        <h3 className="text-3xl text-slate-800 inline-block relative group pb-3">
          Company Formation
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-300 group-hover:w-full" />
        </h3>

        <p className="text-slate-600 text-lg[1/2] leading-relaxed">
          We help businesses with end-to-end company formation, ensuring all
          statutory registrations and compliance requirements are handled
          smoothly and efficiently.
        </p>
      </div>

      {/* Column 2 */}
      <div className="space-y-6">
        <h3 className="text-3xl text-slate-800 inline-block relative group pb-3">
          Compliance & Filings
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-300 group-hover:w-full" />
        </h3>

        <p className="text-slate-600 text-lg[1/2] leading-relaxed">
          From routine ROC filings to annual compliance, we manage everything
          so you can focus on growing your business without legal stress.
        </p>
      </div>

      {/* Column 3 */}
      <div className="space-y-6">
        <h3 className="text-3xl text-slate-800 inline-block relative group pb-3">
          Secretarial Services
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-300 group-hover:w-full" />
        </h3>

        <p className="text-slate-600 text-lg[1/2] leading-relaxed ">
          We maintain accurate secretarial records, board resolutions, and
          statutory registers to keep your company fully compliant at all times.
        </p>
      </div>
    </div>
  </div>
</section>
<section id="contact" className="w-full py-24 md:py-40 bg-slate-50">
  <div className="container max-w-6xl mx-auto px-4 md:px-6">
    {/* Top heading + sub text */}
    <h1 className="text-5xl text-center text-slate-900 mb-10">
      Ready to Simplify Your Business
    </h1>
    <div className="w-full border-t border-slate-300 pb-10" />
    <p className="text-center md:text-xl text-gray-700 max-w-2xl mx-auto mb-24">
    Have any questions or inquiries?
    </p>

    {/* Main content (two columns) */}
    <div className="grid gap-10 lg:grid-cols-2 items-start">
      {/* Left: text + contact info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-5"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600 mt-20">
          Get in Touch
        </h2>
        <div>
        <p className="text-gray-600 md:text-lg mt-2">
        Feel free to contact us via phone or email  Feel free to contact us for expert financial advice and tailored solutions.
        </p>
        </div>
      </motion.div>

      {/* Right: form card */}
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</section>

</main>
</div>
  )
}
