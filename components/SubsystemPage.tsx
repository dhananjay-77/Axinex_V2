import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import InlineIcon from '@/components/InlineIcon'
import Navigation from '@/components/Navigation'
import SubsystemFlowchart from '@/components/SubsystemFlowchart'
import type { SubsystemPageData } from '@/lib/subsystems'

type SubsystemPageProps = {
  page: SubsystemPageData
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="mb-stack-lg max-w-3xl">
      <span className="mb-stack-sm block font-label-md text-label-md uppercase tracking-widest text-vibrant-red">
        {eyebrow}
      </span>
      <h2 className="font-headline-lg text-headline-lg text-primary">{title}</h2>
      <p className="mt-stack-md font-body-lg text-body-lg text-on-surface-variant">{description}</p>
    </div>
  )
}

export default function SubsystemPage({ page }: SubsystemPageProps) {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden pt-24">
        <section className="w-full bg-surface-container-lowest py-section-gap">
          <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-10 px-margin-mobile md:grid-cols-12 md:px-margin-desktop">
            <div className="md:col-span-7">
              <span className="mb-stack-sm block font-label-md text-label-md uppercase tracking-widest text-vibrant-red">
                {page.eyebrow}
              </span>
              <h1 className="font-headline-xl text-headline-xl text-primary">
                {page.title}{' '}
                <span className="font-display-italic italic font-normal text-on-surface-variant">
                  Ecosystem
                </span>
              </h1>
              <p className="mt-stack-md max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                {page.subtitle}
              </p>
              <p className="mt-4 max-w-2xl font-body-md text-body-md text-on-surface-variant">
                {page.description}
              </p>
              <div className="mt-stack-lg flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`/contact?system=${encodeURIComponent(page.title)}`}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-primary px-8 font-label-md text-label-md text-on-primary shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Plan This System
                </Link>
                <Link
                  href="/#systems"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-primary px-8 font-label-md text-label-md text-primary transition-all hover:bg-primary/5"
                >
                  Explore Systems
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-outline-variant/30 bg-white p-3 shadow-[0_20px_55px_rgba(11,61,91,0.1)]">
                <Image
                  src={page.visualImage}
                  alt={`${page.title} visual`}
                  width={1024}
                  height={1024}
                  priority
                  className="aspect-square h-auto w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface py-section-gap">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <SectionHeading
              eyebrow="Architecture Flow"
              title={page.flowTitle}
              description={page.flowDescription}
            />
            <SubsystemFlowchart nodes={page.flowNodes} />
          </div>
        </section>

        <section className="w-full bg-surface-container-lowest py-section-gap">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <SectionHeading
              eyebrow="Enterprise Ecosystem"
              title="Modules Built Around Real Operations"
              description="Each capability is structured as a practical business module with clear ownership, integration paths, and long-term maintainability."
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {page.modules.map((module) => (
                <article key={module} className="rounded-2xl border border-outline-variant/25 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,61,91,0.1)]">
                  <InlineIcon name="check_circle" className="h-6 w-6 text-vibrant-red" />
                  <h3 className="mt-5 font-headline-md text-[1.25rem] text-primary">{module}</h3>
                  <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
                    Configured for secure usage, measurable workflow performance, and smooth adoption across teams.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-[#eef5fb] py-section-gap">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <SectionHeading
              eyebrow="Business Impact"
              title="Operational Value & Strategic Advantage"
              description="The system is designed to improve clarity, reduce operational friction, and create a scalable foundation for business growth."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {page.impacts.map((impact) => (
                <article key={impact.label} className="rounded-2xl border border-outline-variant/25 bg-white p-7 shadow-sm">
                  <span className="font-headline-lg text-[2.5rem] leading-none text-primary">{impact.value}</span>
                  <h3 className="mt-4 font-label-md text-label-md uppercase tracking-[0.12em] text-vibrant-red">
                    {impact.label}
                  </h3>
                  <p className="mt-3 font-body-md text-body-md text-on-surface-variant">{impact.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-surface py-section-gap">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <SectionHeading
              eyebrow="Implementation"
              title="Strategic Implementation Framework"
              description="A staged delivery model keeps discovery, architecture, development, adoption, and support aligned from start to finish."
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {page.framework.map((step, index) => (
                <article key={step} className="rounded-2xl border border-outline-variant/25 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-fixed font-label-md text-label-md text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-5 font-headline-md text-[1.2rem] text-primary">{step}</h3>
                  <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
                    Delivered with documented scope, quality checks, and stakeholder visibility.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-container-lowest py-section-gap">
          <div className="mx-auto grid max-w-container-max grid-cols-1 gap-8 px-margin-mobile md:grid-cols-2 md:px-margin-desktop">
            <div>
              <SectionHeading
                eyebrow="Governance"
                title="Security, Reliability & Control"
                description="Enterprise safeguards keep the system reliable, traceable, and ready for controlled growth."
              />
              <div className="space-y-3">
                {page.governance.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-outline-variant/25 bg-white p-4 shadow-sm">
                    <InlineIcon name="shield" className="h-5 w-5 text-primary" />
                    <span className="font-body-md text-body-md text-on-surface-variant">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Use Cases"
                title="Industries & Enterprise Fit"
                description="The architecture adapts to high-value operational environments where consistency and scalability matter."
              />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {page.industries.map((industry) => (
                  <article key={industry} className="rounded-xl border border-outline-variant/25 bg-white p-5 shadow-sm">
                    <InlineIcon name="public" className="h-5 w-5 text-vibrant-red" />
                    <h3 className="mt-4 font-label-md text-label-md text-primary">{industry}</h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-margin-mobile py-section-gap md:px-margin-desktop">
          <div className="mx-auto max-w-[1000px] rounded-3xl border border-outline-variant/30 bg-primary p-8 text-center text-on-primary shadow-[0_24px_70px_rgba(11,61,91,0.16)] md:p-14">
            <h2 className="font-headline-lg text-headline-lg text-white">{page.cta}</h2>
            <p className="mx-auto mt-4 max-w-2xl font-body-lg text-body-lg text-primary-fixed">
              Speak with Axinex to define the right architecture, implementation roadmap, and operational model for your organization.
            </p>
            <Link
              href={`/contact?system=${encodeURIComponent(page.title)}`}
              className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-lg bg-vibrant-red px-8 font-label-md text-label-md text-on-primary shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Start Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
