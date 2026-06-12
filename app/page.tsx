import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import InlineIcon from '@/components/InlineIcon'
import SystemsShowcaseSection from '@/components/SystemsShowcaseSection'
import CoreExpertiseSection from '@/components/CoreExpertiseSection'
import TrustSecuritySection from '@/components/TrustSecuritySection'
import CTASection from '@/components/CTASection'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import FAQSection from '@/components/FAQSection'
import Image from 'next/image'
import Link from 'next/link'

const purposePoints = [
  {
    title: 'To simplify complex operations',
    icon: 'speed',
    text: 'We create digital systems that reduce manual effort, improve visibility, and help teams operate with more control.',
  },
  {
    title: 'To build around real requirements',
    icon: 'assignment',
    text: 'Every engagement begins with structured requirement analysis, documentation, and solution planning before development starts.',
  },
  {
    title: 'To support long-term growth',
    icon: 'trending_up',
    text: 'Our platforms are designed for scalability, maintainability, future enhancements, and dependable post-deployment support.',
  },
]

const deliverySteps = [
  'Requirement analysis and scope documentation',
  'Solution planning and architecture design',
  'Development with standardized coding practices',
  'Functional, performance, and security testing',
  'Deployment, monitoring, maintenance, and enhancements',
]

const clientLogos = [
  { name: 'Client 1', src: '/assets/clients/client1.jpeg' },
  { name: 'Client 2', src: '/assets/clients/client2.jpeg' },
]

const collaboratorLogos = [
  { name: 'Arishti Cybertech', src: '/assets/collaborators/arishti_cybertech.jpg' },
  { name: 'Securia Infosec', src: '/assets/collaborators/securia_infosec.png' },
]

const combinedLogos = [...clientLogos, ...collaboratorLogos]

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20 overflow-hidden">
        <HeroSection />
        <SystemsShowcaseSection />
        <section className="w-full bg-surface-container-lowest py-section-gap">
          <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-10 px-margin-mobile md:grid-cols-12 md:px-margin-desktop">
            <div className="md:col-span-5">
              <span className="mb-stack-sm block font-label-md text-label-md uppercase tracking-widest text-vibrant-red">
                Why We Exist
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                To turn operational complexity into{' '}
                <span className="font-display-italic italic font-normal text-on-surface-variant">
                  dependable digital systems.
                </span>
              </h2>
              <p className="mt-stack-md font-body-lg text-body-lg text-on-surface-variant">
                Axinex Technologies exists to help organizations move from fragmented, manual, and disconnected workflows to secure, scalable, and business-aligned software.
              </p>
              <div className="mt-stack-lg flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link href="/preview/solutions" className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-primary px-7 font-label-md text-label-md text-on-primary shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl">
                  View Solutions
                </Link>
                <Link href="/contact" className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-primary px-7 font-label-md text-label-md text-primary transition-all hover:bg-primary/5">
                  Start a Project
                </Link>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {purposePoints.map((point) => (
                  <article key={point.title} className="rounded-xl border border-outline-variant/25 bg-surface-container-low p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                      <InlineIcon name={point.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="font-display-italic text-xl font-semibold italic text-primary">
                      {point.title}
                    </h3>
                    <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
                      {point.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#eef5fb] py-section-gap">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-stack-lg">
              <h2 className="font-headline-lg text-headline-lg text-primary mt-4">
                Our <span className="font-display-italic italic">Foundation</span>
              </h2>
              <div className="h-1 w-12 bg-vibrant-red mx-auto mt-4 rounded" />
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">
              <div className="bg-white p-9 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-[#1f5e93] mb-6 shadow-sm">
                <InlineIcon name="eye" className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display-italic italic font-semibold text-xl text-[#0b3d5b] mb-3">Our Vision</h3>
              <p className="text-on-surface-variant font-body-md">
                To be the global catalyst for intelligent enterprise evolution, bridging the gap between current infrastructure and tomorrow&apos;s possibilities.
              </p>
              </div>

              <div className="bg-white p-9 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-vibrant-red mb-6 shadow-sm">
                  <InlineIcon name="shield" className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display-italic italic font-semibold text-xl text-[#0b3d5b] mb-3">Our Mission</h3>
                <p className="text-on-surface-variant font-body-md">
                  To engineer robust, high-performance software solutions that empower global organizations to navigate digital transformation with precision and security.
                </p>
              </div>

              <div className="bg-white p-9 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-[#1f5e93] mb-6 shadow-sm">
                  <InlineIcon name="stars" className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display-italic italic font-semibold text-xl text-[#0b3d5b] mb-3">Our Values</h3>
                <ul className="text-on-surface-variant font-body-md list-disc list-inside space-y-2">
                  <li><strong className="text-primary">Innovation</strong> — Pushing boundaries to create pioneering solutions.</li>
                  <li><strong className="text-primary">Integrity</strong> — Transparent, ethical, and reliable partnerships.</li>
                  <li><strong className="text-primary">Excellence</strong> — Uncompromising quality in every line of code.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-surface py-section-gap">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="mb-stack-lg grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <span className="mb-stack-sm block font-label-md text-label-md uppercase tracking-widest text-vibrant-red">
                  How We Work
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  A structured delivery model for{' '}
                  <span className="font-display-italic italic font-normal text-on-surface-variant">
                    reliable outcomes.
                  </span>
                </h2>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant md:col-span-5">
                Projects are handled through clear milestones, documented responsibilities, regular progress reviews, quality checks, and support planning.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-5">
              {deliverySteps.map((step, index) => (
                <article
                  key={step}
                  className="group relative overflow-hidden rounded-2xl border border-outline-variant/20 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:bg-sky-50 hover:shadow-[0_18px_40px_rgba(11,61,91,0.14)] md:min-h-[230px]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(31,94,147,0.05),transparent_45%,rgba(255,255,255,0.65))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed font-label-md text-label-md text-on-primary-fixed transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-2deg] group-hover:bg-primary/90">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="relative font-label-md text-sm leading-relaxed text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:font-bold md:text-base">
                    {step}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CoreExpertiseSection />
        <TrustSecuritySection />

        <section className="w-full bg-surface-container-lowest py-section-gap">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-stack-sm block text-[1.35rem] font-bold uppercase tracking-[0.24em] text-vibrant-red md:text-[1.55rem]">
                our clients & collaborators
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary md:text-[2.7rem] md:leading-[1.02]">
                Trusted by organizations that value{' '}
                <span className="font-display-italic italic font-normal text-on-surface-variant">
                  clarity, reliability, and delivery.
                </span>
              </h2>
              <p className="mt-stack-sm font-body-md text-body-md text-on-surface-variant md:mt-4">
                Trusted partnerships reflected through the brands below.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {combinedLogos.map((client) => (
                <div
                  key={client.name}
                  className="group flex h-28 w-28 items-center justify-center rounded-full bg-white p-4 shadow-sm ring-1 ring-outline-variant/20 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-[0_18px_40px_rgba(11,61,91,0.16)] md:h-32 md:w-32"
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-surface-container-low p-3 transition-colors duration-300 group-hover:bg-surface-container">
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={112}
                      height={112}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialCarousel />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
