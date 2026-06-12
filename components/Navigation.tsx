"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { solutionCatalog } from '@/lib/solutions'
import { serviceCatalog } from '@/lib/services'

type DropdownItem = {
  label: string
  href: string
}

type DropdownProps = {
  label: string
  href: string
  items: DropdownItem[]
  active: boolean
}

function Dropdown({ label, href, items, active }: DropdownProps) {
  return (
    <div className="relative group">
      <Link
        href={href}
        className={
          `font-label-md text-label-md pb-1 transition-colors inline-flex items-center gap-1 ` +
          (active ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary')
        }
      >
        {label}
        <span className="text-xs" aria-hidden="true">v</span>
      </Link>
      <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
        <div className="w-72 bg-surface border border-outline-variant/40 rounded-xl shadow-lg py-2">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block px-5 py-3 text-sm text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<'services' | 'solutions' | null>(null)

  const servicesItems = serviceCatalog.map((service) => ({
    label: service.menuLabel,
    href: `/services/${service.slug}`,
  }))

  const solutionsItems = solutionCatalog.map((solution) => ({
    label: solution.menuLabel,
    href: `/preview/solutions/${solution.slug}`,
  }))

  const servicesActive = pathname.startsWith('/services')
  const solutionsActive = pathname.startsWith('/preview/solutions')
  const sectorsActive = pathname.startsWith('/preview/sectors')

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      <nav className="px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="flex justify-between items-center gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <img src="/assets/axinex-logo-transparent.png" alt="Axinex logo" className="h-8 object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-5 xl:gap-8">
            <Link
              href="/"
              className={
                `font-label-md text-label-md pb-1 transition-colors ` +
                (pathname === '/' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary')
              }
            >
              Home
            </Link>

            <Link
              href="/about"
              className={
                `font-label-md text-label-md pb-1 transition-colors ` +
                (pathname === '/about' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary')
              }
            >
              About
            </Link>

            <Dropdown
              label="Services"
              href="/services"
              items={servicesItems}
              active={servicesActive}
            />

            <Dropdown
              label="Solutions"
              href="/preview/solutions"
              items={solutionsItems}
              active={solutionsActive}
            />

            <Link
              href="/preview/sectors"
              className={
                `font-label-md text-label-md pb-1 transition-colors ` +
                (sectorsActive ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary')
              }
            >
              Sectors
            </Link>

            <Link
              href="/contact"
              className={
                `font-label-md text-label-md pb-1 transition-colors ` +
                (pathname === '/contact' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary')
              }
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:inline-flex items-center bg-vibrant-red text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all active:scale-95 shadow-md">
              Send Enquiry
            </Link>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => {
                setIsMenuOpen((current) => {
                  if (current) {
                    setOpenMobileDropdown(null)
                  }
                  return !current
                })
              }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-outline-variant/40 text-primary transition-colors hover:bg-surface-container-low md:hidden"
            >
              <span className="flex flex-col gap-1.5">
                <span className={`h-0.5 w-5 rounded-full bg-current transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`h-0.5 w-5 rounded-full bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`h-0.5 w-5 rounded-full bg-current transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`grid overflow-hidden transition-all duration-300 ease-out md:hidden ${
            isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="min-h-0 max-h-[calc(100svh-5rem)] overflow-y-auto pb-2">
            <div className="mt-4 flex flex-col gap-2 rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-3 shadow-lg">
              {[
                { href: '/', label: 'Home', active: pathname === '/' },
                { href: '/about', label: 'About', active: pathname === '/about' },
                { href: '/preview/sectors', label: 'Sectors', active: sectorsActive },
                { href: '/contact', label: 'Contact', active: pathname === '/contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    `rounded-lg px-4 py-3 font-label-md text-label-md transition-colors ` +
                    (link.active ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary')
                  }
                >
                  {link.label}
                </Link>
              ))}

              <div>
                <button
                  type="button"
                  aria-expanded={openMobileDropdown === 'services'}
                  onClick={() => setOpenMobileDropdown((current) => current === 'services' ? null : 'services')}
                  className={
                    `flex w-full items-center justify-between rounded-lg px-4 py-3 font-label-md text-label-md transition-colors ` +
                    (servicesActive ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary')
                  }
                >
                  <span>Services</span>
                  <span className={`transition-transform duration-300 ${openMobileDropdown === 'services' ? 'rotate-90' : ''}`} aria-hidden="true">
                    &gt;
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    openMobileDropdown === 'services' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0">
                    <div className="mt-2 rounded-lg bg-surface-container-low p-2">
                      <Link
                        href="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="block rounded-md px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-white"
                      >
                        View All Services
                      </Link>
                      {servicesItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block rounded-md px-4 py-2.5 text-sm text-on-surface-variant transition-colors hover:bg-white hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  aria-expanded={openMobileDropdown === 'solutions'}
                  onClick={() => setOpenMobileDropdown((current) => current === 'solutions' ? null : 'solutions')}
                  className={
                    `flex w-full items-center justify-between rounded-lg px-4 py-3 font-label-md text-label-md transition-colors ` +
                    (solutionsActive ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary')
                  }
                >
                  <span>Solutions</span>
                  <span className={`transition-transform duration-300 ${openMobileDropdown === 'solutions' ? 'rotate-90' : ''}`} aria-hidden="true">
                    &gt;
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    openMobileDropdown === 'solutions' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0">
                    <div className="mt-2 rounded-lg bg-surface-container-low p-2">
                      <Link
                        href="/preview/solutions"
                        onClick={() => setIsMenuOpen(false)}
                        className="block rounded-md px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-white"
                      >
                        View All Solutions
                      </Link>
                      {solutionsItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block rounded-md px-4 py-2.5 text-sm text-on-surface-variant transition-colors hover:bg-white hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-1 inline-flex items-center justify-center rounded-lg bg-vibrant-red px-4 py-3 font-label-md text-label-md text-on-primary shadow-md transition-opacity hover:opacity-90"
              >
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
