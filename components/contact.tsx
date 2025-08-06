import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Globe, Send, MessageCircle, Calendar } from "lucide-react"
import { FadeIn } from "./animations/fade-in"
import { StaggerContainer } from "./animations/stagger-container"

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: "United Arab Emirates, Egypt, Jordan",
      description: "Serving local & regional markets",
      color: "bg-teal-50 text-teal-600",
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: "+971565888833",
      description: "Available during business hours",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@trypass.ai",
      description: "We'll respond within 24 hours",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: Globe,
      title: "Global Services",
      details: "Worldwide Solutions",
      description: "International franchise opportunities",
      color: "bg-green-50 text-green-600",
    },
  ]

  const services = [
    {
      icon: MessageCircle,
      title: "Partnership Opportunities",
      description: "Explore collaboration and partnership possibilities with our brands",
    },
    {
      icon: Calendar,
      title: "Franchise Inquiries",
      description: "Learn about franchise opportunities for our applications",
    },
    {
      icon: Send,
      title: "Quick Response",
      description: "Fast response to all partnership and business inquiries",
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              Get In Touch
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform
              <span className="block text-teal-500 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                Your Ideas?
              </span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Learn more about Pass Technology and our portfolio of applications. Connect with us to explore partnership
              opportunities, franchise options, or career possibilities within our growing company.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <FadeIn direction="left" delay={0.2}>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-teal-600 transition-colors">
                        First Name
                      </label>
                      <Input
                        placeholder="Your first name"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300 hover:border-teal-300"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-teal-600 transition-colors">
                        Last Name
                      </label>
                      <Input
                        placeholder="Your last name"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300 hover:border-teal-300"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-teal-600 transition-colors">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300 hover:border-teal-300"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-teal-600 transition-colors">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+971 XX XXX XXXX"
                      className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300 hover:border-teal-300"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-teal-600 transition-colors">
                      Project Type
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-teal-500 focus:ring-teal-500 transition-all duration-300 hover:border-teal-300">
                      <option>Partnership Inquiry</option>
                      <option>Franchise Opportunity</option>
                      <option>Career Opportunities</option>
                      <option>Media & Press</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-teal-600 transition-colors">
                      Project Details
                    </label>
                    <Textarea
                      placeholder="Tell us about your inquiry, partnership interest, or how you'd like to connect with Pass Technology..."
                      rows={4}
                      className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300 hover:border-teal-300"
                    />
                  </div>

                  <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <StaggerContainer className="grid grid-cols-1 gap-6" staggerDelay={0.1}>
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 group hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${info.color} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-lg font-medium text-gray-800 mb-1">{info.details}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggerContainer>

            {/* Services */}
            <FadeIn direction="right" delay={0.4}>
              <Card className="border-0 shadow-xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 group hover:scale-105 transition-all duration-300"
                      >
                        <div className="bg-teal-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <service.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* CTA Card */}
            <FadeIn direction="right" delay={0.5}>
              <Card className="border-0 shadow-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-teal-100 mb-6 leading-relaxed">
                    Discover partnership opportunities with Pass Technology's portfolio of successful applications. From
                    real estate to e-commerce, explore how you can be part of our growing ecosystem.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-white text-teal-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                    >
                      Explore Partnerships
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent hover:scale-105 transition-all duration-300"
                    >
                      View Portfolio
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
