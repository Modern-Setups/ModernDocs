// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ModernSetups Docs',
  tagline: 'Central documentation portal for ModernSetups plugins & services',
  favicon: 'img/logo.png',

  url: 'https://Modern-Setups.github.io',
  baseUrl: '/ModernDocs/',

  organizationName: 'Modern-Setups',
  projectName: 'ModernDocs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve docs at site root
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ModernSetups Docs',
        logo: {
          alt: 'ModernSetups Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'modernDuelsSidebar',
            position: 'left',
            label: 'ModernDuels',
          },
          {
            href: 'https://github.com/Modern-Setups',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ModernDuels',
            items: [
              {
                label: 'Getting Started',
                to: '/modernduels/getting-started/installation',
              },
              {
                label: 'Arena Setup',
                to: '/modernduels/getting-started/arena-setup',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Discord Support',
                href: 'https://discord.gg/GShB3m6npW',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ModernSetups. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
        additionalLanguages: ['java', 'yaml', 'json', 'kotlin'],
      },
    }),
};

module.exports = config;
