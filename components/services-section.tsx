"use client"
import { Cloud, Smartphone, Brain, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import '@/styles/globals.css'

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
    {
      icon: Brain,
      title: "Machine Learning",
      description:
        "AI solutions, chatbots, data analytics, and machine learning models to automate and optimize your business processes.",
      buttonText: "Start AI Project →",
    },
  ]

  return (
    <section
      className="py-20 md:py-32 bg-gradient-to-b from-black to-blue-900 text-white"
      id="services"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge software solutions powered by the latest technologies
          </p>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="pb-14 md:pb-16"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-white/10 border-0 backdrop-blur-lg h-full">
                  <CardHeader>
                    <service.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-blue-400" />
                    <CardTitle className="text-lg sm:text-xl text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-300">
                      {service.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <a href="#contact">
                      <Button
                        variant="ghost"
                        className="text-blue-400 hover:text-blue-300 hover:bg-white/10 text-sm sm:text-base"
                      >
                        {service.buttonText}
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          {/* Navigation Buttons */}
          <div className="absolute bottom-0 right-0 flex gap-2 z-10">
            <div className="swiper-button-prev !static !w-8 !h-8 sm:!w-10 sm:!h-10 !bg-white/10 !rounded-full flex items-center justify-center hover:!bg-white/20">
              <ChevronLeft className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
            </div>
            <div className="swiper-button-next !static !w-8 !h-8 sm:!w-10 sm:!h-10 !bg-white/10 !rounded-full flex items-center justify-center hover:!bg-white/20">
              <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
