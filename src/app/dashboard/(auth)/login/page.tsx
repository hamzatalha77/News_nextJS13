'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

const Login = () => {
  return (
    <div>
      <button onClick={() => signIn('Google')}>Login With GOOGLE</button>
    </div>
  )
}

export default Login
