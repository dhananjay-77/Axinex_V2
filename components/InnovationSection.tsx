import InlineIcon from './InlineIcon'

export default function InnovationAtScale() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-white/50">
      <div className="text-center mb-stack-lg">
        <span className="text-vibrant-red font-label-md text-label-md uppercase tracking-[0.2em]">
          Our Ecosystem
        </span>
        <h2 className="font-headline-lg text-headline-lg text-primary mt-4">
          Innovation at Scale
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Large Feature */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-xl h-[400px]">
          <img
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDYdLyB_11WBTaZA8j4rvFHt-EMmf4Y4_HylvUkBqpIZP6n6vRPIAbL9qxwF5txTqHFV9KLrpPyVEQ7kjZSemmvNsuB7yP-gwJTQMDicvPdEpFwHE8dRAhKDPvwol0DxLzEPGTyNdrgZf40OnutXk5e4lZsN0na9IIbn5TElqPb4SRAfO0h_wCQOYue6u-88TNEY0xoGhrY7PrDbObpr4G06XIsYu0GMf-eVmSiqZTPUYyl3Mn6C1fAJyIKcNTGvMjmx_846CeZTQB"
            alt="Server room infrastructure"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-stack-lg">
            <h3 className="text-white font-headline-md text-headline-md mb-2">
              Platform Modernization
            </h3>
            <p className="text-white/80 font-body-md max-w-md">
              Modernizing legacy platforms for resilience, performance, and cloud readiness.
            </p>
          </div>
        </div>

        {/* Small Feature 1 */}
        <div className="md:col-span-4 bg-primary p-stack-lg rounded-xl flex flex-col justify-between text-white">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white/10 opacity-60">
            <InlineIcon className="h-6 w-6 text-white/80" name="terminal" />
          </span>
          <div>
            <h3 className="font-headline-md text-headline-md mb-2">Continuous Delivery</h3>
            <p className="font-body-md text-white/70">
              Robust CI/CD practices that accelerate safe, repeatable releases.
            </p>
          </div>
        </div>

        {/* Small Feature 2 */}
        <div className="md:col-span-4 glass-card p-stack-lg rounded-xl flex flex-col justify-between border-t-4 border-vibrant-red">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-vibrant-red shadow-sm">
            <InlineIcon className="h-6 w-6 text-vibrant-red" name="group" />
          </span>
          <div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">Distributed Talent</h3>
            <p className="font-body-md text-on-surface-variant">
              Cross-functional teams that scale with your product roadmap.
            </p>
          </div>
        </div>

        {/* Medium Feature */}
        <div className="md:col-span-8 bg-surface-container-low p-stack-lg rounded-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-gutter h-full">
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-headline-md text-headline-md text-primary mb-4">
                Product Analytics
              </h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                Actionable insights from product telemetry to drive prioritized improvements.
              </p>
              <button className="text-primary font-label-md flex items-center gap-2 hover:translate-x-1 transition-transform">
                Explore Analytics{' '}
                <InlineIcon className="h-5 w-5" name="arrow_forward" />
              </button>
            </div>
            <div className="flex-1 flex items-end justify-center">
              <div className="flex gap-2 items-end h-32">
                <div className="w-8 bg-primary/20 rounded-t-lg h-[40%]"></div>
                <div className="w-8 bg-primary/40 rounded-t-lg h-[60%]"></div>
                <div className="w-8 bg-vibrant-red rounded-t-lg h-[90%]"></div>
                <div className="w-8 bg-primary/30 rounded-t-lg h-[50%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
