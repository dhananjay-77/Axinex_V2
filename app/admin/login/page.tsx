'use client'

import { useState } from 'react'

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isForgotMode, setIsForgotMode] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/login', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          email,
          password,
        }),
      })

      const data = await res.json()

      if (data.success) {
        localStorage.setItem('token', data.token)

        alert('Login Success')

        window.location.href = '/admin/dashboard'
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.log(error)
      alert('Something went wrong')
    }
  }
  const handleForgotPassword =
    async () => {

      if (!email) {
        alert(
          "Enter Email First"
        )
        return
      }

      try {

        const res =
          await fetch(
            "/api/admin/forgot-password",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify({
                email,
              }),
            }
          )

        const data =
          await res.json()

        alert(data.message)

      } catch (error) {

        console.log(error)

      }
    }

  return (
    <main className="flex-grow flex items-center justify-center relative px-margin-mobile md:px-margin-desktop py-stack-lg min-h-screen">
      {/* Background Imagery */}
      <div className="hidden lg:flex absolute left-0 top-0 h-full w-1/3 items-center justify-center p-20 opacity-40">
        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0px_10px_30px_rgba(0,75,118,0.08)]">
          <img
            alt="Tech Environment"
            className="w-full h-full object-cover object-center opacity-100"
            src="/images/tech.webp"
          />
        </div>
      </div>

      {/* Login Container */}
      <div className="w-full max-w-[480px] z-10 flex flex-col gap-stack-lg">
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center space-y-stack-sm">
          <div className="flex items-baseline relative">
            <img src="/assets/axinex-logo-transparent.png" alt="Axinex logo" className="h-10 object-contain" />
          </div>
          <p className="font-label-md text-label-md text-on-surface-variant tracking-widest uppercase">
            Admin Portal
          </p>
        </div>

        {/* Login Card */}
        <div className="glass-card shadow-[0px_10px_30px_rgba(0,75,118,0.08)] p-10 md:p-12 rounded-xl flex flex-col gap-stack-lg">
          <div className="space-y-2">
            <h2 className="font-headline-md text-headline-md text-ink-black">Secure Login</h2>
            <p className="font-body-md text-on-surface-variant">
              Enter your credentials to access the administration dashboard.
            </p>
          </div>

          <form className="flex flex-col gap-stack-md" onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="space-y-stack-sm">
              <label className="font-label-md text-label-md text-primary block">
                EMAIL ADDRESS
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-deep-navy transition-colors">
                  alternate_email
                </span>
                <input
                  className="w-full h-12 pl-12 pr-4 bg-white border border-outline-variant rounded-lg text-body-md outline-none focus:border-deep-navy focus:ring-4 focus:ring-deep-navy/10 transition-all placeholder:text-outline-variant"
                  placeholder="admin@axinex.tech"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-stack-sm">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md text-primary">PASSWORD</label>
                <button
                  type="button"
                  onClick={() =>
                    setIsForgotMode(true)
                  }
                  className="font-caption text-caption text-secondary hover:underline"
                >
                 <a
  href="/admin/forgot-password"
  className="font-caption text-caption text-secondary hover:underline"
>
  Forgot?
</a>
                </button>
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-deep-navy transition-colors">
                  lock
                </span>
                <input
                  className="w-full h-12 pl-12 pr-12 bg-white border border-outline-variant rounded-lg text-body-md outline-none focus:border-deep-navy focus:ring-4 focus:ring-deep-navy/10 transition-all placeholder:text-outline-variant"
                  placeholder="••••••••"
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                  onClick={togglePassword}
                  type="button"
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Security Check */}
            <div className="flex items-center gap-2 py-2">
              <input
                className="w-4 h-4 text-deep-navy border-outline-variant rounded focus:ring-deep-navy"
                id="remember"
                type="checkbox"
              />
              <label className="font-body-md text-body-md text-on-surface-variant cursor-pointer" htmlFor="remember">
                Remember this device
              </label>
            </div>

            {/* Action Button */}
            <button
              className="w-full h-12 bg-deep-navy text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
              type="submit"
            >
              <span>AUTHENTICATE</span>
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>

            {isForgotMode && (
              <button
                type="button"
                onClick={
                  handleForgotPassword
                }
                className="w-full h-12 border border-primary rounded-lg"
              >
                Send OTP
              </button>
            )}
          </form>

          <div className="flex flex-col gap-4 pt-4 border-t border-outline-variant/30 text-center">
            <p className="font-caption text-caption text-outline">
              Protected by hardware-level encryption.
            </p>
            <div className="flex justify-center gap-4 text-outline-variant">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                security
              </span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                shield
              </span>
            </div>
          </div>
        </div>

        {/* Global Footer Links */}
        <footer className="flex justify-center gap-stack-lg text-on-surface-variant font-caption text-caption">
          <a className="hover:text-primary transition-colors" href="#">
            Terms of Service
          </a>
          <span className="text-outline-variant">•</span>
          <a className="hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <span className="text-outline-variant">•</span>
          <a className="hover:text-primary transition-colors" href="#">
            Support
          </a>
        </footer>
      </div>

      {/* Background Decorative Elements */}
      <div className="hidden lg:block absolute bottom-12 right-12 text-outline-variant/20 font-headline-xl text-headline-xl select-none uppercase tracking-widest leading-none pointer-events-none">
        SECURE<br />
        PORTAL
      </div>
    </main>
  )
}
