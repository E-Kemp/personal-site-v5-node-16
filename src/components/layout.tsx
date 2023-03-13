import React from 'react'
import { Breadcrumbs } from './breadcrumbs'
import { Footer } from './footer'
import './layout.css'

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
      <div className="prose flex w-full grow flex-col p-5">
        {breadcrumbs && <Breadcrumbs crumbs={breadcrumbs} />}
        <div
          className={`flex flex-col ${vc && 'justify-center'} ${
            hc && 'items-center'
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
