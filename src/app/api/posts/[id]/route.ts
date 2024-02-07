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
    const currentPost = await Post.findOne({ _id: new ObjectId(id) })

    if (!currentPost) {
      return new NextResponse('Post not found', { status: 404 })
    }

    const updateObject: { $set: { [key: string]: any } } = {
      $set: {
        updatedAt: new Date()
      }
    }

    for (const key in updatedData) {
      if (updatedData.hasOwnProperty(key)) {
        updateObject.$set[key] = updatedData[key]
      }
    }

    const updatedPost = await Post.findOneAndUpdate(
      { _id: new ObjectId(id) },
      updateObject,
      { returnDocument: 'after' }
    )

    if (!updatedPost.value) {
      return new NextResponse('Post not found', { status: 404 })
    }

    if (updatedData.title && updatedData.title !== currentPost.title) {
      const newSlug = slugify(updatedData.title)
      await Post.updateOne(
        { _id: new ObjectId(id) },
        { $set: { slug: newSlug } }
      )
      updatedPost.value.slug = newSlug
    }

    const response = {
      message: 'Post has been updated',
      post: updatedPost.value
    }

    return new NextResponse(JSON.stringify(response), { status: 200 })
  } catch (err) {
    console.error('Error in PUT request:', err)
    return new NextResponse('Database Error!', { status: 500 })
  }
}
