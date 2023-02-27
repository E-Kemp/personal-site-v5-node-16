import * as React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  )
}
