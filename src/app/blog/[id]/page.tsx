import Image from 'next/image'
import React from 'react'
import Avatar from '../../../../public/avatar.png'
import { notFound } from 'next/navigation'
async function getData(id: any) {
  const res = await fetch(`https://localhost:3000/api/posts/${id}`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    return notFound()
  }
  const data = await res.json()
  return data
}
export async function generateMetadata({ params }: any) {
  const post = await getData(params.id)

  return {
    title: post.title,
    description: post.desc
  }
}
const BlogPost = async ({ params }: any) => {
  const data = await getData(params.id)
  return (
    <div>
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-4xl">{data.title}</h1>
          <p className="text-lg font-light">{data.desc}</p>
          <div className="flex items-center gap-2">
            <Image
              className="object-cover rounded-[50%]"
              src={Avatar}
              alt="avatar"
              width={40}
              height={40}
            />
            <span>{data.username}</span>
          </div>
        </div>
        <div className="flex-1 h-72 relative">
          <Image className="object-cover" src={data.img} fill={true} alt="" />
        </div>
      </div>
      <div className="mt-12 text-xl font-light text-[#999] text-justify">
        <p>{data.content}</p>
      </div>
    </div>
  )
}

export default BlogPost
