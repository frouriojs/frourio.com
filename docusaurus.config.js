module.exports = {
  title: 'frourio',
  tagline: 'Fast and type-safe full stack framework, for TypeScript',
  url: 'https://frourio.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.png',
  trailingSlash: false,
  organizationName: 'frouriojs', // Usually your GitHub org/user name.
  projectName: 'frourio.com', // Usually your repo name.
  plugins: ['custom-webpack-config'],
  themeConfig: {
    image: 'img/ogp.png',
    metadata: [
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'description',
        content:
          'Frourio is a CLI tool that enables static type checking by Typescript for communication between client-side and server-side.',
      },
      {
        property: 'og:description',
        content:
          'Frourio is a CLI tool that enables static type checking by Typescript for communication between client-side and server-side.',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: {
        ...require('prism-react-renderer/themes/vsDark'),
        plain: {
          color: '#D4D4D4',
          backgroundColor: '#242526',
        },
      },
      additionalLanguages: ['docker'],
    },
    navbar: {
      title: 'frourio',
      logo: {
        alt: 'frourio Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorial',
          label: 'Tutorial',
          position: 'left',
        },
        {
          to: 'changelog',
          activeBasePath: 'changelog',
          label: 'Changelog',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/frouriojs/frourio',
          className: 'header-github-link',
          'area-label': 'GitHub: frouriojs/frourio',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'About Frourio',
              to: '/docs',
            },
            {
              label: 'Reference',
              to: '/docs/reference',
            },
            {
              label: 'Guide',
              to: '/docs/guide',
            },
            {
              label: 'Tutorial',
              to: '/docs/tutorial',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/SARkeDf',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/solufa2020',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Changelog',
              to: 'changelog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/frouriojs/frourio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Frourio, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/frouriojs/frourio.com/edit/master/',
        },
        gtag: {
          trackingID: process.env.TRACKING_ID || 'G-XXXXXX',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/frouriojs/frourio.com/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
};
