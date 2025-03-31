import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a2463] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              buzboozt
            </Link>
            <p className="text-gray-300 mt-4 mb-6 max-w-xs">
            Ayudamos a las empresas a crecer a través de soluciones de marketing estratégico que ofrecen resultados medibles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links rápidos</h3>
            <ul className="space-y-3">
              {["Inicio", "Proyectos", "Servicios", "Equipo", "Nosotros", "Contacto"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              {[
                "Marketing Digital",
                "Publicidad",
                "Diseño Gráfico",
                "Desarrollo web",
                "Optimización SEO",
                "Edición de video",
              ].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contactanos</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p>Argentina</p>
              <p>Phone: (54) 3624-804761</p>
              <p>Email: juanldevelop@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">&copy; {currentYear} buzboozt. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

