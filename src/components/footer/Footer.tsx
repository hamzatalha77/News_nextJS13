import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="h-14 flex items-center justify-between">
      <div>©2023 Penta News. All rights reserved</div>
      <div className="flex items-center gap-3">
        <Image
          src="/1.png"
          width={15}
          height={15}
          className="opacity-60 cursor-pointer"
          alt="Facebook"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className="opacity-60 cursor-pointer"
          alt="Instagram"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className="opacity-60 cursor-pointer"
          alt="Twitter"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className="opacity-60 cursor-pointer"
          alt="Youtube"
        />
      </div>
    </div>
  )
}

export default Footer
