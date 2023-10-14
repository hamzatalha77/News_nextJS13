import Post from '@/models/Post'
import connect from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  try {
    await connect()
    const posts = await Post.find()
    return new NextResponse(posts, { status: 200 })
  } catch (err) {
    return new NextResponse('Database Error!', { status: 500 })
  }
}
