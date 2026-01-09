import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"

export const metadata = {
  title: "Advisory & Representation - Ritik Madnani & Associates",
  description: "Strategic legal and regulatory advisory services across Corporate, Commercial, and Compliance matters",
}

export default function AdvisoryAndRepresentation() {
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
            Advisory & Representation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            We offer strategic legal and regulatory advisory services across a broad spectrum of Corporate, Commercial,
            and Compliance matters.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <div className="space-y-6">
            <BackgroundGradient className="rounded-[22px] p-8 bg-white shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                Our Advisory Services
              </h2>
              <ul className="space-y-3">
                {[
                  "Drafting and vetting of Agreements, Shareholders Agreement, Share Purchase Agreement, schemes of arrangement, mergers/demergers, buybacks, and capital restructuring",
                  "Representation before Registrar of Companies (ROC), Regional Directors, and National Company Law Tribunal (NCLT)",
                  "Legal opinions and advisory on Companies Act, SEBI, FEMA, and allied laws",
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
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Legal Advisory Services"
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
            <Link href="https://wa.me/919503716686?text=Hi%2C%20I%27m%20interested%20in%20your%20Advisory%20%26%20Representation%20services.%20I%20need%20legal%20advisory%20and%20representation%20support%20for%20my%20business.">
              Get Legal Advisory Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
