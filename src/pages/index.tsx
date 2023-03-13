import * as React from 'react'
import { HeadFC, PageProps, Link } from 'gatsby'
import { Layout, MyLink } from '../components'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout hc vc>
      <h1 className="my-5">Elliot Jordan Kemp</h1>
      <h3 className="my-5">This is where I do things.</h3>
      <div className="flex flex-col rounded-lg border-slate-800 bg-slate-600 p-5 text-white">
        <p className="my-1">Why not look at these links?</p>
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link
              to="/blog"
              aria-label="Link to my blog posts"
              className="text-slate-50 visited:text-slate-300"
            >
              Blog
            </Link>
          </div>
          <div>
            <MyLink
              href="https://www.linkedin.com/in/elliotjordankemp/"
              aria-label="Link to my LinkedIn profile."
              className="text-slate-50 visited:text-slate-300"
            >
              LinkedIn
            </MyLink>
          </div>
          <div>
            <MyLink
              href="https://github.com/E-Kemp"
              aria-label="Link to my Github page."
              className="text-slate-50 visited:text-slate-300"
            >
              GitHub
            </MyLink>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
