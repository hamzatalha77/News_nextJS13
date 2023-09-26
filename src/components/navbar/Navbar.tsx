'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="max-w-[1366px] min-h-[100vh] mx-auto my-0 px-[60px] py-0 flex flex-col justify-between">
      <div>
        <Link href="/">Penta News</Link>
        <div>
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/dashboard">Dashboard</Link>
          <button
            onClick={() => {
              console.log('logged out')
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
