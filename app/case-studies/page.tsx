import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users } from "lucide-react"
import Link from "next/link"

const caseStudiesData = [
  {
    id: 1,
    title: "E-commerce Platform Transformation",
    client: "TechMart Solutions",
    industry: "Retail Technology",
    duration: "6 months",
    teamSize: "8 developers",
    description: "Complete redesign and development of a multi-vendor e-commerce platform serving over 50,000 daily users.",
    challenge: "The client's legacy platform was experiencing performance issues and couldn't handle increasing traffic. They needed a modern, scalable solution.",
    solution: "We built a new platform using Next.js, implemented microservices architecture, and integrated advanced analytics and payment systems.",
    results: [
      "300% improvement in page load speeds",
      "150% increase in conversion rates",
      "99.9% uptime achievement",
      "40% reduction in operational costs"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Stripe", "Redis"],
    image: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/329112735/original/7a742cdf658a313d302bcdd4c4bdf3905a9d1d92/do-website-ui-ux-design-landing-page-and-mobile-ui-design.png"
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    client: "DataVision Corp",
    industry: "Business Intelligence",
    duration: "4 months",
    teamSize: "6 developers",
    description: "Development of an intelligent analytics dashboard with machine learning capabilities for business insights.",
    challenge: "Client needed to process vast amounts of data and provide actionable insights to their customers in real-time.",
    solution: "Created a comprehensive dashboard with AI-powered predictive analytics, real-time data processing, and intuitive visualizations.",
    results: [
      "90% faster data processing",
      "85% improvement in decision-making speed",
      "200% increase in user engagement",
      "60% reduction in manual reporting time"
    ],
    technologies: ["React", "Python", "TensorFlow", "D3.js", "MongoDB", "Apache Kafka"],
    image: "https://static.semrush.com/blog/uploads/media/6e/8e/6e8e96230ecdf86b2d948809b37f005b/412d52c1ccf0664ef8dd38144e088fd6/seo-analytics-dashboard.png"
  },
  {
    id: 3,
    title: "Mobile Banking Application",
    client: "SecureBank Financial",
    industry: "Financial Services",
    duration: "8 months",
    teamSize: "12 developers",
    description: "Secure mobile banking application with advanced security features and seamless user experience.",
    challenge: "Developing a highly secure, user-friendly mobile banking solution that meets strict regulatory requirements.",
    solution: "Built a comprehensive mobile app with biometric authentication, end-to-end encryption, and real-time fraud detection.",
    results: [
      "1M+ app downloads in first year",
      "95% user satisfaction rate",
      "Zero security breaches",
      "50% reduction in customer service calls"
    ],
    technologies: ["React Native", "Node.js", "Blockchain", "AWS", "Firebase", "Biometric APIs"],
    image: "https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png"
  },
//   {
//     id: 4,
//     title: "Cloud Infrastructure Migration",
//     client: "GlobalTech Enterprises",
//     industry: "Enterprise Technology",
//     duration: "5 months",
//     teamSize: "10 developers",
//     description: "Complete migration of legacy systems to cloud infrastructure with improved scalability and security.",
//     challenge: "Client's on-premise infrastructure was limiting growth and increasing maintenance costs significantly.",
//     solution: "Designed and implemented a comprehensive cloud migration strategy with automated deployment pipelines and monitoring.",
//     results: [
//       "70% reduction in infrastructure costs",
//       "99.95% system availability",
//       "10x faster deployment cycles",
//       "Enhanced global accessibility"
//     ],
//     technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Monitoring Tools"],
//     image: "/cloud-ecommerce-platform.png"
//   }
]

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 text-center w-full bg-gradient-to-b from-blue-900 to-black text-white">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Case Studies
              </h1>
              <p className="mx-auto max-w-[600px] text-base md:text-xl text-gray-300">
                Discover how we've helped businesses transform their digital presence and achieve remarkable results
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-black to-blue-900">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="space-y-8">
              {caseStudiesData.map((study, index) => (
                <Card key={study.id} className="overflow-hidden bg-white/10 border-0 backdrop-blur-lg hover:bg-white/15 transition-all">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className={`p-6 lg:p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                          <Badge variant="secondary" className="bg-blue-400/20 text-blue-400 border-blue-400/30">{study.industry}</Badge>
                          <span className="flex items-center gap-1 text-gray-300">
                            <Calendar className="h-4 w-4" />
                            {study.duration}
                          </span>
                          <span className="flex items-center gap-1 text-gray-300">
                            <Users className="h-4 w-4" />
                            {study.teamSize}
                          </span>
                        </div>
                        <CardTitle className="text-2xl lg:text-3xl text-white">
                          {study.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-300">
                          {study.client}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="p-0 space-y-6">
                        <p className="text-gray-300 leading-relaxed">
                          {study.description}
                        </p>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-2">Solution</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-3">Key Results</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-300">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs border-blue-400/30 text-blue-400 hover:bg-blue-400/10">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-blue-900 to-black">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-900 bg-transparent transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Go Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}