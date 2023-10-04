import React from 'react'
import styles from './DarkmodeToggle.module.css'
const DarkmodeToggle = () => {
  const mode = 'dark'
  return (
    <div className={styles.container}>
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
