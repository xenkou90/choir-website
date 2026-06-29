import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Calendar from './components/Calendar'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black fade-in">
      <Navbar />
      <Hero />
      <hr className="border-white/5" />
      <About />
      <hr className="border-white/5" />
      <Gallery />
      <hr className="border-white/5" />
      <Calendar />
      <hr className="border-white/5" />
      <Contact />
      <hr className="border-white/5" />
      <Footer />

      {/* Back to top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 border border-orange-400 text-orange-400 text-xs tracking-widest uppercase px-5 py-3 hover:bg-orange-400 hover:text-black transition-all"
        >
          ↑ Top
        </button>
      )}
    </div>
  )
}

export default App