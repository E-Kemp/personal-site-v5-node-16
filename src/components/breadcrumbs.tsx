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
    <ul className="m-0 flex flex-row p-0">
      {props.crumbs.map((crumb, index) => (
        <>
          {crumb.to ? (
            <Link to={crumb.to} aria-label={crumb.label}>
              {crumb.label}
            </Link>
          ) : (
            <span>{crumb.label}</span>
          )}
          {index !== props.crumbs.length - 1 && <span className="mx-2">/</span>}
        </>
      ))}
    </ul>
  )
}

export { Breadcrumbs }
