import React from "react"
import HeaderMenu from "./components/HeaderMenu"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className="w-full flex flex-row items-center color-secondary normal font-bold justify-between py-8 ">
      <div className="title color-secondary text-xl self-end">
        <Link to="/" className="opacity-50" activeClassName="opacity-100">
          JFL
        </Link>
      </div>
      <div className="flex flex-col items-end lg:flex-row">
        <HeaderMenu text="ABOUT" to="/about" isBlack={false} />
        <HeaderMenu text="PROJECTS" to="/projects" isBlack={false} />
        <HeaderMenu text="READS" to="/reads" isBlack={false} />
        <HeaderMenu text="USES" to="/uses" isBlack={false} />
        <HeaderMenu text="BLOG" to="/blog" isBlack={false} />
      </div>
    </div>
  )
}

export default Header
