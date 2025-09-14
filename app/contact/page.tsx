"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@fleetingtrails.com",
      description: "Send us an email anytime!",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+880 1629-551141",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Block B, Basundhara R/A, Dhaka",
      description: "Come say hello at our office",
    },
  ]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("https://formspree.io/f/movlzleb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (res.ok) {
        setSuccess("Your message has been sent successfully! ✅")
        form.reset()
      } else {
        setError("Something went wrong. Please try again ❌")
      }
    } catch (err) {
      setError("Failed to send message ❌")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="py-20 md:py-32 text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgb(30, 58, 138) 0%, rgb(0, 0, 0) 100%)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-black/80"></div>
          <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Get in Touch
              </h1>
              <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto">
                Ready to transform your ideas into reality? Let's discuss your project and build something amazing
                together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Let's Build Something Amazing Together</h2>
                <p className="text-gray-600 text-lg mb-8">
                  We'd love to hear about your project. Send us a message and we'll respond as soon as possible.
                </p>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-gray-50 border border-gray-200 shadow-sm">
                      <CardContent className="flex items-start space-x-4 p-6">
                        <info.icon className="w-6 h-6 text-blue-600" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                          <p className="text-blue-600 font-medium mb-1">{info.details}</p>
                          <p className="text-gray-500 text-sm">{info.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="bg-white border border-gray-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Input
                          name="firstName"
                          placeholder="First Name"
                          required
                          className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                        />
                        <Input
                          name="lastName"
                          placeholder="Last Name"
                          required
                          className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                      />

                      <Input
                        name="company"
                        placeholder="Company (Optional)"
                        className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                      />

                      <select
                        name="service"
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option value="cloud">Cloud Solutions & DevOps</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="ai">AI & Machine Learning</option>
                        <option value="other">Other</option>
                      </select>

                      <Textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about your project..."
                        required
                        className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                      />

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={loading}
                      >
                        {loading ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Send className="w-4 h-4 mr-2" />
                        )}
                        {loading ? "Sending..." : "Send Message"}
                      </Button>

                      {success && (
                        <p className="flex items-center gap-2 text-green-600 mt-2">
                          <CheckCircle2 className="w-4 h-4" /> {success}
                        </p>
                      )}
                      {error && <p className="text-red-600 mt-2">{error}</p>}
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
