export default function TestimonialCarousel() {
  const cards = [
    {
      quote:
        "Scaling an enterprise isn't just about adding resources; it's about architecting systems that thrive under complexity. Our focus is on resilient, adaptive infrastructure.",
      name: 'Dr. Marcus Chen',
      roleLabel: 'Our Founder',
      role: 'CHIEF SYSTEMS ARCHITECT',
    },
    {
      quote:
        "Data is the fuel, but intelligence is the engine. We ensure our clients aren't just collecting data, but translating it into decisive competitive advantages.",
      name: 'Elena Rodriguez',
      roleLabel: 'Our Co-founder',
      role: 'VP OF DATA INTELLIGENCE',
    },
    {
      quote:
        "Security must be invisible yet impenetrable. In a zero-trust world, we build the foundations that allow global enterprises to operate with total confidence.",
      name: 'Jameson Vane',
      roleLabel: 'Our President',
      role: 'HEAD OF CYBERSECURITY',
    },
  ]

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-[1200px] mx-auto text-center mb-8">
        <h2 className="font-headline-lg text-headline-lg text-primary">
          What Our <span className="font-display-italic italic font-normal">Experts</span> Say
        </h2>
        <div className="w-20 h-1 bg-vibrant-red mx-auto mt-3 rounded"></div>
        <p className="font-body-md text-body-md text-on-surface-variant mt-4">Insights from our technology leadership team.</p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div key={i} className="bg-surface-container-low rounded-2xl p-6 shadow-md">
            <div className="text-primary text-[80px] mb-2">“</div>
            <p className="font-body-md text-body-md text-on-surface-variant italic mb-6">{c.quote}</p>

            <div className="mt-6 flex items-center gap-3">
              <img
                src={
                  i === 0
                    ? '/assets/Founder.jpeg'
                    : i === 1
                    ? '/assets/Co-Founder.jpeg'
                    : '/assets/President.jpeg'
                }
                alt={c.roleLabel}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-headline-md font-bold text-[20px] md:text-[22px] text-primary">{c.roleLabel}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
