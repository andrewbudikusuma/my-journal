import type {GatsbyConfig} from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Andrew Budikusuma`,
    subtitle: `software engineer, full-stack developer, and a human being`,
    description: `Andrew Budikusuma's personal website`,
    author: `@andrewbudikusuma`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Nunito`,
            file: `https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap`,
          },
        ],
      },
    },
  ],
}

export default config
