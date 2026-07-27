import { useEffect, useState } from 'react'

const links = ["About", "Gallery", "Calendar", "Contact"]

const Navbar = () => {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    links.forEach((link) => {
      const section = document.getElementById(link.toLowerCase())
      if (!section) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(link.toLowerCase())
        },
        { threshold: 0.4 }
      )

      observer.observe(section)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-between px-6 md:px-70 py-5">

        {/* LOGO */}
        <a
          href="#"
          className="font-serif text-white text-xl tracking-widest uppercase whitespace-nowrap hover:text-orange-400 transition-colors"
        >
          Ambitus Choir
        </a>

        {/* NAV LINKS — desktop */}
        <div className="hidden md:flex gap-9">
          {links.map((link) => (
            <a
              key={link}
              href={"#" + link.toLowerCase()}
              className={
                "text-xs tracking-widest uppercase transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-orange-400 after:transition-all hover:after:w-full " +
                (active === link.toLowerCase()
                  ? "text-orange-400 after:w-full"
                  : "text-white/60 hover:text-orange-400")
              }
            >
              {link}
            </a>
          ))}
        </div>

        {/* SOCIAL — desktop */}
        <div className="hidden md:flex gap-4 text-sm">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-orange-400 transition-colors">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-orange-400 transition-colors">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-orange-400 transition-colors">Youtube</a>
        </div>

        {/* HAMBURGER BUTTON — mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6"
          aria-label="Toggle menu"
        >
          <span className={"h-px bg-white transition-all " + (menuOpen ? "rotate-45 translate-y-2" : "")} />
          <span className={"h-px bg-white transition-all " + (menuOpen ? "opacity-0" : "")} />
          <span className={"h-px bg-white transition-all " + (menuOpen ? "-rotate-45 -translate-y-2" : "")} />
        </button>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 border-t border-white/10 pt-4">
          {links.map((link) => (
            <a
              key={link}
              href={"#" + link.toLowerCase()}
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-widest uppercase text-white/60 hover:text-orange-400 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="flex gap-4 text-sm pt-2 border-t border-white/10 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-orange-400 transition-colors">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-orange-400 transition-colors">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-orange-400 transition-colors">Youtube</a>
          </div>
        </div>
      )}

    </nav>
  )
}

export default Navbar