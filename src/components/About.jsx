import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Award, Code, Lightbulb, Briefcase, GraduationCap } from 'lucide-react'

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const skills = [
    { name: 'HTML & CSS', level: 95, description: 'Semantic markup and responsive layouts', color: 'from-sky-400 to-indigo-500' },
    { name: 'JavaScript', level: 90, description: 'Interactive DOM manipulation and logic', color: 'from-fuchsia-500 to-purple-700' },
    { name: 'React & Next.js', level: 90, description: 'Modern, interactive user interfaces and animated layouts', color: 'from-blue-500 to-cyan-500' },
    { name: 'TailwindCSS', level: 90, description: 'Utility-first framework for rapid UI development', color: 'from-teal-500 to-blue-500' },
    { name: 'Python', level: 85, description: 'Data processing, automations, and backend logic', color: 'from-green-500 to-emerald-500' },
    { name: 'FastAPI', level: 88, description: 'High-performance API development', color: 'from-yellow-400 to-red-500' },
    { name: 'PostgreSQL', level: 82, description: 'Database design and complex query optimization', color: 'from-orange-500 to-red-500' },
    { name: 'Supabase', level: 80, description: 'BaaS integration and real-time subscriptions', color: 'from-emerald-400 to-emerald-600' },
    { name: 'C# & .NET/WPF', level: 80, description: 'Robust, offline-isolated desktop interfaces', color: 'from-purple-500 to-purple-700' },
    { name: 'SQLite', level: 85, description: 'Local database management and offline tracking', color: 'from-sky-400 to-blue-500' },
    { name: 'Docker', level: 75, description: 'Containerization and microservices', color: 'from-indigo-500 to-purple-500' },
    { name: 'Nginx', level: 75, description: 'Web server setup and reverse proxy configuration', color: 'from-green-500 to-green-700' }
  ]

  const timeline = [
    {
      year: '2026 - Present',
      title: 'Software Engineer | AFAM Group',
      description: 'Engineering a custom Human Resource Management system, attendance hardware integrations, and corporate web portals.',
      icon: Briefcase
    },
    {
      year: '2024 - 2026',
      title: 'Software Engineer | BMIT Solutions Ltd.',
      description: 'Leading full-stack development projects with React and FastAPI.',
      icon: Award
    },
    {
      year: '2023',
      title: 'Full-Stack Developer | PID (Govt. Project)',
      description: 'Built scalable web applications and RESTful APIs.',
      icon: Code
    },
    {
      year: '2022',
      title: 'Junior Software Engineer',
      description: 'Transitioned from Django to FastAPI for better performance metrics.',
      icon: Lightbulb
    },
    {
      year: '2021',
      title: 'Junior Web Developer | Front-End | Geeks n Technology Ltd',
      description: 'Mastered modern React patterns and state management.',
      icon: Code
    },
    {
      year: '2021',
      title: 'Intern | Geeks n Technology Ltd',
      description: 'Learned to build responsive user interfaces using HTML, CSS and JS.',
      icon: GraduationCap
    }
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Introduction Glass Card */}
          <motion.div
            className="mb-20 p-8 md:p-10 bg-background/40 backdrop-blur-lg border border-border/50 rounded-2xl shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed relative z-10">
              I'm <span className="text-primary font-bold">Md Sazzad Hossen</span>, a full-stack software engineer specializing in scalable web architecture and offline-isolated desktop software. From engineering corporate Human Resource Management systems and real-time biometric integrations to developing commercial operations like restaurant management platforms, I thrive on transforming complex operational challenges into sleek, high-performance solutions.
            </p>
          </motion.div>

          {/* Grid Skills Section */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-center mb-10">Technical Arsenal</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group relative p-5 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 hover:bg-card/60 transition-all duration-300 overflow-hidden cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Subtle hover gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <h4 className="font-semibold text-foreground mb-3">{skill.name}</h4>
                    
                    {/* Modern thin progress bar */}
                    <div className="w-full bg-muted/50 rounded-full h-1.5 overflow-hidden mb-2">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.5 + 0.05 * index, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* Tooltip Overlay */}
                  <div className={`absolute inset-0 bg-card/95 backdrop-blur-md p-4 flex items-center justify-center text-center transition-all duration-300 ${hoveredSkill === skill.name ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <p className="text-xs text-foreground font-medium">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-center mb-16">My Journey</h3>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
              {/* Glowing Timeline Line */}
              <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/80 via-primary/20 to-transparent" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className={`flex flex-col sm:flex-row items-start sm:items-center ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} relative`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + 0.1 * index }}
                  >
                    {/* Timeline Node Content */}
                    <div className={`w-full sm:w-5/12 pl-12 sm:pl-0 ${index % 2 === 0 ? 'sm:text-right sm:pr-10' : 'sm:text-left sm:pl-10'}`}>
                      <div className="group bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300">
                        <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'}`}>
                          <item.icon size={18} className="text-primary group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-bold text-primary tracking-wider">{item.year}</span>
                        </div>
                        <h4 className="font-bold text-lg text-foreground mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Pulsing Timeline Dot */}
                    <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 mt-6 sm:mt-0 flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-[0_0_15px_rgba(var(--primary),0.5)] z-10" />
                      <div className="absolute w-8 h-8 bg-primary/20 rounded-full animate-ping" />
                    </div>
                    
                    <div className="hidden sm:block w-5/12" />
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









// import { useState, useEffect, useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { Calendar, Award, Code, Lightbulb } from 'lucide-react'

// const About = () => {
//   const [hoveredSkill, setHoveredSkill] = useState(null)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, threshold: 0.3 })

//   const skills = [
//     { 
//       name: 'HTML', 
//       level: 90, 
//       description: 'Structure and semantic markup for web pages',
//       color: 'from-sky-400 to-indigo-500'
//     },
//     { 
//       name: 'CSS', 
//       level: 90, 
//       description: 'Styling, layout, and responsive design for user interfaces',
//       color: 'from-emerald-500 to-lime-400'
//     },
//     { 
//       name: 'JavaScript', 
//       level: 90, 
//       description: 'Interactive web functionality, DOM manipulation, and client-side logic',
//       color: 'from-fuchsia-500 to-purple-700'
//     },
//     { 
//       name: 'React', 
//       level: 90, 
//       description: 'Building modern, interactive user interfaces with hooks, context, and state management',
//       color: 'from-blue-500 to-cyan-500'
//     },
//     { 
//       name: 'Python', 
//       level: 85, 
//       description: 'Backend development, data processing, and automation scripts',
//       color: 'from-green-500 to-emerald-500'
//     },
//     { 
//       name: 'FastAPI', 
//       level: 88, 
//       description: 'High-performance API development with automatic documentation and validation',
//       color: 'from-yellow-400 to-red-500'
//     },
//     { 
//       name: 'Django', 
//       level: 75, 
//       description: 'Robust backend development, ORM integration, and scalable web architecture',
//       color: 'from-slate-500 to-slate-700'
//     },
//     { 
//       name: 'PostgreSQL', 
//       level: 82, 
//       description: 'Database design, optimization, and complex query development',
//       color: 'from-orange-500 to-red-500'
//     },
//     { 
//       name: 'TailwindCSS', 
//       level: 90, 
//       description: 'Utility-first CSS framework for rapid UI development',
//       color: 'from-teal-500 to-blue-500'
//     },
//     { 
//       name: 'Docker', 
//       level: 75, 
//       description: 'Containerization and deployment of applications',
//       color: 'from-indigo-500 to-purple-500'
//     },
//     { 
//       name: 'C#', 
//       level: 80, 
//       description: 'Desktop application logic and offline system architecture',
//       color: 'from-purple-500 to-purple-700'
//     },
//     { 
//       name: '.NET / WPF', 
//       level: 75, 
//       description: 'Building robust, offline-isolated desktop interfaces',
//       color: 'from-blue-600 to-indigo-700'
//     },
//     { 
//       name: 'SQLite', 
//       level: 85, 
//       description: 'Local database management and offline tracking',
//       color: 'from-sky-400 to-blue-500'
//     },
//     { 
//       name: 'Supabase', 
//       level: 80, 
//       description: 'BaaS integration for databases and real-time subscriptions',
//       color: 'from-emerald-400 to-emerald-600'
//     },
//     { 
//       name: 'Nginx', 
//       level: 75, 
//       description: 'Web server configuration and secure deployment',
//       color: 'from-green-500 to-green-700'
//     }
//   ]

// const timeline = [
//     {
//       year: '2026 - Present',
//       title: 'Software Engineer | AFAM Group',
//       description: 'Engineering a custom Human Resource Management system, attendance hardware integrations, and corporate web portals.',
//       icon: Award
//     },
//     {
//       year: '2024 - 2026',
//       title: 'Software Engineer | BMIT Solutions Ltd.',
//       description: 'Leading full-stack development projects with React and FastAPI',
//       icon: Code
//     },
//     {
//       year: '2023',
//       title: 'Full-Stack Developer | PID (Govt. Project)',
//       description: 'Built scalable web applications and RESTful APIs',
//       icon: Code
//     },
//     {
//       year: '2022',
//       title: 'Junior Software Engineer',
//       description: 'Transitioned from Django to FastAPI for better performance',
//       icon: Lightbulb
//     },
//     {
//       year: '2021',
//       title: 'Junior Web Developer | Front-End | Geeks n Technology Ltd',
//       description: 'Mastered modern React patterns and state management',
//       icon: Code
//     },
//     {
//       year: '2021',
//       title: 'Intern | Geeks n Technology Ltd',
//       description: 'Learned to build responsive user interfaces using HTML, CSS and JS',
//       icon: Code
//     }
//   ]

//   return (
//     <section id="about" className="py-20 bg-muted/20" ref={ref}>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2 
//           className="text-3xl md:text-4xl font-bold text-center mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           About Me
//         </motion.h2>

//         <div className="max-w-6xl mx-auto">
//           {/* Introduction */}
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
//               I'm <span className="text-primary font-semibold">Md Sazzad Hossen</span>, a passionate software engineer with expertise in React, Python, FastAPI, and PostgreSQL. 
//               I specialize in building scalable, high-performance web applications with clean, maintainable code. 
//               I love tackling complex problems and transforming ideas into real-world solutions.
//             </p>
//           </motion.div>

//           {/* Skills Section */}
//           <motion.div
//             className="mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <h3 className="text-2xl font-semibold text-center mb-8">Technical Skills</h3>
//             <div className="grid md:grid-cols-2 gap-6">
//               {skills.map((skill, index) => (
//                 <motion.div
//                   key={skill.name}
//                   className="relative"
//                   initial={{ opacity: 0, x: -30 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.1 * index }}
//                   onMouseEnter={() => setHoveredSkill(skill.name)}
//                   onMouseLeave={() => setHoveredSkill(null)}
//                 >
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="font-medium text-foreground">{skill.name}</span>
//                     <span className="text-sm text-muted-foreground">{skill.level}%</span>
//                   </div>
                  
//                   {/* Skill bar */}
//                   <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
//                     <motion.div
//                       className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
//                       initial={{ width: 0 }}
//                       animate={isInView ? { width: `${skill.level}%` } : {}}
//                       transition={{ duration: 1, delay: 0.5 + 0.1 * index, ease: "easeOut" }}
//                     />
//                   </div>

//                   {/* Tooltip */}
//                   {hoveredSkill === skill.name && (
//                     <motion.div
//                       className="absolute top-full left-0 right-0 mt-2 p-3 bg-card border border-border rounded-lg shadow-lg z-10"
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <p className="text-sm text-muted-foreground">{skill.description}</p>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Timeline Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.6 }}
//           >
//             <h3 className="text-2xl font-semibold text-center mb-8">My Journey</h3>
//             <div className="relative">
//               {/* Timeline line */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
              
//               <div className="space-y-8">
//                 {timeline.map((item, index) => (
//                   <motion.div
//                     key={item.year}
//                     className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
//                     initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.8 + 0.2 * index }}
//                   >
//                     <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
//                       <div className="bg-card border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
//                         <div className="flex items-center gap-2 mb-2">
//                           <item.icon size={16} className="text-primary" />
//                           <span className="text-sm font-semibold text-primary">{item.year}</span>
//                         </div>
//                         <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
//                         <p className="text-sm text-muted-foreground">{item.description}</p>
//                       </div>
//                     </div>
                    
//                     {/* Timeline dot */}
//                     <div className="relative z-10">
//                       <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
//                     </div>
                    
//                     <div className="w-5/12"></div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About

