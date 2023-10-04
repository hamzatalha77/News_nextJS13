'use client'
import React, { useContext } from 'react'
import styles from './DarkmodeToggle.module.css'
import { ThemeContext } from '@/context/ThemeContext'

const DarkmodeToggle = () => {
  const theme = useContext(ThemeContext)

  if (!theme) {
    // Handle the case where the context value is undefined (optional)
    return <div>Loading or handling the missing context...</div>
  }

  const { toggle, mode } = theme

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div
        className={styles.ball}
        style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  )
}

export default DarkmodeToggle
