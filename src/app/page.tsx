import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Team />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

