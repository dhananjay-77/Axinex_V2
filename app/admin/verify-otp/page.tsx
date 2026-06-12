'use client'

import { useState } from 'react'

export default function VerifyOTPPage() {

  const [otp, setOtp] =
    useState('')

  const handleVerifyOTP =
    async (e: React.FormEvent) => {

      e.preventDefault()

      try {

        const email =
          localStorage.getItem(
            'resetEmail'
          )

        const res =
          await fetch(
            '/api/admin/verify-otp',
            {
              method: 'POST',
              headers: {
                'Content-Type':
                  'application/json',
              },
              body: JSON.stringify({
                email,
                otp,
              }),
            }
          )

        const data =
          await res.json()

        if (data.success) {
            localStorage.setItem(
  'verifiedOTP',
  otp
)

          alert(
            'OTP Verified'
          )

          window.location.href =
            '/admin/reset-password'

        } else {

          alert(data.message)

        }

      } catch (error) {

        console.log(error)

      }
    }

  return (
    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleVerifyOTP}
        className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
      >

        <h1 className="text-2xl font-bold mb-6">
          Verify OTP
        </h1>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) =>
            setOtp(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg"
        >
          Verify OTP
        </button>

      </form>

    </div>
  )
}