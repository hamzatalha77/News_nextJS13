import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 10 }
  })
  if (!res.ok) {
    throw new Error('Failed to Fetch Data!')
  }
}
const Blog = async () => {
  const data = await getData()
  return (
    <div>
      {data.map((item: any) => {
        ;<Link href="/blog/testId" key={item.id}>
          <div>
            <Image
              src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg"
              alt="blog"
              width={400}
              height={250}
            />
          </div>
          <div>
            <h1>this is a title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              ipsa nulla. Labore, officia ad. Dolore ea saepe cum officiis eos
              repellat! Quisquam corrupti reiciendis ullam rerum vero, ad neque
              minus?
            </p>
          </div>
        </Link>
      })}
    </div>
  )
}

export default Blog
