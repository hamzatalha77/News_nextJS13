import Image from 'next/image'
import React from 'react'
import Avatar from '../../../../public/avatar.png'

async function getData(id: any) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error('Failed to Fetch Data!')
  }
  const data = await res.json()
  return data
}
const BlogPost = async ({ params }: any) => {
  const data = await getData(params.id)
  return (
    <div>
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-4xl">{data.title}</h1>
          <p className="text-lg font-light">{data.body}</p>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          reiciendis aut, nihil cumque beatae culpa rem minima eligendi,
          nesciunt libero consequuntur aliquam sequi voluptates voluptas,
          laborum laboriosam molestiae laudantium odit. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Unde doloremque, minus
          necessitatibus quaerat distinctio labore sed aliquid ipsa atque dicta,
          cumque odio veniam nobis rerum nostrum facere? Maxime, earum tempore.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          ratione non maiores dolores natus quis,
          <br /> consectetur, itaque quo qui id atque veniam laborum repellendus
          error dolore quidem. Consequuntur, reprehenderit asperiores! Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          consequatur, minima repellendus, ut modi, voluptate nesciunt excepturi
          accusantium officia sed est repudiandae autem blanditiis voluptas
          quasi nobis cumque atque nam fuga sunt? Iste quidem et a nam,
          voluptatibus libero exercitationem ducimus numquam debitis illum magni
          maxime quae unde quod autem.br
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
          accusantium sunt odio vel earum. Illo quo, harum, expedita nihil est
          temporibus laborum eveniet reprehenderit placeat a vero quasi
          consequatur adipisci. Molestias assumenda ducimus, dolore tempore
          dolorem cum quisquam asperiores illo quos obcaecati, ad mollitia
          deserunt harum consectetur quae perspiciatis saepe porro iste hic
          commodi corporis! Ea dignissimos veritatis corrupti eligendi!
        </p>
      </div>
    </div>
  )
}

export default BlogPost
