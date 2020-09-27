import SEO from "../../components/SEO"
import React from "react"
import InvertedLayout from "../../components/InvertedLayout"

const About = () => {
  return (
    <InvertedLayout isDark={false}>
      <SEO title="About" description="About page" />
      <div>ini about</div>
    </InvertedLayout>
  )
}

export default About
