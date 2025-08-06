import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, BarChart3, Briefcase, Users, Target } from "lucide-react"
import { FadeIn } from "./animations/fade-in"
import { StaggerContainer } from "./animations/stagger-container"
import { Counter } from "./animations/counter"

export function About() {
  const expertise = [
    {
      icon: Code,
      title: "Programming",
      description: "Expert developers creating robust, scalable applications using cutting-edge technologies",
      color: "bg-teal-50 text-teal-600",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creative designers crafting intuitive, beautiful user experiences that delight users",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Data specialists providing actionable insights for informed business decisions",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: Briefcase,
      title: "Business Development",
      description: "Strategic minds driving growth, partnerships, and market expansion initiatives",
      color: "bg-orange-50 text-orange-600",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              About Pass Technology
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming Ideas Into
              <span className="block text-teal-500 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                Smart Applications
              </span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Pass Technology is a UAE-based parent company that owns and operates five innovative applications. Our
              portfolio includes Dr. Broker App, Dr. Lawyer App, JAD App, Balkee Store, and Glosa Store - each designed
              to simplify everyday life and enhance digital experiences.
            </p>
          </FadeIn>
        </div>

        {/* Company Stats with Animation */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-20" staggerDelay={0.2}>
          <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg group">
            <div className="bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">
              <Counter end={50} suffix="+" />
            </div>
            <div className="text-gray-600 font-medium">Dedicated Professionals</div>
            <p className="text-sm text-gray-500 mt-2">Expert team across all disciplines</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg group">
            <div className="bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">
              <Counter end={5} suffix="+" />
            </div>
            <div className="text-gray-600 font-medium">Active Projects</div>
            <p className="text-sm text-gray-500 mt-2">Innovative solutions in development</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg group">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">UAE</div>
            <div className="text-gray-600 font-medium">Based & Founded</div>
            <p className="text-sm text-gray-500 mt-2">Serving local & regional markets</p>
          </div>
        </StaggerContainer>

        {/* Expertise Areas */}
        <div>
          <FadeIn direction="up" delay={0.2}>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Expertise</h3>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {expertise.map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 group hover:scale-105 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${item.color} group-hover:scale-110 transition-all duration-300 group-hover:rotate-3`}
                  >
                    <item.icon className="h-10 w-10" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggerContainer>
        </div>

        {/* Mission Statement */}
        <FadeIn direction="up" delay={0.3}>
          <div className="mt-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl p-12 text-white text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              We are committed to building and scaling innovative applications that serve both local and regional
              markets. Our diverse portfolio of owned applications spans real estate, legal services, entertainment,
              e-commerce, and lifestyle sectors, all designed to improve quality of life and boost business efficiency.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
