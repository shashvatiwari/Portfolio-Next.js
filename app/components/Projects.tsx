// app/components/QuantumProjects.tsx
'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text, Plane, useTexture } from '@react-three/drei'
import * as THREE from 'three'

// Project Data with dummy images
const Projects = [
  {
    title: "MeetMee - Video and Chat App",
    description: "MeetMe is a video calling app made with modern tech stacks. User can connect to a random user and have meaningful conversation with both video and text.",
    tags: ["Socket.io", "MaterialUI", "NodeJs", "ReactJs"],
    link: "https://github.com/shashwatiwari/chat-app-client/",
    image: "/api/placeholder/600/400?text=MeetMee+App",
    color: "#8B5CF6",
    gradient: "from-purple-500 to-cyan-400"
  },
  {
    title: "Shashwat's Blog - Blog Post App",
    description: "A blog application, including an admin panel where the admin can create, update, and delete posts, as well as manage users and monitor their comments.",
    tags: ["ReactJs", "Tailwind", "NodeJs", "MongoDB"],
    link: "https://github.com/shashvatiwari/Shashwat-Blog",
    image: "/api/placeholder/600/400?text=Blog+App",
    color: "#10B981",
    gradient: "from-green-500 to-blue-400"
  },
  {
    title: "My Hotel- Hotel Booking Website",
    description: "A responsive frontend interface for hotel booking, showcasing available rooms and user-friendly navigation for reservation management.",
    tags: ["ReactJs", "Tailwind", "NodeJs", "MongoDB"],
    link: "https://github.com/shashwatiwari/Hotel-Booking",
    image: "/api/placeholder/600/400?text=Hotel+Booking",
    color: "#F59E0B",
    gradient: "from-orange-500 to-red-400"
  },
  {
    title: "My Restaurant- Food Ordering App",
    description: "A full-featured restaurant app for browsing menus, placing orders, and tracking deliveries with integrated payment options.",
    tags: ["ReactJs", "Tailwind", "NodeJs", "MongoDB"],
    link: "https://github.com/shashvatiwari/Ecommerce-Restaurant-App",
    image: "/api/placeholder/600/400?text=Restaurant+App",
    color: "#EC4899",
    gradient: "from-pink-500 to-rose-400"
  },
  {
    title: "Hostel Management System",
    description: "A comprehensive hostel management system for managing student records, room assignments, and fee payments.",
    tags: ["ReactJs", "NodeJs", "MySql", "Library"],
    link: "https://github.com/shashwatiwari/Hostel_Management_System",
    image: "/api/placeholder/600/400?text=Hostel+Management",
    color: "#6366F1",
    gradient: "from-indigo-500 to-purple-400"
  },
  {
    title: "Daily Quotes Generator",
    description: "A simple web app that generates random quotes on a daily basis, with a clean and minimalist design.",
    tags: ["ReactJS", "Javascript", "API Integration"],
    link: "https://github.com/shashwatiwari/Daily-Quotes",
    image: "/api/placeholder/600/400?text=Quotes+Generator",
    color: "#F59E0B",
    gradient: "from-yellow-500 to-amber-400"
  },
  {
    title: "Dynamic Weather App",
    description: "A dynamic weather app that displays real-time weather data for any location, with a user-friendly interface.",
    tags: ["ReactJs", "Javascript", "API Integration"],
    link: "https://github.com/shashwatiwari/Real-Time-Weather-App",
    image: "/api/placeholder/600/400?text=Weather+App",
    color: "#3B82F6",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "To Do List App",
    description: "A simple to-do list app that allows users to create, edit, and delete tasks with ease, using React and local storage.",
    tags: ["Reactjs", "Javascript"],
    link: "https://github.com/shashwatiwari/To_do_app",
    image: "/api/placeholder/600/400?text=ToDo+App",
    color: "#6B7280",
    gradient: "from-gray-500 to-slate-400"
  },
]

// Project Card Component
function ProjectCard({ project, index, isSelected, onClick }: any) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        transition: { type: "spring", stiffness: 300 }
      }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      onClick={onClick}
      className={`
        relative cursor-pointer group rounded-2xl overflow-hidden
        ${isSelected ? 'ring-4 ring-cyan-400 ring-opacity-50' : ''}
        backdrop-blur-sm border border-cyan-400/20
        bg-gradient-to-br from-gray-900/80 to-black/80
        h-64 flex items-center justify-center
      `}
    >
      {/* Animated background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-all duration-500`} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            initial={{ 
              x: Math.random() * 200, 
              y: Math.random() * 200,
              scale: 0 
            }}
            whileHover={{ 
              scale: 1,
              transition: { delay: i * 0.1 }
            }}
          />
        ))}
      </div>

      {/* Project title with beautiful typography */}
      <motion.h3 
        className="relative z-10 text-2xl font-bold text-center text-white px-6"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {project.title.split('-')[0].trim()}
        </span>
        
        {/* Subtle description on hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-4 left-0 right-0 text-cyan-200 text-sm font-normal"
        >
          {project.tags.slice(0, 2).join(' • ')}
        </motion.div>
      </motion.h3>

      {/* Interactive border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[2px] rounded-2xl bg-gray-900" />
      </div>

      {/* Click instruction */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-cyan-300 text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm"
      >
        Click to explore →
      </motion.div>
    </motion.div>
  )
}

// Curtain Reveal Component
function CurtainReveal({ project, isOpen, onClose }: any) {
  const curtainRef = useRef<HTMLDivElement>(null)

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
          onClick={onClose}
        >
          <motion.div
            ref={curtainRef}
            initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
            transition={{ 
              type: "spring", 
              stiffness: 100,
              damping: 20 
            }}
            className="relative max-w-6xl w-full bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-cyan-400/30 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Curtain effect */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-400 origin-left"
              />
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-l from-purple-600 to-cyan-400 origin-right"
              />
            </div>

            {/* Project content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="relative z-10 grid lg:grid-cols-2 gap-8 p-8"
            >
              {/* Left side - Project image and basic info */}
              <div className="space-y-6">
                {/* Project image with gradient overlay */}
                <div className="relative rounded-2xl overflow-hidden group">
                  <div className={`h-80 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    {/* Mock project UI */}
                    <div className="absolute inset-4 bg-black/20 rounded-lg border border-white/10">
                      <div className="absolute top-3 left-3 right-3 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="absolute inset-4 top-8 bg-black/30 rounded border border-white/5">
                        <div className="absolute inset-2 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded border border-cyan-400/20 flex items-center justify-center">
                          <span className="text-cyan-300 text-lg font-bold">{project.title.split(' ')[0]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>

                {/* Quick info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.tags.map((tag: string, index: number) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4 + index * 0.1 }}
                        className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-300 text-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side - Detailed information */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 }}
                >
                  <h4 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    Project Overview
                  </h4>
                  <p className="text-cyan-200 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  className="space-y-4"
                >
                  <h5 className="text-xl font-semibold text-cyan-400">Tech Stack</h5>
                  <div className="grid grid-cols-2 gap-3">
                    {project.tags.map((tag: string, index: number) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                        className="p-3 bg-cyan-400/5 border border-cyan-400/20 rounded-lg text-cyan-300 text-center hover:bg-cyan-400/10 transition-colors"
                      >
                        {tag}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 }}
                  className="flex gap-4 pt-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(project.link, '_blank')}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300"
                  >
                    View Project Code
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    Close
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function QuantumProjects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black to-purple-900/20 py-20">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:100px_100px] opacity-10"></div>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -100, null],
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-6 cyber-text">
            MY PROJECTS
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative projects. Each one represents 
            cutting-edge solutions and modern technology stacks.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isSelected={selectedProject?.title === project.title}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Curtain Reveal Modal */}
        <CurtainReveal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <p className="text-cyan-300 text-lg mb-6">
            Interested in collaborating on something amazing?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold py-4 px-8 rounded-xl text-lg hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300"
          >
            Let's Build Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}