import Image from 'next/image'
import Link from 'next/link'
import InlineIcon from './InlineIcon'
import type { SolutionItem } from '@/lib/solutions'

const toneClasses = {
  blue: {
    accent: 'bg-primary',
    accentSoft: 'bg-primary/10',
    border: 'border-primary/20',
    glow: 'from-primary/20 to-transparent',
    text: 'text-primary',
  },
  red: {
    accent: 'bg-vibrant-red',
    accentSoft: 'bg-vibrant-red/10',
    border: 'border-vibrant-red/20',
    glow: 'from-vibrant-red/20 to-transparent',
    text: 'text-vibrant-red',
  },
} as const

export default function SolutionDetailPage({ solution }: { solution: SolutionItem }) {
  const theme = toneClasses[solution.tone]

  return (
    <main className="overflow-hidden pt-16 md:pt-20">
      <section className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-container-max items-center gap-10 px-margin-mobile py-16 md:grid-cols-12 md:px-margin-desktop md:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="data-stream-bg absolute inset-0" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-surface/80 to-transparent" />
          <div className={`absolute right-8 top-20 h-72 w-72 rounded-full blur-[120px] ${solution.tone === 'blue' ? 'bg-primary/20' : 'bg-vibrant-red/20'}`} />
          <div className="absolute bottom-16 left-8 h-56 w-56 rounded-full bg-secondary-fixed/25 blur-[110px]" />
          <div className="absolute bottom-0 right-0 h-56 w-full bg-gradient-to-t from-surface via-surface/70 to-transparent" />
        </div>

        <div className="relative z-10 md:col-span-7">
          <div className="mb-stack-md inline-flex items-center gap-3 rounded-full border border-outline-variant/40 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <span className={`flex h-9 w-9 items-center justify-center rounded-full ${theme.accentSoft} ${theme.text}`}>
              <InlineIcon name={solution.icon} className="h-5 w-5" />
            </span>
            <span className="font-label-md text-label-md uppercase tracking-[0.24em] text-vibrant-red">
              Solutions
            </span>
          </div>

          <h1 className="max-w-3xl font-headline-xl text-headline-xl text-primary">
            {solution.title}{' '}
            <span className="font-display-italic text-display-italic italic font-normal text-on-surface-variant">
              for modern operations
            </span>
          </h1>

          <p className="mt-stack-md max-w-2xl font-body-lg text-body-lg text-on-surface-variant transition-all duration-700 will-change-transform motion-safe:animate-[heroFadeUp_700ms_ease-out_both] motion-safe:[animation-delay:120ms]">
            {solution.summary}
          </p>

          <div className="mt-stack-lg grid max-w-2xl gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-outline-variant/35 bg-white/85 p-4 shadow-sm backdrop-blur">
              <div className={`font-headline-md text-headline-md ${theme.text}`}>{solution.heroStatOne}</div>
              <div className="mt-1 font-label-md text-xs uppercase tracking-[0.18em] text-on-surface-variant">{solution.heroStatOneLabel}</div>
            </div>
            <div className="rounded-2xl border border-outline-variant/35 bg-white/85 p-4 shadow-sm backdrop-blur">
              <div className="font-headline-md text-headline-md text-primary">{solution.heroStatTwo}</div>
              <div className="mt-1 font-label-md text-xs uppercase tracking-[0.18em] text-on-surface-variant">{solution.heroStatTwoLabel}</div>
            </div>
          </div>

          <div className="mt-stack-md flex flex-wrap gap-3">
            {solution.quickPoints.map((point) => (
              <span
                key={point}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-label-md text-sm ${theme.border} ${theme.accentSoft} ${theme.text} transition-all motion-safe:animate-[heroPop_650ms_ease-out_both] will-change-transform hover:-translate-y-[1px] hover:shadow-md`}
              >
                <InlineIcon name="check_circle" className="h-4 w-4" />
                {point}
              </span>
            ))}
          </div>

          <div className="mt-stack-lg flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/preview/solutions"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-primary px-8 font-label-md text-label-md text-primary transition-all hover:bg-primary/5 hover:-translate-y-[1px] hover:shadow-md"
            >
              Back to Solutions
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-vibrant-red px-8 font-label-md text-label-md text-on-primary transition-all hover:opacity-90 hover:-translate-y-[1px] hover:shadow-md"
            >
              Discuss This Solution
            </Link>
          </div>
        </div>

        <div className="relative z-10 md:col-span-5">
          <div className="relative rounded-3xl border border-outline-variant/30 bg-white p-3 shadow-[0_30px_70px_rgba(11,61,91,0.14)] md:p-4">
            <div className={`absolute inset-x-6 top-0 h-32 rounded-full bg-gradient-to-b ${theme.glow} blur-3xl`} />
            <div className="relative overflow-hidden rounded-2xl bg-surface-container-low">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={solution.image}
                  alt={solution.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071c31]/75 via-[#0b3357]/30 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex rounded-full bg-white/90 px-4 py-2 font-label-md text-sm text-primary shadow-sm backdrop-blur">
                  {solution.menuLabel}
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-lg backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${theme.accent} text-white`}>
                      <InlineIcon name="route" className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-label-md text-label-md text-primary">Solution Blueprint</div>
                      <p className="mt-1 text-sm leading-5 text-on-surface-variant">{solution.process[0].title}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 p-5">
                <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-4">
                  <div className="mb-3 flex items-center gap-2 font-label-md text-label-md text-primary">
                    <InlineIcon name={solution.icon} className="h-5 w-5 text-vibrant-red" />
                    Delivery Path
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {solution.process.slice(0, 4).map((step, index) => (
                      <div key={step.step} className="rounded-xl border border-outline-variant/25 bg-white p-3 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${index % 2 === 0 ? 'bg-primary' : 'bg-vibrant-red'}`}>
                            {step.step}
                          </div>
                          <div className="min-w-0">
                            <div className="font-label-md text-sm text-primary">{step.title}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5fb] py-section-gap">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl">
            <span className="mb-stack-sm block font-label-md text-label-md uppercase tracking-[0.24em] text-vibrant-red">
              Overview
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              A focused solution built around your operating model.
            </h2>
            <div className="mt-4 h-1 w-12 rounded bg-vibrant-red" />
            <p className="mt-stack-md font-body-lg text-body-lg text-on-surface-variant">
              {solution.overview}
            </p>
          </div>
        </div>
      </section>

      <section className="py-section-gap">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl">
            <span className="mb-stack-sm block font-label-md text-label-md uppercase tracking-[0.24em] text-vibrant-red">
              Challenges We Solve
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              The operational friction this solution is designed to remove.
            </h2>
          </div>

          <div className="mt-stack-lg grid gap-6 lg:grid-cols-3">
            {solution.challenges.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-outline-variant/25 bg-white p-6 shadow-sm transition-all duration-300 ease-out will-change-transform hover:-translate-y-[2px] hover:shadow-lg"
              >
                <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${theme.accent} text-white`}>
                  <InlineIcon name="priority_high" className="h-5 w-5" />
                </div>
                <h3 className="font-display-italic text-2xl font-semibold italic text-[#0b3d5b]">
                  {item.title}
                </h3>
                <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
                  {item.response}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-section-gap">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl">
            <span className="mb-stack-sm block font-label-md text-label-md uppercase tracking-[0.24em] text-vibrant-red">
              Key Features
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              The core capabilities included in the solution.
            </h2>
          </div>

          <div className="mt-stack-lg grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solution.features.map((item) => (
              <article key={item.title} className="rounded-2xl border border-outline-variant/25 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${theme.accentSoft} ${theme.text}`}>
                  <InlineIcon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-label-md text-lg text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-gap">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl">
            <span className="mb-stack-sm block font-label-md text-label-md uppercase tracking-[0.24em] text-vibrant-red">
              Benefits
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Business outcomes you can expect from the solution.
            </h2>
          </div>

          <div className="mt-stack-lg grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solution.benefits.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-outline-variant/25 bg-white p-6 shadow-sm transition-all duration-300 ease-out will-change-transform hover:-translate-y-[2px] hover:shadow-lg"
              >
                <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full ${theme.accent} text-white`}>
                  <InlineIcon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-label-md text-lg text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef5fb] py-section-gap">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl">
            <span className="mb-stack-sm block font-label-md text-label-md uppercase tracking-[0.24em] text-vibrant-red">
              Process
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              A simple delivery process built for dependable rollout.
            </h2>
          </div>

          <div className="mt-stack-lg grid gap-4 lg:grid-cols-5">
            {solution.process.map((step, index) => (
              <article
                key={step.step}
                className="rounded-2xl border border-outline-variant/25 bg-white p-5 shadow-sm transition-all duration-300 ease-out will-change-transform hover:-translate-y-[2px] hover:shadow-lg"
              >
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${index % 2 === 0 ? 'bg-primary' : 'bg-vibrant-red'} font-label-md text-label-md text-white`}>
                  {step.step}
                </div>
                <h3 className="font-display-italic text-xl font-semibold italic text-[#0b3d5b]">
                  {step.title}
                </h3>
                <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-gap text-center">
        <div className="mx-auto max-w-[1000px] justify-center px-margin-mobile md:px-margin-desktop">
          <div className="rounded-3xl border border-outline-variant/30 bg-surface-container-low p-stack-lg md:p-16">
            <h2 className="font-headline-lg text-headline-lg text-primary">
              {solution.ctaTitle}
            </h2>
            <p className="mt-stack-md max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
              {solution.ctaDescription}
            </p>
            <div className="mt-stack-lg justify-center flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-vibrant-red px-8 font-label-md text-label-md text-on-primary shadow-lg transition-all hover:bg-secondary hover:shadow-xl">
                Start a Conversation
              </Link>
              <Link href="/preview/solutions" className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-primary px-8 font-label-md text-label-md text-primary transition-all hover:bg-primary/5">
                Explore More Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
