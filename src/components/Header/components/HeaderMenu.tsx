import React from "react"
import { Link } from "gatsby"

type HeaderMenu = {
  text: string
  to: string
  isBlack?: boolean
}

const HeaderMenu = ({ text, to, isBlack = true }: HeaderMenu) => {
  return (
    <Link
      to={to}
      activeClassName="opacity-100"
      className={`opacity-50 ${
        isBlack ? "color-primary" : "color-secondary"
      } text-sm sm:pt-5 lg:pt-0 lg:px-5`}
    >
      {text}
    </Link>
  )
}

export default HeaderMenu
