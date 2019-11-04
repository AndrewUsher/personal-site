require(`dotenv`).config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Andrew Usher`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {}
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
}
