"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { BarChart, Megaphone, Palette, Globe, TrendingUp, Clapperboard } from "lucide-react"
import { cn } from "@/lib/utils"

type Service = {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const services: Service[] = [
  {
    id: 1,
    title: "Marketing Digital",
    description: "Impulsamos tu negocio en el mundo digital con estrategias personalizadas para aumentar tu visibilidad, atraer clientes y fidelizar a tu audiencia.",
    icon: <BarChart className="h-10 w-10 text-[#0a2463]" />,
  },
  {
    id: 2,
    title: "Publicidad",
    description: "Creamos campañas efectivas en Google Ads, Meta Ads y otras plataformas para llegar a tu público ideal y maximizar tu retorno de inversión.",
    icon: <Megaphone className="h-10 w-10 text-[#0a2463]" />,
  },
  {
    id: 3,
    title: "Diseño creativo",
    description: "Diseñamos piezas visuales atractivas y profesionales para fortalecer la identidad de tu marca y comunicar tu mensaje de manera efectiva.",
    icon: <Palette className="h-10 w-10 text-[#0a2463]" />,
  },
  {
    id: 4,
    title: "Desarrollo Web",
    description: "Creamos sitios web funcionales, modernos y optimizados para ofrecer una experiencia de usuario excepcional y convertir visitantes en clientes.",
    icon: <Globe className="h-10 w-10 text-[#0a2463]" />,
  },
  {
    id: 5,
    title: "Optimización SEO",
    description: "Mejoramos el posicionamiento de tu sitio web en los motores de búsqueda para aumentar su tráfico orgánico y atraer más clientes potenciales.",
    icon: <TrendingUp className="h-10 w-10 text-[#0a2463]" />,
  },
  {
    id: 6,
    title: "Edición de Videos",
    description: "Transformamos tus ideas en contenido audiovisual impactante, ideal para redes sociales, anuncios y estrategias de contenido.",
    icon: <Clapperboard className="h-10 w-10 text-[#0a2463]" />,
  },
]

export function Services() {
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

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nuestros <span className="text-[#0a2463]">Servicios</span>
          </h2>
          <p className="text-lg text-gray-600">
          Ofrecemos un conjunto completo de soluciones de marketing diseñadas para ayudar a su negocio a crecer, atraer clientes y alcanzar sus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 border border-gray-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{
                transitionDelay: `${150 * (index % 3)}ms`,
                animationDelay: `${150 * (index % 3)}ms`,
              }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

