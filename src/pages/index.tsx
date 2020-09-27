import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jonathan Filbert - Coming Soon</title>
        <link rel="canonical" href="http://jofil.vercel.app/" />
      </Helmet>
      <div className="flex  bg-black p-5 min-w-full w-full h-full min-h-screen items-center">
        <div className="title text-white text-3xl">
          O riddle me this.
          <div>What comes in two, but seen as one?</div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
