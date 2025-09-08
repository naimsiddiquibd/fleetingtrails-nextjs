"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
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
    <section
      className="py-20 md:py-32 bg-gradient-to-b from-purple-900 to-blue-900 text-white"
      id="contact"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Let's Build Something Amazing Together
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team of experts.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-gray-300 text-lg mb-8">
              We'd love to hear about your project. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white/10 border-0 backdrop-blur-lg">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <info.icon className="w-6 h-6 text-blue-400" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-blue-300 font-medium mb-1">{info.details}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white/10 border-0 backdrop-blur-lg mt-[52px]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                    />
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                    />
                  </div>

                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                  />

                  <Input
                    name="company"
                    placeholder="Company (Optional)"
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                  />

                  <select
                    name="service"
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white"
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
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                  />

                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
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
                    <p className="flex items-center gap-2 text-green-400 mt-2">
                      <CheckCircle2 className="w-4 h-4" /> {success}
                    </p>
                  )}
                  {error && <p className="text-red-400 mt-2">{error}</p>}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
