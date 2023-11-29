import User from '@/models/User'
import connect from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url)
  const username = url.searchParams.get('username')
  try {
    await connect()
    const condition = username ? { username } : {}
    const users = await User.find(condition)
    return new NextResponse(JSON.stringify(users), { status: 200 })
  } catch (err) {
    return new NextResponse('Database Error!', { status: 500 })
  }
}

export const PUT = async (request: NextRequest) => {
  try {
    await connect()

    const { id, data } = await request.body.json()

    if (!id || !data) {
      return new NextResponse('Missing required parameters', { status: 400 })
    }

    // Find the user by id
    const user = await User.findById(id)

    if (!user) {
      return new NextResponse('User not found', { status: 404 })
    }

    // Update user data
    Object.assign(user, data)

    // Save the updated user
    await user.save()

    return new NextResponse(JSON.stringify(user), { status: 200 })
  } catch (err) {
    console.error(err)
    return new NextResponse('Database Error!', { status: 500 })
  }
}
