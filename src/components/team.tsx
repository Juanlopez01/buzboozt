"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

type TeamMember = {
  id: number
  name: string
  role: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "Juan López",
    role: "Founder & CEO",
    bio: "Growth marketer y publicista con +6 años de experiencia en crecimiento de marcas.",
    image: "/JuanTeam.JPG?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "juanldevelop@gmail.com",
    },
  },
  {
    id: 2,
    name: "Julieta Acuña",
    role: "Community Manager & CMO",
    bio: "Community manager con +5 años de experiencia en proyectos de crecimiento de marcas.",
    image: "/JulietaTeam.jpeg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "julietamarketing01@gmail.com",
    },
  },
  {
    id: 3,
    name: "Jimena Rosciani",
    role: "Community Manager",
    bio: "Community manager con +5 años de experiencia en proyectos de crecimiento de marcas.",
    image: "/JimenaTeam.JPG?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "taylor@buzboozt.com",
    },
  },
]

export function Team() {
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
    <section id="equipo" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Conocé nuestro <span className="text-[#0a2463]">equipo</span>
          </h2>
          <p className="text-lg text-gray-600">
          Nuestros talentosos profesionales aportan experiencia diversa y pensamiento creativo a cada proyecto que emprendemos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.id}
              className={cn(
                "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{
                transitionDelay: `${150 * (index % 4)}ms`,
                animationDelay: `${150 * (index % 4)}ms`,
              }}
            >
              <div className="relative h-80 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                <p className="text-[#0a2463] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-gray-500 hover:text-[#0a2463] transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-gray-500 hover:text-[#0a2463] transition-colors"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <Twitter size={18} />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-500 hover:text-[#0a2463] transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

