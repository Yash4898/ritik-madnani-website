"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import Link from "next/link"
import { TracingBeam } from "@/components/ui/tracing-beam"

export default function AboutPage() {
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
                <h1 className="text-6xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
                  About Us
                </h1>
                
                <nav className="flex items-center justify-center space-x-2 pt-4">
                  <Link 
                    href="/" 
                    className="text-cyan-300 hover:text-cyan-200 transition-colors font-medium text-sm md:text-base"
                  >
                    Home
                  </Link>
                  <span className="text-white/50">/</span>
                  <span className="text-white/80 font-medium text-sm md:text-base">About Us</span>
                </nav>
              </motion.div>
            </div>
          </section>

          {/* INTRO SECTION */}
          <section className="w-full py-20 md:py-28 bg-white">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Ritik Madnani & Associates
                  </h2>
                  
                  <p className="text-base md:text-sm text-gray-700 leading-relaxed">
                    Ritik Madnani & Associates, a proprietorship firm of Company Secretaries, is a reputed professional practice dedicated in providing comprehensive corporate, legal, and business advisory services. The firm is committed to delivering compliance-driven, ethical sound, and strategically aligned solutions, tailored to address the dynamic needs of corporates and entrepreneurs.
                  </p>
                </div>

                <div className="flex justify-center md:justify-end">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="About Ritik Madnani & Associates"
                    className="rounded-lg shadow-xl w-full max-w-sm md:max-w-md object-cover h-80 md:h-96"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* VISION & MISSION SECTION */}
          <section className="w-full py-20 md:py-28 bg-gray-50">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-4xl font-bold text-gray-900 mb-16 text-center uppercase tracking-tight"
              >
                VISION & MISSION
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-600"
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">V</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Vision</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    A firm to be progressively recognized for its quality, transparency, strong credibility, and impartiality and enhancing versatile competency for all its services.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-teal-500"
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">M</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Mission</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To provide quality services within a fixed frame of time, and providing client satisfaction with utmost confidentiality, diligence and prudence.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* OFFICE STRUCTURE SECTION */}
          <section className="w-full py-20 md:py-28 bg-white">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* LEFT SIDE - TEXT CONTENT */}
                <div className="flex flex-col justify-center">
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-4xl font-bold text-gray-900 mb-8 uppercase tracking-tight"
                  >
                    OFFICE STRUCTURE
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-700 text-base md:text-sm leading-relaxed max-w-2xl"
                  >
                    The Firm comprises richly experienced, hardworking and knowledgeable staff and qualified Company Secretaries well versed with subjective and thorough knowledge in respective fields and backed by approximately Ten (may vary time to time) CS management trainees who are adaptable and well known with company law matters & their compliances. Further a staff managing the office with Accounts and HR department. The firm is basically run, managed and controlled in the hands of Mr. Ritik Madnani and our dedicated team.
                  </motion.p>
                </div>

                {/* RIGHT SIDE - IMAGE */}
                <div className="flex justify-center md:justify-end">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    src="/images/office.jpg" 
                    alt="Office Structure"
                    className="rounded-lg shadow-xl w-full max-w-sm md:max-w-md object-cover h-80 md:h-96"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </TracingBeam>
    </div>
  )
}
