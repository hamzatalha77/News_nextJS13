import Buttons from '@/components/buttons/buttons'
import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
const Category = ({ params }: any) => {
  return (
    <div>
      <h1 className="text-[#66fcf1]">{params.category}</h1>
      <div className={styles.item}>
        <div className="flex-1 flex flex-col gap-5">
          <h1>This is a title</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            reprehenderit. Culpa unde perspiciatis dolorum modi autem sunt minus
            pariatur recusandae rem magnam cupiditate veritatis nisi, inventore
            velit? Quo, repudiandae excepturi!
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
      <div className={styles.item}>
        <div className="flex-1 flex flex-col gap-5">
          <h1>This is a title</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            reprehenderit. Culpa unde perspiciatis dolorum modi autem sunt minus
            pariatur recusandae rem magnam cupiditate veritatis nisi, inventore
            velit? Quo, repudiandae excepturi!
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
      <div className={styles.item}>
        <div className="flex-1 flex flex-col gap-5">
          <h1>This is a title</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            reprehenderit. Culpa unde perspiciatis dolorum modi autem sunt minus
            pariatur recusandae rem magnam cupiditate veritatis nisi, inventore
            velit? Quo, repudiandae excepturi!
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
    </div>
  )
}

export default Category
