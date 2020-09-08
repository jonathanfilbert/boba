// // Because we used ts-node in gatsby-config.js, this file will automatically be
// // imported by Gatsby instead of gatsby-node.js.

// // Use the type definitions that are included with Gatsby.
// import { GatsbyNode } from "gatsby"
// import { resolve } from "path"

// export const createPages: GatsbyNode["createPages"] = async ({
//   actions,
//   graphql,
// }) => {
//   const { createPage } = actions

//   const allMarkdown: {
//     errors?: any
//     data?: { allMarkdownRemark: { nodes: { fields: { slug?: string } }[] } }
//   } = await graphql(`
//     query allMarkdownQuery {
//       allMarkdownRemark(limit: 1000) {
//         nodes {
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   allMarkdown.data?.allMarkdownRemark.nodes.forEach(node => {
//     const { slug } = node.fields
//     if (!slug) return

//     // Type-safe `createPage` call.
//     createPage({
//       path: slug,
//       component: resolve(__dirname, "../src/templates/index.tsx"),
//       context: {
//         slug,
//       },
//     })
//   })
// }
