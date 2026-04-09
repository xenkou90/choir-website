const About = () => {
  return (
    <section id="about" className="bg-black py-24">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* LEFT — text */}
        <div className="flex flex-col justify-center px-6 md:px-70 py-12">
          <span className="text-xs tracking-widest uppercase text-orange-400 mb-4">
            Our Story
          </span>
          <h2 className="font-serif text-white text-5xl font-bold mb-8">
            Who We Are
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            Η Χορωδία «Ambitus» υφίσταται από το 2002 και είναι ιδρυτικό μέλος 
            της Στέγης Ελληνικών Χορωδιών. Αποτελείται από απόφοιτους του Λεοντείου 
            Λυκείου Νέας Σμύρνης, μουσικούς - ερασιτέχνες και μη - καθώς και άλλους 
            λάτρεις του χορωδιακού τραγουδιού. 
          </p>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            Αποτελούμενη από μικτό, ανδρικό και γυναικείο σύνολο, έχει διακριθεί σε 
            εθνικούς και διεθνείς διαγωνισμούς κερδίζοντας, μεταξύ άλλων, 
            πρώτα βραβεία και grand-prix, τόσο στην Ελλάδα όσο και στο εξωτερικό.
          </p>
        </div>

        {/* RIGHT — photo */}
        <div className="relative h-64 md:h-auto">
          <img
            src="/src/assets/photo-about-page.jpg"
            alt="Ambitus Choir"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-orange-400/10" />
        </div>

      </div>
    </section>
  )
}

export default About