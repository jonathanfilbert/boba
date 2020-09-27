import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderMenuWrapper = styled.div`
  .header__menu__item {
    color: #fafafa;
    opacity: 0.18;
    transition: all 0.1s;
  }

  .header__menu__item:hover {
    opacity: 1;
    transition: all 0.1s;
  }
`

type HeaderMenu = {
  text: string
  to: string
}

const HeaderMenu = ({ text, to }: HeaderMenu) => {
  return (
    <HeaderMenuWrapper className="px-5">
      <Link to={to}>
        <div className="header__menu__item">{text}</div>
      </Link>
    </HeaderMenuWrapper>
  )
}

export default HeaderMenu
