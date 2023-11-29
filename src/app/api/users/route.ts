import User from '@/models/User'
import connect from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'

interface UpdateUserData {
  id: string
  data: Record<string, any> // Adjust the type based on your user model
}

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

    // Check if request.body exists and is not null
    if (!request.body) {
      return new NextResponse('Invalid request body', { status: 400 })
    }

    // Use json method to parse request.body as JSON
    const requestBody: UpdateUserData = await request.body.json()

    const { id, data } = requestBody

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
