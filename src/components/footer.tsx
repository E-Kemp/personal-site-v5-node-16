import React from 'react'

const Footer = () => {
  return (
    <div className="flex h-20 w-screen grow-0 flex-row items-center justify-between bg-slate-600 p-5 text-white">
      <div>
        <p>Elliot Jordan Kemp</p>
      </div>
      <div>
        <p>
          Powered by{' '}
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.gatsbyjs.com/"
            aria-label="Link to the Gatsby-JS framework."
            color={'#fff'}
          >
            GatsbyJS
          </a>
        </p>
      </div>
    </div>
  )
}

export { Footer }
