import Image from 'next/image'
import React from 'react'
import Avatar from '../../../../public/avatar.png'
const BlogPost = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-lg font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nemo
            iste dolorum minus tempore fuga dolor molestiae. Reprehenderit eius
            sequi totam magni, velit odit, sed ratione numquam inventore nulla
            nostrum.
          </p>
          <div className="flex items-center gap-2">
            <Image
              className="object-cover rounded-[50%]"
              src={Avatar}
              alt="avatar"
              width={40}
              height={40}
            />
            <span>Hamza Talha</span>
          </div>
        </div>
        <div className="flex-1 h-72 relative">
          <Image
            className="object-cover"
            src="https://media.cloudbooklet.com/uploads/2023/06/21111428/luma-ai-1-750x422.jpg"
            fill={true}
            alt=""
          />
        </div>
      </div>
      <div className="mt-12 text-xl font-light text-[#999] text-justify">
        <p></p>
      </div>
    </div>
  )
}

export default BlogPost
