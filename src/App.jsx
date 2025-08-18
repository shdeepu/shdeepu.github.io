import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <Hero />

      <About />

      <Projects />

      <TechStack />

      <Blog />

      <Contact />

      <Footer />
    </div>
  )
}

export default App

