import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "What services does Fleeting Tails provide?",
    answer:
      "We offer custom software development, web and mobile app solutions, enterprise systems, cloud services, AI/ML solutions, cybersecurity, and more.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we work with clients across the globe, delivering remote and on-site solutions tailored to their business needs.",
  },
  {
    question: "How long does it take to develop a project?",
    answer:
      "The timeline depends on the project's complexity and requirements. A simple web app may take weeks, while a large enterprise solution could take several months.",
  },
  {
    question: "Do you provide ongoing support after project delivery?",
    answer:
      "Absolutely. We offer maintenance, updates, and continuous technical support to ensure long-term performance.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "You can contact us via email, phone, or our online form. Once we review your requirements, we'll provide a tailored proposal.",
  },
  {
    question: "Why choose Fleeting Tails?",
    answer:
      "Because we blend innovation, reliability, and customer-centric solutions to help businesses grow in today's digital landscape.",
  },
]

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 text-center w-full bg-gradient-to-b from-blue-900 to-black text-white">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Frequently Asked Questions
              </h1>
              <p className="mx-auto max-w-[600px] text-base md:text-xl text-gray-300">
                Find answers to common questions about our services, processes, and how we can help your business
                succeed.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 py-2 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-black text-white text-center">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Still have questions?</h2>
              <p className="text-gray-300 text-lg">
                We're here to help. Get in touch with our team for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4 pt-4">
                <a href="/contact" className="inline-block">
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
