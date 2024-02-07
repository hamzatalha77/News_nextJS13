'use client'
import { createContext, useState, ReactNode } from 'react'

interface ThemeContextType {
  mode: string
  toggle: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: 'dark',
  toggle: () => {}
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState('dark')
  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }
  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}> {children}</div>
    </ThemeContext.Provider>
  )
}
