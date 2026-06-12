'use client'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useState } from 'react'


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'general',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/inquiry', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(formData),
    })

    const data = await res.json()

    if (data.success) {
      alert('Inquiry Sent Successfully')

      setFormData({
        name: '',
        email: '',
        service: 'general',
        message: '',
      })
    } else {
      alert('Something went wrong')
    }
  }
  return (
    <>
      <Navigation />
      <main className="pb-section-gap pt-28">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <header className="mb-10 max-w-4xl">
            <p className="mb-3 font-label-md text-label-md tracking-[0.28em] text-vibrant-red">
              GET IN TOUCH
            </p>
            <h1 className="font-headline-xl text-headline-xl leading-[0.95] text-ink-black">
              Let’s build the <span className="font-display-italic italic font-normal text-primary">future</span> together.
            </h1>
            <p className="mt-4 max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
              Whether you have a specific project in mind or just want to explore how our cutting-edge
              technology solutions can empower your business, our team is ready to assist.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-gutter xl:grid-cols-12">
            <section className="xl:col-span-7 rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-stack-lg shadow-lg">
              <form
                className="space-y-stack-lg"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 gap-stack-lg md:grid-cols-2">
                  <div className="space-y-stack-sm">
                    <label className="font-label-md text-label-md text-on-surface-variant">FULL NAME</label>
                    <input
                      className="h-12 w-full rounded-lg border border-outline-variant bg-surface px-stack-md font-body-md text-body-md focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      placeholder="John Doe"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-stack-sm">
                    <label className="font-label-md text-label-md text-on-surface-variant">
                      EMAIL ADDRESS
                    </label>

                    <input
                      className="h-12 w-full rounded-lg border border-outline-variant bg-surface px-stack-md font-body-md text-body-md focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      placeholder="john@company.com"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-stack-sm">
                  <label className="font-label-md text-label-md text-on-surface-variant">SUBJECT</label>
                  <select
                    className="h-12 w-full rounded-lg border border-outline-variant bg-surface px-stack-md font-body-md text-body-md focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="general">General Enquiry</option>
                    <option value="sales">Sales &amp; Partnerships</option>
                    <option value="technical">Technical Support</option>
                    <option value="career">Career Opportunities</option>
                  </select>
                </div>

                <div className="space-y-stack-sm">
                  <label className="font-label-md text-label-md text-on-surface-variant">YOUR MESSAGE</label>
                  <textarea
                    className="min-h-[180px] w-full resize-none rounded-lg border border-outline-variant bg-surface p-stack-md font-body-md text-body-md focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                    placeholder="Tell us about your project or inquiry..."
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  className="h-12 rounded-lg bg-vibrant-red px-stack-lg font-label-md text-label-md text-on-primary shadow-lg shadow-vibrant-red/20 transition-all hover:bg-secondary active:scale-[0.98]"
                  type="submit"
                >
                  Send Enquiry
                </button>
              </form>
            </section>

            <aside className="xl:col-span-5 space-y-stack-lg">
              <div className="rounded-xl bg-surface-container p-stack-lg shadow-sm">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary">Global Headquarters</h3>
                  <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                    Visit our flagship office in the heart of the tech district.
                  </p>
                </div>

                <div className="mt-stack-lg space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined mt-1 flex-shrink-0 text-primary">location_on</span>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">Axinex Technologies</p>
                      <p className="font-body-md text-body-md text-on-surface-variant"> Sr No. 92, 1A/2/1, Lane No.2, Sanket Park, Hadapsar</p>
                      <p className="font-body-md text-body-md text-on-surface-variant">Pune - 411060</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined mt-1 flex-shrink-0 text-primary">mail</span>
                    <a href="mailto:axinex.technologies@gmail.com" className="font-body-md text-body-md transition-colors hover:text-primary">
                      axinex.technologies@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined mt-1 flex-shrink-0 text-primary">phone</span>
                    <a href="tel:+91 9172551655 " className="font-body-md text-body-md transition-colors hover:text-primary">
                      +91 9172551655
                    </a>
                  </div>
                </div>

                <div className="mt-stack-lg overflow-hidden rounded-lg bg-[#d9d9d9]">
                  <div className="relative h-64 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.9),rgba(205,205,205,0.9)_35%,rgba(145,145,145,0.9)_100%)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0_22%,rgba(255,255,255,0.34)_22%_25%,transparent_25%_48%,rgba(255,255,255,0.24)_48%_51%,transparent_51%_100%),linear-gradient(transparent_0_18%,rgba(255,255,255,0.24)_18%_22%,transparent_22%_58%,rgba(255,255,255,0.18)_58%_61%,transparent_61%_100%)] opacity-60"></div>
                    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-vibrant-red p-3 shadow-lg shadow-vibrant-red/30">
                      <span className="material-symbols-outlined text-on-primary">location_on</span>
                    </div>
                    <div className="absolute bottom-3 right-3 rounded-md bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
                      Sr No. 92, 1A/2/1, Lane No.2, Sanket Park, Hadapsar, Pune - 411060
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
