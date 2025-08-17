import { MessageSquare, BarChart3, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: MessageSquare,
      title: "Seamless Interactions That Transform Your Instagram Experience",
      description: "Engage your audience effortlessly and scale your interactions fluidly.",
    },
    {
      icon: BarChart3,
      title: "Turn Engagement into Opportunity with Smart Automation",
      description: "Transform every comment and message into a chance for growth.",
    },
    {
      icon: Zap,
      title: "Streamline Your Instagram Interactions for Maximum Impact",
      description: "Experience the ease of managing your audience engagement like never before.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black to-blue-900 text-white">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Unlock Effortless Engagement
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Our Conversational Marketing Automation Platform revolutionizes your Instagram presence
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 border-0 backdrop-blur-lg">
              <CardHeader>
                <feature.icon className="w-12 h-12 mb-4 text-blue-400" />
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-white/10">
                  Learn More →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
