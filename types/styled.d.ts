import "styled-components"
import { MyTheme } from "../src/utils/theme"

declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
