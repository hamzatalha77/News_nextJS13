import User from '@/models/User'
import connect from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'

interface UpdateUserData {
  id: string
  data: Record<string, any>
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
    const bodyText = await request.text()
    const requestBody: UpdateUserData = JSON.parse(bodyText)
    const { id, data } = requestBody
    if (!id || !data) {
      return new NextResponse('Missing required parameters', { status: 400 })
    }
    const user = await User.findById(id)
    if (!user) {
      return new NextResponse('User not found', { status: 404 })
    }
    Object.assign(user, data)
    await user.save()
    return new NextResponse(JSON.stringify(user), { status: 200 })
  } catch (err) {
    console.error(err)
    return new NextResponse('Database Error!', { status: 500 })
  }
}
