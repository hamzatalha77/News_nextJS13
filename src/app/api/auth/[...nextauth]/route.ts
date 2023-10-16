import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

interface Items {
  clientId: string
  clientSecret: string
}

const googleProviderConfig: Items = {
  clientId: process.env.GOOGLE_CLIENT_ID || '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
}

const handler = NextAuth({
  providers: [GoogleProvider(googleProviderConfig)]
})
export { handler as GET, handler as POST }
