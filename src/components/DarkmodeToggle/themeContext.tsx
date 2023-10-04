'use client'
import { createContext, useContext } from 'react'

// Define the type for the context value
export type ThemeContextType = {
  toggle: () => void
  mode: string
}

// Create the context with an initial value of an empty object
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

// Create a custom hook for accessing the context
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
