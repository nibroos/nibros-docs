import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';
import '../styles/tailwind.css'

const derpSidebar = generateSidebar({
  documentRootPath: '/docs',
  hyphenToSpace: true,
  collapsed: false,
  useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true,
  capitalizeFirst: true,
  useFolderLinkFromIndexFile: false,
  excludeFiles: ['index.md', 'about.md', 'concepts.md', 'contact.md'],
  excludeFolders: ['koperasi-multiasa', 'portfolio', 'brodocs', 'espbu', 'e-learning', 'sim-rs', 'concepts'],
  manualSortFileNameByPriority: ['getting-started', 'introduction.md', 'installation.md'],
})

const elearningSidebar = generateSidebar({
  documentRootPath: '/docs',
  hyphenToSpace: true,
  collapsed: false,
  useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true,
  capitalizeFirst: true,
  useFolderLinkFromIndexFile: false,
  excludeFiles: ['index.md', 'about.md', 'concepts.md', 'contact.md'],
  excludeFolders: ['koperasi-multiasa', 'portfolio', 'brodocs', 'espbu', 'd-erp', 'sim-rs', 'concepts'],
  manualSortFileNameByPriority: ['getting-started', 'introduction.md', 'installation.md'],
})

const simrsSidebar = generateSidebar({
  documentRootPath: '/docs',
  hyphenToSpace: true,
  collapsed: false,
  useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true,
  capitalizeFirst: true,
  useFolderLinkFromIndexFile: false,
  excludeFiles: ['index.md', 'about.md', 'concepts.md', 'contact.md'],
  excludeFolders: ['koperasi-multiasa', 'portfolio', 'brodocs', 'espbu', 'd-erp', 'e-learning', 'concepts'],
  manualSortFileNameByPriority: ['getting-started', 'introduction.md', 'installation.md'],
})

const espbuSidebar = generateSidebar({
  documentRootPath: '/docs',
  hyphenToSpace: true,
  collapsed: false,
  useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true,
  capitalizeFirst: true,
  useFolderLinkFromIndexFile: false,
  excludeFiles: ['index.md', 'about.md', 'concepts.md', 'contact.md'],
  excludeFolders: ['koperasi-multiasa', 'portfolio', 'brodocs', 'd-erp', 'e-learning', 'sim-rs', 'concepts'],
  manualSortFileNameByPriority: ['getting-started', 'introduction.md', 'installation.md'],
})

const koperasiMultiasaSidebar = generateSidebar({
  documentRootPath: '/docs',
  hyphenToSpace: true,
  collapsed: false,
  useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true,
  capitalizeFirst: true,
  useFolderLinkFromIndexFile: false,
  excludeFiles: ['index.md', 'about.md', 'concepts.md', 'contact.md'],
  excludeFolders: ['espbu', 'portfolio', 'brodocs', 'd-erp', 'e-learning', 'sim-rs', 'concepts'],
  manualSortFileNameByPriority: ['getting-started', 'introduction.md', 'installation.md'],
})

const portfolioSidebar = generateSidebar({
  documentRootPath: '/docs',
  hyphenToSpace: true,
  collapsed: false,
  useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true,
  capitalizeFirst: true,
  useFolderLinkFromIndexFile: false,
  excludeFiles: ['index.md', 'about.md', 'concepts.md', 'contact.md'],
  excludeFolders: ['espbu', 'koperasi-multiasa', 'brodocs', 'd-erp', 'e-learning', 'sim-rs', 'concepts'],
  manualSortFileNameByPriority: ['getting-started', 'introduction.md', 'installation.md'],
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Brodocs",
  description: "See my projects documentation, featuring past and current projects like E-SPBU Management, Koperasi Multiasa, and Portfolio Nibros. Get the inside scoop on principles, concepts, features and more!",
  themeConfig: {
    logo: "/logo.svg",
    // Navbar Link
    nav: [
      { text: "About", link: "/about" },
      { text: "Concepts", link: "/concepts/index.html" },
      { text: "Contact", link: "/contact" },
      {
        // Dropdown Menu
        text: "Projects",
        items: [
          { text: "D-ERP", link: "/d-erp/getting-started/introduction.md" },
          { text: "E-SPBU", link: "/espbu/getting-started/introduction.md" },
          { text: "SIM-RS", link: "/sim-rs/getting-started/introduction.md" },
          { text: "E-Learning", link: "/e-learning/getting-started/introduction.md" },
          { text: "Koperasi Multiasa", link: "/koperasi-multiasa/getting-started/introduction.md" },
          { text: "Portfolio", link: "/portfolio/getting-started/introduction.md" },
        ],
      },
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/nibroos" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"/></svg>',
        },
        link: "https://www.linkedin.com/in/nibros",
      },
    ],
    // Sidebar
    sidebar: {
      '/d-erp/': derpSidebar,
      '/espbu/': espbuSidebar,
      '/sim-rs/': simrsSidebar,
      '/e-learning/': elearningSidebar,
      '/koperasi-multiasa/': koperasiMultiasaSidebar,
      '/portfolio/': portfolioSidebar,
    },
    // sidebar: ,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Brodocs",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    search: {
      provider: 'algolia',
      options: {
        appId: '3QNH5695N6',
        apiKey: 'd6d48db9fb5b66a017cdcbfabd661a39',
        indexName: 'nibross'
      }
    },
    outline: {
      level: 'deep',
    }
  },
  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Brodocs Documentation' }]
  ]
})