import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Privacy Policy - Ritik Madnani & Associates",
  description: "Privacy Policy for Ritik Madnani & Associates professional services",
}

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Ritik Madnani & Associates ("we," "our," or "us") is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
              or engage our professional services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">2.1 Personal Information</h3>
            <p className="text-gray-600 mb-4">
              We may collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Company information and business details</li>
              <li>Financial and legal documents for service provision</li>
              <li>Communication records and correspondence</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">2.2 Website Usage Information</h3>
            <p className="text-gray-600 mb-4">When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>IP address and browser information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website information</li>
              <li>Device and operating system information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Providing professional Company Secretary services</li>
              <li>Communicating with clients regarding services and engagements</li>
              <li>Maintaining client records and case files</li>
              <li>Complying with legal and regulatory requirements</li>
              <li>Improving our website and services</li>
              <li>Responding to inquiries and providing customer support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Professional Confidentiality</h2>
            <p className="text-gray-600 mb-4">
              As a practicing Company Secretary bound by ICSI professional standards, we maintain strict confidentiality
              regarding all client information. Client-attorney privilege and professional confidentiality obligations
              apply to all information shared with us in the course of our professional relationship.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties, except in the
              following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or court orders</li>
              <li>To regulatory authorities as required by professional obligations</li>
              <li>To trusted service providers who assist in our operations (subject to confidentiality agreements)</li>
              <li>In connection with a business transfer or merger (with continued confidentiality protections)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Secure storage of physical and electronic documents</li>
              <li>Access controls and authentication procedures</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection and confidentiality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Data Retention</h2>
            <p className="text-gray-600 mb-4">
              We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy
              Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Client files and
              records are maintained in accordance with ICSI guidelines and applicable legal requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your information (subject to legal and professional obligations)</li>
              <li>Object to certain uses of your information</li>
              <li>Receive a copy of your information in a portable format</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-4">
              Our website may use cookies and similar tracking technologies to enhance user experience and analyze
              website usage. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Third-Party Links</h2>
            <p className="text-gray-600 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or
              content of these external sites. We encourage you to review the privacy policies of any third-party sites
              you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Children's Privacy</h2>
            <p className="text-gray-600 mb-4">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
              information from children under 18. If we become aware that we have collected such information, we will
              take steps to delete it promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. International Data Transfers</h2>
            <p className="text-gray-600 mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. We
              ensure appropriate safeguards are in place to protect your information in accordance with applicable data
              protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting
              the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">15. ICSI Professional Standards</h2>
            <p className="text-gray-600 mb-4">
              This Privacy Policy is designed to comply with the professional standards and ethical guidelines of the
              Institute of Company Secretaries of India (ICSI) regarding client confidentiality and data protection.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
