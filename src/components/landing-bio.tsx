import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import styled from "@emotion/styled"
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`text-center`};
`

const OuterContainer = styled.div`
  ${tw`flex items-center justify-center flex-row `}
  height: 78vh;
`

const Description = styled.p`
  ${tw`p-0 mb-4 text-xl`}
`

const NameHeader = styled.h1`
  ${tw`text-6xl mb-0`}
`

const LandingBio = () => {

  const data = useStaticQuery(graphql`
    query LandingSiteTitleQuery {
      site {
        siteMetadata {
          title,
          subtitle
        }
      }
    }
  `)

  return (
    <OuterContainer>
      <Container>
        <NameHeader>{data.site?.siteMetadata.title}</NameHeader>
        <Description>{data.site.siteMetadata.subtitle}</Description>
      </Container>
    </OuterContainer>
  )
}

export default LandingBio
