import React from "react"
import HeaderMenu from "../Header/components/HeaderMenu"
import { Link } from "gatsby"

const InvertedHeader = () => {
  return (
    <div className="w-full flex flex-row items-center color-secondary normal font-bold justify-between py-8 ">
      <div className="title color-primary text-xl self-end">
        <Link to="/" className="opacity-50" activeClassName="opacity-100">
          JFL
        </Link>
      </div>
      <div className="flex flex-col items-end lg:flex-row">
        <HeaderMenu text="ABOUT" to="/about" />
        <HeaderMenu text="PROJECTS" to="/projects" />
        <HeaderMenu text="READS" to="/reads" />
        <HeaderMenu text="USES" to="/uses" />
        <HeaderMenu text="BLOG" to="/blog" />
      </div>
    </div>
  )
}

export default InvertedHeader
