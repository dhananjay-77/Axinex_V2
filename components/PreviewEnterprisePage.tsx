"use client"

import Link from 'next/link'
import { useEffect, useState, type ReactNode } from 'react'

export type PreviewItem = {
  title: string
  icon: string
  description: string
  capabilities: string[]
  accent: 'blue' | 'red'
  href?: string
  overview: string
  challengeTitle: string
  challenges: string[]
  solutionTitle: string
  solutions: string[]
  outcomesTitle: string
  outcomes: string[]
  useCasesTitle: string
  useCases: string[]
}

export type PreviewEnterprisePageProps = {
  eyebrow: string
  title: string
  italicTitle: string
  description: string
  primaryButton: string
  secondaryButton?: string
  secondaryHref?: string
  itemsLabel: string
  itemsTitle: string
  itemsDescription: string
  metricOne: string
  metricOneLabel: string
  metricTwo: string
  metricTwoLabel: string
  items: PreviewItem[]
}

function MaterialIcon({ name, className = '' }: { name: string; className?: string }) {
  const shared = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.8,
  } as const

  const paths: Record<string, ReactNode> = {
    account_balance: (
      <>
        <path d="M4 9h16" {...shared} />
        <path d="M12 4 4.8 8.4h14.4L12 4Z" {...shared} />
        <path d="M6 10v7M10 10v7M14 10v7M18 10v7" {...shared} />
        <path d="M4.5 20h15" {...shared} />
      </>
    ),
    school: (
      <>
        <path d="m3 9 9-4 9 4-9 4-9-4Z" {...shared} />
        <path d="M7 11.2v4.3c1.6 1.4 3.2 2.1 5 2.1s3.4-.7 5-2.1v-4.3" {...shared} />
        <path d="M21 9v5" {...shared} />
      </>
    ),
    local_hospital: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2.5" {...shared} />
        <path d="M12 8v8M8 12h8" {...shared} />
      </>
    ),
    factory: (
      <>
        <path d="M4 20V9l5 3V9l5 3V8h4v12H4Z" {...shared} />
        <path d="M7 16h2M12 16h2M17 16h1" {...shared} />
      </>
    ),
    payments: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2.5" {...shared} />
        <path d="M3 10h18M7 15h4" {...shared} />
      </>
    ),
    storefront: (
      <>
        <path d="M5 10h14l-1-5H6l-1 5Z" {...shared} />
        <path d="M6 10v10h12V10M9 20v-6h6v6" {...shared} />
        <path d="M5 10c0 1.2 1 2 2 2s2-.8 2-2c0 1.2 1 2 2 2s2-.8 2-2c0 1.2 1 2 2 2s2-.8 2-2c0 1.2 1 2 2 2s2-.8 2-2" {...shared} />
      </>
    ),
    local_shipping: (
      <>
        <path d="M3 7h11v10H3V7ZM14 11h3l3 3v3h-6v-6Z" {...shared} />
        <circle cx="7" cy="18" r="1.7" {...shared} />
        <circle cx="17" cy="18" r="1.7" {...shared} />
      </>
    ),
    business_center: (
      <>
        <rect x="4" y="7" width="16" height="13" rx="2" {...shared} />
        <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M4 12h16M11 12v2h2v-2" {...shared} />
      </>
    ),
    corporate_fare: (
      <>
        <path d="M5 20V5h9v15M14 10h5v10" {...shared} />
        <path d="M8 8h1M11 8h1M8 12h1M11 12h1M8 16h1M11 16h1M17 13h.01M17 16h.01" {...shared} />
      </>
    ),
    precision_manufacturing: (
      <>
        <path d="M6 17a4 4 0 0 1 8 0" {...shared} />
        <path d="M10 13V6h6l2 3-2 3h-6" {...shared} />
        <path d="M4 21h16M6 21v-4M14 21v-4" {...shared} />
      </>
    ),
    code_blocks: (
      <>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" {...shared} />
      </>
    ),
    language: (
      <>
        <circle cx="12" cy="12" r="9" {...shared} />
        <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" {...shared} />
      </>
    ),
    smartphone: (
      <>
        <rect x="7" y="3" width="10" height="18" rx="2" {...shared} />
        <path d="M11 18h2" {...shared} />
      </>
    ),
    monitoring: (
      <>
        <rect x="4" y="5" width="16" height="12" rx="2" {...shared} />
        <path d="M8 14v-3M12 14V9M16 14v-6M10 21h4M12 17v4" {...shared} />
      </>
    ),
    keyboard_arrow_up: <path d="m6 14 6-6 6 6" {...shared} />,
    arrow_forward: (
      <>
        <path d="M5 12h14" {...shared} />
        <path d="m13 6 6 6-6 6" {...shared} />
      </>
    ),
    priority_high: (
      <>
        <circle cx="12" cy="12" r="9" {...shared} />
        <path d="M12 7v6M12 16.5h.01" {...shared} />
      </>
    ),
    settings_suggest: (
      <>
        <circle cx="12" cy="12" r="3" {...shared} />
        <path d="M12 3v2M12 19v2M4.2 7.5l1.7 1M18.1 14.5l1.7 1M3 12h2M19 12h2M4.2 16.5l1.7-1M18.1 8.5l1.7-1" {...shared} />
      </>
    ),
    trending_up: (
      <>
        <path d="M4 16 9 11l4 4 7-8" {...shared} />
        <path d="M15 7h5v5" {...shared} />
      </>
    ),
    domain: (
      <>
        <path d="M5 20V6h9v14M14 10h5v10" {...shared} />
        <path d="M8 9h1M11 9h1M8 13h1M11 13h1M8 17h1M16 14h1M16 17h1" {...shared} />
      </>
    ),
  }

  return (
    <svg className={`inline-block shrink-0 ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      {paths[name] ?? paths.domain}
    </svg>
  )
}

export default function PreviewEnterprisePage({
  eyebrow,
  title,
  italicTitle,
  description,
  primaryButton,
  secondaryButton = 'Contact Us',
  secondaryHref = '/contact',
  itemsLabel,
  itemsTitle,
  itemsDescription,
  metricOne,
  metricOneLabel,
  metricTwo,
  metricTwoLabel,
  items,
}: PreviewEnterprisePageProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  useEffect(() => {
    const closePanels = () => setOpenItems([])

    closePanels()
    window.addEventListener('pageshow', closePanels)

    return () => {
      window.removeEventListener('pageshow', closePanels)
    }
  }, [])

  return (
    <main className="overflow-hidden pt-16 md:pt-20">
      <section className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-container-max items-center px-margin-mobile py-16 md:px-margin-desktop md:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="data-stream-bg absolute inset-0" />
          <div className="absolute right-8 top-20 h-72 w-72 rounded-full bg-primary-fixed/25 blur-[110px]" />
          <div className="absolute bottom-20 left-10 h-64 w-64 rounded-full bg-secondary-fixed/25 blur-[100px]" />
          <div className="hero-animation-node absolute left-[52%] top-[32%] h-3 w-3 rounded-full bg-vibrant-red" />
          <div className="hero-animation-node absolute right-[22%] top-[58%] h-4 w-4 rounded-full bg-primary-container" style={{ animationDelay: '1.2s' }} />
        </div>

        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="mb-stack-sm block font-label-md text-label-md uppercase tracking-widest text-vibrant-red">
              {eyebrow}
            </span>
            <h1 className="font-headline-xl text-headline-xl text-primary">
              {title}{' '}
              <span className="font-display-italic text-display-italic italic font-normal text-on-surface-variant">
                {italicTitle}
              </span>
            </h1>
            <p className="mt-stack-md max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              {description}
            </p>
            <div className="mt-stack-lg flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href="#preview-items" className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-primary px-8 font-label-md text-label-md text-on-primary transition-all hover:-translate-y-0.5 hover:shadow-xl">
                {primaryButton}
              </a>
              <Link href={secondaryHref} className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-primary px-8 font-label-md text-label-md text-primary transition-all hover:bg-primary/5">
                {secondaryButton}
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-primary/10 to-vibrant-red/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-outline-variant/30 bg-white shadow-2xl">
                <div className="bg-[url('/images/tech-environment-2.svg')] bg-cover bg-center p-5">
                  <div className="grid min-h-[390px] grid-rows-[1fr_auto] rounded-xl border border-white/50 bg-white/80 p-5 backdrop-blur-md">
                    <div className="grid content-center gap-4">
                      {items.slice(0, 4).map((item, index) => (
                        <div key={item.title} className="flex items-center gap-3 rounded-xl border border-outline-variant/30 bg-white/90 p-4 shadow-sm">
                          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.accent === 'red' ? 'bg-vibrant-red' : 'bg-primary-container'} text-white`}>
                            <MaterialIcon name={item.icon} className="h-6 w-6" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-label-md text-label-md text-primary">{item.title}</div>
                            <div className="font-caption text-caption text-on-surface-variant">{item.capabilities[index % item.capabilities.length]}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-primary p-4 text-on-primary">
                        <div className="font-headline-md text-headline-md">{metricOne}</div>
                        <div className="font-caption text-caption uppercase tracking-wider text-on-primary/80">{metricOneLabel}</div>
                      </div>
                      <div className="rounded-xl border border-outline-variant/40 bg-white p-4">
                        <div className="font-headline-md text-headline-md text-vibrant-red">{metricTwo}</div>
                        <div className="font-caption text-caption uppercase tracking-wider text-on-surface-variant">{metricTwoLabel}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="preview-items" className="bg-[#eef5fb] py-section-gap">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-stack-lg max-w-3xl">
            <span className="mb-stack-sm block font-label-md text-label-md uppercase tracking-widest text-vibrant-red">
              {itemsLabel}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              {itemsTitle}
            </h2>
            <div className="mt-4 h-1 w-12 rounded bg-vibrant-red" />
            <p className="mt-stack-md font-body-lg text-body-lg text-on-surface-variant">
              {itemsDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {items.map((item) => {
              const isOpen = openItems.includes(item.title)
              const hasHref = Boolean(item.href)
              return (
                <article
                  key={item.title}
                  className={`group rounded-xl border bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8 ${
                    isOpen ? 'border-primary/30 shadow-xl' : 'border-outline-variant/25'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${item.accent === 'red' ? 'bg-vibrant-red' : 'bg-[#1f5e93]'} text-white shadow-sm`}>
                      <MaterialIcon name={item.icon} className="h-7 w-7" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display-italic text-2xl font-semibold italic text-[#0b3d5b]">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.capabilities.map((capability) => (
                      <span key={capability} className="rounded-full border border-outline-variant/40 bg-surface-container-low px-3 py-2 font-caption text-caption text-on-surface-variant">
                        {capability}
                      </span>
                    ))}
                  </div>

                  {hasHref ? (
                    <Link
                      href={item.href!}
                      className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-primary px-5 font-label-md text-label-md text-on-primary shadow-md transition-all hover:bg-primary-container hover:shadow-lg"
                    >
                      Learn More
                      <MaterialIcon name="arrow_forward" className="h-5 w-5" />
                    </Link>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          setOpenItems((current) => {
                            if (current.includes(item.title)) {
                              return current.filter((title) => title !== item.title)
                            }

                            return [...current, item.title].slice(-2)
                          })
                        }}
                        aria-expanded={isOpen}
                        className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-primary px-5 font-label-md text-label-md text-on-primary shadow-md transition-all hover:bg-primary-container hover:shadow-lg"
                      >
                        Learn More
                        <MaterialIcon name={isOpen ? 'keyboard_arrow_up' : 'arrow_forward'} className="h-5 w-5" />
                      </button>

                      <div className={`grid overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="min-h-0">
                          <div className="mt-6 rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-5">
                            <p className="font-body-md text-body-md text-on-surface-variant">{item.overview}</p>
                            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                              <DetailBlock title={item.challengeTitle} items={item.challenges} icon="priority_high" />
                              <DetailBlock title={item.solutionTitle} items={item.solutions} icon="settings_suggest" />
                              <DetailBlock title={item.outcomesTitle} items={item.outcomes} icon="trending_up" />
                              <DetailBlock title={item.useCasesTitle} items={item.useCases} icon="domain" />
                            </div>
                            <Link href="/contact" className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-vibrant-red px-5 font-label-md text-label-md text-on-primary shadow-md transition-opacity hover:opacity-90">
                              Discuss Your Project
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-section-gap">
        <div className="mx-auto max-w-[1000px] px-margin-mobile text-center md:px-margin-desktop">
          <div className="rounded-3xl border border-outline-variant/30 bg-surface-container-low p-stack-lg md:p-16">
            <span className="mb-stack-sm block font-label-md text-label-md uppercase tracking-widest text-vibrant-red">
              Enterprise Partnership
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Let&apos;s Build The Future Together
            </h2>
            <p className="mx-auto mt-stack-md max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
              Partner with Axinex Technologies to create secure, scalable, and future-ready digital solutions tailored to your organization&apos;s goals.
            </p>
            <div className="mt-stack-lg">
              <Link href="/contact" className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-vibrant-red px-8 font-label-md text-label-md text-on-primary shadow-lg transition-all hover:bg-secondary hover:shadow-xl">
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function DetailBlock({ title, items, icon }: { title: string; items: string[]; icon: string }) {
  return (
    <div className="rounded-xl border border-outline-variant/20 bg-white p-4">
      <div className="mb-3 flex items-center gap-2 font-label-md text-label-md text-primary">
        <MaterialIcon name={icon} className="h-5 w-5 text-vibrant-red" />
        {title}
      </div>
      <ul className="space-y-2 font-body-md text-sm leading-6 text-on-surface-variant">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
