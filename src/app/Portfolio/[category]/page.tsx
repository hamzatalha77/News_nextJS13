import Buttons from '@/components/buttons/buttons'
import Image from 'next/image'
import React from 'react'

const Category = ({ params }: any) => {
  return (
    <div>
      <h1 className="text-[#66fcf1]">{params.category}</h1>
      <div className="flex gap-12 mt-12 mb-24">
        <div>
          <h1></h1>
          <p></p>
          <Buttons />
        </div>
        <div>
          <Image src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Category
