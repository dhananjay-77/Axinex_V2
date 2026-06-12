import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center px-margin-mobile py-14 md:px-margin-desktop md:py-0 max-w-container-max mx-auto overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="data-stream-bg absolute inset-0"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-fixed/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary-fixed/20 rounded-full blur-[100px]"></div>

        {/* Animated Nodes */}
        <div
          className="absolute top-1/3 left-1/2 hero-animation-node w-3 h-3 bg-vibrant-red rounded-full"
          style={{ animationDelay: '0s' }}
        ></div>
        <div
          className="absolute top-2/3 right-1/3 hero-animation-node w-2 h-2 bg-primary rounded-full"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 hero-animation-node w-4 h-4 bg-primary-container rounded-full"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-7">
          <h1 className="font-headline-xl text-headline-xl mb-stack-md text-primary">
            Engineering{' '}
            <span className="font-display-italic text-display-italic italic font-normal text-on-surface-variant">
              Future-Proof
            </span>{' '}
            Solutions at Global Scale
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-stack-lg leading-relaxed">
            Axinex bridges the gap between traditional industry and digital frontier. We deploy robust,
            high-performance infrastructure designed for the next era of technological evolution.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link href="/preview/solutions" className="inline-flex items-center justify-center bg-primary text-on-primary min-h-[48px] px-8 rounded-lg font-label-md text-label-md hover:shadow-xl hover:translate-y-[-2px] transition-all">
              Explore Solutions
            </Link>
            <Link href="/#faq" className="inline-flex items-center justify-center border border-primary text-primary min-h-[48px] px-8 rounded-lg font-label-md text-label-md hover:bg-primary/5 transition-all">
              Our Process
            </Link>
          </div>
        </div>

        <div className="md:col-span-5 hidden md:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-vibrant-red/10 rounded-2xl blur-2xl"></div>
            <img
              className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZqNMOGkDwDDMXfxp_cVTNVPdrEApFAUhtcdto2s_PfRhPg4RVRKc_K7kCGpxBiumYIRnktbxdrmTrNURT2vwLFY08RU7BjIIgcNz4cqIFpbyT_Cbp21kS5Q6jdxhEpHajVaP6EGYH_dJtEHOZBNMsQLKeVK3L411WRsmOY2YtJNs2-nNxGuGqHKI7gzqDW_HW2lOHgHzMid1GeAiI6Wgz1Ay5vFi-sqafqU1spBodHlIJlxxChRBu5AOrZpkv5AHiPCbhnr2NDhHT"
              alt="Microchip technology"
            />
            <div className="absolute -bottom-6 -right-6 glass-card p-stack-lg rounded-xl shadow-lg max-w-[240px]">
              <span className="block font-headline-md text-headline-md text-primary">99.9%</span>
              <p className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">
                Infrastructure Uptime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
