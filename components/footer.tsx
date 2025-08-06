import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Projects", href: "#projects" },
    { name: "Vision", href: "#vision" },
    { name: "Contact Us", href: "#contact" },
  ]

  const projects = [
    { name: "Dr. Broker App", href: "#" },
    { name: "Dr. Lawyer App", href: "#" },
    { name: "JAD App", href: "#" },
    { name: "Bulky Store", href: "#" },
    { name: "Glosa Store", href: "#" },
  ]

  const services = [
    { name: "Dr. Broker App", href: "#" },
    { name: "Dr. Lawyer App", href: "#" },
    { name: "JAD App", href: "#" },
    { name: "Bulky Store", href: "#" },
    { name: "Glosa Store", href: "#" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Pass Technology"
                width={200}
                height={80}
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              UAE-based parent company owning and operating five innovative applications across real estate, legal
              services, entertainment, and e-commerce sectors.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">United Arab Emirates, Egypt, Jordan</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">info@trypass.ai</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">+971565888833</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Projects</h3>
            <ul className="space-y-3">
              {projects.map((project) => (
                <li key={project.name}>
                  <a href={project.href} className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Applications */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Applications</h3>
            <ul className="space-y-3 mb-6">
              {services.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-teal-400 hover:border-teal-400 bg-transparent"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-teal-400 hover:border-teal-400 bg-transparent"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-teal-400 hover:border-teal-400 bg-transparent"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-teal-400 hover:border-teal-400 bg-transparent"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">© 2024 Pass Technology. All rights reserved.</div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Cookie Policy
              </a>
            </div>
            <div className="text-gray-400 text-sm">From the Present to the Future</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
