'use client'
import { createContext, useState } from 'react'

export const ThemeContext = createContext()
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark')
}
