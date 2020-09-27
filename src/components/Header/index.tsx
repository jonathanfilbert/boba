import React from "react"
import HeaderMenu from "./components/HeaderMenu"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className="w-full flex flex-row items-center color-secondary normal font-bold justify-between">
      <div className="title color-secondary py-10 text-xl">
        <Link to="/">JFL</Link>
      </div>
      <div className="flex flex-row">
        <HeaderMenu text="ABOUT" to="/about" />
        <HeaderMenu text="PROJECTS" to="/projects" />
        <HeaderMenu text="READS" to="/reads" />
        <HeaderMenu text="USES" to="/uses" />
        <HeaderMenu text="BLOG" to="/blog" />
      </div>
    </div>
  )
}

export default Header
