'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'




export default function AdminDashboard() {

  useEffect(() => {

    const fetchInquiries = async () => {
      try {

        const res = await fetch('/api/inquiry')
const dashboardRes = await fetch('/api/dashboard')
const employeeRes = await fetch('/api/employees')
        const dashboardData = await dashboardRes.json()
const employeeData = await employeeRes.json()

const data = await res.json()

        if (data.success) {
const responseRate =
  data.inquiries.length > 0
    ? Math.round(
        (
          (dashboardData.contactedCount +
            dashboardData.resolvedCount) /
          data.inquiries.length
        ) * 100
      )
    : 0
          setRecentEnquiries(data.inquiries)

          setStats({
  totalInquiries: dashboardData.totalInquiries,
  monthlyTraffic: dashboardData.totalInquiries,

  employees:
    employeeData.employees.length,

  responseRate:
    responseRate,

  newCount:
    dashboardData.newCount,

  contactedCount:
    dashboardData.contactedCount,

  resolvedCount:
    dashboardData.resolvedCount,
})
          updateTrafficData(
            'week',
            data.inquiries
          )
        }

      } catch (error) {
        console.log(error)
      }
    }

    fetchInquiries()

    const token = localStorage.getItem('token')

    if (!token) {
      window.location.href = '/admin/login'
    } else {
      setLoading(false)
    }

  }, [])
  const [loading, setLoading] = useState(true)
 const [stats, setStats] = useState({
  totalInquiries: 0,
  monthlyTraffic: 0,
  employees: 0,
  responseRate: 0,
  newCount: 0,
  contactedCount: 0,
  resolvedCount: 0,
})

const [recentEnquiries, setRecentEnquiries] = useState<any[]>([])
  const [trafficBars, setTrafficBars] = useState([
    20, 40, 60, 80, 50, 90, 70,
  ])
  const [activeFilter, setActiveFilter] = useState('week')
const [selectedEnquiry, setSelectedEnquiry] = useState<any>(null)
  const [emailSubject, setEmailSubject] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const updateTrafficData = (
  type: string,
  inquiries: any[] = []
) => {

    setActiveFilter(type)

    const bars = [0, 0, 0, 0, 0, 0, 0]

    inquiries.forEach((item: any) => {

      const date = new Date(item.createdAt)

      let index = 0

      if (type === 'day') {

        index = Math.min(
          Math.floor(date.getHours() / 3),
          6
        )

      } else if (type === 'week') {

        index = date.getDay()

      } else if (type === 'month') {

        index = Math.min(
          Math.floor(date.getDate() / 5),
          6
        )
      }

      bars[index] += 15
    })

    const normalized = bars.map((v) =>
      v === 0 ? 10 : Math.min(v, 100)
    )

    setTrafficBars(normalized)
  }

 const openEmailModal = (enquiry: any) => {
    setSelectedEnquiry(enquiry)
    setEmailSubject(`Re: Your enquiry (${enquiry.id})`)
    setEmailMessage(
      `Thank you for contacting AXINEX regarding ${enquiry.company}. We received your enquiry and our team is reviewing it.\n\nWe will share the next steps shortly.\n\nBest regards,\nAXINEX Support Team`
    )
  }

  const closeEmailModal = () => {
    setSelectedEnquiry(null)
    setEmailSubject('')
    setEmailMessage('')
  }
  const updateStatus = async (
  id: string,
  status: string
) => {

    console.log("ID =", id)
    console.log("STATUS =", status)
    try {

      const res = await fetch(
        "/api/inquiry/status",
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            id,
            status,
          }),
        }
      );

      const data = await res.json();
      console.log("API RESPONSE =", data)

      if (data.success) {

        setRecentEnquiries((prev) =>
          prev.map((item) =>
            item._id === id
              ? { ...item, status }
              : item
          )
        );

      }

    } catch (error) {
      console.log(error);
    }
  };

  const handleSendEmail = async () => {

    if (!selectedEnquiry) return

    try {

      const res = await fetch('/api/send-email', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          to: selectedEnquiry.email,
          subject: emailSubject,
          message: emailMessage,
        }),
      })

      const data = await res.json()

      if (data.success) {
        alert('Email Sent Successfully')
        closeEmailModal()
      } else {
        alert('Failed to send email')
      }

    } catch (error) {
      console.log(error)
    }
  }
  if (loading) {
    return null
  }
  return (
    <div className="flex min-h-screen bg-surface">
      <aside className="fixed left-0 top-0 bottom-0 z-40 flex h-screen w-64 flex-col bg-primary text-on-primary shadow-xl">
        <div className="px-6 py-8">
          <div className="mb-8 flex items-center gap-2">
            <div>
              <h1 className="font-headline-md text-headline-md leading-none text-on-primary">
                <img src="/assets/axinex-logo-transparent.png" alt="Axinex logo" className="h-8 object-contain" />
              </h1>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-on-primary/60">
                Admin Portal
              </p>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            <Link
              className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-3 text-on-secondary transition-all"
              href="/admin/dashboard"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                dashboard
              </span>
              <span className="font-label-md text-label-md">Dashboard</span>
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-on-primary/70 transition-all hover:bg-white/10 hover:text-on-primary"
              href="/admin/employees"
            >
              <span className="material-symbols-outlined">group</span>
              <span className="font-label-md text-label-md">Employees</span>
            </Link>
          </nav>
        </div>

        <div className="mt-auto border-t border-white/10 p-6">
          <div className="mb-6 flex items-center gap-3">
            <img
              alt="Admin User Profile"
              className="h-10 w-10 rounded-full border-2 border-white/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXgzPbZFxYTsdN7oBMmGqSmXm6LqTHgI9J9W83sQjKZsEuza0SUXHI-T94-Rv7pEwLCcqXqLi1TVgFvobpjDjPmWrFZR0D7aYHIOx6UCgkP9ylvnns2sAFU3GUTG2CkTnCsWdIBny0PWhGlj0EzA2n-6C5QvgpEOtq73AuRcLXvK6fV0Izq8YbEvgNYCeVhLSjf9kGYO35PIb_7YPRtHPRcS5a-FcRD0Crw6LK4J8LeU1feOJGxFCosK0gUjb4Q_oOfucPGG6V8Gqn"
            />
            <div className="overflow-hidden">
              <p className="truncate font-label-md text-label-md text-on-primary">Admin User</p>
              <p className="truncate text-[10px] text-on-primary/60">admin@axinex.tech</p>
            </div>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem('token')
              window.location.href = '/admin/login'
            }}
            className="flex items-center gap-3 px-2 py-2 text-on-primary/70 transition-all hover:text-on-primary"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-md text-label-md">Logout</span>
          </button>
        </div>
      </aside>

      <main className="ml-64 min-h-screen w-full overflow-y-auto bg-[#f5f7fa] px-6 py-8 lg:px-12 lg:py-10">
        <header className="mb-8 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg tracking-tight text-primary">
              System Overview
            </h2>
            <p className="mt-1 font-body-md text-on-surface-variant">
              Manage Enquiries, Analytics, and Team Performance
            </p>
          </div>

        </header>

        <section className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-stack-lg shadow-sm">
            <p className="font-label-md text-label-md text-on-surface-variant">
              Monthly Traffic
            </p>

            <h3 className="mt-1 font-headline-md text-headline-md text-primary">
              {stats.monthlyTraffic}
            </h3>
          </div>

          <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-stack-lg shadow-sm">
            <p className="font-label-md text-label-md text-on-surface-variant">
              Total Inquiries
            </p>

            <h3 className="mt-1 font-headline-md text-headline-md text-primary">
              {stats.totalInquiries}
            </h3>
          </div>

          <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-stack-lg shadow-sm">
            <p className="font-label-md text-label-md text-on-surface-variant">
              Response Rate
            </p>

            <h3 className="mt-1 font-headline-md text-headline-md text-primary">
             {stats.responseRate}%
            </h3>
          </div>

          <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-stack-lg shadow-sm">
            <p className="font-label-md text-label-md text-on-surface-variant">
              Employees
            </p>

            <h3 className="mt-1 font-headline-md text-headline-md text-primary">
              {stats.employees}
            </h3>
          </div>
        </section>

        <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-12">
          <div className="xl:col-span-8 rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-stack-lg shadow-sm">
            <div className="mb-8 flex items-center justify-between gap-4">
              <h4 className="font-headline-md text-[24px] text-primary">Enquiry Graph</h4>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    updateTrafficData(
                      'day',
                      recentEnquiries
                    )
                  }
                  className={`rounded-md px-3 py-1 font-label-md text-caption ${activeFilter === 'day'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-high'
                    }`}
                >
                  Day
                </button>
                <button
                  onClick={() =>
                    updateTrafficData(
                      'week',
                      recentEnquiries
                    )
                  }
                  className={`rounded-md px-3 py-1 font-label-md text-caption ${activeFilter === 'week'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-high'
                    }`}
                >
                  Week
                </button>
                <button
                  onClick={() =>
                    updateTrafficData(
                      'month',
                      recentEnquiries
                    )
                  }
                  className={`rounded-md px-3 py-1 font-label-md text-caption ${activeFilter === 'month'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-high'
                    }`}
                >
                  Month
                </button>
              </div>
            </div>
            <div className="relative flex h-72 items-end gap-2 px-4">
              <div className="pointer-events-none absolute inset-x-4 top-0 bottom-0 flex flex-col justify-between opacity-20">
                <div className="border-t border-outline"></div>
                <div className="border-t border-outline"></div>
                <div className="border-t border-outline"></div>
                <div className="border-t border-outline"></div>
              </div>
              {trafficBars.map((height, index) => (
                <div key={index} className="flex-1 rounded-t-lg bg-primary/10 relative" style={{ height: `${height}%` }}>
                  <div
                    className="absolute inset-x-0 bottom-0 rounded-t-lg bg-primary transition-all duration-300"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          <div className="xl:col-span-4 rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-stack-lg shadow-sm">
            <h4 className="mb-6 font-headline-md text-[20px] text-primary">Inquiries Status</h4>
            <div className="space-y-4">
              {[
                { label: 'New', percent: stats.newCount },
                { label: 'Contacted', percent: stats.contactedCount },
                { label: 'Resolved', percent: stats.resolvedCount },
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex justify-between text-caption font-label-md">
                    <span>{item.label}</span>
                    <span>{item.percent}</span>
                  </div>

                  <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-high">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{
                        width: `${Math.min(item.percent * 10, 100)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-6 rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-stack-lg shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h4 className="font-headline-md text-[24px] text-primary">Recent Enquiries</h4>
            <button className="font-label-md text-label-md text-vibrant-red hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] text-left text-body-md">
              <thead>
                <tr className="border-b border-outline-variant/30 text-on-surface-variant">
                  <th className="px-3 py-3 font-label-md">Enquiry ID</th>
                  <th className="px-3 py-3 font-label-md">Company</th>
                  <th className="px-3 py-3 font-label-md">Service</th>
                  <th className="px-3 py-3 font-label-md">Contact</th>
                  <th className="px-3 py-3 font-label-md">Status</th>
                  <th className="px-3 py-3 font-label-md">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentEnquiries.map((enquiry) => (
                  <tr key={enquiry._id} className="border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors">
                    <td className="px-3 py-4 font-label-md text-primary">
                      {enquiry._id.slice(0, 8)}
                    </td>
                    <td className="px-3 py-4 text-on-surface">
                      {enquiry.name}
                    </td>
                    <td className="px-3 py-4 text-on-surface">{enquiry.service}</td>
                    <td className="px-3 py-4 text-on-surface-variant">
                      {enquiry.email}
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex flex-col items-start gap-2">
                        <select
                          value={enquiry.status || 'New'}
                          onChange={(e) =>
                            updateStatus(
                              enquiry._id,
                              e.target.value
                            )
                          }
                          className="rounded-md border px-2 py-1 text-sm"
                        >
                          <option value="New">
                            New
                          </option>

                          <option value="Contacted">
                            Contacted
                          </option>

                          <option value="Resolved">
                            Resolved
                          </option>
                        </select>
                        <button
                          type="button"
                          onClick={() => openEmailModal(enquiry)}
                          className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-caption font-label-md text-on-primary transition-colors hover:bg-primary/90"
                        >
                          Send Email
                        </button>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-on-surface-variant">
                      {new Date(enquiry.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {selectedEnquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4">
            <div className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-2xl">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-headline-md text-[28px] text-primary">Send Email to Customer</h4>
                  <p className="mt-1 text-body-md text-on-surface-variant">To: {selectedEnquiry.email}</p>
                </div>
                <button
                  type="button"
                  onClick={closeEmailModal}
                  className="rounded-md bg-surface-container-high px-3 py-1 text-caption text-on-surface-variant"
                >
                  Close
                </button>
              </div>

              <label className="mb-2 block text-caption font-label-md text-on-surface-variant">Subject</label>
              <input
                type="text"
                value={emailSubject}
                onChange={(event) => setEmailSubject(event.target.value)}
                className="mb-4 w-full rounded-lg border border-outline-variant/30 px-3 py-2 text-body-md text-on-surface outline-none focus:border-primary"
              />

              <label className="mb-2 block text-caption font-label-md text-on-surface-variant">Message</label>
              <textarea
                value={emailMessage}
                onChange={(event) => setEmailMessage(event.target.value)}
                rows={8}
                className="w-full rounded-lg border border-outline-variant/30 px-3 py-2 text-body-md text-on-surface outline-none focus:border-primary"
              />

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeEmailModal}
                  className="rounded-md px-4 py-2 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="rounded-md bg-primary px-5 py-2 font-label-md text-label-md text-on-primary transition-colors hover:bg-primary/90"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
