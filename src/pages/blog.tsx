import * as React from 'react'
import { graphql, HeadFC, PageProps, Link } from 'gatsby'
import { Layout } from '../components'

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
        {posts.map(({ node: { frontmatter } }) => (
          <li>
            <Link
              key={frontmatter.title}
              to={`/blog${frontmatter.slug}`}
              aria-label={frontmatter.title}
            >
              {frontmatter.title}
            </Link>
            {' / '}
            {frontmatter.date}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`

export default BlogPage

export const Head: HeadFC = () => <title>Blog</title>
