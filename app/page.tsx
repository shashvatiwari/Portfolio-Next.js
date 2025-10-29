'use client'
import Hero3D from './components/Hero3D'
import HolographicCard from './components/HolographicCard'
import NeuralNetwork from './components/NeuralNetwork'
import CareerBook from './components/QuantumTimeline'
import InteractiveSkills from './components/InteractiveSkills'
import QuantumProjects from './components/Projects'
import EnhancedSkills from './components/NeuralNetwork'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero3D />
      
      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-cyan-900/10 to-black">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-bold text-center mb-16 cyber-text"
          >
            CORE CAPABILITIES
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <HolographicCard
              icon="⚙️"
              title="Backend Engineering"
              description="Designing and developing scalable, secure, and high-performance backend systems using Node.js, NestJS, and Express.js."
              delay={0}
            />
            {/* <HolographicCard
              icon="🧠"
              title="AI Integration"
              description="Seamlessly integrating artificial intelligence into web experiences for unprecedented user interactions."
              delay={0.2}
            /> */}
            <HolographicCard
              icon="🌐"
              title="3D Immersion"
              description="Creating fully immersive 3D environments that redefine user engagement and experience."
              delay={0.4}
            />
            {/* <HolographicCard
              icon="💻"
              title="Frontend Development"
              description="Building intuitive and responsive user interfaces with React.js, Next.js, and modern UI frameworks like Tailwind CSS."
              delay={0.2}
            /> */}
            <HolographicCard
              icon="🗄️"
              title="Database & API Design"
              description="Working with MySQL, PostgreSQL, and MongoDB to design optimized database schemas and build RESTful APIs."
              delay={0.4}
      />
          </div>
        </div>
      </section>

      {/* <NeuralNetwork /> */}
      <EnhancedSkills />
      <CareerBook />
      {/* <InteractiveSkills /> */}
      <QuantumProjects />

      {/* Contact Section */}
      {/* <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:100px_100px] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-bold text-center mb-16 cyber-text"
          >
            INITIATE QUANTUM CONNECTION
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-xl text-cyan-200 mb-8 leading-relaxed">
              Ready to bring revolutionary technology to your organization? 
              Let&apos;s build the future together.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-12 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300">
                TRANSMISSION INITIATED
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section> */}
    </main>
  )
}