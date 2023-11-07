import User from '@/models/User'
import connect from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  try {
    await connect()
    const users = await User.find()
    return new NextResponse(JSON.stringify(users), { status: 200 })
  } catch (error) {
    return new NextResponse('Database Error!', { status: 500 })
  }
}
