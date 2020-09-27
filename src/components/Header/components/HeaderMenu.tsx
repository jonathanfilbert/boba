import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderMenuWrapper = styled.div`
  .active {
    background: blue;
  }
`

type HeaderMenu = {
  text: string
  to: string
}

const HeaderMenu = ({ text, to }: HeaderMenu) => {
  return (
    <HeaderMenuWrapper className="pt-5 lg:px-5">
      <Link
        to={to}
        activeClassName="opacity-100"
        className="opacity-50 header__menu__item color-secondary text-sm"
      >
        {text}
      </Link>
    </HeaderMenuWrapper>
  )
}

export default HeaderMenu
