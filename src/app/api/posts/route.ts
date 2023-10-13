import { NextResponse } from 'next/server'

export const GET = async (request) => {
  return new NextResponse("It's Works!", { status: 200 })
}
