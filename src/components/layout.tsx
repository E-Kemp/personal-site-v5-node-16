import { Box, styled } from '@mui/material'
import React from 'react'
import Footer from './footer'
import './layout.css'

type Props = { children: React.ReactNode; hc?: boolean; vc?: boolean }

const Main = styled(Box)({ flexGrow: 1 })

const Layout = ({ children, hc, vc }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100vw',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: vc ? 'center' : 'flex-start',
          alignItems: hc ? 'center' : 'flex-start',
          padding: '30px'
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
