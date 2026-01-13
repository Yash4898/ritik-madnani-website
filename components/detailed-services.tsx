"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"

export interface Service {
  title: string
  description: string
  details: string[]
  image: string
}

const serviceSlugMap: Record<string, string> = {
  "Business Set up & Closure": "settingupofbusiness",
  "Corporate Advisory & Secretarial Compliances": "corporateadvisoryandsecretarialcompliance",
  "SEBI & Listing Compliances": "sebiandlistingcompliances",
  "FEMA & RBI Compliances": "femaandrbicompliances",
  "Advisory & Representation": "advisoryandrepresentation",
  "IPR Registration and Advisory": "iprregistrationandadvisory",
  "Registrations & Ancillary Services": "registrationsandancillaryservices",
  "IEPF Services": "iepfservices",
  "Due Diligence": "duediligence",
}

export function DetailedServices({ services }: { services: Service[] }) {
  const [activeService, setActiveService] = useState<Service | null>(null)

  /* 🔒 Lock scroll + ESC close */
  useEffect(() => {
    document.body.style.overflow = activeService ? "hidden" : "auto"

    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveService(null)
    }

    window.addEventListener("keydown", escHandler)
    return () => window.removeEventListener("keydown", escHandler)
  }, [activeService])

  return (
    <div className="w-full">
      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.title}
            layoutId={`service-${service.title}`}
            onClick={() => setActiveService(service)}
            className="relative cursor-pointer rounded-xl bg-white border border-gray-200 p-6 shadow-md hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              {service.title}
            </h3>

            <p className="text-sm text-gray-600 line-clamp-3">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* EXPANDED VIEW */}
      <AnimatePresence mode="wait">
        {activeService && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
            />

            {/* MODAL */}
            <motion.div
              layoutId={`service-${activeService.title}`}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <motion.div
                className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden"
                initial={{ scale: 0.96 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* ❌ CLOSE BUTTON */}
                <button
                  onClick={() => setActiveService(null)}
                  className="absolute right-4 top-4 z-20 rounded-full bg-black/60 p-2 text-white hover:bg-black"
                >
                  <X size={18} />
                </button>

                {/* 🖼 THUMBNAIL */}
                <div className="relative h-56 w-full">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                  <h2 className="text-2xl font-bold">
                    {activeService.title}
                  </h2>

                  <p className="text-gray-700">
                    {activeService.description}
                  </p>

                  <ul className="space-y-2 pt-3">
                    {activeService.details.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-600">
                        <span className="mt-1 h-1.5 w-1.5 bg-blue-600 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 text-right">
                    <Link
                      href={`/${serviceSlugMap[activeService.title]}`}
                      className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 px-6 py-2 text-sm font-semibold text-white"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
