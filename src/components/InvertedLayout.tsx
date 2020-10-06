import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import InvertedHeader from "./InvertedHeader"

const InvertedLayoutWrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding-left: 1em;
  padding-right: 1em;
`
const GlobalSstyles = createGlobalStyle`
body {
  background-color: #fafafa;
}
`

type InvertedLayoutProps = {
  isDark: boolean
  children: any
}

const InvertedLayout = ({ children, isDark }: InvertedLayoutProps) => (
  <InvertedLayoutWrapper>
    <GlobalSstyles />
    <InvertedHeader />
    {children}
  </InvertedLayoutWrapper>
)

export default InvertedLayout
