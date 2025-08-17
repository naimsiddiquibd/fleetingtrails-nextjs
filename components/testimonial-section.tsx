import Image from "next/image"

export function TestimonialSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
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
            "Fleeting Trails delivered an exceptional AI-powered solution that transformed our business operations.
            Their technical expertise and innovative approach helped us achieve a 250% increase in efficiency!"
          </blockquote>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20">
              <Image
                src="/tech-ceo-portrait.png"
                alt="Michael Chen"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="font-bold text-xl">Michael Chen</div>
              <div className="text-blue-300">CTO, InnovateTech Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
