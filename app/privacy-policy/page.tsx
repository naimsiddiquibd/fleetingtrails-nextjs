import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 text-center w-full bg-gradient-to-b from-blue-900 to-black text-white">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
              <p className="mx-auto max-w-[600px] text-base md:text-xl text-gray-300">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We collect information you provide directly to us, such as when you create an account, contact us,
                    or use our services. This may include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Name, email address, and contact information</li>
                    <li>Business information and project requirements</li>
                    <li>Communication preferences and feedback</li>
                    <li>Technical information about your projects</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Develop new products and services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your
                    consent, except as described in this policy. We may share your information in the following
                    circumstances:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>With your consent or at your direction</li>
                    <li>With trusted service providers who assist us in operating our business</li>
                    <li>To comply with legal obligations or protect our rights</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or destruction. However, no method of
                    transmission over the internet or electronic storage is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in
                    this privacy policy, unless a longer retention period is required or permitted by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal information,
                    including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>The right to access and receive a copy of your personal information</li>
                    <li>The right to rectify or update your personal information</li>
                    <li>The right to delete your personal information</li>
                    <li>The right to restrict or object to our processing of your personal information</li>
                    <li>The right to data portability</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We use cookies and similar tracking technologies to collect and use personal information about you.
                    You can control cookies through your browser settings and other tools.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting
                    the new privacy policy on this page and updating the "Last Updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about this privacy policy or our privacy practices, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Email:</strong> privacy@fleetingtrails.com
                      <br />
                      <strong>Phone:</strong> +880 162 955 1141
                      <br />
                      <strong>Address:</strong> Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="text-sm text-gray-500 pt-8 border-t">
                  <p>Last Updated: {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-black text-white text-center">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Questions about our privacy practices?</h2>
              <p className="text-gray-300 text-lg">
                We're committed to transparency and protecting your privacy. Contact us for any concerns.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4 pt-4">
                <a href="#contact" className="inline-block">
                  <button className="bg-white text-blue-900 hover:bg-gray-200 px-6 py-3 rounded-md font-medium transition-colors">
                    Contact Us
                  </button>
                </a>
                <a href="https://wa.me/8801629551141" target="_blank" className="inline-block" rel="noreferrer">
                  <button className="border border-white text-white hover:bg-white hover:text-blue-900 bg-transparent px-6 py-3 rounded-md font-medium transition-colors">
                    Call Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
