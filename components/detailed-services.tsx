"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

// Service slug mapping - Maps service titles to their folder routes
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

export interface Service {
  title: string
  description: string
  details: string[]
}

export interface DetailedServicesProps {
  services: Service[]
}

export function DetailedServices({ services }: DetailedServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="w-full">
      {/* Grid with card hover effect */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const slug = serviceSlugMap[service.title] || service.title.toLowerCase().replace(/\s+/g, "").replace(/&/g, "and")
          
          return (
            <div
              key={service.title}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient border effect on hover */}
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
              
              <Link href={`/${slug}`}>
                <motion.div
                  className="relative h-full rounded-xl p-6 bg-white border border-gray-200 shadow-md overflow-hidden cursor-pointer"
                  initial={{ borderColor: "rgba(229, 231, 235, 1)" }}
                  animate={{
                    borderColor: hoveredIndex === index ? "rgba(59, 130, 246, 0.5)" : "rgba(229, 231, 235, 1)",
                    y: hoveredIndex === index ? -5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative z-10">
                    {/* Title with gradient effect */}
                    <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                      {service.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium">
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}




// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"

// // Service slug mapping - Maps service titles to their folder routes
// const serviceSlugMap: Record<string, string> = {
//   "Business Set up & Closure": "settingupofbusiness",
//   "Corporate Advisory & Secretarial Compliances": "corporateadvisoryandsecretarialcompliance",
//   "SEBI & Listing Compliances": "sebiandlistingcompliances",
//   "FEMA & RBI Compliances": "femaandrbicompliances",
//   "Advisory & Representation": "advisoryandrepresentation",
//   "IPR Registration and Advisory": "iprregistrationandadvisory",
//   "Registrations & Ancillary Services": "registrationsandancillaryservices",
//   "IEPF Services": "iepfservices",
//   "Due Diligence": "duediligence",
// }

// export interface Service {
//   title: string
//   description: string
//   details: string[]
// }

// export interface DetailedServicesProps {
//   services: Service[]
// }

// export function DetailedServices({ services }: DetailedServicesProps) {
//   return (
//     <div className="w-full relative">
//       {/* Grid with overlay card style */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-0">
//         {services.map((service, index) => {
//           // Get the slug from mapping, or use lowercase version as fallback
//           const slug = serviceSlugMap[service.title] || service.title.toLowerCase().replace(/\s+/g, "").replace(/&/g, "and")
          
//           return (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.12 }}
//               className="h-full"
//             >
//               <Link href={`/${slug}`}>
//                 {/* OVERLAY CARD STYLE */}
//                 <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

//                   {/* Dark Overlay Gradient - Bottom to Top */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

//                   {/* Content - Positioned at bottom */}
//                   <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.12 + 0.2 }}
//                     >
//                       {/* Title */}
//                       <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
//                         {service.title}
//                       </h3>

//                       {/* Description/Subtitle */}
//                       <p className="text-sm md:text-base text-gray-100 leading-relaxed line-clamp-2">
//                         {service.description}
//                       </p>
//                     </motion.div>
//                   </div>

//                   {/* Hover Arrow Indicator */}
//                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
//                       <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }