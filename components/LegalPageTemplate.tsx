import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

type LegalSection = {
  title: string
  content: string | string[]
}

type LegalPageTemplateProps = {
  eyebrow: string
  title: string
  description: string
  lastUpdated: string
  intro: string
  sections: LegalSection[]
}

function LegalSectionBlock({ section }: { section: LegalSection }) {
  return (
    <section className="rounded-2xl border border-outline-variant/25 bg-white p-6 shadow-sm md:p-8">
      <h2 className="font-headline-md text-headline-md text-primary">{section.title}</h2>
      {Array.isArray(section.content) ? (
        <ul className="mt-4 space-y-3 font-body-md text-body-md text-on-surface-variant">
          {section.content.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-vibrant-red" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 max-w-4xl font-body-md text-body-md leading-relaxed text-on-surface-variant">
          {section.content}
        </p>
      )}
    </section>
  )
}

export default function LegalPageTemplate({
  eyebrow,
  title,
  description,
  lastUpdated,
  intro,
  sections,
}: LegalPageTemplateProps) {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="relative overflow-hidden border-b border-outline-variant/15 bg-[linear-gradient(135deg,#0b3d5b_0%,#103f63_45%,#123b52_100%)] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
          <div className="relative mx-auto max-w-container-max px-margin-mobile py-20 md:px-margin-desktop md:py-24">
            <div className="max-w-3xl">
              <p className="mb-4 font-label-md text-label-md uppercase tracking-[0.28em] text-white/70">{eyebrow}</p>
              <h1 className="font-headline-xl text-headline-xl leading-[0.95] text-white">{title}</h1>
              <p className="mt-5 max-w-2xl font-body-lg text-body-lg leading-relaxed text-white/82">{description}</p>
              <div className="mt-8 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 font-label-md text-label-md text-white/90 backdrop-blur-sm">
                Last updated: {lastUpdated}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-section-gap">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="max-w-4xl">
              <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">{intro}</p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6">
              {sections.map((section) => (
                <LegalSectionBlock key={section.title} section={section} />
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-primary/15 bg-primary/5 p-6 md:p-8">
              <p className="font-label-md text-label-md uppercase tracking-[0.24em] text-primary">Contact</p>
              <p className="mt-3 max-w-3xl font-body-md text-body-md text-on-surface-variant">
                For questions or requests related to this page, contact{' '}
                <Link href="mailto:axinex.technologies@gmail.com" className="text-primary underline decoration-primary/30 underline-offset-4 transition hover:decoration-primary">
                  axinex.technologies@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}