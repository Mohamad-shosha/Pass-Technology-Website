"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { FadeIn } from "./animations/fade-in"
import { Counter } from "./animations/counter"
import { useState, useEffect } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-gray-50 to-teal-50 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-teal-200/30 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: "10%",
            left: "10%",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-blue-200/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            bottom: "20%",
            right: "15%",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <FadeIn direction="up" delay={0.2}>
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium animate-pulse">
                🚀 Leading UAE Tech Startup
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                From the Present
                <span className="block text-teal-500 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                  to the Future
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Parent company of five innovative applications spanning real estate, legal services, entertainment, and
                e-commerce. We build and operate our own portfolio of smart applications that simplify everyday life.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg group hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  Explore Our Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 px-8 py-4 text-lg bg-transparent hover:bg-gray-50 group hover:scale-105 transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>
            </FadeIn>

            {/* Animated Stats */}
            <FadeIn direction="up" delay={1.0}>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-gray-900">
                    <Counter end={50} suffix="+" />
                  </div>
                  <div className="text-gray-600 font-medium">Expert Professionals</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-gray-900">
                    <Counter end={5} suffix="+" />
                  </div>
                  <div className="text-gray-600 font-medium">Active Projects</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-gray-900">UAE</div>
                  <div className="text-gray-600 font-medium">Headquarters</div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="right" delay={0.5}>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-transparent rounded-3xl group-hover:from-teal-300/30 transition-all duration-500"></div>
                <div className="relative text-white space-y-8">
                  <h3 className="text-3xl font-bold">Innovation Excellence</h3>
                  <p className="text-teal-100 text-lg leading-relaxed">
                    We own and operate cutting-edge applications across real estate, legal services, entertainment, and
                    e-commerce sectors with global scalability.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <div className="text-2xl font-bold">Mobile First</div>
                      <div className="text-teal-100">iOS & Android</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <div className="text-2xl font-bold">Global Reach</div>
                      <div className="text-teal-100">Multi-language</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements with animation */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-200 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gray-200 rounded-full opacity-40 animate-pulse"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
