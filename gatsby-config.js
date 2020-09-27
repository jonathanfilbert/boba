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
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
}
