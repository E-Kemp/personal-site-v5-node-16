import React from "react"
import { PageProps, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import { Layout, ShareLinks } from "../components"
import Share from '../assets/share.svg'
import XMark from '../assets/xmark.svg'
import { Dialog } from "@headlessui/react"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data, children }: PageProps<Queries.MdxTemplateQuery>) {
  const { mdx } = data
  const frontmatter = mdx?.frontmatter ?? null
  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Blog', to: '/blog' },
    { label: frontmatter?.title ?? '' }
  ]
  const [isOpen, setIsOpen] = React.useState(false)

  const setOpenHandler = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault()
    setIsOpen(true)
  }

  return (
    <>
      <Layout breadcrumbs={crumbs}>
        <div className="prose prose-slate w-full">
          <h1 className="mt-5 mb-2">{frontmatter?.title}</h1>
          <div className="flex min-w-full flex-row items-center justify-between">
            <span>{frontmatter?.date}</span>
            <Link
              onClick={(e) => setOpenHandler(e)}
              className="inline-flex items-center hover:underline"
              to={`/blog${frontmatter?.slug}/share`}
            >
              <Share className="mr-2 h-4" />
              Share
            </Link>
          </div>
          {children}
        </div>
      </Layout>
      <Dialog
        as="div"
        className="fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Panel className="w-full max-w-md flex-col items-center justify-between rounded-lg bg-white p-6 shadow-xl">
          <div className="flex flex-row items-start justify-between">
            <Dialog.Title as="h1" className="mb-3 text-xl text-slate-900">
              Share <span className="text-slate-500">/</span>
            </Dialog.Title>
            <button onClick={() => setIsOpen(false)}>
              <XMark className="h-4" />
            </button>
          </div>

          <ShareLinks
            title={`Elliot Jordan Kemp${
              frontmatter?.title && ` | ${frontmatter?.title}`
            }`}
            url={`https://elliotjordankemp.com/blog${frontmatter?.slug}`}
          />
        </Dialog.Panel>
      </Dialog>
    </>
  )
}

export const query = graphql`
  query MdxTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        slug
      }
    }
  }
`