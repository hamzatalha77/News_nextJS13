import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import connect from '@/utils/db'
import User from '@/models/User'
import bcrypt from 'bcryptjs'

interface Items {
  clientId: string
  clientSecret: string
}

const googleProviderConfig: Items = {
  clientId: process.env.GOOGLE_CLIENT_ID || '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
}

const handler = NextAuth({
  providers: [
    GoogleProvider(googleProviderConfig),

    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        await connect()
        try {
          const user = User.findOne({ email: credentials.email })
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            )
            if (isPasswordCorrect) {
              return user
            } else {
              throw new Error('Wrong Credentials!')
            }
          } else {
            throw new Error('User not found!')
          }
        } catch (err: any) {
          throw new Error(err)
        }
      }
    })
  ]
})
export { handler as GET, handler as POST }
