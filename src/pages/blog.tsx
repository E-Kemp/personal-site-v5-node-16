import * as React from 'react'
import { graphql, HeadFC, PageProps } from 'gatsby'
import { Box, Card, Link, List, Paper, Typography } from '@mui/material'
import Layout from '../components/layout'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

interface BlogPageProps {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          date: string
          slug: string
          title: string
        }
      }
    }[]
  }
}

const BlogPage: React.FC<PageProps<BlogPageProps>> = ({ data }) => {
  const { allMarkdownRemark } = data
  const posts = allMarkdownRemark.edges
  return (
    <Layout vc>
      <Typography variant="h3" gutterBottom>
        Blog
      </Typography>
      {posts.map(({ node: { frontmatter } }) => (
        <Link key={frontmatter.title} href={`/blog${frontmatter.slug}`}>
          {frontmatter.title}
        </Link>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
  }
`

export default BlogPage

export const Head: HeadFC = () => <title>Home Page</title>
