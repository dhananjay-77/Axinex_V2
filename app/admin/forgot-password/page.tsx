'use client'

import { useState } from 'react'

export default function ForgotPasswordPage() {

    const [email, setEmail] =
        useState('')

    const handleSendOTP =
        async (e) => {

            e.preventDefault()

            try {

                const res =
                    await fetch(
                        '/api/admin/forgot-password',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type':
                                    'application/json',
                            },
                            body: JSON.stringify({
                                email,
                            }),
                        }
                    )

                const data =
                    await res.json()

                if (data.success) {

                    localStorage.setItem(
                        'resetEmail',
                        email
                    )

                    alert(
                        'OTP Sent Successfully'
                    )

                    window.location.href =
                        '/admin/verify-otp'

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
                onSubmit={handleSendOTP}
                className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
            >

                <h1 className="text-2xl font-bold mb-6">
                    Forgot Password
                </h1>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(
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
                    Send OTP
                </button>

            </form>

        </div>
    )
}