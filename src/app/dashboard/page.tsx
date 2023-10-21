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

  const username = session?.data?.user?.name // Safely access the username
  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${username}`,
    fetcher
  )

  console.log(data)

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }
  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login')
  }

  if (session.status === 'authenticated') {
    return (
      <div>
        <div>
          <div>
            <Image src={} alt="" />
          </div>
          <h2></h2>
          <span>X</span>
        </div>
        <form></form>
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
