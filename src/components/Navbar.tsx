const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-70 py-5 border-b border-white/10 bg-black sticky top-0 z-50">

      {/* LEFT — logo + location */}
      <div className="flex items-center gap-6">
        <span className="font-serif text-white text-xl tracking-widest uppercase">
          Ambitus Choir
        </span>
        <span className="text-xs text-white/40 tracking-wide border-l border-white/20 pl-6">
          Ambitus: the vocal range, the order of sounds…
        </span>
      </div>

      {/* CENTER — navigation links */}
      <div className="flex gap-9">
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

      {/* RIGHT — social links */}
      <div className="flex gap-4 text-white/40 text-sm">
        <a href="https://www.facebook.com/AmbitusChoir" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">Facebook</a>
        <a href="https://www.instagram.com/ambitus_choir/" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">Instagram</a>
        <a href="https://www.youtube.com/@ambituschoirgreecce" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">Youtube</a>
      </div>

    </nav>
  )
}

export default Navbar