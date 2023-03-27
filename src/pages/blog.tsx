import React, { useReducer, useState } from 'react'
import { graphql, HeadFC, PageProps, Link } from 'gatsby'
import { Chip, InvertedChip, Layout } from '../components'
import { filterReducer } from '../utils/filterReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronDown,
  faCircleChevronUp
} from '@fortawesome/free-solid-svg-icons'
import { Transition } from '@headlessui/react'

const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => {
  const { allMarkdownRemark } = data
  const { posts, tags } = allMarkdownRemark
  const crumbs = [
    {
      label: 'Home',
      to: '/'
    },
    { label: 'Blog' }
  ]

  const [filter, setFilter] = useReducer(filterReducer, [])
  const [filterOpenState, setFilterOpenState] = useState(false)

  return (
    <Layout breadcrumbs={crumbs} vc>
      <h2>Blog</h2>
      <h3 className="m-0 mt-2">
        <button onClick={() => setFilterOpenState(!filterOpenState)}>
          Tags
          <FontAwesomeIcon
            className="pl-2  text-slate-600"
            icon={filterOpenState ? faCircleChevronUp : faCircleChevronDown}
          />
        </button>
      </h3>
      <Transition
        show={filterOpenState}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-20 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-20 opacity-0"
      >
        <ul className={`my-0 flex list-none flex-wrap justify-start p-0`}>
          {tags.map((tag) => (
            <li key={tag}>
              <button onClick={() => setFilter(tag)}>
                {!!!filter.includes(tag) ? (
                  <Chip>{tag}</Chip>
                ) : (
                  <InvertedChip>{tag}</InvertedChip>
                )}
              </button>
            </li>
          ))}
        </ul>
      </Transition>

      {/* {filter.length > 0 && <h3 className="m-0 mt-2">Filters:</h3>}
      <ul className="my-0 flex list-none flex-wrap justify-start p-0">
        {filter.map((tag) => (
          <li key={tag}>
            <button onClick={() => setFilter(tag)}>
              <InvertedChip>{tag}</InvertedChip>
            </button>
          </li>
        ))}
      </ul> */}
      <ul className="mt-5">
        {posts
          .filter(
            ({ frontmatter: post }) =>
              filter.length === 0 ||
              post?.tags?.some((pTag) => filter.some((fTag) => pTag === fTag))
          )
          .map(({ frontmatter }) =>
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
                  {frontmatter.tags?.map((tag) =>
                    tag && !!!filter.includes(tag) ? (
                      <Chip>{tag}</Chip>
                    ) : (
                      <InvertedChip>{tag}</InvertedChip>
                    )
                  )}
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
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      tags: distinct(field: frontmatter___tags)
      posts: nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          tags
        }
      }
    }
  }
`

export default BlogPage

export const Head: HeadFC = () => <title>Blog</title>
