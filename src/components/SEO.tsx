import React from "react"
import Helmet from "react-helmet"

type SEOProps = {
  title: string
  description: string
}

const SEO = ({ title, description }: SEOProps) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{`Jonathan Filbert - ${title}`}</title>
    <meta name="description" content={description} />
  </Helmet>
)

export default SEO
