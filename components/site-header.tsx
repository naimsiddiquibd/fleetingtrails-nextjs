"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <span className={`text-xl font-bold ${isScrolled ? "text-blue-900" : "text-white"}`}>
            Fleeting Trails
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`text-sm font-medium ${
              isScrolled ? "text-gray-600 hover:text-blue-900" : "text-white hover:text-gray-200"
            }`}
          >
            Home
          </Link>
          {["Services", "Projects"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium ${
                isScrolled ? "text-gray-600 hover:text-blue-900" : "text-white hover:text-gray-200"
              }`}
            >
              {item}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="sm"
            className={
              isScrolled
                ? "text-gray-600 hover:text-blue-900 hover:bg-gray-100"
                : "text-white hover:text-gray-200 hover:bg-white/10"
            }
            asChild
          >
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className={
              isScrolled
                ? "text-gray-600 hover:text-blue-900 hover:bg-gray-100"
                : "text-white hover:text-gray-200 hover:bg-white/10"
            }
            asChild
          >
            <Link href="https://wa.me/8801629551141" target="_blank">
              Make a call?
            </Link>
          </Button>

          <Button
            size="sm"
            className={
              isScrolled ? "bg-blue-900 text-white hover:bg-blue-800" : "bg-white text-blue-900 hover:bg-gray-200"
            }
            asChild
          >
            <Link href="#contact">Get Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm" className={`px-2 ${isScrolled ? "text-blue-900" : "text-white"}`}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium hover:text-blue-900">
                Home
              </Link>
              {["Services", "Projects", "About"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-blue-900"
                >
                  {item}
                </Link>
              ))}
              <hr className="my-4" />
              <Button variant="ghost" size="sm" className="justify-start" asChild>
                <Link href="#contact">Contact</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="#contact">Get Quote</Link>
              </Button>
              <Button variant="ghost" size="sm" className="justify-start" asChild>
                <Link href="https://wa.me/8801629551141" target="_blank">
                  Make a call?
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
