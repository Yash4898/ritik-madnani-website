"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

export default function ProfilePage() {
  const specialAssignments = [
    {
      title: "NBFC Registration",
      description: "End-to-end assistance in obtaining NBFC registration from the Reserve Bank of India (RBI), including documentation, compliance, and regulatory liaison."
    },
    {
      title: "Pre-IPO Advisory",
      description: "Comprehensive support in restructuring, corporate governance, compliance readiness, and documentation prior to public listing."
    },
    {
      title: "IPO & Listing on SME Exchange (NSE Emerge Platform)",
      description: "Advisory and compliance services for listing of companies on the SME Exchange, including coordination with merchant bankers, stock exchanges, and regulatory authorities."
    },
    {
      title: "Post-IPO and Listing Compliances",
      description: "Ongoing secretarial and regulatory compliance support for listed entities to ensure adherence to SEBI and stock exchange requirements including Funding and ESOP/ESOS-related matters."
    },
    {
      title: "FEMA & RBI Compliances",
      description: "Advisory and filing support for FEMA compliances, including FC-GPR, FC-TRS, and other foreign exchange–related filings and reporting requirements."
    }
  ]

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

            <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10 py-10 md:py-14">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center space-y-6 text-center"
              >
                <h1 className="text-6xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
                  CS Ritik Madnani
                </h1>

                <nav className="flex items-center justify-center space-x-2 pt-4">
                  <Link 
                    href="/" 
                    className="text-cyan-300 hover:text-cyan-200 transition-colors font-medium text-sm md:text-base"
                  >
                    Home
                  </Link>
                  <span className="text-white/50">/</span>
                  <span className="text-white/80 font-medium text-sm md:text-base">Profile</span>
                </nav>
              </motion.div>
            </div>
          </section>


          {/* PROFILE INTRO SECTION */}
          <section className="w-full py-20 md:py-28 bg-white">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
              >
                {/* Profile Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="lg:col-span-1 flex justify-center"
                >
                  <div className="relative w-full max-w-sm">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-300/20 to-teal-300/20 blur-2xl"></div>
                    <div className="relative rounded-lg overflow-hidden border-2 border-gray-200 shadow-xl">
                      <Image
                        src="/images/ritik-madnani-profile-pic.png"
                        alt="CS Ritik Madnani"
                        width={600}
                        height={750}
                        className="object-cover w-full h-auto"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Profile Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="lg:col-span-2 space-y-6"
                >
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                      About CS Ritik Madnani
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-500 rounded"></div>
                  </div>

                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    CS Ritik Madnani is an Associate Member of the Institute of Company Secretaries of India (ICSI), possessing over 4 years of extensive experience in corporate legal advisory, secretarial audit, listing compliances, and allied legal areas.
                  </p>

                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    He specializes in providing end-to-end guidance to companies throughout their business lifecycle, including incorporation, structuring, capital raising, and exit strategies, FEMA Compliances and IPR Registrations and advisory.
                  </p>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 rounded-lg bg-blue-50 border border-blue-200"
                    >
                      <p className="text-3xl font-bold text-blue-600">4+</p>
                      <p className="text-sm text-gray-700 mt-1">Years of Experience</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="p-4 rounded-lg bg-teal-50 border border-teal-200"
                    >
                      <p className="text-3xl font-bold text-teal-600">ICSI</p>
                      <p className="text-sm text-gray-700 mt-1">Associate Member</p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* SPECIAL ASSIGNMENTS SECTION */}
          <section className="w-full py-20 md:py-28 bg-gray-50">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight"
              >
                Special Assignments
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-700 text-lg mb-12 max-w-3xl"
              >
                CS Ritik Madnani has handled the following special assignments during his professional career:
              </motion.p>

              <div className="space-y-4">
                {specialAssignments.map((assignment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-teal-500">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {assignment.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {assignment.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </TracingBeam>
    </div>
  )
}
        








// "use client"

// import { Navbar } from "@/components/navbar"
// import { motion,Variants } from "framer-motion"
// import Link from "next/link"
// import Image from "next/image"
// import { useState } from "react"
// import { BackgroundGradient } from "@/components/ui/background-gradient"


// interface Expertise {
//   title: string
//   description: string
// }

// const expertiseAreas: Expertise[] = [
//   {
//     title: "NBFC Registration",
//     description: "End-to-end assistance in obtaining NBFC registration from the Reserve Bank of India (RBI), including documentation, compliance, and regulatory liaison."
//   },
//   {
//     title: "Pre-IPO Advisory",
//     description: "Comprehensive support in restructuring, corporate governance, compliance readiness, and documentation prior to public listing."
//   },
//   {
//     title: "IPO & Listing on SME Exchange",
//     description: "Advisory and compliance services for listing of companies on the SME Exchange (NSE Emerge Platform), including coordination with merchant bankers, stock exchanges, and regulatory authorities."
//   },
//   {
//     title: "Post-IPO and Listing Compliances",
//     description: "Ongoing secretarial and regulatory compliance support for listed entities to ensure adherence to SEBI and stock exchange requirements including Funding and ESOP/ESOS-related matters."
//   },
//   {
//     title: "FEMA & RBI Compliances",
//     description: "Advisory and filing support for FEMA compliances, including FC-GPR, FC-TRS, and other foreign exchange–related filings and reporting requirements."
//   },
// ]

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// }

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// }

// export default function ProfilePage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       <Navbar />
      
//       <main className="flex-1 w-full">
//          {/* HERO / INTRO SECTION - Enhanced */}
//          <section className="w-full relative border-b border-gray-200/50 overflow-hidden">
//           {/* Background Image */}
//           <div className="absolute inset-0 z-0">
//             <Image
//               src="/images/corridor.jpg"
//               alt="Background"
//               fill
//               className="object-cover"
//               priority
//             />
//             {/* Overlay for better text readability */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
//           </div>

//           <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
//             <div className="grid md:grid-cols-2 gap-12 py-16 md:py-24 lg:py-32 items-center">
//               {/* LEFT: Image - Enhanced with animations */}
//               <motion.div
//                 initial={{ opacity: 0, x: -40, scale: 0.95 }}
//                 animate={{ opacity: 1, x: 0, scale: 1 }}
//                 transition={{ duration: 0.7 }}
//                 className="relative flex justify-center md:justify-start group"
//               >
//                 {/* Animated gradient border */}
//                 <motion.div
//                   animate={{ 
//                     boxShadow: [
//                       "0 0 20px rgba(59, 130, 246, 0.3)",
//                       "0 0 30px rgba(59, 130, 246, 0.4)",
//                       "0 0 20px rgba(59, 130, 246, 0.3)"
//                     ]
//                   }}
//                   transition={{ duration: 3, repeat: Infinity }}
//                   className="w-full max-w-sm"
//                 >
//                   <div className="relative rounded-2xl overflow-hidden group-hover:shadow-2xl transition-shadow duration-500 border-transparent/50">
//                     <Image
//                       src="/images/ritik-madnani-profile-pic.png"
//                       alt="CS Ritik Madnani"
//                       width={400}
//                       height={600}
//                       className="object-contain w-full h-auto"
//                       priority
//                     />
//                     {/* Gradient overlay on hover */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </div>
//                 </motion.div>
//               </motion.div>

//               {/* RIGHT: Content - Enhanced */}
//               <motion.div
//                 initial={{ opacity: 0, x: 40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.7, delay: 0.1 }}
//                 className="space-y-8"
//               >
//                 {/* Title with animations */}
//                 <motion.div
//                   variants={containerVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="space-y-3"
//                 >
//                   <motion.div 
//                     variants={itemVariants}
//                     className="text-sm font-semibold text-blue-300 tracking-widest uppercase cursor-default"
//                   >
//                     <BackgroundGradient className="inline-block px-3 py-1.5 rounded-lg"
//                     circleSize={130}
//                     intensity={0.2}>
//                       Corporate Legal Advisory
//                     </BackgroundGradient>
//                   </motion.div>
//                   <motion.h1 
//                     variants={itemVariants}
//                     className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight cursor-default"
//                   >
//                     <BackgroundGradient className="inline-block px-4 py-2 rounded-lg"
//                       circleSize={130}
//                       intensity={0.2}>
//                       CS Ritik Madnani
//                     </BackgroundGradient>
//                   </motion.h1>
//                   <motion.div 
//                     variants={itemVariants}
//                     className="text-2xl text-gray-200 font-semibold cursor-default"
//                   >
//                     <BackgroundGradient className="inline-block px-3 py-1.5 rounded-lg"
//                       circleSize={130}
//                       intensity={0.2}>
//                       Associate Member, ICSI
//                     </BackgroundGradient>
//                   </motion.div>
//                 </motion.div>

//                 {/* About Intro */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.7, delay: 0.3 }}
//                   className="space-y-4 pt-2"
//                 >
//                   <div className="text-lg text-white leading-relaxed font-normal cursor-default">
//                     <BackgroundGradient className="block px-4 py-3 rounded-lg"
//                       circleSize={130}
//                       intensity={0.2}>
//                       Over 4 years of extensive experience in corporate legal advisory, secretarial audit, listing compliances, and allied legal areas. Specializing in comprehensive end-to-end guidance to companies throughout their business lifecycle.
//                     </BackgroundGradient>
//                   </div>
//                 </motion.div>

//                 {/* Key Metrics - Professional Gradient Cards */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.7, delay: 0.4 }}
//                   className="grid grid-cols-2 gap-6 pt-6"
//                 >
//                   {/* Years of Experience Card */}
//                   <motion.div
//                     whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
//                     transition={{ type: "spring", stiffness: 300, damping: 25 }}
//                     className="relative overflow-hidden rounded-2xl p-6 bg-white/95 backdrop-blur-sm shadow-xl group cursor-default border border-white/30"
//                   >
//                     {/* Animated background elements */}
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                       className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/20 transition-colors"
//                     ></motion.div>
//                     <motion.div
//                       animate={{ rotate: -360 }}
//                       transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                       className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full -ml-12 -mb-12 group-hover:bg-blue-500/20 transition-colors"
//                     ></motion.div>
                    
//                     {/* Content */}
//                     <div className="relative z-10 space-y-3">
//                       <motion.p 
//                         className="text-5xl font-bold text-blue-700"
//                         initial={{ scale: 0.8 }}
//                         animate={{ scale: 1 }}
//                         transition={{ delay: 0.5, type: "spring" }}
//                       >
//                         4<span className="text-2xl ml-1 font-semibold">+</span>
//                       </motion.p>
//                       <p className="text-gray-700 text-sm font-semibold tracking-wide uppercase">Years of Experience</p>
//                       <div className="w-12 h-1 bg-blue-600/30 group-hover:bg-blue-600/60 transition-all duration-300 rounded-full"></div>
//                     </div>
//                   </motion.div>

//                   {/* Successful Engagements Card */}
//                   <motion.div
//                     whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
//                     transition={{ type: "spring", stiffness: 300, damping: 25 }}
//                     className="relative overflow-hidden rounded-2xl p-6 bg-white/95 backdrop-blur-sm shadow-xl group cursor-default border border-white/30"
//                   >
//                     {/* Animated background elements */}
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                       className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 group-hover:bg-emerald-500/20 transition-colors"
//                     ></motion.div>
//                     <motion.div
//                       animate={{ rotate: -360 }}
//                       transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                       className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500/10 rounded-full -ml-12 -mb-12 group-hover:bg-emerald-500/20 transition-colors"
//                     ></motion.div>

//                     {/* Content */}
//                     <div className="relative z-10 space-y-3">
//                       <motion.p 
//                         className="text-5xl font-bold text-emerald-700"
//                         initial={{ scale: 0.8 }}
//                         animate={{ scale: 1 }}
//                         transition={{ delay: 0.6, type: "spring" }}
//                       >
//                         50<span className="text-2xl ml-1 font-semibold">+</span>
//                       </motion.p>
//                       <p className="text-gray-700 text-sm font-semibold tracking-wide uppercase">Successful Engagements</p>
//                       <div className="w-12 h-1 bg-emerald-600/30 group-hover:bg-emerald-600/60 transition-all duration-300 rounded-full"></div>
//                     </div>
//                   </motion.div>
//                 </motion.div>

//                 {/* CTA */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.7, delay: 0.5 }}
//                   className="pt-4 flex gap-4"
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.98 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                   >
//                     <Link
//                       href="#contact"
//                       className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 group border-2 border-white"
//                     >
//                       Get in Touch
//                       <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
//                     </Link>
//                   </motion.div>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* EXPERTISE SECTION - Enhanced */}
//         <section className="w-full relative  overflow-hidden">
//           {/* Background Image */}
//           <div className="absolute inset-0 z-0">
//           </div>
        
//           <div className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
//             {/* Section Header */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="mb-16"
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//                 Areas of Expertise
//               </h2>
//               <p className="text-xl text-gray-800">
//                 Specialized advisory services across corporate governance, compliance, and regulatory matters
//               </p>
//             </motion.div>
                    
//             {/* Expertise Grid */}
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
//             >
                
//               {expertiseAreas.map((area, index) => (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
//                   transition={{ type: "spring", stiffness: 300, damping: 25 }}
//                   className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:border-blue-300 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
//                 >
//                   {/* Animated gradient border on hover */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/70 group-hover:to-blue-100/40 transition-all duration-300 pointer-events-none"></div>
                  
//                   {/* Content */}
//                   <div className="relative z-10 space-y-4">
//                     <div className="flex items-start justify-between">
//                       <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
//                         {area.title}
//                       </h3>
//                     </div>
//                     <p className="text-gray-700 leading-relaxed text-base">
//                       {area.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* ABOUT FIRM SECTION - Enhanced */}
//         <section className="w-full bg-white border-b border-gray-200/50">
//           <div className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="max-w-3xl"
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
//                 About the Practice
//               </h2>
//               <div className="space-y-6">
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   Ritik Madnani & Associates is a proprietorship firm providing comprehensive corporate, legal, and business advisory services. We specialize in assisting businesses throughout their entire lifecycle, from incorporation through exit strategies.
//                 </p>
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   Our approach combines deep regulatory expertise with practical business acumen. We focus on delivering clear, actionable advice that empowers companies to navigate complex compliance landscapes and make informed strategic decisions.
//                 </p>
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   className="pt-6"
//                 >
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                     Key Focus Areas
//                   </h3>
//                   <div className="grid md:grid-cols-2 gap-4">
//                     {[
//                       "Corporate Governance & Compliance",
//                       "Capital Raising & Structuring",
//                       "Regulatory Advisory & Filings",
//                       "Listing Compliance & Post-IPO Support",
//                       "Foreign Exchange & Cross-Border Matters",
//                       "Business Strategy & Structuring"
//                     ].map((item, i) => (
//                       <motion.div
//                         key={i}
//                         initial={{ opacity: 0, x: -10 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.4, delay: i * 0.08 }}
//                         className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
//                       >
//                         <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform"></div>
//                         <span className="text-gray-700 font-medium">{item}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* CTA SECTION - Enhanced */}
//         <section className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
//           {/* Background animation elements */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//             className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"
//           ></motion.div>
//           <motion.div
//             animate={{ rotate: -360 }}
//             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//             className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"
//           ></motion.div>

//           <div className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="space-y-8"
//             >
//               <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//                 Ready to Discuss Your Business Needs?
//               </h2>
//               <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//                 Schedule a consultation to explore how we can support your corporate objectives and drive growth.
//               </p>
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
//               >
//                 <Link
//                   href="#contact"
//                   className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:shadow-2xl transition-all duration-300 group text-lg"
//                 >
//                   Schedule Consultation
//                   <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </div>
//         </section>
//       </main>

//       {/* FOOTER - Enhanced */}
//       <footer className="w-full bg-gray-50 border-t border-gray-200/50">
//         <div className="container max-w-7xl mx-auto px-4 md:px-8 py-12">
//           <div className="grid md:grid-cols-4 gap-8 mb-12">
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4 }}
//             >
//               <h4 className="font-bold text-gray-900 mb-4 text-lg">About</h4>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 Corporate legal and compliance advisory for businesses at every stage.
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.1 }}
//             >
//               <h4 className="font-bold text-gray-900 mb-4 text-lg">Services</h4>
//               <nav className="space-y-2">
//                 <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 block transition-colors">IPO Advisory</Link>
//                 <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 block transition-colors">Compliance</Link>
//                 <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 block transition-colors">Regulatory</Link>
//               </nav>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.2 }}
//             >
//               <h4 className="font-bold text-gray-900 mb-4 text-lg">Resources</h4>
//               <nav className="space-y-2">
//                 <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 block transition-colors">About</Link>
//                 <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 block transition-colors">Contact</Link>
//                 <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 block transition-colors">Blog</Link>
//               </nav>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.3 }}
//             >
//               <h4 className="font-bold text-gray-900 mb-4 text-lg">Legal</h4>
//               <nav className="space-y-2">
//                 <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 block transition-colors">Terms</Link>
//                 <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 block transition-colors">Privacy</Link>
//               </nav>
//             </motion.div>
//           </div>

//           <div className="border-t border-gray-200 pt-8">
//             <p className="text-sm text-gray-600 mb-4">
//               © {new Date().getFullYear()} Ritik Madnani & Associates. All rights reserved.
//             </p>
//             <p className="text-xs text-gray-500 leading-relaxed">
//               <strong>Disclaimer:</strong> As per the guidelines of the Institute of Company Secretaries of India, we are not allowed to solicit work or advertise. By accessing this website, you acknowledge that you are seeking information about us on your own accord and that there has been no form of solicitation, advertisement or inducement by us or our members.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }




