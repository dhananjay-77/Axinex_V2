'use client'

import { useState } from 'react'

export default function ResetPasswordPage() {

  const [password, setPassword] =
    useState('')

  const [confirmPassword,
    setConfirmPassword] =
    useState('')

  const handleResetPassword =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault()

      if (
        password !==
        confirmPassword
      ) {
        alert(
          'Passwords do not match'
        )
        return
      }

      try {

        const email =
          localStorage.getItem(
            'resetEmail'
          )

        const otp =
          localStorage.getItem(
            'verifiedOTP'
          )

        const res =
          await fetch(
            '/api/admin/reset-password',
            {
              method: 'POST',
              headers: {
                'Content-Type':
                  'application/json',
              },
              body: JSON.stringify({
                email,
                otp,
                password,
              }),
            }
          )

        const data =
          await res.json()

        if (data.success) {

          localStorage.removeItem(
            'resetEmail'
          )

          localStorage.removeItem(
            'verifiedOTP'
          )

          alert(
            'Password Reset Successfully'
          )

          window.location.href =
            '/admin/login'

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
        onSubmit={
          handleResetPassword
        }
        className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
      >

        <h1 className="text-2xl font-bold mb-6">
          Reset Password
        </h1>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
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
          Reset Password
        </button>

      </form>

    </div>
  )
}