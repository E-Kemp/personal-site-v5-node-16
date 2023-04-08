import React, { useState } from 'react'
import { MyLink } from './myLink'
import Copy from '../assets/copy.svg'
import Check from '../assets/check.svg'
import Facebook from '../assets/facebook.svg'
import Reddit from '../assets/reddit.svg'
import LinkedIn from '../assets/linkedin.svg'

interface ShareLinksProps {
  title: string
  url: string
}

export const ShareLinks = ({ title, url }: ShareLinksProps) => {
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
  }

  return (
    <ul className="m-0 mt-2 list-none space-y-1 p-0">
      <li>
        {copied ? (
          <div className="inline-flex items-center text-green-700">
            <Check className="mr-2 h-4 fill-green-700" /> Copied!
          </div>
        ) : (
          <button
            className="inline-flex items-center hover:underline"
            onClick={handleCopy}
          >
            <Copy className="mr-2 h-4" /> Copy to clipboard
          </button>
        )}
      </li>
      <BaseLinks title={encodedTitle} url={encodedUrl} />
    </ul>
  )
}

export const BaseLinks = ({ title, url }: ShareLinksProps) => (
  <>
    <li>
      <MyLink
        className="inline-flex items-center hover:underline"
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`}
      >
        <Facebook className="mr-2 h-4" /> Facebook
      </MyLink>
    </li>
    <li>
      <MyLink
        className="inline-flex items-center hover:underline"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`}
      >
        <LinkedIn className="mr-2 h-4" /> LinkedIn
      </MyLink>
    </li>
    <li>
      <MyLink
        className="inline-flex items-center hover:underline"
        href={`http://www.reddit.com/submit?url=${url}&title=${title}`}
      >
        <Reddit className="mr-2 h-4" /> Reddit
      </MyLink>
    </li>
  </>
)
