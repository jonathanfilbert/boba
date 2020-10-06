import React from "react"
import Header from "./Header"
import styled, { createGlobalStyle } from "styled-components"

const LayoutWrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding-left: 1em;
  padding-right: 1em;
`
const GlobalSstyles = createGlobalStyle`
body {
  background-color: #121212;
}
`

type LayoutProps = {
  isDark: boolean
  children: any
}

const Layout = ({ children, isDark }: LayoutProps) => (
  <LayoutWrapper>
    <GlobalSstyles />
    <Header />
    {children}
  </LayoutWrapper>
)

export default Layout
