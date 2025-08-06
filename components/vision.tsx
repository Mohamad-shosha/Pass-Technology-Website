import { Card, CardContent } from "@/components/ui/card"
import { Target, Lightbulb, TrendingUp, Rocket, Globe, Award } from "lucide-react"
import { FadeIn } from "./animations/fade-in"
import { StaggerContainer } from "./animations/stagger-container"

export function Vision() {
  const values = [
    {
      icon: Target,
      title: "Our Vision",
      description:
        "To become one of the leading tech companies in the region by delivering practical and smart applications that transform industries.",
      color: "bg-teal-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We transform creative ideas into smart applications that simplify everyday life and enhance digital experiences across all sectors.",
      color: "bg-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description:
        "We focus on improving quality of life and boosting business efficiency across local and regional markets with scalable solutions.",
      color: "bg-purple-500",
    },
  ]

  const achievements = [
    {
      icon: Rocket,
      title: "Innovation Excellence",
      description: "Cutting-edge technology solutions",
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "International franchise opportunities",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Premium user experiences",
    },
  ]

  return (
    <section
      id="vision"
      className="py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm font-medium mb-6">
              Our Vision & Mission
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From the Present
              <span className="block text-teal-400 bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">
                to the Future
              </span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              As a parent company driving technological innovation across the UAE and beyond, we're committed to
              building and scaling applications that make a meaningful impact on businesses and communities.
            </p>
          </FadeIn>
        </div>

        {/* Vision Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-20" staggerDelay={0.2}>
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-500 group hover:scale-105 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`${value.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-teal-300 transition-colors">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </StaggerContainer>

        {/* Commitment Section */}
        <FadeIn direction="up" delay={0.4}>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-white/10 hover:bg-white/10 transition-all duration-500">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6">Our Commitment to Excellence</h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                With a team of 50 dedicated professionals specializing in programming, design, data analysis, and
                business development, we are committed to building and scaling our portfolio of innovative applications
                that serve both local and regional markets.
              </p>
            </div>

            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="bg-teal-500/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500/30 group-hover:scale-110 transition-all duration-300">
                    <achievement.icon className="h-8 w-8 text-teal-400" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-teal-300 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        {/* Portfolio Highlight */}
        <FadeIn direction="up" delay={0.5}>
          <div className="text-center bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-3xl p-12 border border-teal-500/30 hover:from-teal-500/30 hover:to-blue-500/30 transition-all duration-500">
            <h3 className="text-3xl font-bold mb-6">Diverse Portfolio Impact</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive portfolio spans real estate, legal services, entertainment, e-commerce, and lifestyle
              applications. Each solution is designed with scalability, user experience, and business efficiency in
              mind.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {[
                { title: "Real Estate", subtitle: "Dr. Broker App", color: "text-teal-400" },
                { title: "Legal Services", subtitle: "Dr. Lawyer App", color: "text-blue-400" },
                { title: "Entertainment", subtitle: "JAD App", color: "text-green-400" },
                { title: "Fashion", subtitle: "Bulky Store", color: "text-pink-400" },
                { title: "Cosmetics", subtitle: "Glosa Store", color: "text-orange-400" },
              ].map((item, index) => (
                <div key={index} className="group hover:scale-110 transition-all duration-300">
                  <div className={`text-2xl font-bold ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
