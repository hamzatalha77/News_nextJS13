import React from 'react'

const layout = ({ children }: any) => {
  return (
    <div>
      <h1 className="text-8xl p-8 mb-10">Our Works</h1>
      {children}
    </div>
  )
}

export default layout
