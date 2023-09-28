import Buttons from '@/components/buttons/buttons'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='text-6xl mb-24 text-center'>Let`s Keep in Touch</h1>
      <div className='flex items-center gap-24'>
        <div className='flex-1 h-[500px] relative'>
          <Image src="" alt="" fill={true} />
        </div>
        <form action="" className='flex-1'>
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <textarea placeholder="message" cols="30" rows="10" />
          <Buttons url='#' text='Send'>
        </form>
      </div>
    </div>
  )
}

export default Contact
