import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
`
const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
)

export default Layout
