'use client'
import React from 'react'
import styles from './DarkmodeToggle.module.css'
import { useTheme } from './themeContext'

const DarkmodeToggle = () => {
  const { toggle, mode } = useTheme() // Use the useTheme hook to access the context value

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
