import React from 'react'
import { Layout, MyLink } from '../components'
import { HeadFC } from 'gatsby'

interface ProjectProps {
  title: string
  url: string
  dateRange: string
  children: React.ReactNode
}

const Project: React.FC<ProjectProps> = ({
  title,
  url,
  dateRange,
  children
}: ProjectProps) => (
  <div className="flex flex-col rounded-lg border-slate-800 bg-slate-600 p-5 text-white">
    <MyLink href={url} className="text-white">
      {title}
    </MyLink>
    <span className="text-slate-200">{dateRange}</span>
    {children}
  </div>
)

const PortfolioPage = () => {
  return (
    <Layout>
      <div className="prose prose-slate w-full">
        <h1 className="mt-5 mb-2">Portfolio</h1>
        <p className="mb-0">
          Following are the projects I have worked on, starting with the most
          recent:
        </p>
        <p className="mb-0">This isn't finished yet!</p>
      </div>
      <div className="flex flex-wrap items-start align-top">
        <Project
          title="Enhanced Preprints Client"
          url="https://github.com/elifesciences/enhanced-preprints-client"
          dateRange="Current"
        >
          Something here
        </Project>
      </div>
    </Layout>
  )
}

export default PortfolioPage

export const Head: HeadFC = () => <title>Portfolio</title>
