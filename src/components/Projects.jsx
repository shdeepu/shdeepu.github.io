import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink, Calendar, Users, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'


const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const projects = [
    {
      id: 1,
      title: 'BMIT VAT',
      shortDescription: 'A comprehensive VAT management platform.',
      fullDescription: 'a complete VAT Management software developed by BMIT Solutions Ltd. as per the rules of National Board of Revenue (NBR) Bangladesh, also approved by the authority. BMIT VAT software follows the NBR Guideline fully compliant with VAT & SD Act 2012, as of GO-16/VAT/2019.',
      technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'PyJWT', 'email-validator'],
      features: [
        'Real Time Reporting',
        'Highly Secure',
        'Paperless Solution',
        'API Integration',
        'Better Product Tracking',
        'Cloud & On Premise Solution',
        'Stay Updated on Changes in NBR Law',
        'Supplier & Customer Management',
        'Purchase Management',
        'Inventory Management',
        'Production Management',
        'Sales Management',
        'Reporting Module',
        'Employee Management',
        'Debit/ Credit Note Management',
        'VAT Return Submission'
        
      ],
      githubUrl: 'https://github.com/shdeepu/Bmit-vat',
      liveUrl: 'https://bmit.com.bd/vat',
      status: 'Completed',
      duration: '12 months',
      team: '4 developers',
      image: '/bmitvat.jpg'

    },
    {
      id: 2,
      title: 'Portfolio website',
      shortDescription: 'Personal Portfolio Website',
      fullDescription: 'This is my personal portfolio website, designed to showcase my skills, projects, and professional journey as a software engineer.',
      technologies: ['React', 'JavaScript', 'TailwindCSS', 'Framer Motion', 'git'],

      features: [
        'Real Time Reporting',
        'Interactive Hero Section: An animated typing effect, a round profile picture with a glowing neon background, and call-to-action buttons.',
        'About Me Section: Interactive skill bars and a timeline of your career journey.',
        'Projects Showcase: Interactive cards that expand to show more details about your projects.',
        'Tech Stack: A visually appealing display of your technical skills with interactive icons.',
        'Dark/Light Mode: A theme switcher that remembers the users preference.',
        'Responsive Design: The website is fully responsive and looks great on all devices, from mobile phones to desktops.',
        'Contact Form: A functional contact form with validation.'
      ],

      githubUrl: 'https://github.com/shdeepu/Bmit-vat',
      liveUrl: 'https://bmit.com.bd/vat',
      status: 'Completed',
      duration: '7days',
      team: 'Self',
      image: '/portfolio.png'

    },
    {
      id: 3,
      title: 'HR Management System',
      shortDescription: 'A comprehensive HR management platform for modern businesses.',
      fullDescription: 'A full-stack web application built with React, FastAPI, and PostgreSQL to manage employee records, attendance, and performance. Features role-based access control, real-time reporting, automated payroll processing, and employee self-service portal. The system handles complex HR workflows and integrates with external APIs for enhanced functionality.',
      technologies: ['React', 'FastAPI', 'PostgreSQL', 'TailwindCSS'],
      features: [
        'Employee management and onboarding',
        'Attendance tracking with biometric integration',
        'Performance evaluation system',
        'Payroll automation',
        'Real-time analytics dashboard',
        'Role-based access control'
      ],
      githubUrl: 'https://github.com/mdsazzadhossen/hr-management',
      liveUrl: 'https://hr.bmit.com.bd/',
      status: 'Completed',
      duration: '6 months',
      team: '2 developers',
      image: '/HR.png'
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      shortDescription: 'Modern e-commerce solution with advanced features.',
      fullDescription: 'A full-stack web application built with React, FastAPI, and PostgreSQL to manage employee records, attendance, and performance. Features role-based access control, real-time reporting, automated payroll processing, and employee self-service portal. The system handles complex HR workflows and integrates with external APIs for enhanced functionality.,,A scalable e-commerce platform built with React and FastAPI, featuring product catalog management, shopping cart, payment integration, order tracking, and admin dashboard. Includes advanced search functionality, recommendation engine, and multi-vendor support.',
      technologies: ['React', 'FastAPI', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
      features: [
        'Product catalog with advanced search',
        'Shopping cart and wishlist',
        'Secure payment processing',
        'Order management system',
        'Inventory tracking',
        'Multi-vendor marketplace'
      ],
      githubUrl: 'https://github.com/shdeepu/ecommerce-platform',
      liveUrl: 'https://shop-demo.sazzad.dev',
      status: 'In Progress',
      duration: '8 months',
      team: '5 developers',
      image: '/api/placeholder/400/250'
    },
    
  ]

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Selected Projects
        </motion.h2>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Project Image Placeholder */}
                <div className="h-48 overflow-hidden">
  <img 
    src={project.image} 
    alt={project.title} 
    className="w-full h-full object-cover"
  />
</div>

                {/* <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div> */}

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={12} />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: expandedProject === project.id ? 'auto' : 0,
                      opacity: expandedProject === project.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {expandedProject === project.id && (
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {project.fullDescription}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <Star size={10} className="text-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2">All Technologies:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech) => (
                              <span 
                                key={tech}
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        asChild
                      >
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <Github size={14} />
                          Code
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        asChild
                      >
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink size={14} />
                          Demo
                        </a>
                      </Button>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpand(project.id)}
                      className="text-xs text-primary hover:text-primary/80"
                    >
                      {expandedProject === project.id ? 'Show Less' : 'Learn More'}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3"
            asChild
          >
            <a 
              href="https://github.com/shdeepu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

