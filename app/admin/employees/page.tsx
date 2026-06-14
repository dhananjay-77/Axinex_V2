'use client'
import InlineIcon from '@/components/InlineIcon'
import { useState, useEffect } from 'react'
import type { FormEvent } from 'react'
import Link from 'next/link'


type Employee = {
  _id?: string
  name: string
  email: string
  role: string
  experience: string
  department: string
  departmentTone: string
  status: string
  statusTone: string
  performance: number
}

type EmployeeFormState = {
  name: string
  email: string
  role: string
  experience: string
  department: string
  status: string
  performance: string
}

const initialEmployees: Employee[] = []

const initialFormState: EmployeeFormState = {
  name: '',
  email: '',
  role: '',
  experience: '',
  department: 'Engineering',
  status: 'Active',
  performance: '4',
}

// function getDepartmentTone(department: string) {
//   const tones: Record<string, string> = {
//     Engineering: 'bg-primary-fixed text-on-primary-fixed',
//     Creative: 'bg-secondary-fixed text-on-secondary-fixed',
//     Finance: 'bg-surface-container-high text-primary',
//     Infrastructure: 'bg-primary-fixed text-on-primary-fixed',
//     Operations: 'bg-surface-container-high text-primary',
//     Sales: 'bg-secondary-fixed text-on-secondary-fixed',
//   }

//   return tones[department] ?? 'bg-surface-container-high text-primary'
// }

// function getStatusTone(status: string) {
//   const tones: Record<string, string> = {
//     Active: 'text-green-600',
//     'In Meeting': 'text-vibrant-red',
//     Offline: 'text-outline',
//     Onboarding: 'text-blue-600',
//   }

//   return tones[status] ?? 'text-outline'
// }

export default function EmployeeManagement() {
  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false)
  const [employeesList, setEmployeesList] = useState(initialEmployees)
  const [selectedEmployee,
    setSelectedEmployee] =
    useState<any>(null)

  const [isEditMode,
    setIsEditMode] =
    useState(false)
  const [loading, setLoading] = useState(true)

  const fetchEmployees = async () => {
    try {
      const res = await fetch('/api/employees')
      const data = await res.json()

      if (data.success) {
        setEmployeesList(data.employees)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const [formState, setFormState] = useState(initialFormState)
  useEffect(() => {

  const token =
    localStorage.getItem('token')

  if (!token) {

    window.location.href =
      '/admin/login'

    return

  }

  fetchEmployees()

  setLoading(false)

}, [])
  const deleteEmployee = async (id: string) => {

    const ok = confirm("Delete employee?")

    if (!ok) return

    try {

      const res = await fetch(
        `/api/employees/${id}`,
        {
          method: "DELETE",
        }
      )

      const data = await res.json()

      if (data.success) {
        fetchEmployees()
      }

    } catch (error) {
      console.log(error)
    }
  }
  const editEmployee = (employee: any) => {

    setSelectedEmployee(employee)

    setIsEditMode(true)

    setFormState({
      name: employee.name,
      email: employee.email,
      role: employee.role,
      experience: employee.experience,
      department: employee.department,
      status: employee.status,
      performance: String(employee.performance),
    })

    setIsAddEmployeeOpen(true)
  }

  const closeForm = () => {
    setIsAddEmployeeOpen(false)
    setFormState(initialFormState)
    setIsEditMode(false)
    setSelectedEmployee(null)
  }

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault()

    try {

      const res = await fetch(

        isEditMode
          ? `/api/employees/${selectedEmployee._id}`
          : '/api/employees',

        {
          method:
            isEditMode
              ? 'PUT'
              : 'POST',

          headers: {
            'Content-Type':
              'application/json',
          },

          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            role: formState.role,
            experience: formState.experience,
            department: formState.department,
            status: formState.status,
            performance:
              Number(formState.performance),
          }),
        }
      )

      const data =
        await res.json()

      if (data.success) {

        await fetchEmployees()

        closeForm()

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
          <div className="mb-1 flex items-center gap-2">
            <img src="/assets/axinex-logo-transparent.png" alt="Axinex logo" className="h-8 object-contain" />
          </div>
          <p className="font-label-md text-caption opacity-70">Admin Portal</p>
        </div>

        <nav className="flex-1 space-y-1">
          <Link className="mx-2 flex items-center gap-3 rounded-lg px-4 py-3 text-on-primary/70 transition-all hover:bg-white/10 hover:text-on-primary" href="/admin/dashboard">
            <InlineIcon name="dashboard" className="h-7 w-7 text-white" />
            <span className="font-label-md">Dashboard</span>
          </Link>
          <Link className="mx-2 flex items-center gap-3 rounded-lg bg-secondary px-4 py-3 text-on-secondary transition-all" href="/admin/employees">
            <InlineIcon name="group" className="h-7 w-7 text-white" />
            <span className="font-label-md">Employees</span>
          </Link>
        </nav>

        <div className="mt-auto p-4">
  <div className="mt-4 border-t border-white/10 pt-4">
    <button
      onClick={() => {
        localStorage.removeItem('token')
        window.location.href = '/admin/login'
      }}
      className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-on-primary/70 transition-all hover:bg-white/10 hover:text-on-primary"
      type="button"
    >
      <InlineIcon name="logout" className="h-7 w-7 text-white" />
      <span className="font-label-md">Logout</span>
    </button>
  </div>
</div>
      </aside>

      <main className="ml-64 min-h-screen w-full bg-[#f5f7fa] px-6 py-8 lg:px-12 lg:py-10">
        <header className="mb-8 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <h1 className="font-headline-lg text-headline-lg tracking-tight text-primary">Employee Directory</h1>
            <p className="mt-1 font-body-md text-on-surface-variant">
              Manage your global workforce, roles, and operational permissions.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative">
              <InlineIcon name="search" className="h-5 w-5 text-outline" />

              {/* <input
                className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest py-3 pl-12 pr-4 font-body-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 lg:w-80"
                placeholder="Search team members..."
                type="text"
              /> */}
            </div>
            {/* <button className="flex items-center gap-2 rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 font-label-md text-primary transition-colors hover:bg-surface-container-high">
              <InlineIcon name="filter_list" className="h-5 w-5" />
              Filters
            </button> */}
            <button
              className="rounded-xl bg-primary px-6 py-3 font-label-md text-on-primary transition-opacity hover:opacity-90"
              onClick={() => setIsAddEmployeeOpen(true)}
              type="button"
            >
              {isEditMode
                ? "Edit Employee"
                : "Add Employee"}
            </button>
          </div>
        </header>

        <section className="mb-8 overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-lowest shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left text-body-md">
              <thead className="border-b border-outline-variant/20 bg-surface-container-high">
                <tr>
                  <th className="px-6 py-4 font-label-md text-label-md text-on-surface">Employee Name</th>
                  <th className="px-6 py-4 font-label-md text-label-md text-on-surface">Role &amp; Experience</th>
                  <th className="px-6 py-4 font-label-md text-label-md text-on-surface">Department</th>
                  <th className="px-6 py-4 font-label-md text-label-md text-on-surface">Status</th>
                  <th className="px-6 py-4 font-label-md text-label-md text-on-surface">Performance</th>
                  <th className="px-6 py-4 font-label-md text-label-md text-on-surface">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employeesList.map((employee) => (
                  <tr key={employee.name} className="border-b border-outline-variant/20 transition-colors hover:bg-surface-container-low">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-on-primary">
                          {employee.name
                            .split(' ')
                            .map((part) => part[0])
                            .join('')}
                        </div>
                        <div>
                          <p className="font-label-md text-label-md text-primary">{employee.name}</p>
                          <p className="text-caption text-on-surface-variant">{employee.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="font-label-md text-label-md text-on-surface">{employee.role}</p>
                      <p className="text-caption text-on-surface-variant">{employee.experience}</p>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex rounded-full px-3 py-1 text-caption font-label-md ${employee.departmentTone}`}>
                        {employee.department}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex items-center gap-2 text-caption font-label-md ${employee.statusTone}`}>
                        <span className="h-2 w-2 rounded-full bg-current"></span>
                        {employee.status}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1 text-vibrant-red">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <InlineIcon
                            key={index}
                            name="star"
                            className={`h-5 w-5 ${index < employee.performance ? 'opacity-100' : 'opacity-20'}`}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex gap-2">

                        <button
                          onClick={() =>
                            editEmployee(employee)
                          }
                          className="rounded bg-blue-500 px-3 py-1 text-white"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            deleteEmployee(
  employee._id!
)
                          }
                          className="rounded bg-red-500 px-3 py-1 text-white"
                        >
                          Delete
                        </button>

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <div className="flex items-center justify-between gap-4 border-t border-outline-variant/20 bg-surface-container-low px-6 py-4">
          
            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-outline-variant px-4 py-2 text-primary transition-colors hover:bg-surface-container-high">Previous</button>
              <button className="rounded-lg bg-primary px-4 py-2 text-on-primary transition-opacity hover:opacity-90">1</button>
              <button className="rounded-lg border border-outline-variant px-4 py-2 text-primary transition-colors hover:bg-surface-container-high">2</button>
              <button className="rounded-lg border border-outline-variant px-4 py-2 text-primary transition-colors hover:bg-surface-container-high">3</button>
              <span className="px-2 text-on-surface-variant">...</span>
              <button className="rounded-lg border border-outline-variant px-4 py-2 text-primary transition-colors hover:bg-surface-container-high">321</button>
              <button className="rounded-lg border border-outline-variant px-4 py-2 text-primary transition-colors hover:bg-surface-container-high">Next</button>
            </div>
          </div> */}
        </section>

        {isAddEmployeeOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/50 px-4 py-8">
            <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-surface-container-lowest shadow-2xl">
              <div className="flex items-start justify-between border-b border-outline-variant/20 px-6 py-5">
                <div>
                  <h2 className="font-headline-md text-[28px] text-primary">Add Employee</h2>
                  <p className="mt-1 font-body-md text-on-surface-variant">
                    Create a new employee record for the admin directory.
                  </p>
                </div>
                <button className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-high" onClick={closeForm} type="button">
                  <InlineIcon name="close" className="h-5 w-5" />
                </button>
              </div>

              <form className="grid gap-6 px-6 py-6 md:grid-cols-2" onSubmit={handleSubmit}>
                <label className="grid gap-2">
                  <span className="font-label-md text-label-md text-on-surface">Full Name</span>
                  <input
                    className="rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 font-body-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                    onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
                    placeholder="Enter employee name"
                    required
                    value={formState.name}
                  />
                </label>

                <label className="grid gap-2">
                  <span className="font-label-md text-label-md text-on-surface">Work Email</span>
                  <input
                    className="rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 font-body-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                    onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                    placeholder="name@company.com"
                    required
                    type="email"
                    value={formState.email}
                  />
                </label>

                <label className="grid gap-2">
                  <span className="font-label-md text-label-md text-on-surface">Role</span>
                  <input
                    className="rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 font-body-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                    onChange={(event) => setFormState((current) => ({ ...current, role: event.target.value }))}
                    placeholder="Job title"
                    required
                    value={formState.role}
                  />
                </label>

                <label className="grid gap-2">
                  <span className="font-label-md text-label-md text-on-surface">Experience</span>
                  <input
                    className="rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 font-body-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                    onChange={(event) => setFormState((current) => ({ ...current, experience: event.target.value }))}
                    placeholder="e.g. 5 years • Senior Level"
                    required
                    value={formState.experience}
                  />
                </label>

                <label className="grid gap-2">
                  <span className="font-label-md text-label-md text-on-surface">Department</span>
                  <select
                    className="rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 font-body-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                    onChange={(event) => setFormState((current) => ({ ...current, department: event.target.value }))}
                    value={formState.department}
                  >
                    <option>Engineering</option>
                    <option>Creative</option>
                    <option>Finance</option>
                    <option>Infrastructure</option>
                    <option>Operations</option>
                    <option>Sales</option>
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="font-label-md text-label-md text-on-surface">Status</span>
                  <select
                    className="rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 font-body-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                    onChange={(event) => setFormState((current) => ({ ...current, status: event.target.value }))}
                    value={formState.status}
                  >
                    <option>Active</option>
                    <option>In Meeting</option>
                    <option>Offline</option>
                    <option>Onboarding</option>
                  </select>
                </label>

                <label className="grid gap-2 md:col-span-2">
                  <span className="font-label-md text-label-md text-on-surface">Performance Rating</span>
                  <input
                    className="rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 font-body-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                    min="1"
                    max="5"
                    onChange={(event) => setFormState((current) => ({ ...current, performance: event.target.value }))}
                    placeholder="1 to 5"
                    type="number"
                    value={formState.performance}
                  />
                </label>

                <div className="flex flex-col-reverse gap-3 md:col-span-2 md:flex-row md:justify-end">
                  <button className="rounded-xl border border-outline-variant px-6 py-3 font-label-md text-primary transition-colors hover:bg-surface-container-high" onClick={closeForm} type="button">
                    Cancel
                  </button>
                  <button className="rounded-xl bg-primary px-6 py-3 font-label-md text-on-primary transition-opacity hover:opacity-90" type="submit">
                    {isEditMode
                      ? "Update Employee"
                      : "Save Employee"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  )
}
