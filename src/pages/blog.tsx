import React, { useEffect, useReducer, useState } from 'react'
import { graphql, HeadFC, PageProps, Link } from 'gatsby'
import { Chip, InvertedChip, Layout } from '../components'
import { filterReducer } from '../utils/filterReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronDown,
  faCircleChevronUp
} from '@fortawesome/free-solid-svg-icons'
import { Transition } from '@headlessui/react'
import '../styles/blog.scss'

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

  useEffect(() => {
    const element = document.getElementById('hide-js')
    if (element) element.style.display = 'block'
  }, [])

  return (
    <Layout breadcrumbs={crumbs} hc>
      <div className="prose prose-slate w-full">
        <h1 className="mt-5 mb-2">Blog</h1>
        <div id="hide-js">
          <h3 className="m-0 mt-2">
            <button
              onClick={() => setFilterOpenState(!filterOpenState)}
              className="inline-flex items-center"
            >
              Tags
              <FontAwesomeIcon
                className="ml-2 h-5 text-slate-600"
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
            <ul
              className={`my-0 flex w-full list-none flex-wrap justify-start p-0`}
            >
              {tags.map((tag) => (
                <li key={tag} className="my-1 mr-2 pl-0">
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
        </div>
        <ul className="mt-5 list-none p-0">
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
                  <ul className="my-0 flex w-full list-none flex-row flex-wrap justify-start p-0">
                    {frontmatter.tags?.map((tag) => (
                      <li key={tag} className="my-1 mr-2 pl-0">
                        {tag && !!!filter.includes(tag) ? (
                          <Chip>{tag}</Chip>
                        ) : (
                          <InvertedChip>{tag}</InvertedChip>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ) : null
            )}
        </ul>
      </div>
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
