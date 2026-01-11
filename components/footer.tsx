import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-8 md:py-10 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        {/* Top Row */}
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

        {/* Disclaimer */}
        <div className="space-y-6 border-t border-gray-200 pt-8">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
            Disclaimer
          </h4>

          <p className="text-xs text-gray-600 leading-relaxed">
            As per the guidelines of the Institute of Company Secretaries of India, we are not allowed to solicit
            work or advertise. By accessing this website, you acknowledge that you are seeking information about
            us on your own accord and that there has been no form of solicitation, advertisement or inducement
            by us or our members. The contents of this website are for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}
