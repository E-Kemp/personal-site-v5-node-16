import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { Box, Card, Link, Paper, Typography } from '@mui/material'
import Layout from '../components/layout'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout vc hc>
      <Typography variant="h3" gutterBottom>
        Blog
      </Typography>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
