import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full pt-12 pb-6 bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 gap-8 items-start md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full px-2 py-1">
              <img src="/assets/axinex-logo-transparent.png" alt="Axinex logo" className="h-8 object-contain" />
            </div>
            <p className="mt-6 text-on-surface-variant font-body-md max-w-xs">
              Architecting the future of enterprise infrastructure through data intelligence and secure innovation.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com/axinex_technologies?igsh=NHpkem96ZjU4cWYz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary/30 bg-transparent text-on-surface-variant hover:border-primary hover:text-primary transition-colors focus:outline-none shadow-[0_8px_24px_rgba(3,105,161,0.12)] hover:shadow-[0_12px_30px_rgba(3,105,161,0.18)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary/30 bg-transparent text-on-surface-variant hover:border-primary hover:text-primary transition-colors focus:outline-none shadow-[0_8px_24px_rgba(3,105,161,0.12)] hover:shadow-[0_12px_30px_rgba(3,105,161,0.18)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="4"></rect>
                  <path d="M7 10v7"></path>
                  <path d="M7 8v.01"></path>
                  <path d="M11 17v-4c0-1.657 1.343-3 3-3s3 1.343 3 3v4"></path>
                </svg>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Sr+No.+92,+1A/2/1,+Lane+No.+2,+Sanket+Park,+Hadapsar,+Pune+411060"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="google-maps"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary/30 bg-transparent text-on-surface-variant hover:border-primary hover:text-primary transition-colors focus:outline-none shadow-[0_8px_24px_rgba(3,105,161,0.12)] hover:shadow-[0_12px_30px_rgba(3,105,161,0.18)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1118 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-headline-md text-label-md text-primary tracking-widest mb-4">QUICK LINKS</h4>
            <ul className="space-y-3 text-on-surface-variant">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/preview/solutions">Solutions</Link>
              </li>
              <li>
                <Link href="/preview/sectors">Sectors</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact </Link>
              </li>
              
            </ul>
          </div>

          <div>
            <h4 className="font-headline-md text-label-md text-primary tracking-widest mb-4">LEGAL &amp; COMPLIANCE</h4>
            <ul className="space-y-3 text-on-surface-variant">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/security-framework">Security Framework</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline-md text-label-md text-primary tracking-widest mb-4">OUR LOCATION</h4>
            <div className="rounded-xl overflow-hidden relative border border-outline-variant/10">
              <div className="bg-[url('/images/tech-environment-2.svg')] bg-cover bg-center h-40 md:h-44"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 text-center">
                  <div className="text-primary font-label-md font-semibold">Axinex Global HQ</div>
                  <div className="text-caption text-on-surface-variant">1200 Innovation Drive, Silicon Valley, CA</div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Sr+No.+92,+1A/2/1,+Lane+No.+2,+Sanket+Park,+Hadapsar,+Pune+411060"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-4 right-4 bg-surface-container-low rounded-full border border-outline-variant/20 px-4 py-2 flex items-center gap-3 hover:shadow-lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1118 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div className="text-on-surface-variant text-sm">View on Maps</div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-outline-variant/10 pt-6 text-on-surface-variant text-center">
          © 2026 Axinex Technologies. Future-ready digital solutions.
        </div>
      </div>
    </footer>
  )
}
