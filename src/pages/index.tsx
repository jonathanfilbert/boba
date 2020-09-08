import React from "react"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jonathan Filbert - Coming Soon</title>
        <link rel="canonical" href="http://jofil.vercel.app/" />
      </Helmet>
      <div className="flex w-screen h-screen bg-black justify-center items-center">
        <div className="uppercase text-pink-300"> coming soon</div>
      </div>
    </>
  )
}

export default Home
