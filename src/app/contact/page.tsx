import Buttons from '@/components/buttons/buttons'
import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
const Contact = () => {
  return (
    <div>
      <h1 className="text-6xl mb-24 text-center">Let`s Keep in Touch</h1>
      <div className="flex items-center gap-24">
        <div className="flex-1 h-[500px] relative">
          <Image
            className={styles.image}
            src="/contactme.png"
            alt="contact us"
            fill={true}
          />
        </div>
        <form className="flex-1 flex flex-col gap-5">
          <input className={styles.input} placeholder="Your Name" type="text" />
          <input
            className={styles.input}
            placeholder="Your Email"
            type="email"
          />
          <textarea
            className={styles.textarea}
            placeholder="message"
            cols={30}
            rows={10}
          />
          <Buttons url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact
