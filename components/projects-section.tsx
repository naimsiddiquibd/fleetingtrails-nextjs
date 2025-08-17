import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ProjectsSection() {
  const projects = [
    {
      name: "Ultimate Organic Life",
      category: "Web Application",
      description:
        "An e-commerce web application built with JavaScript, offering a seamless shopping experience for organic products.",
      technologies: ["Node.Js", "Express", "React", "PostgreSQL"],
      image: "https://i.ibb.co.com/hJXQVqpg/8307f30c6254c885ddb15d426dcc21d3.jpg",
      link: "https://ultimateorganiclife.com/",
      github: "https://github.com/naimsiddiquibd/schedly-nextjs"
    },
    {
      name: "Foodex Cart",
      category: "Web Application",
      description:
        "Discover a wide range of fresh, high-quality food products with FoodExCart, an e-commerce web application.",
      technologies: ["Shopify", "CdnJs", "Cloudflare"],
      image: "https://i.ibb.co.com/ynJ0cLCg/ecommerce-webdesign-food-market-1024x768.png",
      link: "https://www.foodexcart.com/",
      github: "https://github.com/naimsiddiquibd/schedly-nextjs"
    },
    {
      name: "AI-Powered Booking App",
      category: "App Development",
      description:
        "Schedzly is an AI-powered booking app that streamlines appointment scheduling with intelligent automation real-time availability.",
      technologies: ["Nest.Js", "Next.Js", "PostgreSQL", "Ai integration"],
      image: "https://i.ibb.co.com/gLgQT6ry/Screenshot-2025-08-18-at-12-25-31-AM.jpg",
      link: "https://schedzly.vercel.app/",
      github: "https://github.com/naimsiddiquibd/schedly-nextjs"
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-900 to-indigo-900 text-white" id="projects">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-blue-400">Portfolio</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Discover some of our recent software solutions and the impact we've made for our clients.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col bg-white/10 border-0 backdrop-blur-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-blue-400 font-medium">{project.category}</div>
                <CardTitle className="text-xl font-bold text-white">{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 hover:bg-white/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 hover:bg-white/10">
                    <Github className="w-4 h-4 mr-2" />
                    Code
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
