'use client'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text, OrbitControls, Sphere, Line } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import * as THREE from 'three'

// 3D Skill Node Component
function SkillNode({ position, skill, level, color, onClick, isActive }: any) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1
      
      if (hovered || isActive) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1)
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
      }
    }
  })

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[0.3, 16, 16]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isActive ? 0.5 : 0.2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      
      <Text
        position={[0, -0.5, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="top"
        maxWidth={2}
      >
        {skill}
      </Text>
      
      {/* Level indicator ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.35, 0]}>
        <ringGeometry args={[0.35, 0.4, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.35, 0]}>
        <ringGeometry args={[0.35, 0.4, 32, 1, 0, (Math.PI * 2 * level) / 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.8} />
      </mesh>
    </group>
  )
}

// Connection Lines between skills
function SkillConnections({ skills, activeSkill }: any) {
  const lines: JSX.Element[] = []

  skills.forEach((skill: any, i: number) => {
    skills.forEach((otherSkill: any, j: number) => {
      if (i < j && Math.random() > 0.7) { // Random connections
        const points = [
          new THREE.Vector3(...skill.position),
          new THREE.Vector3(...otherSkill.position)
        ]
        
        const isActive = activeSkill === skill.name || activeSkill === otherSkill.name
        
        lines.push(
          <Line
            key={`${i}-${j}`}
            points={points}
            color={isActive ? "#00ffff" : "#0080ff"}
            lineWidth={isActive ? 3 : 1}
            transparent
            opacity={isActive ? 0.8 : 0.2}
          />
        )
      }
    })
  })

  return <>{lines}</>
}

// Main 3D Skills Scene
function SkillsScene({ skills, onSkillSelect, activeSkill }: any) {
  const { camera } = useThree()
  
  useFrame(() => {
    camera.position.lerp(new THREE.Vector3(0, 0, activeSkill ? 8 : 12), 0.1)
  })

  return (
    <>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        maxDistance={20}
        minDistance={5}
        autoRotate={!activeSkill}
        autoRotateSpeed={0.5}
      />
      
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0080ff" />
      
      <SkillConnections skills={skills} activeSkill={activeSkill} />
      
      {skills.map((skill: any, index: number) => (
        <SkillNode
          key={skill.name}
          position={skill.position}
          skill={skill.name}
          level={skill.level}
          color={skill.color}
          onClick={() => onSkillSelect(skill.name)}
          isActive={activeSkill === skill.name}
        />
      ))}
    </>
  )
}

// Skill Details Panel
function SkillDetails({ skill, onClose }: any) {
  if (!skill) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      className="absolute right-0 top-0 h-full w-96 bg-black/80 backdrop-blur-lg border-l border-cyan-400/30 p-6"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300 text-lg"
      >
        ✕
      </button>
      
      <h3 className="text-3xl font-bold text-cyan-300 mb-4 cyber-text">
        {skill.name}
      </h3>
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-cyan-200">Mastery Level</span>
          <span className="text-cyan-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-cyan-900/30 rounded-full h-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full"
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-cyan-400 font-semibold mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {skill.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* <div>
          <h4 className="text-cyan-400 font-semibold mb-2">Projects</h4>
          <ul className="space-y-2 text-cyan-200">
            {skill.projects.map((project: string, index: number) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                {project}
              </li>
            ))}
          </ul>
        </div> */}
        
        <div>
          <h4 className="text-cyan-400 font-semibold mb-2">Experience</h4>
          <p className="text-cyan-200 leading-relaxed">{skill.experience}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function InteractiveSkills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  const skillsData = [
    {
      name: "Backend Development",
      level: 95,
      position: [0, 2, 0],
      color: "#00ffff",
      technologies: ["Node.js", "NestJS", "Express.js", "RESTful APIs"],
      experience: "Developing production-ready backend systems with clean architecture and optimized performance",
    },
    {
      name: "3D Web",
      level: 96,
      position: [3, 1, 2],
      color: "#ff00ff",
      technologies: ["Three.js", "WebGL", "React Three Fiber", "Blender"],
      projects: ["Interactive Portfolios", "3D Data Visualization", "VR Web Apps"],
      experience: "Creating immersive 3D web experiences that push browser capabilities"
    },
    {
      name: "Frontend Development",
      level: 88,
      position: [-3, 1, 2],
      color: "#ffff00",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Redux"],
      experience: "Creating responsive, user-centric web applications with modern UI frameworks",
    },
    {
      name: "Database Management",
      level: 92,
      position: [2, -1, 3],
      color: "#00ff00",
      technologies: ["MySQL", "PostgreSQL", "MongoDB"],
      experience: "Designing and maintaining relational and non-relational databases for scalability and reliability",
    },
    {
      name: "Programming Languages",
      level: 94,
      position: [-2, -1, 3],
      color: "#ff8000",
      technologies: ["JavaScript", "TypeScript", "C++", "Python"],
      experience: "Strong command over logic building, algorithms, and clean coding practices",
    },
    {
      name: "Version Control & Dev Tools",
      level: 85,
      position: [0, -2, 0],
      color: "#0080ff",
      technologies: ["Git", "GitHub", "Postman", "VS Code"],
      experience: "Efficient workflow management and API testing for smooth development cycles",
    },
  ]

  const activeSkillData = skillsData.find(skill => skill.name === activeSkill)

  return (
    <section className="py-20 relative min-h-screen bg-gradient-to-b from-black to-cyan-900/10">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-4 cyber-text"
        >
          INTERACTIVE SKILL MATRIX
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-cyan-200 text-center mb-12 max-w-3xl mx-auto"
        >
          Explore my technical universe. Click on any skill node to reveal detailed capabilities and project experiences in this interactive 3D visualization.
        </motion.p>

        <div className="relative h-[600px] bg-black/30 rounded-xl border border-cyan-400/20 overflow-hidden">
          <Canvas camera={{ position: [0, 0, 12] }}>
            <SkillsScene
              skills={skillsData}
              onSkillSelect={setActiveSkill}
              activeSkill={activeSkill}
            />
          </Canvas>

          {/* Instructions */}
          {!activeSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-4 left-4 text-cyan-300 text-sm bg-black/50 p-3 rounded-lg backdrop-blur-sm"
            >
              🖱️ Click and drag to rotate • Scroll to zoom • Click nodes for details
            </motion.div>
          )}

          {/* Active skill indicator */}
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-4 left-4 bg-black/50 p-4 rounded-lg backdrop-blur-sm border border-cyan-400/30"
            >
              <div className="text-cyan-400 text-sm">Viewing:</div>
              <div className="text-cyan-300 font-semibold text-lg">{activeSkill}</div>
            </motion.div>
          )}

          {/* Skill Details Panel */}
          <AnimatePresence>
            {activeSkill && (
              <SkillDetails
                skill={activeSkillData}
                onClose={() => setActiveSkill(null)}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { name: "AI & Machine Learning", count: 12, color: "cyan" },
            { name: "3D & Graphics", count: 8, color: "pink" },
            { name: "Blockchain & Web3", count: 6, color: "yellow" },
            { name: "Cloud & DevOps", count: 10, color: "orange" },
          ].map((category, index) => (
            <motion.div
              key={category.name}
              whileHover={{ scale: 1.05 }}
              className={`p-4 rounded-lg bg-${category.color}-400/10 border border-${category.color}-400/30 backdrop-blur-sm`}
            >
              <div className={`text-${category.color}-400 text-2xl mb-2`}>
                {category.count}+
              </div>
              <div className={`text-${category.color}-300 font-semibold`}>
                {category.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}