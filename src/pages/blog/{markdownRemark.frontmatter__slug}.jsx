import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { Typography } from '@mui/material'

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Typography variant="h3">{frontmatter.title}</Typography>
      <Typography variant="h6">{frontmatter.date}</Typography>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

export default BlogPostTemplate
