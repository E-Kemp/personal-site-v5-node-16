import * as React from 'react'
import { graphql, PageProps, HeadFC, Link } from 'gatsby'
import { Layout, MyLink } from '../../components'
import { Dialog } from '@headlessui/react'
import Share from '../../assets/share.svg'
import XMark from '../../assets/xmark.svg'
import { ShareLinks } from '../../components/shareLinks'

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
        <div dangerouslySetInnerHTML={{ __html: html ?? '' }} />{' '}
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
