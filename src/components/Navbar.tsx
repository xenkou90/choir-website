const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-between px-6 md:px-70 py-5">

        {/* LOGO */}
        <a href="#" className="font-serif text-white text-xl tracking-widest uppercase whitespace-nowrap hover:text-orange-400 transition-colors">
          Ambitus Choir
        </a>

        {/* NAV LINKS — hidden on mobile */}
        <div className="hidden md:flex gap-9">
          {["About", "Gallery", "Calendar", "Contact"].map((link) => (
            <a
              key={link}
              href={"#" + link.toLowerCase()}
              className="text-xs tracking-widest uppercase text-white/60 hover:text-orange-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* SOCIAL — hidden on mobile */}
        <div className="hidden md:flex gap-4 text-sm">
          <a href="https://www.facebook.com/AmbitusChoir" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase text-white/60 hover:text-orange-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-orange-400 after:transition-all hover:after:w-full">Facebook</a>
          <a href="https://www.instagram.com/ambitus_choir" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase text-white/60 hover:text-orange-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-orange-400 after:transition-all hover:after:w-full">Instagram</a>
          <a href="https://www.youtube.com/@ambituschoirgreecce" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase text-white/60 hover:text-orange-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-orange-400 after:transition-all hover:after:w-full">Youtube</a>
        </div>

        {/* MENU — mobile only */}
        <div className="md:hidden text-white/60 text-xs tracking-widest uppercase">
          Menu
        </div>

      </div>
    </nav>
  )
}

export default Navbar