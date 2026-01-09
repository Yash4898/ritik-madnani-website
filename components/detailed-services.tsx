"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import Link from "next/link"

interface Service {
  title: string
  description: string
  details: string[]
}

interface DetailedServicesProps {
  services: Service[]
}

export function DetailedServices({ services }: DetailedServicesProps) {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

  return (
    <section id="services" className="w-full py-24 md:py-32 relative bg-gray-50">
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
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
              Comprehensive Professional Services
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              End-to-end solutions for all your corporate compliance and governance needs
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BackgroundGradient className="rounded-[22px] bg-white shadow-md border border-gray-100">
                <div className="p-6">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleService(index)}
                  >
                    <div className="flex-1">
                      <Link href={`/${service.title.toLowerCase().replace(/\s+/g, "").replace(/&/g, "and")}`}>
                        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 transition-colors cursor-pointer">
                          {service.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {expandedService === index ? (
                        <ChevronUp className="h-5 w-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-blue-600" />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <h4 className="font-semibold text-gray-800 mb-3">Our services include:</h4>
                          <ul className="space-y-2">
                            {service.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
