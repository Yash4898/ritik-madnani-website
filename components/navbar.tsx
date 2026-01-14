"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Mail, PhoneCall } from "lucide-react"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", hasDropdown: true },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Expertise", href: "/expertise" },
]

const AboutDropdownItems = [
  { label: "About Us", href: "/about" },
  { label: "Profile", href: "/profile" },
  { label: "Mission and Vision", href: "/mission-vision" },
]

const ServicesDropdownItems = [
  { label: "Business Set up & Closure", href: "/settingupofbusiness" },
  { label: "Corporate Advisory & Secretarial Compliances", href: "/corporateadvisoryandsecretarialcompliance" },
  { label: "SEBI & Listing Compliances", href: "/sebiandlistingcompliances" },
  { label: "FEMA & RBI Compliances", href: "/femaandrbicompliances" },
  { label: "Advisory & Representation", href: "/advisoryandrepresentation" },
  { label: "IPR Registration and Advisory", href: "/iprregistrationandadvisory" },
  { label: "Registrations & Ancillary Services", href: "/registrationsandancillaryservices" },
  { label: "IEPF Services", href: "/iepfservices" },
  { label: "Due Diligence", href: "/duediligence" },
]

// Dropdown config for easy customization
const dropdownConfig = {
  About: {
    width: "w-44",
    align: "left-0",
    itemClass: "text-sm py-3",
    layout: "gap-x-6 gap-y-2 p-4",
  },
  Services: {
    width: "w-56",
    align: "left-0",
    itemClass: "text-sm py-3",
    layout: "gap-x-6 gap-y-2 p-4",
  },
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
    setIsServicesDropdownOpen(false)
  }, [pathname])
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
  className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
    scrolled ? "bg-white/90 border-b border-gray-200" : "bg-transparent"
  }`}
>
  {/* Top contact bar */}
  <div className="flex justify-end bg-gray-50 px-4 py-2">
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm md:text-base">
      <div className="flex items-center gap-1">
        <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        <span className="font-small">+91 9503716686</span>
      </div>

      <div className="flex items-center gap-1">
        <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        <span className="font-small">
          csritikmadnani@gmail.com
        </span>
      </div>
    </div>
  </div>

      {/* Main navbar */}
      <div className="container flex h-18 items-center justify-between">
        <Link href="/" className="flex flex-col items-start gap-1">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 mt-4">
            Ritik Madnani & Associates
          </span>
          <span className="text-sm text-gray-600 pb-2">Practising Company Secretary</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className="text-lg font-large relative flex items-center gap-1 text-gray-700"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 transition-all group-hover:w-full" />
              </Link>

              {/* Desktop Dropdown */}
              {item.hasDropdown && (
                <div
                  className={`absolute mt-5 z-10 bg-white border border-gray-200 rounded-lg shadow-xl
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top
                  ${dropdownConfig[item.label as "About" | "Services"].width}
                  ${dropdownConfig[item.label as "About" | "Services"].align}`}
                >
                  <div className={dropdownConfig[item.label as "About" | "Services"].layout}>
                    {(item.label === "Services" ? ServicesDropdownItems : AboutDropdownItems).map(
                      (dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className={`block rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors
                          ${dropdownConfig[item.label as "About" | "Services"].itemClass}`}
                        >
                          {dropdownItem.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right buttons */}
        <div className="flex items-center gap-4">
          <Button
            className="hidden md:flex bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white border-0"
            asChild
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>

          <button
            className="md:hidden  text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-18 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200"
        >
          <div className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="text-sm font-medium py-2 text-gray-700 flex-1"
                    onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <button
                      onClick={() => {
                        if (item.label === "Services") {
                          setIsServicesDropdownOpen(!isServicesDropdownOpen)
                        } else {
                          setIsDropdownOpen(!isDropdownOpen)
                        }
                      }}
                      className="p-2"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          (item.label === "Services" ? isServicesDropdownOpen : isDropdownOpen)
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.hasDropdown &&
                  (item.label === "Services" ? isServicesDropdownOpen : isDropdownOpen) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 flex flex-col gap-2 bg-gray-50 rounded py-2"
                    >
                      {(item.label === "Services" ? ServicesDropdownItems : AboutDropdownItems).map(
                        (dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="text-sm py-2 text-gray-700 hover:text-blue-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
              </div>
            ))}

            <Button
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white border-0 mt-2"
              asChild
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
