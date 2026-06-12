import InlineIcon from './InlineIcon'

export default function CoreExpertiseSection() {
  return (
    <section className="py-section-gap bg-primary text-white">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-section-gap">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-stack-lg">
              Core{' '}
              <span className="italic font-display-italic font-normal">
                Expertise
              </span>
            </h2>
            <div className="space-y-stack-lg">
              <div className="flex gap-stack-md group">
                <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-vibrant-red transition-colors">
                  <InlineIcon className="h-6 w-6 text-white" name="security" />
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-white mb-1">
                    Cyber-Physical Security
                  </h4>
                  <p className="font-body-md text-white/60">
                    Integrating hardware-level protection with software firewalls for total
                    infrastructure integrity.
                  </p>
                </div>
              </div>
              <div className="flex gap-stack-md group">
                <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-vibrant-red transition-colors">
                  <InlineIcon className="h-6 w-6 text-white" name="bolt" />
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-white mb-1">
                    High-Frequency Computing
                  </h4>
                  <p className="font-body-md text-white/60">
                    Optimized algorithms and customized silicon pathways for nanosecond-level
                    processing.
                  </p>
                </div>
              </div>
              <div className="flex gap-stack-md group">
                <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-vibrant-red transition-colors">
                  <InlineIcon className="h-6 w-6 text-white" name="hub" />
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-white mb-1">
                    Edge Network Mesh
                  </h4>
                  <p className="font-body-md text-white/60">
                    Low-latency data distribution through our proprietary global edge point
                    constellation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl sm:aspect-[16/10] md:aspect-auto md:h-[600px] md:max-w-none">
            <img
              className="h-full w-full object-cover object-center"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuClRoduYXpupgrPN3UUTw698UYSqi-ov0SUg1m8N5NjK9kjVqKwIhP5uJK5zfeZGERZWSMzv2_qgvyI6AUJ-2jrUKB27mTJNL0H_iLWhz9Lebb0lujJHz7JXNnZ2EUlElOUtj9XDRQiG6L_dF2nOKF4wg9f0YX51PfWC-Vmk-OYbPjR9cuo3hrQpEnytdS4vCjBiOQnF-pqMdZr2EmL7mTqTfQZKrEk-XM9DKSjhjvPvd0to5iA3LUpXxLWgPdleN2doNxvvB4FWhUA"
              alt="Global network visualization"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
