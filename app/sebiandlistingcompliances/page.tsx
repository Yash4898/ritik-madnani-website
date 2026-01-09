import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"

export const metadata = {
  title: "SEBI & Listing Compliances - Ritik Madnani & Associates",
  description: "Specialized advisory and compliance services under SEBI Regulations and listing requirements",
}

export default function SEBIAndListingCompliances() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600 mb-4">
            SEBI & Listing Compliances
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            We offer specialized advisory and compliance services under SEBI Regulations and listing requirements,
            ensuring that listed companies and SEBI-registered entities effectively fulfill their statutory and
            regulatory requirements.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <div className="space-y-6">
            <BackgroundGradient className="rounded-[22px] p-8 bg-white shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                Our SEBI Services
              </h2>
              <ul className="space-y-3">
                {[
                  "End-to-end Compliance and Secretarial support in process of Initial Public Offerings (IPOs) on SME/Main Board platforms",
                  "Drafting and reviewing of Draft Red Herring Prospectus/Red Herring Prospectus and liaison with merchant bankers, RTA, exchanges, and other intermediaries",
                  "Listing compliance under SEBI (LODR) Regulations, 2015 and other applicable SEBI Regulations",
                  "Handling Quarterly and annual disclosures, report filings, and corporate governance compliance",
                  "Drafting of Scheme of ESOP/ESOS its, implementation and regulatory filings",
                  "Insider trading compliance",
                  "Drafting of policies as per SEBI mandates",
                  "Registration with SEBI, RBI etc for Investment Advisors, Portfolio Managers, Research Analysts, Other SEBI registered intermediaries",
                ].map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </BackgroundGradient>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="SEBI Compliance Services"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white border-0"
            size="lg"
            asChild
          >
            <Link href="https://wa.me/919503716686?text=Hi%2C%20I%27m%20interested%20in%20your%20SEBI%20%26%20Listing%20Compliances%20services.%20I%20need%20help%20with%20SEBI%20regulations%20and%20listing%20compliance%20requirements.">
              Get SEBI Compliance Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
