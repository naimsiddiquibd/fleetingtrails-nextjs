"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight } from "lucide-react"

export function TestimonialSection() {
  const testimonials = [
    {
      rating: 5,
      quote: `"Fleeting Trails delivered an exceptional AI-powered solution that transformed our business operations.
        Their technical expertise and innovative approach helped us achieve a 250% increase in efficiency!"`,
      name: "Michael Chen",
      role: "CTO, InnovateTech Solutions",
      image: "/tech-ceo-portrait.png",
    },
    {
      rating: 5,
      quote: `"The team at Fleeting Trails is amazing! Their AI solutions have completely optimized our workflow, saving us hours of manual work."`,
      name: "Sarah Lee",
      role: "Product Manager, CloudSolutions Inc.",
      image: "/tech-ceo-portrait.png",
    },
    {
      rating: 5,
      quote: `"Working with Fleeting Trails was a game-changer. The AI-driven insights we received helped boost revenue and streamline operations."`,
      name: "David Kim",
      role: "CEO, NextGen Apps",
      image: "/tech-ceo-portrait.png",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="pb-14 md:pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center space-y-8">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="max-w-2xl text-2xl md:text-3xl font-medium leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="font-bold text-xl">{testimonial.name}</div>
                    <div className="text-blue-300">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons on Both Sides */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
          <div className="swiper-button-prev !w-10 !h-10 !bg-white/10 !rounded-full flex items-center justify-center hover:!bg-white/20">
            <ChevronLeft className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
          <div className="swiper-button-next !w-10 !h-10 !bg-white/10 !rounded-full flex items-center justify-center hover:!bg-white/20">
            <ChevronRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </section>
  )
}
