// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import LandingBio from "../components/landing-bio";
import {HeadFC} from "gatsby"
import {SEO} from "../components/seo"

type QueryReturn = {
  allPark: {
    nodes: {
      name: string;
      gatsbyPath: string
    }[]
  }
}

const IndexPage = () => {
  return (
    <Layout>
      <LandingBio/>
    </Layout>
  )
}

export const Head: HeadFC<QueryReturn> = () => (
  <SEO title="Home">
    <script type="application/ld+json">{JSON.stringify({})}</script>
  </SEO>
)

export default IndexPage