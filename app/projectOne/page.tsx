
"use client"

import { useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ProjectOnePage() {
  useEffect(() => {
    // Fade in animations
    const elements = document.querySelectorAll(".animate-fade-in")
    if (elements.length > 0) {
      gsap.fromTo(elements,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      {/* Header */}
      <div className="py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="animate-fade-in text-5xl md:text-6xl font-bold text-center text-white mb-16">
            Search-lite
          </h1>
          
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left column - Overview */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
                  Overview
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">Search-lite was looking to launch an innovative new way to recruit.</strong> They initially wanted a 3-4 thousand word lead magnet to get people interested.
                </p>
                
                <p>
                  After consultation we went with a very short whitepaper made mostly of easy-to-skim infographics, a series of emails that offered real value to readers, and a matching website with an interactive search light users could hover over to highlight candidates.
                </p>
                
                <p>
                  <strong className="text-white">See it live at the bottom of this page.</strong>
                </p>
                
                <p className="italic text-gray-400">
                  The client supplied the color scheme.
                </p>
              </div>
            </div>
            
            {/* Right column - Search-lite section */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
                  Search-lite
                </h2>
              </div>
              
              {/* Placeholder image */}
              <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl">
                <span className="text-gray-400 font-light text-lg">Search-lite Project Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

