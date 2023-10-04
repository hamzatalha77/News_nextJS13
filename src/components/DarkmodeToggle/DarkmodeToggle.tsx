import React from 'react'
import styles from './DarkmodeToggle.module.css'
const DarkmodeToggle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div className={styles.ball} />
    </div>
  )
}

export default DarkmodeToggle
