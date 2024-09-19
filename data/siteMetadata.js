/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Taghavi Starter Blog',
  author: 'Alireza Taghavi',
  headerTitle: 'TaghaviBlog',
  description: 'A blog created with Next.js and Tailwind.css for interview',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',

  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: true,
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  search: {
    provider: 'algolia',
    algoliaConfig: {
      // The application ID provided by Algolia
      appId: 'R2IYF7ETH7',
      // Public API key: it is safe to commit it
      apiKey: '599cec31baffa4868cae4e79f180729b',
      indexName: 'docsearch',
    },
  },
}

module.exports = siteMetadata
