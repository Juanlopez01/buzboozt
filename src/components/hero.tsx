"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const heading = headingRef.current
    const text = textRef.current
    const cta = ctaRef.current

    if (heading) {
      heading.style.opacity = "0"
      heading.style.transform = "translateY(20px)"
      setTimeout(() => {
        heading.style.transition = "opacity 0.8s ease, transform 0.8s ease"
        heading.style.opacity = "1"
        heading.style.transform = "translateY(0)"
      }, 100)
    }

    if (text) {
      text.style.opacity = "0"
      text.style.transform = "translateY(20px)"
      setTimeout(() => {
        text.style.transition = "opacity 0.8s ease, transform 0.8s ease"
        text.style.opacity = "1"
        text.style.transform = "translateY(0)"
      }, 300)
    }

    if (cta) {
      cta.style.opacity = "0"
      cta.style.transform = "translateY(20px)"
      setTimeout(() => {
        cta.style.transition = "opacity 0.8s ease, transform 0.8s ease"
        cta.style.opacity = "1"
        cta.style.transform = "translateY(0)"
      }, 500)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-emerald-200 to-gray-50"
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#0a2463]/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#0a2463]/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Impulsá tu negocio con <span className="text-[#0a2463]">Estrategias</span> de Marketing Digital
          </h1>
          <p ref={textRef} className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ayudamos a tu negocio a crecer mediante estrategias de marketing analíticas, campañas creativas y soluciones innovadoras para conseguir resultados tangibles.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/juanldevelop/30min"
              target='_blank'
            >
              <Button
                className="bg-[#0a2463] hover:bg-[#0a2463]/90 text-white px-8 py-6 rounded-md transition-all duration-300 ease-in-out hover:shadow-lg group"
                size="lg"
              >
                Obtener 20% de descuento
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#servicios">
              <Button
                variant="outline"
                className="border-[#0a2463] text-[#0a2463] hover:bg-[#0a2463]/10 px-8 py-6 rounded-md transition-all duration-300"
                size="lg"
              >
                Nuestro trabajo
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Link href="#projects" className="text-gray-500 hover:text-[#0a2463] transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

