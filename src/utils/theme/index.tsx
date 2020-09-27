import { DefaultTheme } from "styled-components"

const Theme: DefaultTheme = {
  colors: {
    primary: "#121212",
    secondary: "#FAFAFA",
    tertiary: "#FF0002",
  },
}

export type MyTheme = typeof Theme
