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
      <Navbar />
      <TracingBeam>
      <main className="flex-1 w-full">
      <section id="contact" className="w-full py-24 md:py-32 relative">
            <div className="absolute inset-0 bg-grid-blue/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
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