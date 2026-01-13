"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { TracingBeam } from "@/components/ui/tracing-beam"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <TracingBeam>
      <main className="flex-1 w-full">
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
                Get in Touch With Us
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
                <span className="text-white/80 font-medium text-sm md:text-base">Contact</span>
              </nav>
            </motion.div>
          </div>
        </section>

      <section id="contact" className="w-full py-24 md:py-32 relative">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
              <div className="h-[40rem] w-[40rem] bg-gradient-to-r from-blue-100/40 to-teal-100/40 rounded-full blur-3xl"></div>
            </div>

            <div className="container max-w-4xl mx-auto px-4 md:px-6 relative">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600 md:text-xl">
                    Contact us for a consultation or to learn more about our services.
                  </p>
                  <div className="grid gap-4 pt-4">
                    {[
                      { icon: Phone, text: "+91 9503716686", link: "tel:+919503716686" },
                      { icon: Mail, text: "csritikmadnani@gmail.com", link: "mailto:csritikmadnani@gmail.com" },
                      {
                        icon: MapPin,
                        text: "C/o Sunil Madnani, Opp. To Shiv Mandir, Sindhi Colony, Pachora, Jalgaon MH 424201",
                      },
                      {
                        icon: Linkedin,
                        text: "www.linkedin.com/in/ritik-madnani-152a40222",
                        link: "https://www.linkedin.com/in/ritik-madnani-152a40222",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-3 group"
                      >
                        <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-2 group-hover:scale-110 transition-transform">
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        {item.link ? (
                          <Link href={item.link} className="text-gray-700" target="_blank" rel="noopener noreferrer">
                            {item.text}
                          </Link>
                        ) : (
                          <span className="text-gray-700">{item.text}</span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <ContactForm />
              </div>
            </div>
          </section>
         </main>
      </TracingBeam>
    </div>
  )
}