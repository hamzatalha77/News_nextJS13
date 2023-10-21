'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import Image from 'next/image'

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
      <div>
        <div>
          {data.map((post) => (
            <div key={post._id}>
              <div>
                <Image src={post.img} alt="" />
              </div>
              <h2>{post.title}</h2>
              <span>X</span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
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
