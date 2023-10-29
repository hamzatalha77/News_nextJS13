import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error('Failed to Fetch Data!')
  }

  return res.json()
}
const Blog = async () => {
  const data = await getData()

  return (
    <div>
      {data.map((item: any) => (
        <Link href={`/blog/${item._id}`} key={item._id}>
          <div>
            <Image
              src={item.img}
              alt="blog"
              width={400}
              height={250}
              priority={true}
            />
          </div>
          <div>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog
