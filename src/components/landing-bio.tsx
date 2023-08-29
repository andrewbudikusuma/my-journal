import React from "react"
import styled from "@emotion/styled"
import tw from 'twin.macro';
import {useSiteMetadata} from "../hooks/use-site-metadata"

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
  ${tw`text-5xl mb-0`}
`

const LandingBio = () => {
  const {title, subtitle} = useSiteMetadata()

  return (
    <OuterContainer>
      <Container>
        <NameHeader>{title}</NameHeader>
        <Description>{subtitle}</Description>
      </Container>
    </OuterContainer>
  )
}

export default LandingBio
