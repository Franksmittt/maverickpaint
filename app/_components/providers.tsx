// app/_components/providers.tsx (Full Corrected Code)
'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
// The problematic type import is removed.
// import { type ThemeProviderProps } from 'next-themes/dist/types'

// We use the simpler, inline type declaration for robustness
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>

export function ThemeProvider({ children,...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}