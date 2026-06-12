"use client"

import { useState } from 'react'

const items = [
  {
    q: 'What does Axinex Technologies build?',
    a: 'We design and deliver dependable digital solutions — web applications, cloud infrastructure, and integrated platforms that streamline operations and accelerate transformation.',
  },
  {
    q: 'Who does Axinex Technologies serve?',
    a: 'We work with enterprises and growth-stage businesses across sectors that need secure, scalable, and auditable technology solutions.',
  },
  {
    q: 'How is quality handled?',
    a: 'Quality is enforced through automated testing, security reviews, and continuous delivery practices tailored to each engagement.',
  },
  {
    q: 'Can the solutions grow later?',
    a: 'Yes — our architectures prioritise modularity and scalability so solutions can evolve with your business needs.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[900px] mx-auto">
      <div className="text-center mb-stack-md">
        <h3 className="font-display-italic italic text-[18px] font-bold text-vibrant-red tracking-widest">Frequently Asked Questions</h3>
        <h2 className="font-headline-lg text-headline-lg text-primary mt-2">Quick answers for business decision-makers.</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">A concise summary of what Axinex Technologies offers, who it serves, and how delivery quality is handled.</p>
      </div>

      <div className="space-y-4">
        {items.map((it, idx) => (
          <div
            key={idx}
            className={`bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20 transition-all ${openIndex === idx ? 'shadow-lg ring-1 ring-primary/20' : ''}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full text-left flex items-center justify-between gap-4"
            >
              <span className="font-headline-md text-xl text-primary">{it.q}</span>
              <span className="text-primary text-2xl">{openIndex === idx ? '−' : '+'}</span>
            </button>
            {openIndex === idx && (
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant">{it.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
