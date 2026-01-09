"use client"

import { motion } from "framer-motion"
import { Target, Eye } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function MissionVision() {
  return (
    <div>
      <Navbar/>
    <section id="mission-vision"
    className="w-full py-24 md:py-32 relative bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="absolute inset-0 bg-grid-blue/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">Our Purpose</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
              Mission & Vision
            </h2>
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-3">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
                Our Mission
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <p className="text-gray-600 leading-relaxed">
                To leverage our comprehensive experience in corporate laws, securities laws, and regulatory compliances
                to provide value-driven, practical, and strategic secretarial and legal solutions to corporates,
                startups, and listed entities across various stages of the business lifecycle in timely manner, while
                upholding the highest standards of professional ethics, integrity, and client service.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-3">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
                Our Vision
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <p className="text-gray-600 leading-relaxed">
                To be recognized as a trusted adviser and guiding force for enterprises — from startups to listed
                entities — by delivering proactive, ethical, and business-aligned solutions that foster sustainable
                growth, stakeholder trust, Good Corporate Governance and regulatory excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  )
}
