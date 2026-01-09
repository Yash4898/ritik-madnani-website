import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"

export const metadata = {
  title: "Setting up of Business - Ritik Madnani & Associates",
  description: "Comprehensive end-to-end solutions for setting up business entity in India or outside India",
}

export default function SettingUpOfBusiness() {
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
            Setting up of Business
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            We offer comprehensive end-to-end solutions for setting up business entity in India or outside India. Our
            services encompass name approval, drafting of constitutional documents, obtaining PAN, TAN, GST, and other
            regulatory registrations.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <div className="space-y-6">
            <BackgroundGradient className="rounded-[22px] p-8 bg-white shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                Our Business Formation Services
              </h2>
              <ul className="space-y-3">
                {[
                  "Private Limited Companies",
                  "Public Limited Companies",
                  "Section 8 (Non-Profit) Companies",
                  "NBFCs (Non-Banking Financial Companies)",
                  "Limited Liability Partnerships (LLPs)",
                  "Partnership Firms",
                  "Other Form of Organisation",
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
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Business Formation Services"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {[
            {
              title: "Name Approval",
              description: "Assistance with name availability check and approval from relevant authorities",
            },
            {
              title: "Documentation",
              description:
                "Drafting of Memorandum of Association, Articles of Association, and other constitutional documents",
            },
            {
              title: "Registration Process",
              description: "Complete handling of registration process with ROC and other regulatory bodies",
            },
            {
              title: "PAN & TAN",
              description: "Obtaining Permanent Account Number and Tax Deduction Account Number",
            },
            {
              title: "GST Registration",
              description: "Goods and Services Tax registration for business operations",
            },
            {
              title: "Bank Account Opening",
              description: "Assistance with opening current account and other banking requirements",
            },
          ].map((item, index) => (
            <BackgroundGradient
              key={index}
              className="rounded-[22px] p-6 bg-white shadow-md border border-gray-100 h-full"
            >
              <h3 className="text-lg font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </BackgroundGradient>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
            Why Choose Us for Business Formation?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-1 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Expert Guidance</h4>
                  <p className="text-gray-600">Over 3.5 years of experience in corporate law and business formation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-1 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">End-to-End Service</h4>
                  <p className="text-gray-600">Complete support from name approval to post-incorporation compliance</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-1 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Regulatory Compliance</h4>
                  <p className="text-gray-600">Ensuring all legal and regulatory requirements are met</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-1 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Timely Delivery</h4>
                  <p className="text-gray-600">Quick and efficient processing of all documentation and registrations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
            Ready to Start Your Business?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today for a consultation and let us help you set up your business with complete legal compliance
            and professional guidance.
          </p>
          <Button
            className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white border-0"
            size="lg"
            asChild
          >
            <Link href="https://wa.me/919503716686?text=Hi%2C%20I%27m%20interested%20in%20your%20Setting%20up%20of%20Business%20services.%20I%20would%20like%20to%20know%20more%20about%20company%20formation%20and%20business%20registration%20services.">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
