import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        cache: 'no-store'
      })
      if (!res.ok) {
        return new Error('Failed To Fetch Data')
      }
      const data = await res.json()
      return data
    }
  }, [])
  return <div>Dashboard</div>
}

export default Dashboard
