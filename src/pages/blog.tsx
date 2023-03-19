import * as React from 'react'
import { graphql, HeadFC, PageProps, Link } from 'gatsby'
import { Layout } from '../components'

const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => {
  const { allMarkdownRemark } = data
  const posts = allMarkdownRemark.edges
  const crumbs = [
    {
      label: 'Home',
      to: '/'
    },
    { label: 'Blog' }
  ]
  return (
    <Layout breadcrumbs={crumbs} vc>
      <h3>Blog</h3>
      <ul>
        {posts.map(({ node: { frontmatter } }) =>
          frontmatter ? (
            <li className="mb-5">
              <Link
                key={frontmatter.title}
                to={`/blog${frontmatter.slug}`}
                aria-label={frontmatter.title ?? ''}
              >
                {frontmatter.title}
              </Link>
              {' / '}
              {frontmatter.date}
              <div className="mt-1 flex flex-row">
                {frontmatter.tags?.map((tag) => (
                  <div className="mx-1 items-center justify-between rounded-full border-slate-800 bg-slate-600 py-1 px-3 text-sm text-white first:ml-0 last:mr-0">
                    {tag}
                  </div>
                ))}
              </div>
            </li>
          ) : null
        )}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(sort: { fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            tags
          }
        }
      }
    }
  }
`

export default BlogPage

export const Head: HeadFC = () => <title>Blog</title>
