import { createContext, useState } from 'react'

interface ThemeContextType {
  toggle: () => void
  mode: string
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)
export const ThemeProvider = ({ children }: any) => {
  const [mode, setMode] = useState('dark')
  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }
  const contextValue: ThemeContextType = {
    toggle,
    mode
  }
  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`theme${mode}`}> {children}</div>
    </ThemeContext.Provider>
  )
}
