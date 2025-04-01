"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { cn } from "@/lib/utils"

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would handle form submission here
    console.log("Form submitted:", formState)
    alert("Thanks for your message! We'll get back to you soon.")
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contacto" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            <span className="text-[#0a2463]">Contactanos</span>
          </h2>
          <p className="text-lg text-gray-600">
          ¿Listo para impulsar tus estrategias de marketing? Contáctanos hoy mismo para hablar sobre cómo podemos ayudarte a hacer crecer tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
            )}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Información de contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#0a2463] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Totalmente remoto</h4>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#0a2463] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Teléfono</h4>
                    <p className="text-gray-600"><a href="https://api.whatsapp.com/send?phone=543624804761">(54) 3624-804761</a></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#0a2463] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <a href="mailto:juanldevelop@gmail.com" className="text-gray-600">juanldevelop@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-4">Horarios de atención</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado:</span>
                    <span>9:00 AM - 12:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Cerrado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
            )}
            style={{ transitionDelay: "150ms" }}
          >
            <div onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Agendá tu reunión</h3>
                <p className="py-8">En el siguiente link vas a poder agendar la reunión en el horario que mejor se ajuste a tu día. Hacelo ahora y aprovechá un <span className="font-bold text-[#0a2463]">20% de descuento</span> en nuestros servicios.</p>
                <a
                  href="https://calendly.com/juanldevelop/30min"
                  target='_blank'
                >
                  <Button
                    className="w-full bg-[#0a2463] hover:bg-[#0a2463]/90 text-white transition-all duration-300 group"
                  >
                    Agendá aquí
                    <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

