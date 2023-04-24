import { Link } from 'gatsby'
import React from 'react'
import { Breadcrumbs } from './breadcrumbs'
import { Footer } from './footer'
import './layout.scss'

type Breadcrumb = {
  label: string
  to?: string
}
type Props = {
  children: React.ReactNode
  breadcrumbs?: Breadcrumb[]
  hc?: boolean
  vc?: boolean
  topThird?: boolean
}

const Layout = ({ children, breadcrumbs, hc, vc, topThird }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="flex w-full grow flex-col items-center p-5">
        <div className="prose prose-slate flex w-full flex-col">
          <Link
            to="/"
            className="text-center no-underline"
            aria-label="Back to the homepage"
          >
            <h1 className="my-5">
              Elliot Jordan Kemp <span className="text-slate-500">/</span>
            </h1>
          </Link>
          {breadcrumbs && <Breadcrumbs crumbs={breadcrumbs} />}
        </div>
        <div
          className={`flex w-full flex-grow flex-col items-center ${
            vc ? 'justify-evenly' : null
          }`}
        >
          {children}
          {topThird && <div />}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export { Layout }
