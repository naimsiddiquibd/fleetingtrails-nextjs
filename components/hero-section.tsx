import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24 text-center w-full bg-gradient-to-b from-blue-900 to-black text-white h-fit md:h-screen md:flex md:items-center md:justify-center">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Crafting Digital Experiences That Leave Lasting Impressions
          </h1>
          <p className="mx-auto max-w-[700px] text-base md:text-xl text-gray-300">
            At Fleeting Trails, we specialize in creating innovative digital solutions that help businesses thrive in
            the modern world. From web development to digital marketing, we turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4">
            <a href="#projects">
              <Button size="lg" className="w-full sm:w-auto bg-white text-blue-900 hover:bg-gray-200">
                View Our Work
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
