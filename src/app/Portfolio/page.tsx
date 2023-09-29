import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
    <div>
      <h1>Choose a Gallery</h1>
      <div>
        <Link href="/portfolio/illustrations" />
        <span>Illustrations</span>
      </div>
    </div>
  )
}

export default Portfolio
