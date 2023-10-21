'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import Image from 'next/image'

interface Post {
  _id: string
  img: string
  title: string
  content: string
  desc: string
}
const Dashboard = () => {
  const session = useSession()

  const router = useRouter()

  const fetcher = (...args: [RequestInfo, RequestInit?]) =>
    fetch(...args).then((res) => res.json())

  const theusername = session?.data?.user?.name // Safely access the username
  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${theusername}`,
    fetcher
  )

  console.log(data)

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }
  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login')
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const title = e.target[0].value
    const desc = e.target[1].value
    const img = e.target[2].value
    const content = e.target[3].value

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: theusername
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  if (session.status === 'authenticated') {
    return (
      <div className="flex gap-[100px]">
        <div className="flex-1">
          {isLoading
            ? 'Loading...'
            : data?.map((post: Post) => (
                <div
                  className="flex items-center justify-between"
                  key={post._id}
                >
                  <div>
                    <Image src={post.img} alt="" width={200} height={200} />
                  </div>
                  <h2>{post.title}</h2>
                  <span>X</span>
                </div>
              ))}
        </div>
        <form className="flex-1" onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Desc" />
          <input type="text" placeholder="Image" />
          <textarea placeholder="Content" cols={30} rows={10}></textarea>
          <button>Send</button>
        </form>
      </div>
    )
  }
}

export default Dashboard

// const [data, setData] = useState([])
// const [error, setError] = useState(false)
// const [isLoading, setIsLoading] = useState(false)
// useEffect(() => {
//   const getData = async () => {
//     setIsLoading(true)
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
//       cache: 'no-store'
//     })
//     if (!res.ok) {
//       setError(true)
//     }
//     const data = await res.json()
//     setData(data)
//     setIsLoading(false)
//   }
//   getData()
// }, [])
