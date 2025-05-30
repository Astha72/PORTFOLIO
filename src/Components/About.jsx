import React from 'react';
import { User } from "lucide-react";

function About() {
  return (
    <div className="bg-white px-6 py-12">
      <h1 className="text-4xl font-bold text-black text-center">About Me</h1>
      <div className="mt-4 h-2 w-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <p className="text-center mt-4 text-gray-600">
        Get to know me better and see how I can help bring your digital ideas to life
      </p>

      <div className="mt-12 flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
        
        {/* Left: Card */}
        <div className="w-80 h-80 relative bg-[#1e1e1e] text-white rounded-2xl p-12 shadow-xl">
          {/* Binary Code Background */}
          <div className="absolute inset-0 text-xs text-blue-900 opacity-20 font-mono p-4 pointer-events-none">
            <div className="absolute top-4 left-4">001011011010</div>
            <div className="absolute top-10 right-6">101101</div>
            <div className="absolute bottom-6 left-4">1001001111010</div>
          </div>

          {/* Center Icon */}
          <div className="flex justify-center items-center h-full z-10 relative">
            <User size={64} strokeWidth={1.5} className="text-white opacity-80" />
          </div>

          {/* Tags */}
          <div className="absolute top-2 right-2 bg-white text-blue-600 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">Flutter</div>
          <div className="absolute bottom-2 left-2 bg-white text-pink-600 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">React Native</div>
          <div className="absolute top-1/2 right-[-1.5rem] translate-y-[-50%] bg-white text-black text-sm font-semibold px-3 py-1 rounded-full shadow-sm">Web Dev</div>
        </div>

        {/* Right: Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Full-Stack Mobile & Web Developer
          </h2>
          <p className="text-gray-700 mb-4">
            Hi, I'm <strong>Astha Gautam</strong>, a passionate Full-Stack Developer with over a year of experience creating
            high-performance applications and intuitive user interfaces. I specialize in both mobile and web development,
            with expertise across multiple technologies and platforms.
          </p>
          <p className="text-gray-700">
            My journey in software development has equipped me with the skills to turn complex problems into elegant solutions.
            I'm committed to writing clean, maintainable code and creating applications that not only look great but perform exceptionally well.
          </p>
          <div>
                <br />
    <h3 className="text-xl font-bold text-black mb-4">My Tech Stack</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[
        { name: "Flutter", short: "F", bg: "bg-blue-100", text: "text-blue-500" },
        { name: "React Native", short: "R", bg: "bg-pink-100", text: "text-pink-500" },
        { name: "Java", short: "J", bg: "bg-blue-100", text: "text-blue-500" },
        { name: "Kotlin", short: "K", bg: "bg-pink-100", text: "text-pink-500" },
        { name: "Laravel", short: "L", bg: "bg-blue-100", text: "text-blue-500" },
        { name: "PHP", short: "P", bg: "bg-pink-100", text: "text-pink-500" },
      ].map((tech) => (
        <div key={tech.name} className="flex items-center gap-4 bg-white shadow-md px-4 py-3 rounded-xl">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${tech.bg} ${tech.text}`}>
            {tech.short}
          </div>
          <span className="font-medium text-gray-800">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Feature Highlights */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
    {/* Experience */}
    <div className="flex items-start gap-4">
      <div className="bg-blue-100 text-blue-500 rounded-full p-3">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M6 7V6a2 2 0 012-2h8a2 2 0 012 2v1m-1 4v9a2 2 0 01-2 2H9a2 2 0 01-2-2v-9h10zM6 7h12"></path>
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-black">Experience</h4>
        <p className="text-gray-600">1+ years in Full-Stack Development</p>
      </div>
    </div>

    {/* Fast Delivery */}
    <div className="flex items-start gap-4">
      <div className="bg-pink-100 text-pink-500 rounded-full p-3">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M13 2l3 7h7l-5.5 4.5 2 7L13 17l-6.5 3.5 2-7L3 9h7z"></path>
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-black">Fast Delivery</h4>
        <p className="text-gray-600">Quick turnaround time on projects</p>
      </div>
    </div>

    {/* Creative Solutions */}
    <div className="flex items-start gap-4">
      <div className="bg-blue-100 text-blue-500 rounded-full p-3">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 0110 10c0 5.25-3.75 10-10 10S2 17.25 2 12A10 10 0 0112 2z"></path>
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-black">Creative Solutions</h4>
        <p className="text-gray-600">Innovative approaches to problems</p>
      </div>
    </div>

    {/* Timely Support */}
    <div className="flex items-start gap-4">
      <div className="bg-pink-100 text-pink-500 rounded-full p-3">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-black">Timely Support</h4>
        <p className="text-gray-600">Responsive and reliable assistance</p>
      </div>
    </div>
  </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
