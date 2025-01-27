'use client'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(".role-text", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.5 }
    )
  })

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-screen flex items-center justify-center z-10"
    >
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-white role-text">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Dhanush Chalicheemala
          </span>
        </h1>
        
        <motion.div 
          className="text-xl text-gray-300 role-text"
          animate={{
            scale: [1, 1.05, 1],
            transition: { repeat: Infinity, duration: 3 }
          }}
        >
          Data Scientist | Machine Learning Engineer | AI Researcher
        </motion.div>
      </div>
    </motion.div>
  )
}
