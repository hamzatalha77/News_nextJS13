import Buttons from '@/components/buttons/buttons'
import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import { items } from './data'
import { notFound } from 'next/navigation'

interface Item {
  id: number
  title: string
  desc: string
  image: string
}

const getData = (cat: any): Item[] | null => {
  const data = items[cat]

  if (data) {
    return data
  }
  return notFound()
}

interface CategoryProps {
  params: {
    category: string
  }
}

const Category: React.FC<CategoryProps> = ({ params }) => {
  const data = getData(params.category)

  if (data) {
    return (
      <div>
        <h1 className="text-[#66fcf1] text-6xl font-bold">{params.category}</h1>
        {data.map((item: Item) => (
          <div className={styles.item} key={item.id}>
            <div className="flex-1 flex flex-col gap-5">
              <h1 className="text-5xl">{item.title}</h1>
              <p className="text-xl">{item.desc}</p>
              <Buttons text="See More" url="#" />
            </div>
            <div className="flex-1 h-[500px] relative">
              <Image
                src={item.image}
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
}

export default Category
