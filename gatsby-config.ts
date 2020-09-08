module.exports = {
  siteMetadata: {
    title: "Jonathan Filbert",
    description: "A beautiful website.",
    siteUrl: "https://jofil.vercel.app/",
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
}
