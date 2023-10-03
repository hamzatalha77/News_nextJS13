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
            <Image src="" alt="" />
            <span></span>
          </div>
        </div>
        <div>
          <Image src="" alt="" />
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  )
}

export default BlogPost
