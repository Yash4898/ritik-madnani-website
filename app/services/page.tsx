"use client"

import { Navbar } from "@/components/navbar"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { DetailedServices } from "@/components/detailed-services"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect } from "react"

const services = [
  {
    title: "Business Set up & Closure",
    description:
      "We offer comprehensive end-to-end solutions for setting up business entity in India or outside India. Our services encompass name approval, drafting of constitutional documents, obtaining PAN, TAN, GST, and other regulatory registrations.",
    details: [
      "Private Limited Companies",
      "Public Limited Companies",
      "Section 8 (Non-Profit) Companies",
      "NBFCs (Non-Banking Financial Companies)",
      "Limited Liability Partnerships (LLPs)",
      "Partnership Firms",
      "Other Form of Organisation",
    ],
    image: "/images/settingupbusiness.jpg",
  },
  {
    title: "Corporate Advisory & Secretarial Compliances",
    description:
      "We provide comprehensive support in corporate law matters and secretarial compliances, ensuring that your entity remains legally sound and governance-ready.",
    details: [
      "Filing of statutory forms and returns with the Ministry of Corporate Affairs (MCA)",
      "Annual filing and secretarial compliance for Companies and LLPs",
      "Advisory and support for Rights Issue, Private Placement, Preferential Allotments and other fund raising options",
      "Debt issuance and charge creation/modification/satisfaction",
      "Company and LLP strike-off procedures",
      "Conversion of companies, change in structure, capital, or management",
      "Maintenance of statutory registers, minutes, and ROC records",
    ],
    image: "/images/corporate advisory.jpg",
  },
  {
    title: "SEBI & Listing Compliances",
    description:
      "We offer specialized advisory and compliance services under SEBI Regulations and listing requirements, ensuring that listed companies and SEBI-registered entities effectively fulfill their statutory and regulatory requirements.",
    details: [
      "End-to-end Compliance and Secretarial support in process of Initial Public Offerings (IPOs) on SME/Main Board platforms",
      "Drafting and reviewing of Draft Red Herring Prospectus/Red Herring Prospectus and liaison with merchant bankers, RTA, exchanges, and other intermediaries",
      "Listing compliance under SEBI (LODR) Regulations, 2015 and other applicable SEBI Regulations",
      "Handling Quarterly and annual disclosures, report filings, and corporate governance compliance",
      "Drafting of Scheme of ESOP/ESOS its, implementation and regulatory filings",
      "Insider trading compliance",
      "Drafting of policies as per SEBI mandates",
      "Registration with SEBI, RBI etc for Investment Advisors, Portfolio Managers, Research Analysts, Other SEBI registered intermediaries",
    ],
    image: "/images/sebi.jpg",
  },
  {
    title: "FEMA & RBI Compliances",
    description:
      "We provide advisory and compliance support under the Foreign Exchange Management Act (FEMA) and RBI regulations for both inbound and outbound investments.",
    details: [
      "Advisory and reporting under Foreign Direct Investment (FDI) including FC-GPR, FC-TRS, DI filings etc.",
      "Annual Performance Report (APR) and Foreign Liabilities and Assets (FLA) returns",
      "External Commercial Borrowings (ECB) Compliance and Advisory",
      "Liaison with Authorised Dealer Banks and RBI for compounding applications",
      "Registration and compliance support for NBFCs and overseas investments",
    ],
    image: "/images/fema.jpg",
  },
  {
    title: "Advisory & Representation",
    description:
      "We offer strategic legal and regulatory advisory services across a broad spectrum of Corporate, Commercial, and Compliance matters.",
    details: [
      "Drafting and vetting of Agreements, Shareholders Agreement, Share Purchase Agreement, schemes of arrangement, mergers/demergers, buybacks, and capital restructuring",
      "Representation before Registrar of Companies (ROC), Regional Directors, and National Company Law Tribunal (NCLT)",
      "Legal opinions and advisory on Companies Act, SEBI, FEMA, and allied laws",
    ],
    image: "/images/advisory.jpg",
  },
  {
    title: "IPR Registration and Advisory",
    description:
      "We provide end-to-end services for protection and enforcement of Intellectual Property Rights (IPR), including registration of trademarks and copyrights.",
    details: [
      "End-to-end support for registration and protection of Trademarks and Copyrights",
      "Handling of oppositions, objections, rectifications, and litigation support",
      "Search Report, IP portfolio management and advisory for startups and MSMEs",
      "Brand strategy, IP due diligence, and advisory on infringement, enforcement, and commercialization of IP assets",
    ],
    image: "/images/ipr.jpg",
  },
  {
    title: "Registrations & Ancillary Services",
    description:
      "We assist businesses in obtaining a wide range of statutory and regulatory registrations which are essential for smooth operations and legal compliance.",
    details: [
      "MSME (Udyam) Registration",
      "Goods and Services Tax (GST) Registration",
      "Legal Entity Identifier (LEI) Code",
      "Digital Signature Certificate (DSC) procurement",
      "Import Export Code (IEC) registration",
      "Startup India & DPIIT Recognition",
      "FSSAI License for food businesses",
      "RERA Registration for real estate developers and agents",
      "ISO, Shops & Establishments, and other applicable registrations",
    ],
    image: "/images/registration.jpg",
  },
  {
    title: "IEPF Services",
    description:
      "We provide specialized services related to the Investor Education and Protection Fund (IEPF) in compliance with the Companies Act, 2013 and related rules.",
    details: [
      "Identification and tracking of unclaimed dividends and shares",
      "Preparation and filing of IEPF-1 to IEPF-7 forms",
      "Assistance in transferring shares/dividends to IEPF",
      "Support in filing claims for recovery of shares or amounts from IEPF Authority on behalf of shareholders",
    ],
    image: "/images/iepf.png",
  },
  {
    title: "Due Diligence",
    description:
      "We provide financial, tax and corporate law due diligence support to our clients for inbound and outbound transactions.",
    details: [
      "Review of corporate records, statutory filings, financial and legal documents",
      "Shareholding structures analysis",
      "Regulatory compliances assessment",
      "Litigations and contractual obligations review",
      "Detailed reports with actionable insights for risk mitigation and strategic planning",
    ],
    image: "/images/due delligence.png",
  },
]

export default function ServicesPage() {
  useEffect(() => {
    window.history.scrollRestoration = "manual"

    const savedScroll = sessionStorage.getItem("services-scroll-position")
    if (savedScroll) {
      const scrollPos = parseInt(savedScroll, 10)
      setTimeout(() => {
        window.scrollTo(0, scrollPos)
        sessionStorage.removeItem("services-scroll-position")
      }, 100)
    }

    const handleBeforeUnload = () => {
      sessionStorage.setItem("services-scroll-position", window.scrollY.toString())
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />

      <TracingBeam>
        <main className="flex-1 w-full flex flex-col">
          
          {/* HERO SECTION */}
          <section className="w-full relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-900">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-20 w-72 h-72 rounded-full border-2 border-white"></div>
              <div className="absolute bottom-32 right-32 w-96 h-96 rounded-full border border-white"></div>
              <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full border border-white opacity-50"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent"></div>

            <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10 py-32 md:py-40">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center space-y-6 text-center"
              >
                <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
                  Our Services
                </h1>

                <p className="text-xl md:text-2xl text-cyan-300 font-light max-w-2xl">
                  Comprehensive Professional Solutions
                </p>

                <nav className="flex items-center justify-center space-x-2 pt-4">
                  <Link
                    href="/"
                    className="text-cyan-300 hover:text-cyan-200 transition-colors font-medium text-sm md:text-base"
                  >
                    Home
                  </Link>
                  <span className="text-white/50">/</span>
                  <span className="text-white/80 font-medium text-sm md:text-base">Services</span>
                </nav>
              </motion.div>
            </div>
          </section>

          {/* SERVICES INTRO */}
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
                  End-to-End Professional Services
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Comprehensive solutions tailored to meet all your corporate compliance, advisory, and governance needs
                </p>
              </motion.div>
            </div>
          </section>

          {/* SERVICES GRID SECTION */}
          <section className="w-full py-12 md:py-20 bg-gray-50">
            <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <DetailedServices services={services} />
            </div>
          </section>

        </main>
      </TracingBeam>

      {/* FOOTER */}
      <footer className="w-full border-t border-gray-200 py-8 md:py-10 bg-gray-50">
  <div className="container max-w-6xl mx-auto px-4 md:px-6">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Ritik Madnani & Associates. All rights reserved.
      </p>
      <nav className="flex gap-6 sm:gap-8">
        <Link
          href="/terms-of-service"
          className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
        >
          Terms of Service
        </Link>
        <Link
          href="/privacy-policy"
          className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
        >
          Privacy Policy
        </Link>
      </nav>
    </div>
    
    {/* Disclaimers Section */}
    <div className="space-y-6 border-t border-gray-200 pt-8">
      {/* Disclaimer 1 */}
      <div className="space-y-2">
        <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Disclaimer </h4>
        <p className="text-xs text-gray-600 leading-relaxed">
          As per the guidelines of the Institute of Company Secretaries of India, we are not allowed to solicit work or advertise. By accessing this website, you acknowledge that you are seeking information about us on your own accord and that there has been no form of solicitation, advertisement or inducement by us or our members.
          <br/>
          The contents or claims in the website issued by the author are the sole and exclusive responsibility of the Author. The Institute of Company Secretaries of India does not own any responsibility whatsoever for such contents or claims by the Author.
        </p>
      </div>

      {/* Disclaimer 2 */}
      <div className="space-y-2">
        <p className="text-xs text-gray-600 leading-relaxed">
        </p>
      </div>
    </div>
  </div>
      </footer>
    </div>
  )
}
