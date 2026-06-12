import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CapabilitiesFlipGrid from '@/components/CapabilitiesFlipGrid'
import InlineIcon from '@/components/InlineIcon'
import Link from 'next/link'

export const metadata = {
  title: 'Services | AXINEX',
  description: 'High-performance software solutions and specialized capabilities for enterprise evolution.',
}

export default function ServicesPage() {
  return (
    <>
      <Navigation/>
      <main className="pt-28 pb-section-gap">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <section className="mb-section-gap">
            <div className="grid grid-cols-1 items-center gap-section-gap md:grid-cols-2">
              <div>
                <span className="mb-stack-sm block font-label-md text-label-md uppercase tracking-widest text-vibrant-red">
                  Elite Solutions
                </span>
                <h1 className="font-headline-xl text-headline-xl leading-tight text-primary">
                  Engineering the <br />
                  <span className="font-display-italic italic font-normal text-primary/90">Next Frontier.</span>
                </h1>
                <p className="mt-stack-md max-w-lg font-body-lg text-body-lg text-on-surface-variant">
                  Axinex delivers precision-engineered software ecosystems that bridge corporate stability
                  with modern technological innovation.
                </p>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <img
                    alt="Cybersecurity and technology"
                    className="h-[300px] w-full object-cover md:h-[430px]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg39c4t_4eXdLV2jA3pQxo7gWOCt1yxe-E0z4xCVX07CEp4udnLcywqgRHPINgi5Qb9bala-wiSDjz0_K8MQLgkZJbOjbkPsWtU8kTruw9a1VXlrI7FiPgevbqjYvZWtfMs0z9MUMxGvQ57XyUlitoSY3FdYrLousybbVwA_2x43CL9VE2RUUGNzxjwokQDz93ppH7k_7x9tbI54V_hSo66H77Cg2elqcv5qw5Wg_gz-FsPcRxdCeNvZWWsW6JUWHB-_3lIw97QDoq"
                  />
                </div>
                <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-outline-variant/30 bg-white p-5 shadow-lg md:block">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-primary-container p-3">
                      <InlineIcon name="speed" className="h-6 w-6 text-on-primary-container" />
                    </div>
                    <div>
                      <div className="font-label-md text-label-md text-primary">99.9% Uptime</div>
                      <div className="font-caption text-caption text-on-surface-variant">Guaranteed Infrastructure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="capabilities" className="mb-section-gap" style={{ fontFamily: 'Playfair Display, serif' }}>
            <CapabilitiesFlipGrid />

            <div className="rounded-3xl bg-surface-container-lowest p-6 text-center shadow-sm md:p-10">
              <h2 className="font-headline-lg text-headline-lg text-primary">Ready to accelerate?</h2>
              <p className="mx-auto mt-4 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                Partner with Axinex to transform your technical challenges into scalable business opportunities. Our consultants are ready to architect your next breakthrough.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
                <Link href="/contact" className="inline-flex h-12 items-center rounded-lg bg-vibrant-red px-8 font-label-md text-label-md text-on-primary transition-opacity hover:opacity-90">
                  Send Enquiry
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
