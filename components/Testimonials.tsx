export default function Testimonials() {
  const items = [
    {
      quote:
        "Scaling an enterprise isn't just about adding resources; it's about architecting systems that thrive under complexity. Our focus is on resilient, adaptive infrastructure.",
      name: 'Dr. Marcus Chen',
      role: 'Our Founder',
    },
    {
      quote:
        "Data is the fuel, but intelligence is the engine. We ensure our clients aren't just collecting data, but translating it into decisive competitive advantages.",
      name: 'Elena Rodriguez',
      role: 'Our Co-Founder',
    },
    {
      quote:
        "Security must be invisible yet impenetrable. In a zero-trust world, we build the foundations that allow global enterprises to operate with total confidence.",
      name: 'Jameson Vane',
      role: 'Our President',
    },
  ]

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1100px] mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-headline-lg text-headline-lg text-primary">What Our <em className="not-italic">Experts</em> Say</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">Insights from our technology leadership team.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <div key={idx} className="bg-surface-container-low rounded-2xl p-6 shadow-md border border-outline-variant/20">
            <div className="text-primary text-4xl mb-4">“</div>
            <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">{it.quote}</p>

            <div className="flex items-center gap-3 mt-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">{it.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
              <div>
                <div className="font-label-md text-label-md text-primary">{it.name}</div>
                <div className="font-caption text-caption text-on-surface-variant uppercase tracking-widest">{it.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
