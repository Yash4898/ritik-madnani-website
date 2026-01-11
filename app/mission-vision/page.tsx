"use client"

import { motion } from "framer-motion"
import { Target, Eye } from "lucide-react"
import Link from "next/link"
import { TracingBeam } from "@/components/ui/tracing-beam"

export default function MissionVisionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <TracingBeam>
        <main className="flex-1 w-full">
          {/* HERO SECTION (SAME AS EXPERTISE) */}
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
                  Mission & Vision
                </h1>

                <nav className="flex items-center justify-center space-x-2 pt-4">
                  <Link
                    href="/"
                    className="text-cyan-300 hover:text-cyan-200 transition-colors font-medium text-sm md:text-base"
                  >
                    Home
                  </Link>
                  <span className="text-white/50">/</span>
                  <span className="text-white/80 font-medium text-sm md:text-base">
                    Mission & Vision
                  </span>
                </nav>
              </motion.div>
            </div>
          </section>

          {/* INTRO SECTION */}
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
                  Our Purpose
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The principles that guide our commitment to excellence, integrity, and client success
                </p>
              </motion.div>
            </div>
          </section>

          {/* MISSION & VISION CARDS */}
        <section className="w-full py-20 md:py-28 bg-white">
  <div className="container max-w-6xl mx-auto px-4 md:px-6 space-y-24">

    {/* MISSION */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      {/* Text */}
      <div className="flex flex-col justify-center space-y-5">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 p-3">
            <Target className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Mission
          </h3>
        </div>

        <p className="text-base md:text-sm text-gray-700 leading-relaxed">
          To leverage our comprehensive experience in corporate laws, securities laws,
          and regulatory compliances to provide value-driven, practical, and strategic
          secretarial and legal solutions to corporates, startups, and listed entities
          across various stages of the business lifecycle in a timely manner, while
          upholding the highest standards of professional ethics, integrity, and
          client service.
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center md:justify-end">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2070&q=80"
          alt="Our Mission"
          className="rounded-lg shadow-xl w-full max-w-sm md:max-w-md object-cover h-80 md:h-96"
        />
      </div>
    </motion.div>

    {/* VISION */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      {/* Image */}
      <div className="flex justify-center md:justify-start order-2 md:order-1">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2070&q=80"
          alt="Our Vision"
          className="rounded-lg shadow-xl w-full max-w-sm md:max-w-md object-cover h-80 md:h-96"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center space-y-5 order-1 md:order-2">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 p-3">
            <Eye className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Vision
          </h3>
        </div>

        <p className="text-base md:text-sm text-gray-700 leading-relaxed">
          To be recognized as a trusted adviser and guiding force for enterprises —
          from startups to listed entities — by delivering proactive, ethical, and
          business-aligned solutions that foster sustainable growth, stakeholder trust,
          Good Corporate Governance, and regulatory excellence.
        </p>
        </div>
      </motion.div>
        </div>
        </section>
        </main>
      </TracingBeam>
    </div>
  )
}
