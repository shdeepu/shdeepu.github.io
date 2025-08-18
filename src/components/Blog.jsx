import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen, Code, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Blog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable APIs with FastAPI',
      excerpt: 'Learn how to create high-performance APIs using FastAPI with proper error handling, validation, and automatic documentation generation.',
      content: 'FastAPI has revolutionized the way we build APIs in Python. In this comprehensive guide, we explore advanced patterns for building production-ready APIs that can handle thousands of requests per second.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Backend Development',
      icon: Code,
      tags: ['FastAPI', 'Python', 'API Design', 'Performance'],
      featured: true
    },
    {
      id: 2,
      title: 'React Performance Optimization Techniques',
      excerpt: 'Discover advanced React optimization strategies including memoization, code splitting, and virtual scrolling for better user experience.',
      content: 'Performance is crucial for modern web applications. This article covers practical techniques to optimize React applications, from basic memoization to advanced patterns.',
      date: '2024-01-08',
      readTime: '12 min read',
      category: 'Frontend Development',
      icon: Lightbulb,
      tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
      featured: false
    },
    {
      id: 3,
      title: 'Database Design Best Practices',
      excerpt: 'Essential principles for designing efficient, scalable database schemas with PostgreSQL, including indexing strategies and normalization.',
      content: 'Good database design is the foundation of any successful application. Learn the principles that will help you create maintainable and performant database schemas.',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Database',
      icon: BookOpen,
      tags: ['PostgreSQL', 'Database Design', 'SQL', 'Performance'],
      featured: false
    },
    {
      id: 4,
      title: 'Modern CSS Techniques with TailwindCSS',
      excerpt: 'Explore advanced TailwindCSS patterns for creating responsive, maintainable, and beautiful user interfaces.',
      content: 'TailwindCSS has changed how we approach CSS. This guide covers advanced techniques for building modern, responsive interfaces with utility-first CSS.',
      date: '2023-12-25',
      readTime: '6 min read',
      category: 'CSS & Design',
      icon: Code,
      tags: ['TailwindCSS', 'CSS', 'Design', 'Responsive'],
      featured: false
    }
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <section id="blog" className="py-20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Tech Insights & Tutorials
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sharing knowledge and insights from my journey in software development. 
          From technical deep-dives to practical tutorials.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className={`group relative ${post.featured ? 'lg:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className={`bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${post.featured ? 'lg:flex lg:items-center' : ''}`}>
                {/* Featured post layout */}
                {post.featured ? (
                  <>
                    {/* Content */}
                    <div className="p-8 lg:w-2/3">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                          Featured
                        </span>
                        <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {post.content}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary/80 group"
                        >
                          Read More
                          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>

                    {/* Featured post visual */}
                    <div className="lg:w-1/3 h-64 lg:h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <div className="text-center">
                        <post.icon size={48} className="text-primary mx-auto mb-4" />
                        <div className="text-primary font-semibold">Featured Article</div>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Regular post layout */
                  <div className="p-6">
                    {/* Post visual */}
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-6">
                      <post.icon size={32} className="text-primary" />
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary/80 text-xs group"
                      >
                        Read More
                        <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Posts Button */}
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
          >
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog

