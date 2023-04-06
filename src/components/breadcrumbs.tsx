import { Link } from 'gatsby'
import React from 'react'

type BreadcrumbsProps = {
  crumbs: {
    label: string
    to?: string
  }[]
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <ul className="m-0 inline-flex list-none p-0">
      {props.crumbs.map((crumb, index) => (
        <li>
          {crumb.to ? (
            <Link to={crumb.to} aria-label={crumb.label}>
              {crumb.label}
            </Link>
          ) : (
            <span>{crumb.label}</span>
          )}
          {index !== props.crumbs.length - 1 && <span className="mx-2">/</span>}
        </li>
      ))}
    </ul>
  )
}

export { Breadcrumbs }
