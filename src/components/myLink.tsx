import React from 'react'
import { Link } from 'gatsby'

interface MyLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  'aria-label': string
}

const MyLink = (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => {
  return (
    <a target="_blank" referrerPolicy="no-referrer" {...props}>
      {props.children}
    </a>
  )
}

export { MyLink }
