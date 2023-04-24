import * as React from 'react'
import { graphql, PageProps, HeadFC, Link } from 'gatsby'
import {
  Layout,
  FacebookLink,
  LinkedInLink,
  RedditLink
} from '../../../components'
import { useMemo } from 'react'

const BlogPostTemplate = ({ data }: PageProps<Queries.ShareTemplateQuery>) => {
  const { markdownRemark } = data
  const frontmatter = markdownRemark?.frontmatter ?? null
  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Blog', to: '/blog' },
    { label: frontmatter?.title ?? '', to: `/blog${frontmatter?.slug}` },
    { label: 'Share' }
  ]

  const title = useMemo(
    () =>
      encodeURIComponent(
        `Elliot Jordan Kemp${frontmatter?.title && ` | ${frontmatter?.title}`}`
      ),
    [frontmatter?.title]
  )

  const url = useMemo(
    () =>
      encodeURIComponent(
        `https://elliotjordankemp.com/blog${frontmatter?.slug}`
      ),
    [frontmatter?.slug]
  )

  return (
    <Layout breadcrumbs={crumbs}>
      <div className="prose prose-slate w-full">
        <h1 className="mt-5 mb-2">{frontmatter?.title}</h1>
        <p className="mb-0">
          You can share this blog post with the following links
        </p>
        <ul className="my-0 list-none space-y-1 p-0 prose-a:my-0">
          <li>
            <FacebookLink title={title} url={url} />
          </li>
          <li>
            <LinkedInLink title={title} url={url} />
          </li>
          <li>
            <RedditLink title={title} url={url} />
          </li>
        </ul>
      </div>
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
