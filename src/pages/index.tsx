import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { Box, Card, Link, Paper, Typography } from '@mui/material'
import Layout from '../components/layout'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout vc hc>
      <Typography variant="h2" component="h2">
        Elliot Jordan Kemp
      </Typography>
      <Typography variant="body1" component="p">
        This is where I do things.
      </Typography>

      <Card
        variant="outlined"
        elevation={3}
        sx={{ marginTop: '40px', padding: '20px' }}
      >
        <Typography variant="body1" component="p">
          Why not look at these links?
        </Typography>
        <Grid2 container spacing={3} direction="row" justifyContent="center">
          <Grid2>
            <Link href="/blog" aria-label="Link to my blog.">
              Blog
            </Link>
          </Grid2>
          <Grid2>
            <Link
              target="_blank"
              referrerPolicy="no-referrer"
              href="https://www.linkedin.com/in/elliotjordankemp/"
              aria-label="Link to my LinkedIn profile."
            >
              LinkedIn
            </Link>
          </Grid2>
          <Grid2>
            <Link
              target="_blank"
              referrerPolicy="no-referrer"
              href="https://github.com/E-Kemp"
              aria-label="Link to my Github page."
            >
              GitHub
            </Link>
          </Grid2>
        </Grid2>
      </Card>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
