import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1000px] mx-auto text-center">
      <div className="bg-surface-container-low rounded-3xl p-stack-lg md:p-16 border border-outline-variant/30">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md">
          Ready to Scale?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
          Start a conversation with our architectural consultants today and build the infrastructure of
          tomorrow.
        </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
          <input
            className="w-full md:min-w-[300px] md:w-auto h-[52px] px-6 rounded-lg border border-outline focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter your business email"
            type="email"
          />
          <Link href="/contact" className="bg-vibrant-red text-on-primary inline-flex items-center justify-center min-h-[52px] px-6 md:px-10 rounded-lg font-label-md text-label-md shadow-lg hover:shadow-xl hover:bg-secondary transition-all">
            Send Enquiry
          </Link>
        </div>
      </div>
    </section>
  )
}
