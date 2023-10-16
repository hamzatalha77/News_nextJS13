'use client'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const metadata: Metadata = {
  title: 'Penta News',
  description: 'News Application'
}
async function getData() {
  const res = await fetch('https://localhost:3000/api/posts', {
    cache: 'no-store'
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
        <Link href={`/blog/${item._id}`} key={item._id}>
          <div>
            <Image src={item.img} alt="blog" width={400} height={250} />
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
