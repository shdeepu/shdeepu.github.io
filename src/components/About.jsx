import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Award, Code, Lightbulb } from 'lucide-react'

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const skills = [
    { 
      name: 'HTML', 
      level: 90, 
      description: 'Structure and semantic markup for web pages',
      color: 'from-sky-400 to-indigo-500'
    },
    { 
      name: 'CSS', 
      level: 90, 
      description: 'Styling, layout, and responsive design for user interfaces',
      color: 'from-emerald-500 to-lime-400'
    },
    { 
      name: 'JavaScript', 
      level: 90, 
      description: 'Interactive web functionality, DOM manipulation, and client-side logic',
      color: 'from-fuchsia-500 to-purple-700'
    },
    { 
      name: 'React', 
      level: 90, 
      description: 'Building modern, interactive user interfaces with hooks, context, and state management',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Python', 
      level: 85, 
      description: 'Backend development, data processing, and automation scripts',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'FastAPI', 
      level: 88, 
      description: 'High-performance API development with automatic documentation and validation',
      color: 'from-yellow-400 to-red-500'
    },
    { 
      name: 'Django', 
      level: 75, 
      description: 'High-performance API development with automatic documentation and validation',
      color: 'from-ash-400 to-red-500'
    },
    { 
      name: 'PostgreSQL', 
      level: 82, 
      description: 'Database design, optimization, and complex query development',
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'TailwindCSS', 
      level: 90, 
      description: 'Utility-first CSS framework for rapid UI development',
      color: 'from-teal-500 to-blue-500'
    },
    { 
      name: 'Docker', 
      level: 75, 
      description: 'Containerization and deployment of applications',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const timeline = [
    {
      year: '2024 - Present',
      title: 'Software Engineer | BMIT Solutions Ltd.',
      description: 'Leading full-stack development projects with React and FastAPI',
      icon: Award
    },
    {
      year: '2023',
      title: 'Full-Stack Developer | PID(Govt. Project)',
      description: 'Built scalable web applications and RESTful APIs',
      icon: Code
    },
    {
      year: '2022',
      title: 'Junior Software Engineer',
      description: 'Transitioned from Django to FastAPI for better performance',
      icon: Lightbulb
    },
    {
      year: '2021',
      title: 'Junior Web Developer | Front-End | Geeks n Technology Ltd',
      description: 'Mastered modern React patterns and state management',
      icon: Code
    },
    {
      year: '2021',
      title: 'Intern | Geeks n Technology Ltd',
      description: 'Learned to build responsive user interfaces using HTML, CSS and JS',
      icon: Code
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              I'm <span className="text-primary font-semibold">Md Sazzad Hossen</span>, a passionate software engineer with expertise in React, Python, FastAPI, and PostgreSQL. 
              I specialize in building scalable, high-performance web applications with clean, maintainable code. 
              I love tackling complex problems and transforming ideas into real-world solutions.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-center mb-8">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  
                  {/* Skill bar */}
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + 0.1 * index, ease: "easeOut" }}
                    />
                  </div>

                  {/* Tooltip */}
                  {hoveredSkill === skill.name && (
                    <motion.div
                      className="absolute top-full left-0 right-0 mt-2 p-3 bg-card border border-border rounded-lg shadow-lg z-10"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-center mb-8">My Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + 0.2 * index }}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-card border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 mb-2">
                          <item.icon size={16} className="text-primary" />
                          <span className="text-sm font-semibold text-primary">{item.year}</span>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

