import React, {ReactNode} from "react"
import styled from '@emotion/styled';
import tw, {GlobalStyles} from 'twin.macro';

interface LayoutProps {
  children: ReactNode
}

const Content = styled.div`
  ${tw`my-0 mx-auto pt-0 pb-4`}
  max-width: 860px;
  padding-right: 1.0875rem;
  padding-left: 1.0875rem;
`

const Footer = styled.footer`
  ${tw`flex justify-center`}
`

const GatsbyLink = styled.a`
  ${tw`underline`}
  margin-left: 5px;
`

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
      <GlobalStyles/>
      <Content>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink>
        </Footer>
      </Content>
    </div>

  )
}

export default Layout
