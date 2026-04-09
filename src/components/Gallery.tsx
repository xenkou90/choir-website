import { useState } from 'react'

const photos = [
  { id: 1, src: 'https://placehold.co/600x400/1a1a1a/orange?text=Photo+1' },
  { id: 2, src: 'https://placehold.co/600x400/1a1a1a/orange?text=Photo+2' },
  { id: 3, src: 'https://placehold.co/600x400/1a1a1a/orange?text=Photo+3' },
  { id: 4, src: 'https://placehold.co/600x400/1a1a1a/orange?text=Photo+4' },
  { id: 5, src: 'https://placehold.co/600x400/1a1a1a/orange?text=Photo+5' },
  { id: 6, src: 'https://placehold.co/600x400/1a1a1a/orange?text=Photo+6' },
]

const Gallery = () => {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="gallery" className="bg-black py-24 px-6 md:px-70">

      {/* Section header */}
      <span className="text-xs tracking-widest uppercase text-orange-400">
        Our Moments
      </span>
      <h2 className="font-serif text-white text-5xl font-bold mt-4 mb-16">
        Gallery
      </h2>

      {/* Photo grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative overflow-hidden cursor-pointer group"
            onClick={() => setSelected(photo.src)}
          >
            <img
              src={photo.src}
              alt={"Ambitus Choir photo " + photo.id}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-xs tracking-widest uppercase">View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="Ambitus Choir"
            className="max-w-4xl max-h-screen object-contain"
          />
          <button
            className="absolute top-6 right-8 text-white/60 hover:text-white text-3xl"
            onClick={() => setSelected(null)}
          >
            ×
          </button>
        </div>
      )}

    </section>
  )
}

export default Gallery