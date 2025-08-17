"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, CheckCircle2 } from "lucide-react"

export function NewsletterSection() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

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
        setSuccess("Thank you for subscribing! 🎉")
        form.reset()
      } else {
        setError("Something went wrong. Please try again ❌")
      }
    } catch (err) {
      setError("Failed to subscribe ❌")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-900 to-gray-900 text-white">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Stay Updated with Fleeting Trails
          </h2>
          <p className="max-w-[600px] text-lg md:text-xl text-blue-200">
            Subscribe for the latest updates and expert marketing tips delivered straight to your inbox.
          </p>
          <div className="w-full max-w-md space-y-4">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Input
                name="email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-blue-200"
                placeholder="Enter your email"
                type="email"
                required
              />
              <Button
                type="submit"
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : null}
                {loading ? "Joining..." : "Join Now"}
              </Button>
            </form>

            {success && (
              <p className="flex items-center justify-center gap-2 text-green-400 text-sm">
                <CheckCircle2 className="w-4 h-4" /> {success}
              </p>
            )}
            {error && <p className="text-red-400 text-sm">{error}</p>}

            <p className="text-sm text-blue-200">
              By subscribing you agree to our Privacy Policy and provide consent to receive updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
