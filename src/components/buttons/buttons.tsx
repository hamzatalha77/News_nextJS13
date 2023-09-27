import React from 'react'
import Link from 'next/link'

const Buttons = ({ text, url }: any) => {
  return (
    <Link href={url}>
      <button className="p-5 cursor-pointer bg-[#66FCF1] border-none rounded w-max text-white">
        {text}
      </button>
    </Link>
  )
}

export default Buttons
