'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

// Social Link Component
function SocialLink({ href, icon, label, color = "cyan" }: any) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`
        flex items-center gap-4 p-4 rounded-xl border backdrop-blur-sm
        bg-black/40 border-${color}-400/30 text-${color}-300
        hover:bg-${color}-400/10 hover:border-${color}-400/50
        transition-all duration-300 group w-full
      `}
    >
      <span className="text-2xl">{icon}</span>
      <div className="flex-1">
        <div className="font-semibold text-lg">{label}</div>
        <div className="text-sm opacity-70">Visit Profile</div>
      </div>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="text-lg opacity-0 group-hover:opacity-100 transition-opacity"
      >
        →
      </motion.span>
    </motion.a>
  )
}

export default function PersonalProfile() {
  // Your personal data - update these with your actual information
  const personalData = {
    name: "SHASHVAT TIWARI",
    title: "Full Stack Software Engineer",
    description: "A passionate Full-Stack Developer specializing in modern web technologies. I create scalable, performant applications with cutting-edge tech stacks and focus on delivering exceptional user experiences. With expertise in both frontend and backend development, I bring ideas to life through clean code and innovative solutions.",
    
    education: {
      degree: "B.Tech in Computer Science and Engineering",
      university: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
      duration: "2021 - 2025",
      gpa: "8.5/10.0",
      coursework: ["Data Structures", "Algorithms", "Web Technologies", "Database Systems", "Computer Networks", "Software Engineering"]
    },
    
    profiles: {
      professional: [
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/shashvat-tiwari-88436723b/", icon: "💼", color: "blue" },
        { platform: "GitHub", url: "https://github.com/shashwatiwari", icon: "🐙", color: "gray" }
      ],
      coding: [
        { platform: "LeetCode", url: "https://leetcode.com/shash11", icon: "⚡", color: "yellow" },
        { platform: "CodeChef", url: "https://codechef.com/users/shash11", icon: "🍴", color: "red" },
        { platform: "GFG", url: "https://geeksforgeeks.org/user/shash11", icon: "💻", color: "green" },
        { platform: "Codeforces", url: "https://codeforces.com/profile/shashwatiwari", icon: "🌀", color: "blue" }
      ]
    },
    
    resume: {
      url: "https://drive.google.com/file/d/1TZmhBC89KnW6pEz1uItWdc8-OBEIjdMV/view?usp=sharing",
      onlineUrl: "https://drive.google.com/file/d/1TZmhBC89KnW6pEz1uItWdc8-OBEIjdMV/view?usp=sharing"
    }
  }

  return (
    <section className="min-h-screen relative overflow-hidden py-20">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-cyan-900/10"></div>
      <div className="absolute inset-0 bg-cyber-grid bg-[length:80px_80px] opacity-10"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -50, null],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Section: Photo + Introduction */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24"> {/* Increased gap */}
          
          {/* Left: Photo & Basic Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-10" 
          >
            {/* Enhanced Profile Photo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group mx-auto max-w-sm"
            >
              <div className="relative w-full aspect-square rounded-2xl border-2 border-cyan-400/40 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 overflow-hidden shadow-2xl shadow-cyan-400/20">
                <Image
                  src="/images/profile.png"
                  alt="Shashwat Tiwari"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              
              {/* Enhanced Photo Frame Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/60 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl shadow-cyan-400/30" />
              
              {/* Subtle glow */}
              <div className="absolute -inset-4 bg-cyan-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
            </motion.div>

            {/* Enhanced Name & Designation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center space-y-6" 
            >
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-cyan-300 cyber-text mb-4 leading-tight">
                  {personalData.name}
                </h1>
                <h2 className="text-2xl lg:text-3xl text-cyan-400 font-light mb-2">
                  {personalData.title}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mt-4"></div>
              </div>
              
              {/* Enhanced Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href={personalData.resume.url}
                  download
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold py-4 px-8 rounded-xl text-center hover:shadow-2xl hover:shadow-cyan-400/40 transition-all duration-300 shadow-lg shadow-cyan-400/20"
                >
                  📄 Download Resume
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Enhanced Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <div className="bg-black/50 backdrop-blur-lg rounded-3xl border border-cyan-400/30 p-10 hover:border-cyan-400/50 transition-all duration-500 shadow-2xl shadow-cyan-400/10 w-full">
              {/* Section Header with Icon */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-cyan-300 cyber-text">
                  About Me
                </h2>
              </div>
              
              <p className="text-cyan-200 text-lg leading-relaxed mb-10 text-justify">
                {personalData.description}
              </p>

              {/* Enhanced Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Projects", value: "15+", icon: "🚀", color: "from-purple-500 to-cyan-400" },
                  { label: "Technologies", value: "20+", icon: "🛠️", color: "from-cyan-500 to-blue-400" },
                  { label: "Code Problems", value: "1500+", icon: "⚡", color: "from-yellow-500 to-amber-400" },
                  { label: "Experience", value: "1+ Years", icon: "💼", color: "from-green-500 to-emerald-400" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center p-5 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group"
                  >
                    <div className={`text-2xl mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.icon}
                    </div>
                    <div className="text-cyan-300 font-bold text-xl mb-1">{stat.value}</div>
                    <div className="text-cyan-200 text-sm group-hover:text-cyan-300 transition-colors">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Education + Profiles */}
        <div className="grid lg:grid-cols-2 gap-16"> {/* Increased gap */}
          
          {/* Enhanced Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-black/50 backdrop-blur-lg rounded-3xl border border-cyan-400/30 p-10 hover:border-cyan-400/50 transition-all duration-500 shadow-2xl shadow-cyan-400/10 h-full">
              {/* Enhanced Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-300">Education</h3>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-xl text-cyan-200 font-semibold">{personalData.education.degree}</h4>
                  <p className="text-cyan-300/80 text-lg">{personalData.education.university}</p>
                  <p className="text-cyan-400 text-lg font-semibold bg-cyan-400/10 px-4 py-2 rounded-lg inline-block">
  {personalData.education.duration}
  <span className="mx-3 text-cyan-500"></span>
  GPA: {personalData.education.gpa}
</p>

                </div>
                
                <div>
                  <p className="text-cyan-200 text-lg font-semibold mb-4">Key Coursework:</p>
                  <div className="flex flex-wrap gap-3">
                    {personalData.education.coursework.map((course, index) => (
                      <motion.span
                        key={course}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-300 text-sm hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Profiles Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-10"
          >
            {/* Professional Profiles - Single Column for better readability */}
            <div className="bg-black/50 backdrop-blur-lg rounded-3xl border border-cyan-400/30 p-8 hover:border-cyan-400/50 transition-all duration-500 shadow-2xl shadow-cyan-400/10">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-3">
                <span className="text-2xl">🔗</span> Professional Profiles
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {personalData.profiles.professional.map((profile, index) => (
                  <SocialLink
                    key={profile.platform}
                    href={profile.url}
                    icon={profile.icon}
                    label={profile.platform}
                    color={profile.color}
                  />
                ))}
              </div>
            </div>

            {/* Coding Platforms - Single Column */}
            <div className="bg-black/50 backdrop-blur-lg rounded-3xl border border-cyan-400/30 p-8 hover:border-cyan-400/50 transition-all duration-500 shadow-2xl shadow-cyan-400/10">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-3">
                <span className="text-2xl">💻</span> Coding Platforms
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {personalData.profiles.coding.map((profile, index) => (
                  <SocialLink
                    key={profile.platform}
                    href={profile.url}
                    icon={profile.icon}
                    label={profile.platform}
                    color={profile.color}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}