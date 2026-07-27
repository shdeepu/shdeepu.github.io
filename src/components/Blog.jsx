import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen, Code, Lightbulb, Play, Server, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Helper to map string icon names from an API to actual Lucide components
const iconMap = {
  Code: Code,
  Lightbulb: Lightbulb,
  BookOpen: BookOpen,
  Play: Play,
  Server: Server,
  Database: Database
}

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  // Simulate a live API fetch
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        // Replace this with your actual FastAPI or Supabase endpoint
        // const response = await fetch('https://api.yourdomain.com/v1/posts')
        // const data = await response.json()
        
        // Simulated API Response
        setTimeout(() => {
          const mockData = [
            {
              id: 1,
              title: 'Building Scalable APIs with FastAPI',
              excerpt: 'Learn how to create high-performance APIs using FastAPI with proper error handling, validation, and automatic documentation generation.',
              content: 'FastAPI has revolutionized the way we build APIs in Python. In this comprehensive guide, we explore advanced patterns for building production-ready APIs that can handle thousands of requests per second.',
              date: '2024-01-15',
              readTime: '8 min read',
              category: 'Backend Development',
              iconName: 'Server',
              tags: ['FastAPI', 'Python', 'Architecture'],
              featured: true,
              type: 'article'
            },
            {
              id: 2,
              title: 'Day in the Life of a Software Engineer',
              excerpt: 'Behind the scenes looking at how I structure my day, manage tasks, and balance coding with system design.',
              content: 'Join me for a full day of development, debugging, and deploying applications.',
              date: '2024-02-10',
              readTime: '15 min watch',
              category: 'Vlog',
              iconName: 'Play',
              tags: ['Vlog', 'Career', 'Productivity'],
              featured: false,
              type: 'video'
            },
            {
              id: 3,
              title: 'Database Design Best Practices',
              excerpt: 'Essential principles for designing efficient, scalable database schemas with PostgreSQL, including indexing strategies and normalization.',
              content: 'Good database design is the foundation of any successful application. Learn the principles that will help you create maintainable and performant database schemas.',
              date: '2024-01-01',
              readTime: '10 min read',
              category: 'Database',
              iconName: 'Database',
              tags: ['PostgreSQL', 'SQL', 'Performance'],
              featured: false,
              type: 'article'
            }
          ]
          setPosts(mockData)
          setIsLoading(false)
        }, 1500) // 1.5 second simulated network delay
      } catch (error) {
        console.error("Failed to fetch posts:", error)
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const categories = ['All', ...new Set(posts.map(post => post.category))]
  
  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', month: 'long', day: 'numeric' 
    })
  }

  // Skeleton Loader Component for the "Live" feel
  const SkeletonCard = ({ featured }) => (
    <div className={`bg-card/40 border border-border/50 rounded-xl overflow-hidden shadow-sm animate-pulse ${featured ? 'lg:col-span-2 lg:flex' : ''}`}>
      <div className={`p-8 ${featured ? 'lg:w-2/3' : ''}`}>
        <div className="flex gap-2 mb-4">
          <div className="h-6 w-20 bg-muted rounded-full"></div>
          <div className="h-6 w-24 bg-muted rounded-full"></div>
        </div>
        <div className="h-8 w-3/4 bg-muted rounded-md mb-4"></div>
        <div className="h-4 w-full bg-muted rounded-md mb-2"></div>
        <div className="h-4 w-5/6 bg-muted rounded-md mb-6"></div>
        <div className="flex gap-2 mb-6">
          <div className="h-6 w-16 bg-muted/50 rounded-md"></div>
          <div className="h-6 w-16 bg-muted/50 rounded-md"></div>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <div className="h-4 w-32 bg-muted rounded-md"></div>
          <div className="h-8 w-24 bg-muted rounded-md"></div>
        </div>
      </div>
      {featured && (
        <div className="hidden lg:block lg:w-1/3 bg-muted/20"></div>
      )}
    </div>
  )

  return (
    <section id="blog" className="py-20 bg-muted/10 relative overflow-hidden" ref={ref}>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech Insights & <span className="text-primary">Vlogs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Live updates, tutorials, and behind-the-scenes engineering vlogs fetched directly from the database.
          </p>
        </motion.div>

        {/* Dynamic Category Filter */}
        {!isLoading && (
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full transition-all"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {isLoading ? (
              // Show Skeletons while fetching
              <>
                <SkeletonCard featured={true} />
                <SkeletonCard featured={false} />
                <SkeletonCard featured={false} />
              </>
            ) : (
              // Render Live Posts
              filteredPosts.map((post, index) => {
                const Icon = iconMap[post.iconName] || Code // Fallback icon

                return (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, duration: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`group relative ${post.featured ? 'lg:col-span-2' : ''}`}
                  >
                    <div className={`h-full bg-background/60 backdrop-blur-md border border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 ${post.featured ? 'lg:flex' : 'flex flex-col'}`}>
                      
                      <div className={`p-8 flex flex-col flex-grow ${post.featured ? 'lg:w-2/3' : ''}`}>
                        <div className="flex items-center gap-2 mb-4">
                          {post.type === 'video' && (
                            <span className="px-3 py-1 bg-red-500/10 text-red-500 text-xs font-semibold rounded-full flex items-center gap-1">
                              <Play size={12} /> Vlog
                            </span>
                          )}
                          {post.featured && (
                            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                              Featured
                            </span>
                          )}
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                            {post.category}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed text-sm flex-grow">
                          {post.featured ? post.content : post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-primary/5 border border-primary/10 text-primary text-xs rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{formatDate(post.date)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 group/btn">
                            {post.type === 'video' ? 'Watch Now' : 'Read More'}
                            <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>

                      {/* Visual Graphic Area */}
                      {post.featured && (
                        <div className="hidden lg:flex lg:w-1/3 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent items-center justify-center border-l border-border/50">
                          <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm border border-primary/20"
                          >
                            <Icon size={48} className="text-primary" />
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </motion.article>
                )
              })
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Blog









// import { useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { Calendar, Clock, ArrowRight, BookOpen, Code, Lightbulb } from 'lucide-react'
// import { Button } from '@/components/ui/button'

// const Blog = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, threshold: 0.2 })

//   const blogPosts = [
//     {
//       id: 1,
//       title: 'Building Scalable APIs with FastAPI',
//       excerpt: 'Learn how to create high-performance APIs using FastAPI with proper error handling, validation, and automatic documentation generation.',
//       content: 'FastAPI has revolutionized the way we build APIs in Python. In this comprehensive guide, we explore advanced patterns for building production-ready APIs that can handle thousands of requests per second.',
//       date: '2024-01-15',
//       readTime: '8 min read',
//       category: 'Backend Development',
//       icon: Code,
//       tags: ['FastAPI', 'Python', 'API Design', 'Performance'],
//       featured: true
//     },
//     {
//       id: 2,
//       title: 'React Performance Optimization Techniques',
//       excerpt: 'Discover advanced React optimization strategies including memoization, code splitting, and virtual scrolling for better user experience.',
//       content: 'Performance is crucial for modern web applications. This article covers practical techniques to optimize React applications, from basic memoization to advanced patterns.',
//       date: '2024-01-08',
//       readTime: '12 min read',
//       category: 'Frontend Development',
//       icon: Lightbulb,
//       tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
//       featured: false
//     },
//     {
//       id: 3,
//       title: 'Database Design Best Practices',
//       excerpt: 'Essential principles for designing efficient, scalable database schemas with PostgreSQL, including indexing strategies and normalization.',
//       content: 'Good database design is the foundation of any successful application. Learn the principles that will help you create maintainable and performant database schemas.',
//       date: '2024-01-01',
//       readTime: '10 min read',
//       category: 'Database',
//       icon: BookOpen,
//       tags: ['PostgreSQL', 'Database Design', 'SQL', 'Performance'],
//       featured: false
//     },
//     {
//       id: 4,
//       title: 'Modern CSS Techniques with TailwindCSS',
//       excerpt: 'Explore advanced TailwindCSS patterns for creating responsive, maintainable, and beautiful user interfaces.',
//       content: 'TailwindCSS has changed how we approach CSS. This guide covers advanced techniques for building modern, responsive interfaces with utility-first CSS.',
//       date: '2023-12-25',
//       readTime: '6 min read',
//       category: 'CSS & Design',
//       icon: Code,
//       tags: ['TailwindCSS', 'CSS', 'Design', 'Responsive'],
//       featured: false
//     }
//   ]

//   const formatDate = (dateString) => {
//     const date = new Date(dateString)
//     return date.toLocaleDateString('en-US', { 
//       year: 'numeric', 
//       month: 'long', 
//       day: 'numeric' 
//     })
//   }

//   return (
//     <section id="blog" className="py-20" ref={ref}>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2 
//           className="text-3xl md:text-4xl font-bold text-center mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           Tech Insights & Tutorials
//         </motion.h2>

//         <motion.p
//           className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           Sharing knowledge and insights from my journey in software development. 
//           From technical deep-dives to practical tutorials.
//         </motion.p>

//         <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {blogPosts.map((post, index) => (
//             <motion.article
//               key={post.id}
//               className={`group relative ${post.featured ? 'lg:col-span-2' : ''}`}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.1 * index }}
//             >
//               <div className={`bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${post.featured ? 'lg:flex lg:items-center' : ''}`}>
//                 {/* Featured post layout */}
//                 {post.featured ? (
//                   <>
//                     {/* Content */}
//                     <div className="p-8 lg:w-2/3">
//                       <div className="flex items-center gap-2 mb-4">
//                         <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
//                           Featured
//                         </span>
//                         <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
//                           {post.category}
//                         </span>
//                       </div>
                      
//                       <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
//                         {post.title}
//                       </h3>
                      
//                       <p className="text-muted-foreground mb-6 leading-relaxed">
//                         {post.content}
//                       </p>

//                       <div className="flex flex-wrap gap-2 mb-6">
//                         {post.tags.map((tag) => (
//                           <span 
//                             key={tag}
//                             className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>

//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                           <div className="flex items-center gap-1">
//                             <Calendar size={14} />
//                             <span>{formatDate(post.date)}</span>
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <Clock size={14} />
//                             <span>{post.readTime}</span>
//                           </div>
//                         </div>
                        
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           className="text-primary hover:text-primary/80 group"
//                         >
//                           Read More
//                           <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
//                         </Button>
//                       </div>
//                     </div>

//                     {/* Featured post visual */}
//                     <div className="lg:w-1/3 h-64 lg:h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
//                       <div className="text-center">
//                         <post.icon size={48} className="text-primary mx-auto mb-4" />
//                         <div className="text-primary font-semibold">Featured Article</div>
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   /* Regular post layout */
//                   <div className="p-6">
//                     {/* Post visual */}
//                     <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-6">
//                       <post.icon size={32} className="text-primary" />
//                     </div>

//                     <div className="flex items-center gap-2 mb-3">
//                       <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
//                         {post.category}
//                       </span>
//                     </div>
                    
//                     <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
//                       {post.title}
//                     </h3>
                    
//                     <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
//                       {post.excerpt}
//                     </p>

//                     <div className="flex flex-wrap gap-1 mb-4">
//                       {post.tags.slice(0, 3).map((tag) => (
//                         <span 
//                           key={tag}
//                           className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-3 text-xs text-muted-foreground">
//                         <div className="flex items-center gap-1">
//                           <Calendar size={12} />
//                           <span>{formatDate(post.date)}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Clock size={12} />
//                           <span>{post.readTime}</span>
//                         </div>
//                       </div>
                      
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         className="text-primary hover:text-primary/80 text-xs group"
//                       >
//                         Read More
//                         <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
//                       </Button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </motion.article>
//           ))}
//         </div>

//         {/* View All Posts Button */}
//         <motion.div
//           className="text-center mt-12"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.8 }}
//         >
//           <Button
//             variant="outline"
//             size="lg"
//             className="px-8 py-3"
//           >
//             View All Posts
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Blog

