'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import InlineIcon from '@/components/InlineIcon'
import { getSubsystemHref } from '@/lib/subsystems'

const systems = [
  {
    title: 'Business Management Systems',
    summary: 'Connected operational platforms for planning, customer workflows, support, and modernization.',
    icon: 'dashboard',
    services: [
      'ERP (Enterprise Resource Planning)',
      'CRM (Customer Relationship Management)',
      'AMS (Annual Maintenance Support)',
      'Migration Services',
    ],
  },
  {
    title: 'Cloud & Infrastructure Systems',
    summary: 'Reliable cloud foundations designed for availability, access control, and managed scale.',
    icon: 'cloud',
    services: [
      'Cloud Transformation Services',
      'Cloud Infrastructure Management',
      'Identity & Access Management (IAM)',
    ],
  },
  {
    title: 'Data & Intelligence Systems',
    summary: 'Structured data ecosystems that turn business information into clear decisions.',
    icon: 'analytics',
    services: ['Data Management System', 'Business Intelligence (BI)'],
  },
  {
    title: 'Automation & Process Systems',
    summary: 'Workflow systems that reduce repetitive effort and keep teams moving with precision.',
    icon: 'hub',
    services: ['Workflow Automation System', 'AI & Business Process Automation'],
  },
  {
    title: 'Security & Compliance Systems',
    summary: 'Security-led platforms for protection, audit readiness, and enterprise governance.',
    icon: 'security',
    services: ['Cybersecurity Management System', 'Security Compliance (ISO 27001 / SOC2 Ready)'],
  },
]

export default function SystemsShowcaseSection() {
  const [isShowcaseOpen, setIsShowcaseOpen] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const showcaseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsShowcaseOpen(false)
    setActiveCard(null)

    const resetOnReturn = (event: PageTransitionEvent) => {
      if (event.persisted) {
        setIsShowcaseOpen(false)
        setActiveCard(null)
      }
    }

    window.addEventListener('pageshow', resetOnReturn)
    return () => window.removeEventListener('pageshow', resetOnReturn)
  }, [])

  const toggleShowcase = () => {
    setIsShowcaseOpen((current) => {
      const nextState = !current

      if (nextState) {
        window.setTimeout(() => {
          showcaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 120)
      } else {
        setActiveCard(null)
      }

      return nextState
    })
  }

  const closeShowcase = () => {
    setIsShowcaseOpen(false)
    setActiveCard(null)
  }

  return (
    <section className="w-full bg-surface-container-lowest py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="relative overflow-hidden rounded-2xl border border-outline-variant/30 bg-white p-7 shadow-[0_24px_70px_rgba(11,61,91,0.1)] md:p-12 lg:p-14">
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[46%] bg-[radial-gradient(circle_at_top_right,rgba(205,229,255,0.78),transparent_43%)] lg:block" />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="mb-stack-sm block font-label-md text-label-md uppercase tracking-widest text-vibrant-red">
                Enterprise Systems
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Access to Next Generation{' '}
                <span className="font-display-italic italic font-normal text-on-surface-variant">
                  Systems
                </span>
              </h2>
              <p className="mt-stack-md max-w-2xl font-body-lg text-body-lg text-on-surface-variant md:text-[1.2rem]">
                Next-gen solutions for a smarter tomorrow, built around business platforms,
                cloud foundations, intelligence layers, automation, and security readiness.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={toggleShowcase}
                  aria-expanded={isShowcaseOpen}
                  aria-label={isShowcaseOpen ? 'Collapse systems showcase' : 'Browse systems showcase'}
                  className="group inline-flex min-h-[56px] w-full items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-primary px-8 font-label-md text-[0.98rem] font-bold tracking-[0.04em] text-on-primary shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-container hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 sm:w-auto"
                >
                  <span>{isShowcaseOpen ? 'Systems' : 'Browse Systems'}</span>
                  <InlineIcon
                    name="arrow_forward"
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isShowcaseOpen ? '-rotate-90' : 'group-hover:translate-x-1'
                    }`}
                  />
                </button>
                <span className="font-body-md text-sm text-on-surface-variant">
                  5 enterprise categories, built for scalable digital operations.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative ml-auto max-w-lg overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5 shadow-[0_18px_45px_rgba(11,61,91,0.09)]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.9),rgba(205,229,255,0.42),rgba(255,255,255,0.86))]" />
                <div className="relative flex min-h-[350px] flex-col justify-between overflow-hidden rounded-xl border border-outline-variant/25 bg-white p-5">
                  <div className="absolute inset-0 data-stream-bg opacity-70" />
                  <div className="absolute -right-24 top-6 h-64 w-64 rounded-full border border-primary/15 robot-orbit" />
                  <div className="absolute -right-8 top-24 h-32 w-32 rounded-full border border-vibrant-red/15 robot-orbit-reverse" />
                  <div className="absolute bottom-10 left-8 h-28 w-28 rounded-full bg-primary-fixed/50 blur-2xl" />

                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="font-label-md text-label-md text-primary">AI Systems Assistant</p>
                      <p className="mt-1 font-caption text-caption uppercase tracking-[0.14em] text-outline">
                        Autonomous operations layer
                      </p>
                    </div>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                      <InlineIcon name="psychology" className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="relative my-7 flex min-h-[175px] items-center justify-center">
                    <div className="absolute h-40 w-40 rounded-full border border-primary/15 robot-pulse-ring" />
                    <div className="absolute h-56 w-56 rounded-full border border-outline-variant/20" />
                    <div className="robot-float relative flex flex-col items-center">
                      <div className="relative h-24 w-24 rounded-[1.65rem] border border-primary/20 bg-[linear-gradient(145deg,#ffffff,#eaf4ff)] shadow-[0_20px_45px_rgba(11,61,91,0.16)]">
                        <div className="absolute -top-5 left-1/2 h-5 w-px -translate-x-1/2 bg-primary/35" />
                        <span className="absolute -top-8 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-vibrant-red shadow-[0_0_18px_rgba(250,75,55,0.42)]" />
                        <div className="absolute left-5 top-8 h-3 w-3 rounded-full bg-primary robot-eye" />
                        <div className="absolute right-5 top-8 h-3 w-3 rounded-full bg-primary robot-eye" />
                        <div className="absolute bottom-6 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-primary/30" />
                      </div>
                      <div className="mt-3 h-12 w-32 rounded-[1.4rem] border border-primary/15 bg-white shadow-sm">
                        <div className="mx-auto mt-4 h-2 w-16 rounded-full bg-primary-fixed" />
                      </div>
                    </div>
                    {['ERP', 'Cloud', 'BI', 'AI'].map((label, index) => (
                      <span
                        key={label}
                        className={`absolute rounded-full border border-outline-variant/25 bg-white px-3 py-1.5 font-caption text-caption uppercase tracking-[0.12em] text-primary shadow-sm ${
                          index === 0
                            ? 'left-2 top-4'
                            : index === 1
                              ? 'right-1 top-8'
                              : index === 2
                                ? 'bottom-6 left-4'
                                : 'bottom-4 right-8'
                        }`}
                      >
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="relative grid grid-cols-3 gap-3 border-t border-outline-variant/25 pt-4">
                    <div>
                      <span className="block font-headline-md text-[1.6rem] leading-none text-primary">05</span>
                      <span className="font-caption text-caption uppercase tracking-[0.12em] text-outline">Systems</span>
                    </div>
                    <div>
                      <span className="block font-headline-md text-[1.6rem] leading-none text-primary">14</span>
                      <span className="font-caption text-caption uppercase tracking-[0.12em] text-outline">Services</span>
                    </div>
                    <div>
                      <span className="block font-headline-md text-[1.6rem] leading-none text-primary">24/7</span>
                      <span className="font-caption text-caption uppercase tracking-[0.12em] text-outline">Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={showcaseRef}
          className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${
            isShowcaseOpen
              ? 'mt-8 grid-rows-[1fr] opacity-100'
              : 'mt-0 grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {systems.map((system, index) => {
                const isActive = activeCard === index

                return (
                  <article
                    key={system.title}
                    className={`group relative flex min-h-[330px] flex-col overflow-hidden rounded-2xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(11,61,91,0.13)] ${
                      isActive
                        ? 'border-primary/35 shadow-[0_22px_55px_rgba(11,61,91,0.13)]'
                        : 'border-outline-variant/25 hover:border-primary/25'
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(205,229,255,0.46),transparent_36%,rgba(255,255,255,0.9))]" />

                    <div className="relative flex flex-1 flex-col">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                          <InlineIcon name={system.icon} className="h-7 w-7" />
                        </div>
                        <span className="font-caption text-caption uppercase tracking-[0.16em] text-outline">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="font-headline-md text-[1.35rem] font-semibold leading-tight text-primary">
                        {system.title}
                      </h3>
                      <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
                        {system.summary}
                      </p>

                      <button
                        type="button"
                        onClick={() => setActiveCard(isActive ? null : index)}
                        aria-expanded={isActive}
                        aria-label={`${isActive ? 'Collapse' : 'Expand'} ${system.title}`}
                        className="mt-auto inline-flex h-11 w-11 items-center justify-center self-start rounded-full bg-primary-fixed text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-4"
                      >
                        <span
                          className={`material-symbols-outlined text-[22px] transition-transform duration-300 ${
                            isActive ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        >
                          expand_more
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
                          isActive ? 'mt-5 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <ul className="grid grid-cols-1 gap-3 overflow-hidden border-t border-outline-variant/25 pt-5">
                          {system.services.map((service) => (
                            <li key={service}>
                              <Link
                                href={getSubsystemHref(service)}
                                onClick={closeShowcase}
                                className="flex min-h-[44px] items-center justify-between gap-3 rounded-lg px-1 py-2 font-body-md text-sm leading-relaxed text-primary transition-all duration-300 hover:translate-x-1 hover:text-vibrant-red"
                              >
                                <span>{service}</span>
                                <InlineIcon name="arrow_forward" className="h-4 w-4 text-vibrant-red" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
