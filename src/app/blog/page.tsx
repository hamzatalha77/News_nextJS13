'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 10 }
  })
  if (!res.ok) {
    throw new Error('Failed to Fetch Data!')
  }
  const data = await res.json()
  return data
}

const Blog = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {data.map((item: any) => (
        <Link href={`/blog/${item.id}`} key={item.id}>
          <div>
            <Image
              src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg"
              alt="blog"
              width={400}
              height={250}
            />
          </div>
          <div>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog
