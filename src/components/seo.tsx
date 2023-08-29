import React from "react"
import {useSiteMetadata} from "../hooks/use-site-metadata"

type SEOProps = {
  title?: string
  description?: string
  pathname?: string
}

export const SEO: React.FC<React.PropsWithChildren<SEOProps>> = ({title, description, pathname, children}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    twitterUsername
  } = useSiteMetadata()

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <html lang="en-US"/>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description}/>
      {/* Facebook Meta Tags*/}
      <meta property="og:url" content={seo.url}/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={seo.title}/>
      <meta property="og:description" content={seo.description}/>
      {/* Twitter Meta Tags*/}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:url" content={seo.url}/>
      <meta name="twitter:title" content={seo.title}/>
      <meta name="twitter:description" content={seo.description}/>
      <meta name="twitter:creator" content={seo.twitterUsername}/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      {children}
    </>
  )
}