export default function TrustSecuritySection() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row gap-gutter items-center mb-stack-lg">
        <div className="flex-1">
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Trust &amp;{' '}
            <span className="font-display-italic italic font-normal">
              Security
            </span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
            We adhere to the world&apos;s most stringent security protocols to ensure your data remains your
            most valuable asset.
          </p>
        </div>
        <div className="flex flex-wrap gap-stack-lg opacity-50 grayscale">
          <div className="font-label-md text-label-md border-2 border-outline-variant px-6 py-2 rounded">
            ISO 27001
          </div>
          <div className="font-label-md text-label-md border-2 border-outline-variant px-6 py-2 rounded">
            SOC 2 TYPE II
          </div>
          <div className="font-label-md text-label-md border-2 border-outline-variant px-6 py-2 rounded">
            GDPR READY
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-stack-lg">
        <div className="p-stack-lg bg-surface-container-high rounded-xl hover:shadow-lg transition-all border-l-4 border-vibrant-red">
          <h4 className="font-headline-md text-headline-md text-primary mb-2">
            Immutable Logs
          </h4>
          <p className="font-body-md text-on-surface-variant">
            Every interaction within our system is cryptographically hashed and logged to an unalterable
            ledger.
          </p>
        </div>
        <div className="p-stack-lg bg-surface-container-high rounded-xl hover:shadow-lg transition-all">
          <h4 className="font-headline-md text-headline-md text-primary mb-2">
            Zero-Trust Auth
          </h4>
          <p className="font-body-md text-on-surface-variant">
            Continuous verification of every user and device, regardless of whether they are inside or
            outside the network.
          </p>
        </div>
        <div className="p-stack-lg bg-surface-container-high rounded-xl hover:shadow-lg transition-all">
          <h4 className="font-headline-md text-headline-md text-primary mb-2">
            Quantum Resilience
          </h4>
          <p className="font-body-md text-on-surface-variant">
            Future-proofing current encryption standards against the emergence of post-quantum computing
            threats.
          </p>
        </div>
      </div>
    </section>
  )
}
