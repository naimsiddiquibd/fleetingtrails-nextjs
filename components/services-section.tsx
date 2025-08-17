import { Cloud, Smartphone, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Solutions & DevOps",
      description:
        "Scalable cloud infrastructure, CI/CD pipelines, and containerization solutions using AWS, Azure, Docker, and Kubernetes.",
      buttonText: "Discuss Cloud Needs →",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications using React Native and Flutter, with native iOS and Android development expertise.",
      buttonText: "Build My App →",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Custom AI solutions, chatbots, data analytics, and machine learning models to automate and optimize your business processes.",
      buttonText: "Start AI Project →",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black to-blue-900 text-white" id="services">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge software solutions powered by the latest technologies
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/10 border-0 backdrop-blur-lg">
              <CardHeader>
                <service.icon className="w-12 h-12 mb-4 text-blue-400" />
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>
              <CardFooter>
                <a href="#contact">
                  <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-white/10">
                    {service.buttonText}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
