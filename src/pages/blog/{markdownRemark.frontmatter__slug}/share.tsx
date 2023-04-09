import * as React from 'react'
import { graphql, PageProps, HeadFC, Link } from 'gatsby'
import { Layout } from '../../../components'
import { BaseLinks, ShareLinks } from '../../../components/shareLinks'

const BlogPostTemplate = ({ data }: PageProps<Queries.ShareTemplateQuery>) => {
  const { markdownRemark } = data
  const frontmatter = markdownRemark?.frontmatter ?? null
  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Blog', to: '/blog' },
    { label: frontmatter?.title ?? '', to: `/blog${frontmatter?.slug}` },
    { label: 'Share' }
  ]

  return (
    <Layout breadcrumbs={crumbs}>
      <h1 className="mt-5 mb-2">{frontmatter?.title}</h1>
      <p>You can share this blog post with the following links</p>
      <BaseLinks
        title={`Elliot Jordan Kemp${
          frontmatter?.title && ` | ${frontmatter?.title}`
        }`}
        url={`https://elliotjordankemp.com/blog${frontmatter?.slug}`}
      />
    </Layout>
  )
}

export const query = graphql`
  query ShareTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        slug
        title
      }
    }
  }
`

export default BlogPostTemplate

export const Head: HeadFC = ({ data }) => {
  const { markdownRemark }: any = data
  const { frontmatter } = markdownRemark
  return <title>{`Blog: ${frontmatter.title}`}</title>
}
