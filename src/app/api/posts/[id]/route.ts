import Post from '@/models/Post'
import connect from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'
import slugify from 'slugify'
export const GET = async (request: NextRequest, { params }: any) => {
  const { id } = params
  try {
    await connect()
    const post = await Post.findById(id)
    return new NextResponse(JSON.stringify(post), { status: 200 })
  } catch (err) {
    return new NextResponse('Database Error!', { status: 500 })
  }
}

export const PUT = async (request: NextRequest, { params }: any) => {
  const { id } = params
  const updatedData = await request.json()

  try {
    const currentPost = await Post.findById(id)

    if (!currentPost) {
      return new NextResponse('Post not found', { status: 404 })
    }

    const updateObject: { [key: string]: any } = {
      updatedAt: new Date()
    }

    // Update fields in updateObject
    for (const key in updatedData) {
      if (updatedData.hasOwnProperty(key)) {
        updateObject[key] = updatedData[key]
      }
    }

    // Check if title is updated and update the slug
    if (updatedData.title && updatedData.title !== currentPost.title) {
      const newSlug = slugify(updatedData.title, { lower: true })
      updateObject.slug = newSlug
    }

    const updatedPost = await Post.findByIdAndUpdate(id, updateObject, {
      new: true
    })

    if (!updatedPost) {
      return new NextResponse('Post not found', { status: 404 })
    }

    const response = {
      message: 'Post has been updated',
      post: updatedPost
    }

    return new NextResponse(JSON.stringify(response), { status: 200 })
  } catch (err) {
    console.error('Error in PUT request:', err)
    return new NextResponse('Database Error!', { status: 500 })
  }
}
