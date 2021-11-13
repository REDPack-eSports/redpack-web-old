module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.redpack.org',
    title: 'REDPack',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-source-notion',
      options: {
        databases: [
          '2bc9868a856d4ca6a166436f04979d16',
          '647ac87f7e4c4a6187e78f4e2a8faf50',
          'fa9789f64cb84bd48f74d65b13c720dd'
        ]
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ],
};
