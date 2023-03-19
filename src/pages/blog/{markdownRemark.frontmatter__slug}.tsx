import * as React from 'react'
import { graphql, PageProps, HeadFC } from 'gatsby'
import { Layout, Breadcrumbs } from '../../components'

const BlogPostTemplate = ({ data }: PageProps<Queries.BlogTemplateQuery>) => {
  const { markdownRemark } = data
  const frontmatter = markdownRemark?.frontmatter ?? null
  const html = markdownRemark?.html ?? null
  const crumbs = [
    {
      label: 'Home',
      to: '/'
    },
    { label: 'Blog', to: '/blog' },
    { label: frontmatter?.title ?? '' }
  ]
  return (
    <Layout breadcrumbs={crumbs}>
      <h1 className="mt-5 mb-2">{frontmatter?.title}</h1>
      <span>{frontmatter?.date}</span>
      <div dangerouslySetInnerHTML={{ __html: html ?? '' }} />
    </Layout>
  )
}

export const query = graphql`
  query BlogTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
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

export const Head: HeadFC = ({ data }) => {
  const { markdownRemark }: any = data
  const { frontmatter } = markdownRemark
  return <title>{`Blog: ${frontmatter.title}`}</title>
}
