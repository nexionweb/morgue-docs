import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Morgue Docs',
  tagline: 'Save the good stuff. Find it later.',
  favicon: 'img/morgue-ghost-orange.svg',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Production URL — the docs live on their own subdomain.
  url: 'https://docs.morgueapp.com',
  baseUrl: '/',

  // GitHub / deployment identity.
  organizationName: 'nexionweb',
  projectName: 'morgue-docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // Serve docs at the site root (this is a docs-only site, no landing page).
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/nexionweb/morgue-docs/tree/main/',
        },
        // No blog on the docs site.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/morgue-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'MORGUE',
      logo: {
        alt: 'Morgue',
        src: 'img/morgue-ghost-orange.svg',
        srcDark: 'img/morgue-ghost-cream.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://morgueapp.com',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://github.com/nexionweb/morgue-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/'},
            {label: 'Capturing', to: '/capturing/overview'},
            {label: 'Boards', to: '/boards/overview'},
            {label: 'Backup & Restore', to: '/backup-restore/overview'},
          ],
        },
        {
          title: 'Morgue',
          items: [
            {label: 'Website', href: 'https://morgueapp.com'},
            {label: 'Your Account', href: 'https://morgueapp.com/customer-dashboard'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: 'https://github.com/nexionweb/morgue-docs'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Morgue. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,

  // Offline full-text search (no Algolia signup required to start).
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
};

export default config;
