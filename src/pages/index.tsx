// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import LandingBio from "../components/landing-bio";


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <LandingBio/>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage