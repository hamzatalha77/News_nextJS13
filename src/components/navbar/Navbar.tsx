import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
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
