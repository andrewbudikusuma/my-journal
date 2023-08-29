import React from 'react'
import {HeadFC} from "gatsby"
import Layout from "../components/layout"
import LandingBio from "../components/landing-bio";
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
  <SEO title="Home"/>
)

export default IndexPage