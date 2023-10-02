import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div>
      <Link href="/testId">
        <div>
          <Image src="" alt="" />
        </div>
        <div>
          <h1></h1>
          <p></p>
        </div>
      </Link>
    </div>
  )
}

export default Blog
