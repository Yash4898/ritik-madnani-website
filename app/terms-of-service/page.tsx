import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Terms of Service - Ritik Madnani & Associates",
  description: "Terms of Service for Ritik Madnani & Associates professional services",
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600 mb-2">
            Terms of Service
          </h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to Ritik Madnani & Associates ("we," "our," or "us"). These Terms of Service ("Terms") govern your
              use of our website and professional services. By accessing our website or engaging our services, you agree
              to be bound by these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. About Our Services</h2>
            <p className="text-gray-600 mb-4">
              Ritik Madnani & Associates is a proprietorship firm providing professional Company Secretary services,
              corporate legal advisory, and compliance support. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Company formation and incorporation services</li>
              <li>Corporate law and secretarial compliance support</li>
              <li>SEBI and listing compliances</li>
              <li>FEMA and RBI compliances</li>
              <li>Legal advisory and representation</li>
              <li>IPR registration and advisory</li>
              <li>Due diligence services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Professional Standards</h2>
            <p className="text-gray-600 mb-4">
              As a practicing Company Secretary and Associate Member of the Institute of Company Secretaries of India
              (ICSI), we adhere to the highest professional standards and ethical guidelines set forth by ICSI.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Client Engagement</h2>
            <p className="text-gray-600 mb-4">
              Professional services are provided based on formal engagement letters that outline the scope of work,
              fees, and terms of engagement. Each engagement is subject to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Written agreement specifying services to be provided</li>
              <li>Clear fee structure and payment terms</li>
              <li>Confidentiality obligations</li>
              <li>Professional liability limitations as permitted by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Confidentiality</h2>
            <p className="text-gray-600 mb-4">
              We maintain strict confidentiality regarding all client information and documents. Client information will
              not be disclosed to third parties without explicit consent, except as required by law or professional
              regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              Our liability for professional services is limited to the extent permitted by applicable law and
              professional regulations. We maintain professional indemnity insurance as required by ICSI guidelines.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Website Usage</h2>
            <p className="text-gray-600 mb-4">
              This website is provided for informational purposes only. The information contained herein does not
              constitute legal advice and should not be relied upon as such. For specific legal advice, please contact
              us directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All content on this website, including text, graphics, logos, and images, is the property of Ritik Madnani
              & Associates and is protected by applicable intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These Terms are governed by the laws of India. Any disputes arising from these Terms or our services shall
              be subject to the jurisdiction of courts in Jalgaon, Maharashtra.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. ICSI Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              As per the guidelines of the Institute of Company Secretaries of India, we are not allowed to solicit work
              or advertise. By accessing this website, you acknowledge that you are seeking information about us on your
              own accord and that there has been no form of solicitation, advertisement or inducement by us or our
              members.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact Information</h2>
            <p className="text-gray-600 mb-4">For questions regarding these Terms of Service, please contact us at:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Ritik Madnani & Associates</strong>
                <br />
                CS Ritik Madnani
                <br />
                C/o Sunil Madnani, Opp. To Shiv Mandir,
                <br />
                Sindhi Colony, Pachora, Jalgaon MH 424201
                <br />
                Phone: +91 9503716686
                <br />
                Email: csritikmadnani@gmail.com
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting
              on this website. Your continued use of our services constitutes acceptance of any changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
