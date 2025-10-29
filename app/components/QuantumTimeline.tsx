// app/components/CareerBook.tsx
'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Career Timeline Data
const CareerData = [
  {
    company: "SoftxAI Technology Private Limited",
    role: "Software Engineer",
    duration: "Jan 2025 – Present",
    location: "Hyderabad, Telengana",
    type: "Full-time",
    description: "Contributing to real-world product development using NestJS and PostgreSQL, focusing on building scalable backend systems and clean API architecture and React.js for building dynamic user interfaces. Working with modular codebases, production-ready features, and multi-environment Git workflows.",
    technologies: ["NestJS", "PostgreSQL", "React.js", "TypeScript", "Git", "Docker"],
    certificate: "https://drive.google.com/file/d/1EmDpR8dSEOb-vD4v4mqW3PKsdBLxSJBr/view?usp=sharing",
    achievements: [
      "Built scalable backend systems with clean API architecture",
      "Developed dynamic user interfaces with React.js",
      "Worked with production-ready features and Git workflows"
    ]
  },
  {
    company: "Site Guru",
    role: "Full Stack Developer Intern",
    duration: "Oct 2024 – Dec 2024",
    location: "Remote",
    type: "Internship",
    description: "Collaborated with clients to develop and deliver customized web applications using Vue.js, Node.js, and MySQL based on their specific requirements. Designed and implemented scalable, full-stack solutions for various projects, ensuring high-quality deliverables within deadlines.",
    technologies: ["Vue.js", "Node.js", "MySQL", "JavaScript", "REST APIs"],
    certificate: "https://drive.google.com/file/d/10YlgY9cIvRxsd4RkH3eFMaEN3PjOvD7E/view?usp=sharing",
    achievements: [
      "Delivered customized web applications for clients",
      "Designed scalable full-stack solutions",
      "Ensured high-quality deliverables within deadlines"
    ]
  },
  {
    company: "Avisha Global Technology",
    role: "Software Engineer Intern",
    duration: "Apr 2024 – June 2024",
    location: "Remote",
    type: "Internship",
    description: "Architected and implemented a complete lottery game using Node.js, Express.js, and MySQL, delivering secure and scalable RESTful APIs for user authentication, game logic, and payment gateways integration. Created robust RESTful APIs for restaurant apps with features like menu, order and user authentication.",
    technologies: ["Node.js", "Express.js", "MySQL", "REST APIs", "Authentication"],
    certificate: "https://drive.google.com/file/d/1oH_eEcBJrf9HppYy_gMLk7kgOrF8co65/view?usp=sharing",
    achievements: [
      "Architected complete lottery game system",
      "Implemented secure payment gateway integration",
      "Built robust RESTful APIs for restaurant apps"
    ]
  }
]

// 3D Book Cover Component
function BookCover({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        transition: { type: "spring", stiffness: 300 }
      }}
      onClick={onOpen}
      className="relative w-80 h-96 cursor-pointer mx-auto"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Book Spine */}
      <div className="absolute left-0 top-0 w-6 h-full bg-gradient-to-r from-gray-800 to-gray-900 rounded-l-lg" />
      
      {/* Book Cover */}
      <div className="absolute left-6 top-0 w-64 h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-r-lg shadow-2xl border-2 border-cyan-400/30 overflow-hidden">
        
        {/* Cover Design */}
        <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-10" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10" />
        
        {/* Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          <motion.h3 
            className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4"
            animate={{
              textShadow: [
                "0 0 10px rgba(0, 255, 255, 0.5)",
                "0 0 20px rgba(0, 255, 255, 0.8)",
                "0 0 10px rgba(0, 255, 255, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            MY CAREER
          </motion.h3>
          
          <motion.h4 
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            animate={{
              textShadow: [
                "0 0 10px rgba(100, 100, 255, 0.5)",
                "0 0 20px rgba(100, 100, 255, 0.8)",
                "0 0 10px rgba(100, 100, 255, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            TIMELINE
          </motion.h4>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-2 border-cyan-400/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-blue-400/30 rounded-full"
            />
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform scale-150 opacity-0 hover:opacity-100 transition-opacity duration-1000" />
      </div>

      {/* Page edges */}
      <div className="absolute left-6 top-0 w-64 h-full">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600"
            style={{ transform: `translateX(-${i * 0.5}px)` }}
          />
        ))}
      </div>
    </motion.div>
  )
}

// Page Component
function BookPage({ experience, pageNumber, onClose, onNext, onPrev, isFirst, isLast }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="relative w-full max-w-6xl h-[600px] bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-cyan-400/30 overflow-hidden shadow-2xl"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Page Content */}
      <div className="absolute inset-0 flex">
        
        {/* Left Page - Basic Info */}
        <div className="w-1/2 p-8 border-r border-cyan-400/20 relative">
          <div className="h-full flex flex-col justify-between">
            
            {/* Company & Role */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-cyan-300 mb-3">
                  {experience.company}
                </h3>
                <h4 className="text-2xl text-cyan-400 font-semibold mb-6">
                  {experience.role}
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-cyan-200">
                    <span className="text-cyan-400">📅</span>
                    <span className="text-lg">{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-cyan-200">
                    <span className="text-cyan-400">📍</span>
                    <span className="text-lg">{experience.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-cyan-200">
                    <span className="text-cyan-400">💼</span>
                    <span className="text-lg">{experience.type}</span>
                  </div>
                </div>
              </motion.div>

              {/* Certificate */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h5 className="text-xl font-semibold text-cyan-400 mb-4">
                  📜 Certificate
                </h5>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(experience.certificate, '_blank')}
                  className="w-full bg-cyan-400/10 border-2 border-cyan-400/30 text-cyan-300 py-4 rounded-xl hover:bg-cyan-400/20 transition-all duration-300 text-lg font-semibold"
                >
                  View Certificate
                </motion.button>
              </motion.div>
            </div>

            {/* Page Number */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-cyan-400/60 text-lg"
            >
              Page {pageNumber + 1} of {CareerData.length}
            </motion.div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/30" />
        </div>

        {/* Right Page - Detailed Info */}
        <div className="w-1/2 p-8 relative">
          <div className="h-full flex flex-col">
            
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h5 className="text-xl font-semibold text-cyan-400 mb-4">
                Role Description
              </h5>
              <p className="text-cyan-200 leading-relaxed text-lg">
                {experience.description}
              </p>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h5 className="text-xl font-semibold text-cyan-400 mb-4">
                🛠️ Technologies Used
              </h5>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech: string, index: number) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-300 text-lg hover:bg-cyan-400/20 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex-1"
            >
              <h5 className="text-xl font-semibold text-cyan-400 mb-4">
                ⭐ Key Achievements
              </h5>
              <ul className="space-y-3">
                {experience.achievements.map((achievement: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start text-cyan-200 text-lg"
                  >
                    <span className="text-cyan-400 mr-3 mt-1 text-xl">•</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400/30" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400/30" />
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:60px_60px] opacity-5 pointer-events-none" />
    </motion.div>
  )
}

// Navigation Button Component
function NavButton({ onClick, children, disabled, direction }: any) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`
        px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all duration-300
        ${disabled 
          ? 'border-cyan-400/30 text-cyan-400/30 cursor-not-allowed' 
          : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
        }
      `}
    >
      {children}
    </motion.button>
  )
}

export default function CareerBook() {
  const [currentPage, setCurrentPage] = useState(-1) // -1 means book is closed
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const handleOpenBook = () => {
    setCurrentPage(0)
  }

  const handleNextPage = () => {
    if (currentPage < CareerData.length - 1) {
      setDirection('next')
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setDirection('prev')
      setCurrentPage(currentPage - 1)
    }
  }

  const handleCloseBook = () => {
    setCurrentPage(-1)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentPage >= 0) {
        if (e.key === 'ArrowRight') handleNextPage()
        if (e.key === 'ArrowLeft') handlePrevPage()
        if (e.key === 'Escape') handleCloseBook()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPage])

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black to-cyan-900/10 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:80px_80px] opacity-10"></div>
        {[...Array(20)].map((_, i) => (
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
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
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
            CAREER TIMELINE
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
            Journey through my professional experience. Open the book to explore my career path, 
            achievements, and the technologies I've mastered along the way.
          </p>
        </motion.div>

        {/* Book Container */}
        <div className="relative flex flex-col items-center">
          
          {/* Book Cover */}
          <AnimatePresence>
            {currentPage === -1 && (
              <motion.div
                key="book-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center"
              >
                <BookCover onOpen={handleOpenBook} />
                
                {/* Click instruction */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center mt-8 text-cyan-300 text-xl"
                >
                  ✨ Click the book to open your career journey
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Book Pages */}
          <AnimatePresence mode="wait">
            {currentPage >= 0 && (
              <motion.div
                key={`page-${currentPage}`}
                className="w-full flex flex-col items-center"
              >
                <BookPage
                  experience={CareerData[currentPage]}
                  pageNumber={currentPage}
                  onClose={handleCloseBook}
                  onNext={handleNextPage}
                  onPrev={handlePrevPage}
                  isFirst={currentPage === 0}
                  isLast={currentPage === CareerData.length - 1}
                />

                {/* Navigation Controls */}
                <div className="flex justify-between items-center mt-8 w-full max-w-6xl px-4">
                  <NavButton
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                    direction="prev"
                  >
                    ◀ Previous
                  </NavButton>

                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCloseBook}
                      className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 font-bold text-lg"
                    >
                      Close Book
                    </motion.button>
                  </div>

                  <NavButton
                    onClick={handleNextPage}
                    disabled={currentPage === CareerData.length - 1}
                    direction="next"
                  >
                    Next ▶
                  </NavButton>
                </div>

                {/* Navigation Instructions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center mt-6 text-cyan-400/60 text-lg"
                >
                  Use arrow keys ← → to navigate between pages
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Career Progress Indicator */}
        {currentPage >= 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-cyan-300 text-center mb-6">
                Career Journey
              </h3>
              <div className="flex justify-between items-center relative">
                {/* Timeline line */}
                <div className="absolute left-0 right-0 h-1 bg-cyan-400/20 top-1/2 transform -translate-y-1/2" />
                
                {CareerData.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative flex flex-col items-center cursor-pointer ${
                      index <= currentPage ? 'text-cyan-400' : 'text-cyan-400/30'
                    }`}
                    onClick={() => setCurrentPage(index)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-6 h-6 rounded-full mb-2 flex items-center justify-center ${
                        index <= currentPage 
                          ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                          : 'bg-cyan-400/30'
                      }`}
                    >
                      {index <= currentPage && (
                        <span className="text-black text-sm font-bold">✓</span>
                      )}
                    </motion.div>
                    <div className="text-sm text-center max-w-32 font-medium">
                      {exp.company.split(' ')[0]}
                    </div>
                    <div className="text-xs text-cyan-400/60 mt-1">
                      {exp.duration.split(' – ')[0]}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}