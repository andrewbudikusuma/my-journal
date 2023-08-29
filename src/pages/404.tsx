import React from "react"
import {HeadFC} from "gatsby";
import styled from "@emotion/styled"
import tw from 'twin.macro';
import Layout from "../components/layout"
import {SEO} from "../components/seo";

type QueryReturn = {
  allPark: {
    nodes: {
      name: string;
      gatsbyPath: string
    }[]
  }
}

const Container = styled.div`
  ${tw`text-center`};
`

const OuterContainer = styled.div`
  ${tw`flex items-center justify-center flex-row `}
  height: 78vh;
`

const Page404Title = styled.h1`
  ${tw`text-5xl mb-0`}
`
const NotFoundPage = () => <Layout>
  <OuterContainer>
    <Container>
      <Page404Title>404: Not Found</Page404Title>
    </Container>
  </OuterContainer>
</Layout>

export const Head: HeadFC<QueryReturn> = () => (
  <SEO/>
)


export default NotFoundPage