"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const benefits = [
    "Estrategias personalizadas para hacer crecer tu negocio de forma efectiva.",
    "Resultados medibles con análisis y optimización continua.",
    "Creatividad e innovación para destacar en un mercado competitivo.",
    "Equipo profesional con experiencia en marketing, diseño y desarrollo.",
    "Optimización constante para maximizar el rendimiento de cada acción.",
    "Acompañamiento integral para alcanzar tus objetivos digitales.",
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
            )}
          >
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden ">
              <Image src="/verdeSF.png?height=1000&width=800" alt="About buzboozt" fill className="object-cover" />
            </div>
          </div>

          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
            )}
            style={{ transitionDelay: "150ms" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              ¿Qué es <span className="text-[#0a2463]">buzboozt</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
            Fundada en 2020, buzboozt ha crecido desde una pequeña startup hasta convertirse en una agencia de marketing que atiende a clientes de todos los sectores. Nuestra misión es ayudar a las empresas a prosperar mediante soluciones de marketing innovadoras que generan resultados reales.
            </p>
            <p className="text-lg text-gray-600 mb-8">
            Combinamos pensamiento estratégico, excelencia creativa y experiencia técnica para crear campañas de marketing que no solo tienen un rendimiento excelente, sino que también ofrecen un retorno de la inversión (ROI) medible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2"
                  style={{
                    transitionDelay: `${200 + 100 * index}ms`,
                  }}
                >
                  <CheckCircle className="h-5 w-5 text-[#0a2463] flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

