'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
const Login = () => {
  const session = useSession()
  const router = useRouter()

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === 'authenticated') {
    router?.push('/dashboard')
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    signIn('credentials', { email, password })
  }
  return (
    <div className="flex items-center justify-center">
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
          Login
        </button>
      </form>
      <button onClick={() => signIn('Google')}>Login With GOOGLE</button>
    </div>
  )
}

export default Login
