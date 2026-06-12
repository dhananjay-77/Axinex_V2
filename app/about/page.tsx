import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import InlineIcon from '@/components/InlineIcon'
import Link from 'next/link'

export const metadata = {
  title: 'About | AXINEX',
  description: 'About Axinex — mission, leadership, and principles that guide our engineering practice.',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg39c4t_4eXdLV2jA3pQxo7gWOCt1yxe-E0z4xCVX07CEp4udnLcywqgRHPINgi5Qb9bala-wiSDjz0_K8MQLgkZJbOjbkPsWtU8kTruw9a1VXlrI7FiPgevbqjYvZWtfMs0z9MUMxGvQ57XyUlitoSY3FdYrLousybbVwA_2x43CL9VE2RUUGNzxjwokQDz93ppH7k_7x9tbI54V_hSo66H77Cg2elqcv5qw5Wg_gz-FsPcRxdCeNvZWWsW6JUWHB-_3lIw97QDoq"
              alt="Modern enterprise architecture"
              className="h-[620px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0b3d5b]/75" />
          </div>

          <div className="relative mx-auto flex min-h-[620px] max-w-container-max items-center px-margin-mobile md:px-margin-desktop">
            <div className="max-w-2xl text-white">
              <span className="mb-5 block font-label-md text-label-md uppercase tracking-[0.24em] text-white/75">
                Established 2026
              </span>
              <h1 className="font-headline-xl text-headline-xl leading-[0.95] text-white">
                Driving the Future of{' '}
                <span className="font-display-italic italic font-normal text-white/90">
                  Enterprise Technology
                </span>
              </h1>
              <p className="mt-6 max-w-xl font-body-lg text-body-lg text-white/80 leading-relaxed">
                Empowering global organizations with next-generation infrastructure, high-performance
                computing, and resilient software ecosystems designed for the speed of modern business.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/services#capabilities" className="inline-flex items-center h-12 rounded-lg bg-vibrant-red px-7 font-label-md text-label-md text-on-primary shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl">
                  Our Solutions
                </Link>
                <Link href="/#faq" className="inline-flex items-center h-12 rounded-lg border border-white/25 bg-white/10 px-7 font-label-md text-label-md text-white backdrop-blur-sm transition-colors hover:bg-white/15">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 items-center">
            <div>
              <span className="mb-4 block font-label-md text-label-md uppercase tracking-[0.24em] text-vibrant-red">
                Established 2026
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">A Legacy of Precision Engineering</h2>
              <p className="mt-5 max-w-xl font-body-md text-on-surface-variant leading-relaxed">
                Axinex Technologies is a forward-thinking, service-based software solutions company dedicated to empowering
                businesses, institutions, and government organizations through innovative digital technologies.
                We specialize in delivering reliable, scalable, and customized IT solutions that streamline operations, enhance
                customer engagement, and accelerate digital transformation. With a strong foundation in technical excellence
                and professional project management, Axinex Technologies stands as your trusted technology partner. 
              </p>
              <p className="mt-5 max-w-xl font-body-md text-on-surface-variant leading-relaxed">
                Axinex Technologies is a structured, service-based software solutions provider capable of delivering customized software,
                mobile applications, web applications, and dynamic websites through a professional and compliant execution
                framework.  
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop"
                alt="Server racks"
                className="h-[420px] w-full rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute bottom-4 right-4 glass-card max-w-[220px] rounded-xl p-stack-lg shadow-lg md:-bottom-6 md:-right-6">
                <span className="block font-headline-md text-headline-md text-primary">24+</span>
                <p className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">
                  Global regions supported
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-section-gap">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="font-headline-lg text-headline-lg text-primary">The Principles that Power Us</h2>
              <p className="mt-4 font-body-md text-on-surface-variant">
                Founded on the belief that technical integrity is the foundation of digital trust.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white shadow-md">
                  <InlineIcon className="h-7 w-7" name="bolt" />
                </div>
                <h4 className="font-headline-md text-headline-md text-primary">Innovation</h4>
                <p className="mt-3 font-body-md text-on-surface-variant">
                  We do not just adapt to the future; we architect it through continuous R&D and a
                  culture of creative problem-solving.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-vibrant-red text-white shadow-md">
                  <InlineIcon className="h-7 w-7" name="security" />
                </div>
                <h4 className="font-headline-md text-headline-md text-primary">Integrity</h4>
                <p className="mt-3 font-body-md text-on-surface-variant">
                  Transparency is our standard. We build reliable systems and relationships founded on
                  absolute honesty and accountability.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary-container text-white shadow-md">
                  <InlineIcon className="h-7 w-7" name="hub" />
                </div>
                <h4 className="font-headline-md text-headline-md text-primary">Excellence</h4>
                <p className="mt-3 font-body-md text-on-surface-variant">
                  Good enough is the enemy. We strive for mathematical precision in our code and
                  flawless execution in our deployments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-[#eef5fb]">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-4 block font-label-md text-label-md uppercase tracking-[0.24em] text-vibrant-red">
                Executive Leadership
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">Visionaries Behind Axinex</h2>
              <p className="mt-3 max-w-md font-body-md text-on-surface-variant">
                A diverse panel of industry veterans from top-tier tech firms and academic institutions.
              </p>
            </div>
          </div>

          <div className="grid grid-flow-col auto-cols-[190px] gap-10 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {[
              { id: 1, name: 'Founder', title: 'Founder', img: '/assets/Founder.jpeg' },
              { id: 2, name: 'President', title: 'President', img: '/assets/President.jpeg' },
              { id: 3, name: 'Co-Founder', title: 'Co-Founder', img: '/assets/Co-Founder.jpeg' },
              { id: 4, name: 'Senior Architect', title: 'Senior Architect', img: '/assets/Pradnya.png' },
              { id: 5, name: 'Senior Architect', title: 'Senior Architect', img: '/assets/Vaibhav.png' },
            ].map((person) => (
              <div key={person.id} className="group">
                <div className="overflow-hidden rounded-md border border-slate-900/20 bg-white shadow-sm ring-1 ring-primary/10">
                  <img
                    src={person.img}
                    alt={person.title}
                    className="h-[210px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="font-headline-md font-bold text-[1.28rem] leading-tight text-primary md:text-[1.38rem]">
                    {person.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-4 block font-label-md text-label-md uppercase tracking-[0.24em] text-vibrant-red">
                Our Developers
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">The Team Building Axinex</h2>
              <p className="mt-3 max-w-md font-body-md text-on-surface-variant">
                Frontend and backend engineers shaping the product experience and platform foundation.
              </p>
            </div>
          </div>

          <div className="grid grid-flow-col auto-cols-[190px] gap-10 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {[
              {
                id: 1,
                name: 'Srushti Tingane',
                title: 'Frontend Developer',
                img: '/assets/srushti-tingane.jpeg',
                emailHref: 'mailto:srushtitingane25@gmail.com',
                linkedinHref: 'https://www.linkedin.com/in/srushti-tingane-97387327b/',
              },
              {
                id: 2,
                name: 'Aafreen Khan',
                title: 'Frontend Developer',
                img: '/assets/aafreen-khan.jpeg',
                emailHref: 'mailto:aafreenk7106@gmail.com',
                linkedinHref: 'https://www.linkedin.com/in/aafreen-khan-170562314/',
              },
              {
                id: 3,
                name: 'Rahul Jangir',
                title: 'Backend Developer',
                img: '/assets/rahul-jangir.jpeg',
                emailHref: 'mailto:rahul.n.jangir@gmail.com',
                linkedinHref: 'https://www.linkedin.com/in/rahul-jangir-17197b2a3/',
              },
              {
                id: 4,
                name: 'Dhananjay Shirse',
                title: 'Backend Developer',
                img: '/assets/dhananjay-shirse.jpeg',
                emailHref: 'mailto:dhananjayshirse7777@outlook.com',
                linkedinHref: 'https://www.linkedin.com/in/dhananjay-shirse-90960a321/',
              },
              {
                id: 5,
                name: 'Anih Joshi',
                title: 'Frontend Developer',
                img: '/assets/anih-joshi.jpeg',
                emailHref: 'mailto:anihjoshi31@gmail.com',
                linkedinHref: 'https://www.linkedin.com/in/anih-joshi-2a7ab5309/',
              },
            ].map((person) => (
              <div key={person.name} className="group">
                <div className="overflow-hidden rounded-md border border-slate-900/20 bg-white shadow-sm ring-1 ring-primary/10">
                  <img
                    src={person.img}
                    alt={person.title}
                    className="h-[210px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="font-headline-md font-bold text-[1.22rem] leading-tight text-primary md:text-[1.32rem]">
                    {person.name}
                  </div>
                  <div className="mt-1 text-sm text-on-surface-variant">{person.title}</div>
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <a
                      href={person.emailHref}
                      aria-label={`Email ${person.name}`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                    >
                      <InlineIcon name="mail" className="h-5 w-5" />
                    </a>
                    <a
                      href={person.linkedinHref}
                      aria-label={`${person.name} on LinkedIn`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                    >
                      <InlineIcon name="linkedin" className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
