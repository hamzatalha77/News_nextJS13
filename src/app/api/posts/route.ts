import Post from '@/models/Post'
import connect from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'
import slugify from 'slugify'

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url)
  const username = url.searchParams.get('username')
  try {
    await connect()
    const condition = username ? { username } : {}
    const posts = await Post.find(condition)
    return new NextResponse(JSON.stringify(posts), { status: 200 })
  } catch (err) {
    return new NextResponse('Database Error!', { status: 500 })
  }
}
export const POST = async (request: NextRequest) => {
  const body = await request.json()

  const slug = slugify(body.title, { lower: true })

  const newPost = new Post({
    ...body,
    slug // Add the generated slug to the post object
  })

  try {
    await connect()
    await newPost.save()

    return NextResponse.json(
      { message: 'Post created successfully', newPost },
      { status: 201 }
    )
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
