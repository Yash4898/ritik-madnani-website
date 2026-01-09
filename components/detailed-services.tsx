"use client"

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
  image: string
}

export interface DetailedServicesProps {
  services: Service[]
}

export function DetailedServices({ services }: DetailedServicesProps) {
  return (
    <div className="w-full relative">
      {/* Grid with overlay card style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-0">
        {services.map((service, index) => {
          // Get the slug from mapping, or use lowercase version as fallback
          const slug = serviceSlugMap[service.title] || service.title.toLowerCase().replace(/\s+/g, "").replace(/&/g, "and")
          
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="h-full"
            >
              <Link href={`/${slug}`}>
                {/* OVERLAY CARD STYLE */}
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  {/* Background Image */}
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}

                  {/* Dark Overlay Gradient - Bottom to Top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                  {/* Content - Positioned at bottom */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.12 + 0.2 }}
                    >
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {service.title}
                      </h3>

                      {/* Description/Subtitle */}
                      <p className="text-sm md:text-base text-gray-100 leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Hover Arrow Indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
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
//   image: string
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
//                   {/* Background Image */}
//                   {service.image && (
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                       loading="lazy"
//                     />
//                   )}

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