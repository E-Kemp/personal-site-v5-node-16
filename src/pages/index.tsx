import * as React from 'react'
import { HeadFC, PageProps, Link } from 'gatsby'
import { Layout, MyLink } from '../components'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout hc vc>
      <h3 className="mb-5 mt-0">This is where I do things.</h3>
      <div className="flex flex-col rounded-lg border-slate-800 bg-slate-600 p-5 text-white">
        <p className="mb-3 mt-0">Why not look at these things?</p>
        <div className="flex flex-row items-center justify-between">
          <Link
            to="/blog"
            aria-label="Link to my blog posts"
            className="text-slate-50 visited:text-slate-300"
          >
            Blog
          </Link>
          <MyLink
            href="https://www.linkedin.com/in/elliotjordankemp/"
            aria-label="Link to my LinkedIn profile."
            className="text-slate-50 visited:text-slate-300"
          >
            LinkedIn
          </MyLink>
          <MyLink
            href="https://github.com/E-Kemp"
            aria-label="Link to my Github page."
            className="text-slate-50 visited:text-slate-300"
          >
            GitHub
          </MyLink>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
