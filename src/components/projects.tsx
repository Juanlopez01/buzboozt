"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Project = {
  id: number
  title: string
  category: string
  description: string
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Solé Boutique",
    category: "Integral Growth Marketing",
    description: "Estrategia integral de growth marketing para crecimiento de marca a largo plazo.",
    image: "/Solé.png?height=600&width=800",
  },
  {
    id: 2,
    title: "The Barber Job",
    category: "Estrategia de contenido",
    description: "Estrategias de contenido para todas sus plataformas fomentando la visita al local.",
    image: "/TheBarberJob.png?height=600&width=800",
  },
  {
    id: 3,
    title: "Katsu",
    category: "Social Media Marketing",
    description: "Estrategias de contenido para todas sus plataformas fomentando la visita al local.",
    image: "/Katsu.png?height=600&width=800",
  },
  {
    id: 4,
    title: "Koeru",
    category: "Growth Marketing",
    description: "Estrategias de crecimiento completo.",
    image: "/Koeru.png?height=600&width=800",
  }
]

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const nextProject = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

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

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={containerRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nuestros <span className="text-[#0a2463]">Proyectos</span>
          </h2>
          <p className="text-lg text-gray-600">
            Explorá las marcas que confían en nosotros y los servicios que brindamos a cada una de ellas.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-8">
                      <span className="text-sm font-medium text-[#a3c4f3] mb-2">{project.category}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-200 max-w-xl">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#0a2463] p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous project"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#0a2463] p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next project"
          >
            <ArrowRight size={20} />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-[#0a2463] w-6" : "bg-gray-300 hover:bg-gray-400",
                )}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

