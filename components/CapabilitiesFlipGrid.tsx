"use client"

import { useState } from 'react'
import Link from 'next/link'
import InlineIcon from './InlineIcon'
import { serviceCatalog } from '@/lib/services'

const capabilities = serviceCatalog.map((service) => ({
  title: service.menuLabel,
  image: service.image,
  icon: service.icon,
  text: service.summary,
  slug: service.slug,
}))

export default function CapabilitiesFlipGrid() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  return (
    <section className="mb-section-gap" style={{ fontFamily: 'Playfair Display, serif' }}>
      <div className="mb-6">
        <h2 className="font-headline-lg text-headline-lg text-primary">Capabilities</h2>
        <p className="mt-2 font-display-italic text-[19px] text-on-surface-variant">
          Specialized tracks for enterprise evolution.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:gap-5">
        {capabilities.map((card, index) => {
          const isFlipped = flippedIndex === index

          return (
            <div
              key={card.title}
              className="group relative h-[280px] w-full text-left"
              style={{ perspective: '1400px' }}
            >
              <div
                className="relative h-full w-full transition-transform duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front Side */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setFlippedIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setFlippedIndex(index)
                    }
                  }}
                  className="absolute inset-0 overflow-hidden rounded-[18px] shadow-[0_12px_22px_rgba(12,34,55,0.14)] cursor-pointer"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071c31]/90 via-[#0b3357]/58 to-[#0d3a60]/25" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_45%)]" />
                  <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-white/15 backdrop-blur-sm">
                      <InlineIcon name={card.icon} className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="max-w-[11rem] text-[1.38rem] leading-[1.03] font-normal tracking-[-0.02em] text-white">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    if ((e.target as HTMLElement).closest('a')) return
                    setFlippedIndex(null)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      if ((e.target as HTMLElement).closest('a')) return
                      e.preventDefault()
                      setFlippedIndex(null)
                    }
                  }}
                  className="absolute inset-0 overflow-hidden rounded-[18px] bg-primary text-on-primary shadow-[0_12px_22px_rgba(12,34,55,0.14)] cursor-pointer"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="flex h-full flex-col justify-between p-5 text-center">
                    <div className="flex-grow flex items-center justify-center">
                      <p className="mx-auto max-w-[16rem] text-[1.03rem] leading-[1.45] text-white/90">
                        {card.text}
                      </p>
                    </div>
                    <div className="mt-2">
                      <Link
                        href={`/services/${card.slug}`}
                        className="inline-flex items-center justify-center rounded-lg bg-vibrant-red px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
