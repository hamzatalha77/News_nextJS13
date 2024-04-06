import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Fjalla_One } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import AuthProvider from '@/components/AuthProvider/AuthProvider'
import { ThemeProvider } from '@/context/ThemeContext'
const fjalla_One = Fjalla_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Penta News',
  description: 'News Application'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fjalla_One.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="max-w-[1366px] min-h-screen flex flex-col justify-between mx-auto my-0 px-[60px] py-0">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
