import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Code, 
  Database, 
  Server, 
  Palette, 
  Container, 
  GitBranch,
  Globe,
  Zap,
  Shield,
  Layers,
  Worm,
  FlameKindling,
  PersonStandingIcon,
  FileJson,
  Baseline,
  Terminal,
  AppWindow, 
  HardDrive,
  Cloud
} from 'lucide-react'

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const technologies = [
    {
      name: 'JavaScript',
      icon: FileJson,
      description: 'Distributed architecture, service communication, and scalable system design',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950',
      experience: '1+ years',
      projects: '5+ architectures'
    },
    {
      name: 'React',
      icon: Code,
      description: 'Building modern, interactive user interfaces with hooks, context, and state management',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950',
      experience: '3+ years',
      projects: '15+ projects'
    },
    {
      name: 'FastAPI',
      icon: Zap,
      description: 'High-performance API development with automatic documentation and validation',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950',
      experience: '2+ years',
      projects: '10+ APIs'
    },
    {
      name: 'Python',
      icon: Worm,
      description: 'Backend development, data processing, automation scripts, and machine learning',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950',
      experience: '4+ years',
      projects: '20+ projects'
    },
    {
      name: 'PostgreSQL',
      icon: Database,
      description: 'Database design, optimization, complex queries, and data modeling',
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950',
      experience: '3+ years',
      projects: '12+ databases'
    },
    {
      name: 'TailwindCSS',
      icon: Palette,
      description: 'Utility-first CSS framework for rapid UI development and responsive design',
      color: 'from-cyan-400 to-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950',
      experience: '2+ years',
      projects: '15+ websites'
    },
    {
      name: 'Docker',
      icon: Container,
      description: 'Containerization, deployment automation, and microservices architecture',
      color: 'from-cyan-400 to-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950',
      experience: '2+ years',
      projects: '8+ deployments'
    },
    {
      name: 'Git/GitHub',
      icon: GitBranch,
      description: 'Version control, collaboration, CI/CD pipelines, and code review workflows',
      color: 'from-gray-600 to-gray-800',
      bgColor: 'bg-gray-50 dark:bg-gray-950',
      experience: '4+ years',
      projects: '50+ repositories'
    },
    {
      name: 'REST APIs',
      icon: Globe,
      description: 'RESTful API design, integration, authentication, and documentation',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950',
      experience: '3+ years',
      projects: '15+ integrations'
    },
    {
      name: 'JWT Auth',
      icon: Shield,
      description: 'Secure authentication, authorization, and session management systems',
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950',
      experience: '2+ years',
      projects: '10+ auth systems'
    },
    {
      name: 'Microservices',
      icon: Layers,
      description: 'Distributed architecture, service communication, and scalable system design',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950',
      experience: '1+ years',
      projects: '5+ architectures'
    },
     {
      name: 'Firebase',
      icon: FlameKindling,
      description: 'Building modern, interactive user interfaces with hooks, context, and state management',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950',
      experience: '3+ years',
      projects: '5+ projects'
    },
    {
      name: 'Postman',
      icon: PersonStandingIcon,
      description: 'Secure authentication, authorization, and session management systems',
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950',
      experience: '2+ years',
      projects: '10+ auth systems'
    },
    {
      name: 'AWS',
      icon: Baseline,
      description: 'Building modern, interactive user interfaces with hooks, context, and state management',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950',
      experience: '3+ years',
      projects: '15+ projects'
    },
    {
      name: 'C#',
      icon: Terminal,
      description: 'Desktop application logic, data-wrapping forms, and offline system architecture',
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50 dark:bg-purple-950',
      experience: '1+ years',
      projects: '2+ projects'
    },
    {
      name: '.NET / WPF',
      icon: AppWindow,
      description: 'Building robust, offline-isolated desktop interfaces and commercial operations software',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50 dark:bg-blue-950',
      experience: '1+ years',
      projects: '2+ projects'
    },
    {
      name: 'SQLite',
      icon: HardDrive,
      description: 'Local database management, offline stock tracking, and barcode search capabilities',
      color: 'from-sky-400 to-sky-600',
      bgColor: 'bg-sky-50 dark:bg-sky-950',
      experience: '2+ years',
      projects: '5+ databases'
    },

    {
      name: 'Nginx',
      icon: Server,
      description: 'Web server configuration, reverse proxy setup, load balancing, and secure deployment',
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50 dark:bg-green-950',
      experience: '1+ years',
      projects: '5+ deployments'
    },
    {
      name: 'Supabase',
      icon: Cloud,
      description: 'Backend-as-a-Service integration for PostgreSQL databases, authentication, and real-time subscriptions',
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950',
      experience: '2+ years',
      projects: '5+ projects'
    },


  ]

  return (
    <section id="tech" className="py-20 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technologies and tools I use to bring ideas to life. Hover over each icon to learn more about my experience.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <motion.div
                className={`${tech.bgColor} rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer relative overflow-hidden`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  className="relative z-10 flex flex-col items-center"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow duration-300`}>
                    <tech.icon size={24} className="text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-foreground text-center text-sm group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                  </h3>
                </motion.div>

                {/* Tooltip */}
                {hoveredTech === tech.name && (
                  <motion.div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 z-20"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-card border border-border rounded-lg p-4 shadow-xl">
                      <div className="text-sm font-semibold text-foreground mb-2">
                        {tech.name}
                      </div>
                      <div className="text-xs text-muted-foreground mb-3 leading-relaxed">
                        {tech.description}
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-primary font-medium">
                          {tech.experience}
                        </span>
                        <span className="text-muted-foreground">
                          {tech.projects}
                        </span>
                      </div>
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card mt-[-1px]"></div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-4">
            Always learning and exploring new technologies to stay current with industry trends.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
              Currently Learning: Flutter
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
              Exploring: Next.js
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
              Interested in: AI/ML
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack

