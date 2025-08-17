import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ProjectsSection() {
  const projects = [
    {
      name: "AI-Powered Analytics Dashboard",
      category: "AI & Machine Learning",
      description:
        "Real-time analytics platform with machine learning insights, predictive modeling, and automated reporting for enterprise clients.",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      image: "/ai-analytics-dashboard.png",
    },
    {
      name: "Cloud-Native E-Commerce Platform",
      category: "Cloud Solutions",
      description:
        "Microservices-based e-commerce platform deployed on Kubernetes with auto-scaling, monitoring, and CI/CD pipelines.",
      technologies: ["Node.js", "Docker", "Kubernetes", "AWS"],
      image: "/cloud-ecommerce-platform.png",
    },
    {
      name: "Cross-Platform Mobile Banking App",
      category: "Mobile Development",
      description:
        "Secure mobile banking application with biometric authentication, real-time transactions, and offline capabilities.",
      technologies: ["React Native", "TypeScript", "Firebase", "Stripe"],
      image: "/mobile-banking-app.png",
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
                <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 hover:bg-white/10">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 hover:bg-white/10">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
