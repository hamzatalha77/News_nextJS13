import Image from 'next/image'
import React from 'react'

const BlogPost = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-4xl"></h1>
          <p className="text-lg font-light"></p>
          <div className="flex items-center gap-2">
            <Image className="object-cover rounded-[50%]" src="" alt="" />
            <span></span>
          </div>
        </div>
        <div className="flex-1 h-72 relative">
          <Image className="object-cover" src="" alt="" />
        </div>
      </div>
      <div className="mt-12 text-xl font-light text-[#999] text-justify">
        <p></p>
      </div>
    </div>
  )
}

export default BlogPost
