'use client'
import { motion } from 'framer-motion'

interface HolographicCardProps {
  title: string
  description: string
  icon: string
  delay?: number
}

export default function HolographicCard({ title, description, icon, delay = 0 }: HolographicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative p-8 rounded-xl bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-400/30 backdrop-blur-sm holographic overflow-hidden group"
    >
      {/* Animated border */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -skew-x-12 transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="text-4xl mb-4 text-cyan-400">{icon}</div>
        <h3 className="text-2xl font-bold text-cyan-300 mb-4 cyber-text">{title}</h3>
        <p className="text-cyan-200 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}