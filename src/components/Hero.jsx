import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Cable, ChevronDown, Code, Database, FileCode2Icon, LaptopMinimal, Server, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import profilePic from '../assets/d12.png';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    'Software Engineer',
    'Problem Solver', 
    'Full-stack Developer',
    'Tech Enthusiast',
  
  ]

  // Typing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Floating tech icons data
  const floatingIcons = [
    { Icon: Code, delay: 0, x: 300, y: 50 },
    { Icon: Database, delay: 0.5, x: -200, y: 110 },
    { Icon: Server, delay: 1, x: 120, y: -90 },
    { Icon: Smartphone, delay: 1.5, x: -100, y: -40 },
    { Icon: FileCode2Icon, delay: 1.5, x: -270, y: -100 },
    { Icon: Cable, delay: 1.5, x: -470, y: -10 },
    { Icon: LaptopMinimal, delay: 1.5, x: 150, y: 120}
  ]

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Floating background icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute text-muted-foreground/10"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon size={60} />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture with Animated Neon Background */}
          <motion.div 
            className="relative mx-auto mb-8 w-48 h-48 md:w-56 md:h-56"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated Neon Background Layers */}
            <div className="absolute inset-0 rounded-full">
              {/* Outer glow ring - Electric Blue */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 opacity-30 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Middle glow ring - Purple */}
              <motion.div
                className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 opacity-40 blur-lg"
                animate={{
                  scale: [1.1, 0.9, 1.1],
                  opacity: [0.4, 0.7, 0.4],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Inner glow ring - Pink */}
              <motion.div
                className="absolute inset-4 rounded-full bg-gradient-to-r from-pink-400 via-rose-500 to-pink-600 opacity-50 blur-md"
                animate={{
                  scale: [0.9, 1.1, 0.9],
                  opacity: [0.5, 0.8, 0.5],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Pulsing border ring */}
              <motion.div
                className="absolute inset-6 rounded-full border-2 border-white/30"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            {/* Profile Picture */}
            <motion.div
              className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={profilePic}
                alt="Md Sazzad Hossen"
                className="w-full h-full object-cover"
              />
              
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <motion.span 
              style={{ fontFamily: '"Splash"' }}
              className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"

              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Md Sazzad Hossen
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building seamless digital experiences through code.
          </motion.p>

          {/* Animated roles */}
          <motion.div 
            className="text-lg md:text-xl lg:text-2xl mb-12 h-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-foreground mr-2">I'm a </span>
            <motion.span
              key={currentRole}
              className="text-primary font-semibold min-w-[200px] text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </motion.span>
          </motion.div>

          {/* Call to action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={scrollToProjects}
                size="lg"
                className="px-8 py-3 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg font-semibold border-2 hover:bg-muted transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown 
              size={32} 
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              onClick={() => {
                const element = document.querySelector('#about')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20 pointer-events-none" />
    </section>
  )
}

export default Hero

