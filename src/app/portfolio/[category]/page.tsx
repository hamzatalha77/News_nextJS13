import Buttons from '@/components/buttons/buttons'
import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import { items } from './data'
import { notFound } from 'next/navigation'
const getData = (cat: any) => {
  const data = items[cat]

  if (data) {
    return data
  }
  return notFound()
}
const Category = ({ params }: any) => {
  const data = getData(params.category)
  return (
    <div>
      <h1 className="text-[#66fcf1] text-6xl font-bold">{params.category}</h1>
      {data.map((item: any) => (
        <div className={styles.item} key={item.id}>
          <div className="flex-1 flex flex-col gap-5">
            <h1 className="text-5xl">This is a title</h1>
            <p className="text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
              reprehenderit. Culpa unde perspiciatis dolorum modi autem sunt
              minus pariatur recusandae rem magnam cupiditate veritatis nisi,
              inventore velit? Quo, repudiandae excepturi!
            </p>
            <Buttons text="See More" url="#" />
          </div>
          <div className="flex-1 h-[500px] relative">
            <Image
              src="/desktop (1).jpg"
              fill={true}
              alt="desktop"
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category
