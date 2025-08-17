import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingSection() {
  const plans = [
    {
      name: "Basic Plan",
      price: "19",
      features: ["Automated responses to comments", "Basic analytics dashboard", "Up to 1,000 interactions per month"],
    },
    {
      name: "Business Plan",
      price: "49",
      features: [
        "All Basic Plan features",
        "Advanced AI-powered responses",
        "Comprehensive analytics and reporting",
        "Up to 10,000 interactions per month",
        "Priority customer support",
      ],
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-900 to-indigo-900 text-white" id="pricing">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-blue-400">Pricing</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Unlock the full potential of your Instagram engagement with our flexible pricing options.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col bg-white/10 border-0 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold">${plan.price}</span>
                  <span className="text-xl text-gray-300">/mo</span>
                </div>
                <p className="text-sm text-gray-300 mb-6">or ${Number.parseInt(plan.price) * 10} billed annually</p>
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-base text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
