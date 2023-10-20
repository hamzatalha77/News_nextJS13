'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
const Login = () => {
  const [err, setError] = useState(false)
  const router = useRouter()
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })
      res.status === 201 &&
        router.push('/dashboard/login?success=Account has been created')
    } catch (error) {
      setError(true)
    }
  }
  return (
    <div>
      <form className="w-[300px] flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          className="p-5 bg-transparent border-solid border-2 border-gray-300 rounded-md text-[20px] font-bold"
          placeholder="Email"
          type="email"
          required
        />
        <input
          className="p-5 bg-transparent border-solid border-2 border-gray-300 rounded-md text-[20px] font-bold"
          placeholder="Password"
          type="password"
          required
        />
        <button className="w-[300px] p-5 cursor-pointer bg-[#66fcf1] border-none rounded-md text-[#eee] font-light">
          Register
        </button>
      </form>
      <button onClick={() => signIn('Google')}>Login With GOOGLE</button>
    </div>
  )
}

export default Login
