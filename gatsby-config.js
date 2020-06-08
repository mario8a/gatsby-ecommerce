/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Product', 'Price'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      }
    }
  ],
  siteMetadata: {
    title: "Store8a",
    url:"https://mario8a.github.io/portafolio/",
    description: "Compra y adquiere tus modelos 3d",
  }
}


