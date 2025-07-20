
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
          
          {/* Additional sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16">
            {/* Left column - Developed responsive website */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
                  Developed responsive website
                </h2>
              </div>
              
              {/* Desktop and Mobile mockup placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl mb-4">
                <span className="text-gray-400 font-light text-lg">Desktop & Mobile Mockup</span>
              </div>
              
              <p className="text-gray-300 text-sm">
                Designed content presentation for different screen sizes.
              </p>
            </div>
            
            {/* Right column - Designed interaction */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
                  Designed interaction.
                </h2>
              </div>
              
              {/* Interactive design placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl mb-4">
                <span className="text-gray-400 font-light text-lg">Interactive Design Mockup</span>
              </div>
              
              <p className="text-gray-300 text-sm mb-4">
                An interactive search light swept in from the side and moved over candidates when user hovered. See it live on the site <a href="#" className="text-blue-400 hover:underline">here</a>.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16">
            {/* Left column - Developed responsive website */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
                  Developed responsive website
                </h2>
              </div>
              
              {/* Desktop and Mobile mockup placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl mb-4">
                <span className="text-gray-400 font-light text-lg">Desktop & Mobile Mockup</span>
              </div>
              
              <p className="text-gray-300 text-sm">
                Designed content presentation for different screen sizes.
              </p>
            </div>
            
            {/* Right column - Designed interaction */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
                  stuff
                </h2>
              </div>
              
              {/* Interactive design placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl mb-4">
                <span className="text-gray-400 font-light text-lg">stuff</span>
              </div>
              
              <p className="text-gray-300 text-sm mb-4">
                An interactive search light swept in from the side and moved over candidates when user hovered. See it live on the site <a href="#" className="text-blue-400 hover:underline">here</a>.
              </p>
            </div>
          </div>
          
          {/* End goal section */}
          <div className="mt-24 animate-fade-in">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
                End goal
              </h2>
            </div>
            
            <p className="text-gray-300 text-lg mb-8">
              Contact requests. That's it.
            </p>
            
            {/* Image placeholder */}
            
          </div>
          
          {/* How section */}
          <div className="mt-16 animate-fade-in">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
                How
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">1) Lead magnet leading to a drip email campaign.</strong>
              </p>
              
              <p>
                <strong className="text-white">2) Easy-to-skim website. Short, packed with enough relevance to drive a contact request.</strong>
              </p>
              
              <p className="italic">
                Everything reinforces the 'search-lite' metaphor. Everything is the shortest route possible to a contact request.
              </p>
            </div>
          </div>
          <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl mb-12">
              <span className="text-gray-400 font-light text-lg">End Goal Image</span>
            </div>
          {/* Specifics section */}
          <div className="mt-16 animate-fade-in">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
                Specifics
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">1) Do user research to understand what the audience valued.</strong><br />
                Secondary research, asking lots of questions to the search-lite team about what their audience sweats about and responds well to.
              </p>
              
              <p>
                <strong className="text-white">2) Use the research to create a short easy-to-consume document the target audience would actually want to read.</strong>
              </p>
              
              <p>
                <strong className="text-white">3) Use the research to create a series of emails - the first one packing serious value so the readers would want to open the following emails. Each email offering a predefined value point. Each email supporting the Search-lite USP. No sudden pivot to a pitch email, instead each email offers a compelling reason to connect and get more info.</strong>
              </p>
              
              <p>
                <strong className="text-white">4) Use the research to create a website hitting every point needed to support the email campaign. Short, purely to convert readers to a contact request. Little organic traffic, mostly traffic from campaigns.</strong>
              </p>
            </div>
          </div>
          {/* Lead magnet section */}
          <div className="mt-24 animate-fade-in">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
                Lead magnet
              </h2>
            </div>
            
            <p className="text-gray-300 text-lg mb-8">
              The lead magnet set the tone for the following emails.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left column - Description */}
              <div>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    The cover page was the first impression. It had to promise real value to clients looking for a recruiting solution, also had to reinforce the searchlite idea (yet to be revealed).
                  </p>
                  
                  <p>
                    The out-of-focus element needs to be resolved. The last page brings it into focus when we introduce the search-light name.
                  </p>
                </div>
                
                {/* Lead magnet cover image placeholder */}
                <div className="w-full h-80 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl mt-8">
                  <span className="text-gray-400 font-light text-lg">Lead Magnet Cover</span>
                </div>
              </div>
              
              {/* Right column - First page details */}
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    The first page:
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <p>1) gave a quick way for the reader to figure out if it was worth reading</p>
                    <p>2) promised the reader it would be short (around 6 pages).</p>
                  </div>
                </div>
                
                {/* First page image placeholder */}
                <div className="w-full h-80 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl">
                  <span className="text-gray-400 font-light text-lg">First Page Layout</span>
                </div>
              </div>
            </div>
          </div>

          {/* Later pages section */}
          <div className="mt-24 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left column - Later pages */}
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Later pages:
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Easy to skim, lots of whitespace. Made sense right away and made a complex industry feel less complex.
                  </p>
                </div>
                
                {/* Later pages image placeholder */}
                <div className="w-full h-80 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl">
                  <span className="text-gray-400 font-light text-lg">Later Pages Layout</span>
                </div>
              </div>
              
              {/* Right column - Last page */}
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    The last page:
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Brought the out-of-focus picture into focus, tied into the 'search-lite' theme, and neatly wrapped up the USP with a call to action.
                  </p>
                </div>
                
                {/* Last page image placeholder */}
                <div className="w-full h-80 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl">
                  <span className="text-gray-400 font-light text-lg">Last Page Layout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search light graphic section */}
        <div className="mt-24 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 text-lg mb-8">
              Constructing the search light graphic that highlights each tip in the whitepaper.
            </p>
            
            {/* Search light construction image */}
            <div className="w-full max-w-2xl mx-auto">
              <div className="w-full h-80 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl">
                  <span className="text-gray-400 font-light text-lg">Later Pages Layout</span>
                </div>
            </div>
          </div>
        </div>
        
        {/* Emails section */}
        <div className="mt-24 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
              Emails
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Created the subject headings first based on user research. Challenged their usefulness. Incorporated search-lite strengths into each email, with a suggestion to talk to learn more.
            </p>
            
            <p className="italic text-gray-400">
              Emails are confidential.
            </p>
          </div>
        </div>

        {/* Developing the site section */}
        <div className="mt-24 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
              Developing the site
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              <strong className="text-white">Keep it simple, get it done quick.</strong>
            </p>
            
            <p>
              Website was designed to support the campaign and address the audience pain points we uncovered early in the process. We wanted to build the site quickly and keep it as efficient as possible.
            </p>
            
            <p>
              <strong className="text-white">Make it easy to contact the company.</strong><br />
              There is a button fixed to the left side of the page that stays there as you scroll. No need to find how to contact - the button is waiting.<br />
              Disappears on mobile because the real estate is too cramped.
            </p>
          </div>
          
          {/* Website mockup image */}
          <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl mt-8">
            <span className="text-gray-400 font-light text-lg">Website with Fixed Contact Button</span>
          </div>
        </div>

        {/* Interactive header section */}
        <div className="mt-24 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
              Interactive header
            </h2>
          </div>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            A big part of the experience is an interactive search-lite functionality in the header that scrolls across the screen at the start. Hovering or tapping lets users direct the searchlight over the candidates.
          </p>
          
          {/* Interactive header image placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl">
            <span className="text-gray-400 font-light text-lg">Interactive Header Demo</span>
          </div>
        </div>
        <div className="mt-24 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
              Interactive header
            </h2>
          </div>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            A big part of the experience is an interactive search-lite functionality in the header that scrolls across the screen at the start. Hovering or tapping lets users direct the searchlight over the candidates.
          </p>
          
          {/* Interactive header image placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl">
            <span className="text-gray-400 font-light text-lg">Interactive Header Demo</span>
          </div>
        </div>
        <div className="mt-24 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
              Interactive header
            </h2>
          </div>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            A big part of the experience is an interactive search-lite functionality in the header that scrolls across the screen at the start. Hovering or tapping lets users direct the searchlight over the candidates.
          </p>
          
          {/* Interactive header image placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl">
            <span className="text-gray-400 font-light text-lg">Interactive Header Demo</span>
          </div>
        </div>
        <div className="mt-24 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
              Interactive header
            </h2>
          </div>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            A big part of the experience is an interactive search-lite functionality in the header that scrolls across the screen at the start. Hovering or tapping lets users direct the searchlight over the candidates.
          </p>
          
          {/* Interactive header image placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl">
            <span className="text-gray-400 font-light text-lg">Interactive Header Demo</span>
          </div>
        </div>
        <div className="mt-24 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
              Interactive header
            </h2>
          </div>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            A big part of the experience is an interactive search-lite functionality in the header that scrolls across the screen at the start. Hovering or tapping lets users direct the searchlight over the candidates.
          </p>
          
          {/* Interactive header image placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl">
            <span className="text-gray-400 font-light text-lg">Interactive Header Demo</span>
          </div>
        </div>
        <div className="mt-24 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
              Interactive header
            </h2>
          </div>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            A big part of the experience is an interactive search-lite functionality in the header that scrolls across the screen at the start. Hovering or tapping lets users direct the searchlight over the candidates.
          </p>
          
          {/* Interactive header image placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl">
            <span className="text-gray-400 font-light text-lg">Interactive Header Demo</span>
          </div>
        </div>
        <div className="mt-24 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
              Interactive header
            </h2>
          </div>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            A big part of the experience is an interactive search-lite functionality in the header that scrolls across the screen at the start. Hovering or tapping lets users direct the searchlight over the candidates.
          </p>
          
          {/* Interactive header image placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl">
            <span className="text-gray-400 font-light text-lg">Interactive Header Demo</span>
          </div>
        </div>
        <div className="mt-24 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
              Interactive header
            </h2>
          </div>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            A big part of the experience is an interactive search-lite functionality in the header that scrolls across the screen at the start. Hovering or tapping lets users direct the searchlight over the candidates.
          </p>
          
          {/* Interactive header image placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl">
            <span className="text-gray-400 font-light text-lg">Interactive Header Demo</span>
          </div>
        </div>
        <div className="mt-24 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">
              Interactive header
            </h2>
          </div>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            A big part of the experience is an interactive search-lite functionality in the header that scrolls across the screen at the start. Hovering or tapping lets users direct the searchlight over the candidates.
          </p>
          
          {/* Interactive header image placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center shadow-2xl">
            <span className="text-gray-400 font-light text-lg">Interactive Header Demo</span>
          </div>
        </div>
      </div>
      
      {/* Fixed Contact Button - positioned on left side, hidden on mobile */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      </div>
    </div>
  )
}

