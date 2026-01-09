"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Mail, MapPin, Phone, Menu, X, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardHoverEffect } from "@/components/ui/card-hover-effect"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { MissionVision } from "@/components/mission-vision"
import { DetailedServices } from "@/components/detailed-services"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
          scrolled ? "bg-white/90 border-b border-gray-200" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              Ritik Madnani & Associates
            </span>
            <span className="text-sm text-gray-600">CS</span>
          </div>

          <nav className="hidden md:flex gap-6">
            {["Services", "About", "Expertise", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium relative group text-gray-700"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              className="hidden md:flex bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white border-0"
              asChild
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>

            <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200"
          >
            <div className="container py-4 flex flex-col gap-4">
              {["Services", "About", "Expertise", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium py-2 text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Button
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white border-0 mt-2"
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        <section className="w-full py-24 md:py-32 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-blue/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
            <div className="h-[40rem] w-[40rem] bg-gradient-to-r from-blue-100/40 to-teal-100/40 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  Company Secretary
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
                  <TextGenerateEffect words="Professional Corporate & Legal Advisory Services" />
                </h1>
                <p className="text-gray-600 md:text-xl max-w-[600px]">
                  Ritik Madnani & Associates provides comprehensive corporate, legal, and business advisory services
                  with over 3.5 years of expertise in corporate law, compliance, and regulatory affairs.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white border-0"
                    size="lg"
                    asChild
                  >
                    <Link href="#services">
                      Our Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                    asChild
                  >
                    <Link href="https://wa.me/919503716686">Schedule a Consultation</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto lg:ml-auto relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-300/30 to-teal-300/30 blur-xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                  <Image
                    src="/images/ritik-madnani-headshot.png"
                    alt="CS Ritik Madnani - Professional Company Secretary"
                    width={500}
                    height={600}
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <TracingBeam>
          <DetailedServices services={services} />

          <section id="about" className="w-full py-24 md:py-32 relative">
            <div className="absolute inset-0 bg-grid-blue/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
              <div className="h-[40rem] w-[40rem] bg-gradient-to-r from-blue-100/40 to-teal-100/40 rounded-full blur-3xl"></div>
            </div>

            <div className="container px-4 md:px-6 relative">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto lg:mr-auto relative order-2 lg:order-1"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-300/30 to-teal-300/30 blur-xl"></div>
                  <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Professional Office Setting"
                      width={400}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4 order-1 lg:order-2"
                >
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
                    About CS Ritik Madnani
                  </h2>
                  <p className="text-gray-600 md:text-xl">
                    CS Ritik Madnani is an Associate Member of the Institute of Company Secretaries of India (ICSI),
                    possessing over 3.5 years of extensive experience in corporate legal advisory, secretarial audit,
                    listing compliances, and allied legal areas. He specializes in providing end-to-end guidance to
                    companies throughout their business lifecycle, including incorporation, structuring, capital
                    raising, and exit strategies.
                  </p>
                  <p className="text-gray-600 md:text-xl">
                    Ritik Madnani & Associates is a proprietorship firm providing comprehensive corporate, legal, and
                    business advisory services.
                  </p>
                  <ul className="grid gap-3 pt-4">
                    {[
                      "Associate Member of the Institute of Company Secretaries of India (ICSI)",
                      "Over 3.5 years of experience in Corporate Legal Advisory",
                      "Expertise in Secretarial Audit and Listing Compliances",
                      "Specialized in FEMA, SEBI, and RBI regulatory framework",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-1">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="expertise" className="w-full py-24 md:py-32 relative bg-gray-50">
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
                  <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">Expertise</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
                    Areas of Specialization
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                    Specialized knowledge and experience in key corporate areas
                  </p>
                </motion.div>
              </div>

              <CardHoverEffect items={expertise} />
            </div>
          </section>

          <MissionVision />

          <section id="contact" className="w-full py-24 md:py-32 relative">
            <div className="absolute inset-0 bg-grid-blue/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
              <div className="h-[40rem] w-[40rem] bg-gradient-to-r from-blue-100/40 to-teal-100/40 rounded-full blur-3xl"></div>
            </div>

            <div className="container px-4 md:px-6 relative">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
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
        </TracingBeam>
        <p className="text-xs text-gray-500 text-center mt-2">
          Disclaimer: The contents or claims in the website issued by the advertiser are the sole and exclusive
          responsibility of the Advertiser. The Institute of Company Secretaries of India does not own any
          responsibility whatsoever for such contents or claims by the Advertiser.
        </p>
      </main>

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

const services = [
  {
    title: "Setting up of Business",
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
  },
  {
    title: "Corporate Law & Secretarial Compliance Support",
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
  },
]

const expertise = [
  {
    title: "Companies Act Compliance",
    description:
      "Expert knowledge of the Companies Act and related regulations, ensuring your business remains fully compliant with all statutory requirements.",
    link: "#",
  },
  {
    title: "Corporate Governance",
    description:
      "Implementation of best practices in corporate governance, enhancing transparency and accountability in your organization.",
    link: "#",
  },
  {
    title: "SEBI Regulations",
    description:
      "Specialized expertise in Securities and Exchange Board of India (SEBI) regulations for listed companies and securities market participants.",
    link: "#",
  },
  {
    title: "Foreign Exchange Management",
    description: "Guidance on FEMA regulations for businesses with international operations or foreign investments.",
    link: "#",
  },
  {
    title: "Intellectual Property Rights",
    description:
      "Assistance with trademark registration, copyright protection, and other intellectual property matters.",
    link: "#",
  },
  {
    title: "Corporate Legal Advisory",
    description:
      "General corporate legal advisory services to help navigate complex business and regulatory environments.",
    link: "#",
  },
]
