module.exports = {
  siteMetadata: {
    title: 'Today We Learned',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'pages',
      },
    },
    'gatsby-transformer-remark',
  ],
}
