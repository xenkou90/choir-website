import events from '../events.json'

const Calendar = () => {
    return (
        <section id="calendar" className="bg-black py-24 px-70">

            {/* Section header */}
            <span className="text-xs tracking-widest uppercase text-orange-400">
                Upcoming Performances
            </span>
            <h2 className="font-serif text-white text-5xl font-bold mt-4 mb-16">
                Where to Find Us
            </h2>

            {/* Events List */}
            <div className="flex flex-col divide-y divide-white/10">
                {events.map((event) => {
                    const date = new Date(event.date)
                    const day = date.toLocaleDateString('en-GB', { day: '2-digit' })
                    const month = date.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase()
                    const year = date.getFullYear()

                    return (
                        <div key={event.date} className="flex items-start gap-12 py-8 group">

                            {/* Date block */}
                            <div className="flex flex-col items-center w-16 shrink-0">
                                <span className="font-serif text-orange-400 text-3xl font-bold leading-none">
                                    {day}
                                </span>
                                <span className="text-white/10 text-xs tracking-widest  mt-1">
                                    {month} {year}
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="w-px self-stretch bg-white/10" />

                            {/* Event details */}
                            <div className="flex flex-col gap-1">
                                <h3 className="font-serif text-white text-2xl group-hover:text-orange-400 transition-colors">
                                    {event.title}
                                </h3>
                                <span className="text-white/40 text-xs tracking-wide uppercase">
                                    {event.venue} · {event.city}
                                </span>
                                <p className="text-white/50 text-sm leading-relaxed mt-2">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Calendar