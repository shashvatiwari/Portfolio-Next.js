// app/components/EnhancedSkills.tsx
'use client'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

// Language logos (using emojis as placeholders - you can replace with actual images)
const languageLogos = {
  // Backend Technologies
  'Node.js': '🟢',
  'NestJS': '🦅',
  'Python': '🐍',
  
  // Frontend Technologies
  'React': '⚛️',
  'Next.js': '▲',
  'Three.js': '👁️',
  
  // Databases
  'MySQL': '🐬',
  'PostgreSQL': '🐘',
  'MongoDB': '🍃',
  
  // Programming Languages
  'C++': '⚙️',
  'JavaScript': '🟨',
  
  // Tools & DevOps
  'Git': '📚',
  'Docker': '🐳',
  'CI/CD': '🔄'
}

const skillCategories = [
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 95, logo: '🟢' },
      { name: 'NestJS', level: 90, logo: '🦅' },
      { name: 'Python', level: 88, logo: '🐍' },
      { name: 'API Architecture', level: 92, logo: '🔗' }
    ],
    gradient: 'from-purple-500 to-cyan-400'
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 90, logo: '⚛️' },
      { name: 'Next.js', level: 92, logo: '▲' },
      { name: 'Three.js', level: 85, logo: '👁️' },
      { name: 'TypeScript', level: 88, logo: '🔷' }
    ],
    gradient: 'from-cyan-500 to-blue-400'
  },
  {
    title: 'Database & DevOps',
    skills: [
      { name: 'MySQL', level: 93, logo: '🐬' },
      { name: 'PostgreSQL', level: 90, logo: '🐘' },
      { name: 'MongoDB', level: 87, logo: '🍃' },
      { name: 'Docker', level: 88, logo: '🐳' },
      { name: 'Git', level: 95, logo: '📚' }
    ],
    gradient: 'from-green-500 to-emerald-400'
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 94, logo: '🟨' },
      { name: 'Python', level: 89, logo: '🐍' },
      { name: 'C++', level: 85, logo: '⚙️' },
      { name: 'TypeScript', level: 88, logo: '🔷' }
    ],
    gradient: 'from-orange-500 to-red-400'
  }
]

// Floating Logo Component
function FloatingLogo({ logo, name, delay = 0 }: { logo: string; name: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ 
        scale: 1.2, 
        y: -10,
        transition: { type: "spring", stiffness: 300 }
      }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring" 
      }}
      className="relative group cursor-pointer"
    >
      {/* Logo Container */}
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-cyan-400/30 backdrop-blur-sm flex items-center justify-center text-3xl shadow-lg shadow-cyan-400/20">
        {logo}
      </div>
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-cyan-300 text-sm px-3 py-1 rounded-lg whitespace-nowrap border border-cyan-400/30"
      >
        {name}
      </motion.div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-xl group-hover:bg-cyan-400/40 transition-all duration-300 -z-10" />
    </motion.div>
  )
}

// Skill Bar with Logo
function SkillBar({ skill, index }: { skill: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="flex flex-col items-center justify-center group"
    >
      {/* Animated Logo */}
      <motion.div
        animate={{ 
          rotate: isHovered ? 360 : 0,
          scale: isHovered ? 1.2 : 1
        }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-cyan-400/30 flex items-center justify-center text-2xl mb-3"
      >
        {skill.logo}
      </motion.div>
      
      {/* Skill Name */}
      <span className="text-cyan-300 font-semibold text-center">{skill.name}</span>
    </motion.div>
  )
}

export default function EnhancedSkills() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const nodes = Array.from({ length: 25 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1,
    }))

    function animate() {
      ctx.fillStyle = 'rgba(10, 14, 23, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw connections
        nodes.forEach(otherNode => {
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        })

        // Draw node with glow
        ctx.beginPath()
        ctx.fillStyle = '#00ffff'
        ctx.arc(node.x, node.y, node.size, 0, 2 * Math.PI)
        ctx.fill()
        
        // Glow effect
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size * 3, 0, 2 * Math.PI)
        const gradient = ctx.createRadialGradient(
          node.x, node.y, node.size,
          node.x, node.y, node.size * 3
        )
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.3)')
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0)')
        ctx.fillStyle = gradient
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="py-20 relative min-h-screen overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />
      
      {/* Additional Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:100px_100px] opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold mb-6 cyber-text">
            TECHNICAL MASTERY
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
            Explore my comprehensive skill set through interactive visualizations. 
            Each technology comes to life with animated logos and detailed proficiency levels.
          </p>
        </motion.div>

        {/* Floating Logos Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20"
        >
          {Object.entries(languageLogos).map(([name, logo], index) => (
            <FloatingLogo
              key={name}
              logo={logo}
              name={name}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-black/30 rounded-2xl border border-cyan-400/20 backdrop-blur-sm p-6 hover:border-cyan-400/40 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-4 h-12 bg-gradient-to-b ${category.gradient} rounded-full`} />
                <h3 className="text-2xl font-bold text-cyan-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Proficiency Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Backend Mastery', value: '92%', color: 'from-purple-500 to-cyan-400' },
            { label: 'Frontend Skills', value: '89%', color: 'from-cyan-500 to-blue-400' },
            { label: 'Database Expertise', value: '90%', color: 'from-green-500 to-emerald-400' },
            { label: 'Tools & DevOps', value: '88%', color: 'from-orange-500 to-red-400' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-2xl bg-black/40 border border-cyan-400/20 backdrop-blur-sm"
            >
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-cyan-200 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-cyan-300 text-lg mb-6">
            Ready to leverage these skills for your next project?
          </p>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold py-4 px-8 rounded-xl text-lg hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300"
          >
            Start a Collaboration
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  )
}