import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
    <div className="">
      <h1 className="m-[20px 0px]">Choose a Gallery</h1>
      <div className="flex gap-14">
        <Link className="item" href="/portfolio/illustrations">
          <span>Illustrations</span>
        </Link>
        <Link className="item" href="/portfolio/websites">
          <span>Websites</span>
        </Link>
        <Link className="item" href="/portfolio/applications">
          <span>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
