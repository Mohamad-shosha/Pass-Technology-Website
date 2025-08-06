import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Home, Scale, Gift, ShoppingBag, Sparkles, ArrowRight, Globe, Users } from "lucide-react"
import { FadeIn } from "./animations/fade-in"
import { StaggerContainer } from "./animations/stagger-container"

export function Projects() {
  const projects = [
    {
      name: "Dr. Broker App",
      icon: Home,
      description:
        "An integrated real estate platform that enables users to buy, sell, and rent properties with ease and professionalism.",
      audience: "Individuals, real estate companies, and property investors",
      features: [
        "Intelligent property search",
        "Interactive map display",
        "Direct communication",
        "Customized requests",
        "Multi-language support",
        "Franchise opportunities",
      ],
      languages: ["Arabic", "English", "French", "Russian", "Hindi"],
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-500",
    },
    {
      name: "Dr. Lawyer App",
      icon: Scale,
      description: "A legal platform that connects clients seeking legal advice with qualified lawyers.",
      audience: "Individuals, corporations, and legal professionals",
      features: [
        "Confidential request submission",
        "Lawyer dashboard & management",
        "Case & contract management",
        "Invoice management",
        "Subscription-based access",
        "International scalability",
        "Multiple communication channels",
      ],
      languages: ["Multi-language support"],
      color: "from-purple-500 to-purple-600",
      iconBg: "bg-purple-500",
    },
    {
      name: "JAD App",
      icon: Gift,
      description: "An entertainment app offering exclusive 'Buy One, Get One Free' deals and discounts.",
      audience: "Individuals interested in entertainment, dining, and services",
      features: [
        "Restaurant & hotel discounts",
        "Spa & leisure activities",
        "Annual subscription access",
        "Digital vouchers",
        "City-based navigation",
        "No extra cost for providers",
      ],
      languages: ["Multi-language"],
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-500",
    },
    {
      name: "Bulky Store",
      icon: ShoppingBag,
      description: "An e-commerce platform specializing in luxury women's handbags with elegant and unique designs.",
      audience: "Fashion-conscious women seeking luxury accessories",
      features: ["Elegant & unique designs", "Seasonal promotions", "Premium collections", "Secure checkout"],
      languages: ["Multi-language"],
      color: "from-pink-500 to-pink-600",
      iconBg: "bg-pink-500",
    },
    {
      name: "Glosa Store",
      icon: Sparkles,
      description: "An online store for cosmetics, skincare products, and everyday household items.",
      audience: "Consumers seeking quality personal care products",
      features: [
        "Authentic, high-quality products",
        "Fast delivery service",
        "Direct customer support",
        "Diverse product categories",
        "Personal care focus",
        "Daily needs coverage",
      ],
      languages: ["Multi-language"],
      color: "from-orange-500 to-orange-600",
      iconBg: "bg-orange-500",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              Our Portfolio
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Outstanding Projects &
              <span className="block text-teal-500 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our portfolio consists of five owned applications that cater to various market needs, enhance digital
              experiences, and provide scalable solutions across multiple industries.
            </p>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <StaggerContainer className="grid lg:grid-cols-2 gap-10" staggerDelay={0.2}>
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden hover:scale-105 hover:-translate-y-2"
            >
              <div
                className={`h-2 bg-gradient-to-r ${project.color} group-hover:h-3 transition-all duration-300`}
              ></div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`${project.iconBg} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <project.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                        {project.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <p className="text-sm text-gray-500">{project.audience}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>

                {/* Language Support */}
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-teal-500" />
                  <div className="flex flex-wrap gap-1">
                    {project.languages.map((lang, langIndex) => (
                      <Badge
                        key={langIndex}
                        variant="outline"
                        className="text-xs border-teal-200 text-teal-700 hover:bg-teal-50 transition-colors"
                      >
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 group/feature hover:text-teal-600 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover/feature:bg-teal-500 transition-colors"></div>
                        <span className="text-sm text-gray-600 group-hover/feature:text-teal-600 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white group-hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Learn More About {project.name}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </StaggerContainer>

        {/* CTA Section */}
        <FadeIn direction="up" delay={0.4}>
          <div className="mt-20 text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Next App?</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore our growing portfolio of successful applications. Discover how our owned brands are transforming
                their respective industries.
              </p>
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg group"
              >
                Explore Our Apps
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
