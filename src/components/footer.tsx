import { backdropClasses, Box, Link, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import theme from '../../theme'

const Footer = () => {
  return (
    <Grid2
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        minWidth: '100%',
        height: '100px',
        paddingX: '40px',
        backgroundColor: theme.palette.primary.dark
      }}
    >
      <Grid2>
        <Typography>Elliot Jordan Kemp</Typography>
      </Grid2>
      <Grid2>
        <Typography>
          Powered by{' '}
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.gatsbyjs.com/"
            aria-label="Link to the Gatsby-JS framework."
            color={'#fff'}
          >
            GatsbyJS
          </Link>
        </Typography>
      </Grid2>
    </Grid2>
  )
}

export default Footer
