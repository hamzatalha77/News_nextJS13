'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store'
  })
  if (!res.ok) {
    return <div>No Data To fetch</div>
  }

  return res.json()
}
const Blog = async () => {
  const [data, setData] = await getData()
  const [error, setError] = useState(null)

  useEffect(() => {
    getData()
      .then((result) => {
        setData(result)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  if (error) {
    return <div>{error}</div>
  }

  if (!data) {
    return <div>Loading...</div>
  }

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
