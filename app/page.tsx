"use client"

import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Page() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const skills = [
    { name: "USER RESEARCH", description: "Deep dive into user behavior, pain points, and motivations to inform data-driven decisions." },
    { name: "UX WRITING", description: "Crafting clear, compelling copy that guides users through seamless experiences." },
    { name: "TECHNICAL WRITING", description: "Translating complex technical concepts into accessible documentation and guides." },
    { name: "ANALYTICS", description: "Setting up tracking, analyzing data patterns, and extracting actionable insights for growth." },
    { name: "SEO", description: "Optimizing content and technical elements to improve search visibility and organic traffic." },
    { name: "STRATEGY", description: "Developing comprehensive growth strategies aligned with business objectives and market opportunities." },
    { name: "SOCIAL MEDIA", description: "Creating engaging content strategies and managing community growth across platforms." },
    { name: "LEAD MAGNETS", description: "Designing high-converting lead generation assets that attract and capture qualified prospects." },
    { name: "INTERACTIONS", description: "Optimizing user interactions and conversion funnels to maximize engagement and retention." },
    { name: "WEB DEVELOPMENT", description: "Building and optimizing websites with focus on performance, user experience, and conversion." }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      <div className="flex flex-col h-screen">
        {/* Hero section taking up 3/4 the screen height */}
        <div className="flex flex-row h-3/4 items-center justify-center px-8 md:px-16 py-12 gap-8 md:gap-20">
          {/* Left side - Text content */}
          <div className="flex-1 max-w-2xl">
            {/* Main heading with light weight and gray color */}
            <h1 className="text-7xl md:text-7xl bg-gradient-to-r from-violet-500 to-white-500 bg-clip-text text-transparent text-7xl font-extrabold tracking-wide mb-4 tracking-wide">MarTech</h1>
            {/* Primary heading with large bold text */}
            <h2 className="text-7xl md:text-8xl bg-gradient-to-r from-violet-500 to-white-500 bg-clip-text text-transparent text-8xl font-extrabold tracking-wideleading-none mb-4">
               Growth</h2>
            <h2 className="text-7xl md:text-8xl bg-gradient-to-r from-violet-500 to-white-500 bg-clip-text text-transparent text-8xl font-extrabold tracking-wideleading-none mb-6">
               Analytics</h2>
                           {/* Secondary heading matching the first */}
            <h3 className="text-6xl md:text-6xl bg-gradient-to-r from-violet-500 to-white-500 bg-clip-text text-transparent text-7xl font-extrabold tracking-wide">Coding</h3>
            {/* Decorative gradient line */}
            {/*   <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mt-8 mb-16"></div>*/}
          </div>
          {/* Right side - Photo placeholder with modern styling */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl flex items-center justify-center shadow-2xl border border-gray-600 flex-shrink-0">
            <span className="text-gray-400 font-light text-lg">Photo placeholder</span>
          </div>
        </div>
        
        {/* About section taking up the lower 1/4 */}
        <div className="flex flex-row h-3/4 items-center justify-center px-8 md:px-16 py-8 bg-gradient-to-br from-gray-800 via-slate-800 to-gray-900 overflow-y-auto">
          <div className="max-w-4xl w-full">
            {/* Section heading with modern styling */}
            <h2 className=" text-4xl md:text-5xl font-bold text-white mt-30 mb-10">Hi!</h2>
            <div className="w-20 bg-gradient-to-r from-blue-400 to-purple-500 mb-6"></div>
            
            {/* Introduction text with modern typography */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-light h-1">
              It's fair to say I lean towards the conscientious side of the spectrum. Feel responsible for:
            </p>
            
            {/* Responsibility list with modern styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="flex items-start p-4 md:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
                <span className="text-blue-400 font-bold text-lg mr-3 md:mr-4 mt-1">1)</span>
                <span className="text-gray-200 font-medium text-base md:text-lg">Reaching more of the total addressable market</span>
              </div>
              <div className="flex items-start p-4 md:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
                <span className="text-blue-400 font-bold text-lg mr-3 md:mr-4 mt-1">2)</span>
                <span className="text-gray-200 font-medium text-base md:text-lg">Increasing conversion rates</span>
              </div>
              <div className="flex items-start p-4 md:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
                <span className="text-blue-400 font-bold text-lg mr-3 md:mr-4 mt-1">3)</span>
                <span className="text-gray-200 font-medium text-base md:text-lg">Retaining more</span>
              </div>
              <div className="flex items-start p-4 md:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
                <span className="text-blue-400 font-bold text-lg mr-3 md:mr-4 mt-1">4)</span>
                <span className="text-gray-200 font-medium text-base md:text-lg">Building better advocates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Work section */}
      <div className="py-16 px-8 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Recent Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-16"></div>
          
          {/* Work cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all hover:transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-400 font-light">Project Image</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Project One</h3>
              <p className="text-gray-300 leading-relaxed">Description of the first project showcasing marketing analytics and growth strategies.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all hover:transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-400 font-light">Project Image</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Project Two</h3>
              <p className="text-gray-300 leading-relaxed">Description of the second project demonstrating conversion optimization and data analysis.</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all hover:transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-400 font-light">Project Image</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Project Three</h3>
              <p className="text-gray-300 leading-relaxed">Description of the third project highlighting customer retention and advocacy building.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Break section with tree and camping text */}
      <div className="py-16 px-8 md:px-16 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tree icon */}
          <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center">
            <svg className="w-12 h-12 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L8 8h2v2L6 14h2v2L4 20h16l-4-4h2v-2l-4-4h2v-2L12 2z"/>
            </svg>
          </div>
          
          {/* Break text */}
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
            Camping style ranges from full-on mountain man in the woods to swanky log cabins on AirBnB.
          </p>
        </div>
      </div>
      
      {/* More Work section */}
      <div className="py-16 px-8 md:px-16 bg-gradient-to-br from-slate-800 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Work cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 7 */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all hover:transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-400 font-light">Project Image</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Project Seven</h3>
              <p className="text-gray-300 leading-relaxed">Description of the seventh project showcasing outdoor adventure analytics and user engagement.</p>
            </div>
            
            {/* Card 8 */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all hover:transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-400 font-light">Project Image</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Project Eight</h3>
              <p className="text-gray-300 leading-relaxed">Description of the eighth project highlighting travel and hospitality marketing optimization.</p>
            </div>
            
            {/* Card 9 */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all hover:transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-400 font-light">Project Image</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Project Nine</h3>
              <p className="text-gray-300 leading-relaxed">Description of the ninth project demonstrating outdoor lifestyle brand growth and community building.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Break section with growth firefighter text */}
      <div className="py-16 px-8 md:px-16 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          {/* Arrow up icon */}
          <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center">
            <svg className="w-12 h-12 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l-8 8h5v10h6V10h5z"/>
            </svg>
          </div>
          
          {/* Break text */}
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
            If I have free time, I spend it reviewing what's emerging or developing the skills required to shorten the distance between insight and action. I want to be a growth firefighter who dives in and gets the job done. Whether I am or not is debatable - lets call it a work in progress.
          </p>
        </div>
      </div>
      
      {/* People say testimonial section */}
      <div className="py-16 px-8 md:px-16 bg-gradient-to-br from-slate-800 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <h2 className="text-3xl md:text-4xl font-light text-gray-300 mb-2">People say...</h2>
          <div className="w-20 h-0.5 bg-gray-600 mb-12"></div>
          
          {/* Testimonial carousel */}
          <Carousel className="w-full">
            <CarouselContent>
              {/* Testimonial 1 */}
              <CarouselItem>
                <div className="bg-gray-200/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700">
                  {/* Quote icon */}
                  <div className="flex justify-center mb-8">
                    <svg className="w-12 h-12 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  
                  {/* Company names */}
                  <p className="text-center text-gray-300 font-medium mb-6">
                    Coming from companies like PayPal, Slide, YouTube, and Google,
                  </p>
                  
                  {/* Testimonial text */}
                  <p className="text-center text-gray-300 text-lg leading-relaxed mb-8">
                    I've been part of some great teams and I can easily say Edward is a great guy to have on your team. He's a big-picture thinker who's consistently able to turn abstract concepts into messages everyone can relate to.
                  </p>
                  
                  {/* Attribution */}
                  <p className="text-center">
                    <span className="text-green-400 font-medium">Ken Brownfield</span>
                    <span className="text-gray-400"> - cofounder, Asymmetrica Labs</span>
                  </p>
                  
                  {/* Profile image */}
                  <div className="flex justify-center mt-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full border-2 border-gray-600 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">KB</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              {/* Testimonial 2 */}
              <CarouselItem>
                <div className="bg-gray-200/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700">
                  {/* Quote icon */}
                  <div className="flex justify-center mb-8">
                    <svg className="w-12 h-12 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  
                  {/* Company names */}
                  <p className="text-center text-gray-300 font-medium mb-6">
                    From leading tech companies and startups,
                  </p>
                  
                  {/* Testimonial text */}
                  <p className="text-center text-gray-300 text-lg leading-relaxed mb-8">
                    Edward brings exceptional analytical thinking and strategic insight to every project. His ability to translate complex data into actionable marketing strategies is unmatched.
                  </p>
                  
                  {/* Attribution */}
                  <p className="text-center">
                    <span className="text-green-400 font-medium">Sarah Johnson</span>
                    <span className="text-gray-400"> - VP Marketing, TechCorp</span>
                  </p>
                  
                  {/* Profile image */}
                  <div className="flex justify-center mt-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full border-2 border-gray-600 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">SJ</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              {/* Testimonial 3 */}
              <CarouselItem>
                <div className="bg-gray-200/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700">
                  {/* Quote icon */}
                  <div className="flex justify-center mb-8">
                    <svg className="w-12 h-12 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  
                  {/* Company names */}
                  <p className="text-center text-gray-300 font-medium mb-6">
                    Working across Fortune 500 companies,
                  </p>
                  
                  {/* Testimonial text */}
                  <p className="text-center text-gray-300 text-lg leading-relaxed mb-8">
                    A true growth hacker who combines technical expertise with creative problem-solving. Edward consistently delivers results that exceed expectations.
                  </p>
                  
                  {/* Attribution */}
                  <p className="text-center">
                    <span className="text-green-400 font-medium">Mike Chen</span>
                    <span className="text-gray-400"> - Director of Growth, DataFlow</span>
                  </p>
                  
                  {/* Profile image */}
                  <div className="flex justify-center mt-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full border-2 border-gray-600 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">MC</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
          
          {/* Instructions */}
          <p className="text-center text-gray-500 text-sm mt-6 italic">
            Click arrows to navigate testimonials. Green names link to LinkedIn profiles.
          </p>
        </div>
      </div>
      
      {/* Snapshots section */}
      <div className="py-16 px-8 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <h2 className="text-3xl md:text-4xl font-light text-gray-300 mb-2">Snapshots</h2>
          <div className="w-20 h-0.5 bg-gray-600 mb-6"></div>
          
          {/* Subtitle */}
          <p className="text-gray-400 mb-4">Growth tactics that get results.</p>
          <p className="text-gray-500 text-sm mb-12">Click to dig deeper. Want to see in more detail? I'm happy to grab a coffee or talk sometime.</p>
          
          {/* Skills list */}
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <button
                  onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                  className="flex items-center text-left w-full hover:text-green-400 transition-colors"
                >
                  <div className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-white font-medium text-lg">{skill.name}</span>
                </button>
                
                {/* Expandable description */}
                {selectedSkill === skill.name && (
                  <div className="ml-7 mt-3 mb-4">
                    <p className="text-gray-300 leading-relaxed">{skill.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer CTA */}
      <div className="py-20 px-8 md:px-16 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          {/* CTA heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to grow?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          
          {/* CTA description */}
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-12 max-w-3xl mx-auto">
            Let's discuss how we can accelerate your growth, optimize conversions, and build better customer experiences together.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
              Get in touch
            </button>
            <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 hover:text-white transition-all">
              View my work
            </button>
          </div>
          
          {/* Contact info */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © 2024 Edward Marketing Analytics. Let's build something great together.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
