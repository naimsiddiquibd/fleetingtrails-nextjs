"use client"
import { useEffect, useRef } from "react"

export function CompanyLogosSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Company logos data with dummy company names
  const companies = [
    { name: "TechCorp", color: "text-blue-400" },
    { name: "InnovateX", color: "text-purple-400" },
    { name: "CloudNine", color: "text-cyan-400" },
    { name: "DataFlow", color: "text-indigo-400" },
    { name: "NextGen", color: "text-violet-400" },
    { name: "AIverse", color: "text-blue-300" },
    { name: "FutureStack", color: "text-purple-300" },
    { name: "QuantumLeap", color: "text-cyan-300" },
    { name: "SkyMatrix", color: "text-indigo-300" },
    { name: "CodeCraft", color: "text-violet-300" },
    { name: "ByteForge", color: "text-blue-400" },
    { name: "NeuralLink", color: "text-purple-400" },
  ]

  // Duplicate the companies array for seamless loop
  const duplicatedCompanies = [...companies, ...companies]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5 // Adjust speed here

    const animate = () => {
      scrollPosition += scrollSpeed
      
      // Reset scroll position when we've scrolled through one set of logos
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      
      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-purple-900 overflow-hidden">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We've partnered with innovative organizations worldwide to deliver exceptional digital solutions
          </p>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-purple-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-purple-900 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="flex gap-8 md:gap-12 overflow-hidden whitespace-nowrap"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl px-8 py-6 md:px-12 md:py-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                style={{ minWidth: '200px', minHeight: '100px' }}
              >
                <div className="text-center">
                  <div className={`text-2xl md:text-3xl font-bold ${company.color} group-hover:scale-110 transition-transform duration-300`}>
                    {company.name}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">
                    Technology Partner
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Statistics section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300 text-sm md:text-base">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
            <div className="text-gray-300 text-sm md:text-base">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-300 text-sm md:text-base">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-300 text-sm md:text-base">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
