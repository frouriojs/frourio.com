module.exports = {
  title: 'frourio',
  tagline: 'Fast and type-safe full stack framework, for TypeScript',
  url: 'https://frourio.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.png',
  organizationName: 'frouriojs', // Usually your GitHub org/user name.
  projectName: 'frourio.io', // Usually your repo name.
  themeConfig: {
    image: 'img/ogp.png',
    metadatas: [
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'description',
        content: 'Frourio is the full stack framework for TypeScript.'
      },
      {
        property: 'og:description',
        content: 'Frourio is the full stack framework for TypeScript.'
      }
    ],
    gtag: {
      trackingID: process.env.TRACKING_ID || 'G-XXXXXX'
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      additionalLanguages: ['docker']
    },
    navbar: {
      title: 'frourio',
      logo: {
        alt: 'frourio Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right'
        },
        {
          to: 'changelog',
          activeBasePath: 'changelog',
          label: 'Changelog',
          position: 'right'
        },
        {
          href: 'https://github.com/frouriojs/frourio',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Why frourio?',
              to: 'docs/'
            },
            {
              label: 'Installation',
              to: 'docs/installation/gui'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/SARkeDf'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/solufa2020'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Changelog',
              to: 'changelog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/frouriojs/frourio'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Solufa.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/frouriojs/frourio.io/edit/master/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/frouriojs/frourio.io/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false
        }
      }
    ]
  ]
}
