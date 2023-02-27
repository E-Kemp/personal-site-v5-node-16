import { createTheme, ThemeOptions } from '@mui/material/styles'

const theme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00897b'
    },
    secondary: {
      main: '#673ab7'
    },
    background: {
      default: '#0A0A29',
      paper: '#121212'
    },
    error: {
      main: '#b71c1c'
    },
    warning: {
      main: '#f57c00'
    },
    info: {
      main: '#039be5'
    },
    success: {
      main: '#81c784'
    },
    white: {
      main: '#ffffff'
    }
  }
})

declare module '@mui/material/styles' {
  interface Theme {
    white: {
      main: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    white?: {
      main?: string
    }
  }
}

export default theme
