import React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"

const Home = () => {
  return (
    <Layout isDark>
      <SEO
        title="Home"
        description="Jonathan Filbert is a student-entrepreneur who believes in the democratization of technology for everyone."
      />
      <div className="flex  min-w-full w-full h-full min-h-screen items-center">
        <div className="title text-white text-3xl">
          <div className="subtitle">O riddle me this.</div>
          <div>What comes in two, but seen as one?</div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
