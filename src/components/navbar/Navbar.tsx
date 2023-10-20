'use client'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkmodeToggle from '../DarkmodeToggle/DarkmodeToggle'
import { signOut } from 'next-auth/react'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className="font-bold text-[22px]">
        Penta News
      </Link>
      <div className="flex items-center gap-5">
        <DarkmodeToggle />
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/dashboard">Dashboard</Link>
        <button
          className="p-1 bg-[#66FCF1] border-none rounded-[3px] text-white cursor-pointer"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
