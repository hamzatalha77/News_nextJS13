'use client'
import { createContext, useState } from 'react'

interface MyTheme {
  toggle: () => void
  mode: string
}

export const ThemeContext = createContext<MyTheme | undefined>(undefined)
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
