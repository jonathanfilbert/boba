import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Work Sans";
  src: url("/fonts/WorkSans-VariableFont_wght.ttf")
    format("truetype");
  font-weight: 100 800;
}

@font-face {
  font-family: "Druk Text Wide";
  src: url("/fonts/DrukTextWide-Heavy.woff2") format("woff2"),
    url("/fonts/DrukTextWide-Heavy.woff") format("woff");
  font-weight: 900;
  font-style: normal;
}

.title {
  font-family: "Druk Text Wide";
}

.subtitle {
  font-family: "Work Sans";
}

`
const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
)

export default Layout
