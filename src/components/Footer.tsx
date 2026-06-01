const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6 md:px-70">

      {/* TOP — three columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

        {/* COLUMN 1 — logo + description */}
        <div className="flex flex-col gap-4">
          <a href="#" className="font-serif text-white text-xl tracking-widest uppercase hover:text-orange-400 transition-colors w-fit">
            Ambitus Choir
          </a>
          <p className="text-white/40 text-sm leading-relaxed">
            A passionate choral ensemble from Nea Smyrni, Greece. Founded in 2002,
            award-winning in national and international competitions.
          </p>
        </div>

        {/* COLUMN 2 — navigation */}
        <div className="flex flex-col gap-4">
          <span className="text-xs tracking-widest uppercase text-orange-400">
            Navigation
          </span>
          <div className="flex flex-col gap-3">
            {["About", "Gallery", "Calendar", "Contact"].map((link) => (
                <a
                    key={link}
                    href={"#" + link.toLowerCase()}
                    className="text-white/40 text-sm hover:text-orange-400 transition-colors w-fit"
                >
                {link}
                </a>
            ))}
          </div>
        </div>

        {/* COLUMN 3 — contact info */}
        <div className="flex flex-col gap-4">
          <span className="text-xs tracking-widest uppercase text-orange-400">
            Contact
          </span>
          <div className="flex flex-col gap-3 text-white/40 text-sm">
            <span>Nea Smyrni, Athens, Greece</span>
            <a href="mailto:info@ambituschoir.gr" className="hover:text-orange-400 transition-colors w-fit">
              info@ambituschoir.gr
            </a>
            <div className="flex gap-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Youtube</a>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM — copyright */}
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-white/20 text-xs tracking-wide">
          © {new Date().getFullYear()} Ambitus Choir. All rights reserved.
        </span>
        <span className="text-white/20 text-xs tracking-wide">
          Built with ♪
        </span>
      </div>

    </footer>
  )
}

export default Footer