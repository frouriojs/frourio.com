module.exports = {
  title: 'frourio',
  tagline: '高速で型安全な TypeScript のためのフレームワーク',
  url: 'https://ja.frourio.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.png',
  trailingSlash: false,
  organizationName: 'frouriojs', // Usually your GitHub org/user name.
  projectName: 'ja.frourio.com', // Usually your repo name.
  plugins: ['custom-webpack-config'],
  themeConfig: {
    image: 'img/ogp.png',
    metadata: [
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'description',
        content: 'Frourio は TypeScript のためのフルスタックフレームワークです。',
      },
      {
        property: 'og:description',
        content: 'Frourio は TypeScript のためのフルスタックフレームワークです。',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
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
          label: 'ドキュメント',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorial',
          label: 'チュートリアル',
          position: 'left',
        },
        {
          to: 'changelog',
          activeBasePath: 'changelog',
          label: '変更履歴',
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
          title: 'ドキュメント',
          items: [
            {
              label: 'Frourio について',
              to: '/docs',
            },
            {
              label: 'リファレンス',
              to: '/docs/reference',
            },
            {
              label: 'ガイド',
              to: '/docs/guide',
            },
            {
              label: 'チュートリアル',
              to: '/docs/tutorial',
            },
          ],
        },
        {
          title: 'コミュニティ',
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
          title: 'もっと見る',
          items: [
            {
              label: '変更履歴',
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
          editUrl: 'https://github.com/frouriojs/ja.frourio.com/edit/master/',
        },
        gtag: {
          trackingID: process.env.TRACKING_ID || 'G-XXXXXX',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/frouriojs/ja.frourio.com/edit/master/',
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
