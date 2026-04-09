const Hero = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-black">

            <div className="flex flex-col justify-center pl-6 md:pl-70 py-20">
                <span className="text-xs tracking-widest uppercase text-orange-400 mb-8">
                    Choral Ensemble · EST. 2002
                </span>
                <h1 className="font-serif text-white text-7xl font-bold leading-tight mb-8">
                    Voices<br />That Move<br />the Soul
                </h1>

                <a
                    href="#calendar"
                    className="border border-orange-400 text-orange-400 text-xs tracking-widest uppercase px-8 py-4 w-fit hover:bg-orange-400 hover:text-black transition-all"
                >
                Upcoming Performances
                </a>
            </div>

            <div className="relative h-64 md:h-auto">
                <img
                    src="/src/assets/photo-home-page.jpg"
                    alt="Ambitus Choir"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-orange-400/10" />
            </div>
        </section>
    )
}

export default Hero