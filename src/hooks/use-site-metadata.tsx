import {graphql, useStaticQuery} from "gatsby"

type ReturnValue = {
  site: {
    siteMetadata: {
      title: string
      description: string
      twitterUsername: string
      siteUrl: string
      subtitle: string
    }
  }
}

export const useSiteMetadata = () => {
  const data = useStaticQuery<ReturnValue>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          siteUrl
          subtitle
        }
      }
    }
  `)

  return data.site.siteMetadata
}