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
        <div className="hidden md:flex gap-4 text-white/40 text-sm">
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Youtube</span>
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