import Post from '@/models/Post'
import connect from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest, { params }: any) => {
  const { id } = params
  try {
    await connect()
    const post = await Post.find()
    return new NextResponse(JSON.stringify(post), { status: 200 })
  } catch (err) {
    return new NextResponse('Database Error!', { status: 500 })
  }
}
