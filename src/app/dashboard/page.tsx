// Import necessary modules and components
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
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

  // Define a fetcher function for SWR
  const fetcher = (...args: [RequestInfo, RequestInit?]) =>
    fetch(...args).then((res) => res.json())

  const theusername = session?.data?.user?.name

  // Use SWR to fetch data from your API
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${theusername}`,
    fetcher
  )

  // State to handle edit/update functionality
  const [isEditing, setIsEditing] = useState(false)
  const [editPostId, setEditPostId] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    img: '',
    content: ''
  })

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login')
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const { title, desc, img, content } = formData

    if (isEditing) {
      // Handle the edit/update logic here
      try {
        await fetch(`/api/posts/${editPostId}`, {
          method: 'PUT', // Assuming you have an API route to update posts
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title,
            desc,
            img,
            content,
            username: theusername
          })
        })
        // Update the local data after the successful update
        const updatedData = data.map((post: Post) => {
          if (post._id === editPostId) {
            return {
              ...post,
              title,
              desc,
              img,
              content
            }
          }
          return post
        })
        mutate(updatedData, false)
        setFormData({
          title: '',
          desc: '',
          img: '',
          content: ''
        })
        setIsEditing(false)
        setEditPostId('')
      } catch (error) {
        console.log(error)
      }
    } else {
      // Handle the add/new post logic here
      try {
        const response = await fetch('/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title,
            desc,
            img,
            content,
            username: theusername
          })
        })

        if (response.ok) {
          const newPost = await response.json()
          // Update the local data with the newly added post
          const updatedData = [...data, newPost]
          mutate(updatedData, false)
          setFormData({
            title: '',
            desc: '',
            img: '',
            content: ''
          })
        } else {
          console.error('Failed to add a new post')
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  const handleDelete = async (id: any) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      })
      // Update the local data after a successful delete
      const updatedData = data.filter((post: Post) => post._id !== id)
      mutate(updatedData, false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = (id: string) => {
    // Find the post by ID in the data array
    const postToUpdate = data.find((post: Post) => post._id === id)

    if (postToUpdate) {
      setIsEditing(true)
      setEditPostId(id)
      setFormData({
        title: postToUpdate.title,
        desc: postToUpdate.desc,
        img: postToUpdate.img,
        content: postToUpdate.content
      })
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
                  className="flex items-center justify-between mx-0 my-[50px]"
                  key={post._id}
                >
                  <div className="w-52 h-28 ">
                    <Image
                      className="object-cover"
                      src={post.img}
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <h2>{post.title}</h2>
                  <span
                    className="cursor-pointer text-red-600"
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                  <span
                    className="cursor-pointer text-green-600"
                    onClick={() => handleUpdate(post._id)}
                  >
                    Update
                  </span>
                </div>
              ))}
        </div>
        <form className="flex flex-1 flex-col gap-5" onSubmit={handleSubmit}>
          <h1>{isEditing ? 'Update Post' : 'Add New Post'}</h1>
          <input
            className="p-3 bg-transparent border-2 border-solid border-[#bbb] rounded text-[#bbb] text-lg font-bold"
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <input
            className="p-3 bg-transparent border-2 border-solid border-[#bbb] rounded text-[#bbb] text-lg font-bold"
            type="text"
            placeholder="Desc"
            value={formData.desc}
            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
          />
          <input
            className="p-3 bg-transparent border-2 border-solid border-[#bbb] rounded text-[#bbb] text-lg font-bold"
            type="text"
            placeholder="Image"
            value={formData.img}
            onChange={(e) => setFormData({ ...formData, img: e.target.value })}
          />
          <textarea
            className="p-3 bg-transparent border-2 border-solid border-[#bbb] rounded text-[#bbb] text-lg font-bold"
            placeholder="Content"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            cols={30}
            rows={10}
          ></textarea>
          <button className="p-5 cursor-pointer bg-[#66FCF1] border-none rounded text-[#eee] font-bold">
            {isEditing ? 'Update' : 'Add'}
          </button>
        </form>
      </div>
    )
  }
}

export default Dashboard
