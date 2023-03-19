import { Link } from 'gatsby'
import React from 'react'
import { Breadcrumbs } from './breadcrumbs'
import { Footer } from './footer'
import './layout.css'
import Brush from '../assets/brush.svg'

type Breadcrumb = {
  label: string
  to?: string
}
type Props = {
  children: React.ReactNode
  breadcrumbs?: Breadcrumb[]
  hc?: boolean
  vc?: boolean
}

const Layout = ({ children, breadcrumbs, hc, vc }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="prose prose-slate flex w-full grow flex-col p-5">
        <div className="flex flex-col items-center">
          <Link
            to="/"
            className="no-underline"
            aria-label="Back to the homepage"
          >
            <h1 className="my-5">
              Elliot Jordan Kemp <span className="text-slate-500">/</span>
            </h1>
          </Link>
        </div>
        {breadcrumbs && <Breadcrumbs crumbs={breadcrumbs} />}
        <div
          className={`flex flex-col ${vc ? 'justify-center' : null} ${
            hc ? 'items-center' : null
          }`}
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export { Layout }
