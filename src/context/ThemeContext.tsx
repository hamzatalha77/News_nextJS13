'use client'
import { ThemeContextType } from '@/components/DarkmodeToggle/themeContext'
import { createContext, useState } from 'react'
// Import the context type

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

export const ThemeProvider = ({ children }: any) => {
  const [mode, setMode] = useState('dark')

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme${mode}`}> {children}</div>
    </ThemeContext.Provider>
  )
}
