---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

# Hero section
hero:
  name: Brodocs
  text: Documentation.
  tagline: Showcasing my past & current work. Get more detailed information about projects, principles, concepts, features, and more!
  actions:
    - theme: brand
      text: Get Started
      link: /about
    - theme: alt
      text: View on GitHub
      link: https://github.com/nibroos/nibros-portfolio

# Features section
features:
  - icon: ⛽
    title: E-SPBU Management
    details: Fuel station assets management
    link: /espbu/getting-started/introduction
  - icon: 💸
    title: Koperasi Multiasa
    details: Cooperation transaction control
    link: /koperasi-multiasa/
  - icon:
      src: /logo.svg
    title: Portfolio
    details: An nuxt portfolio
    link: /portfolio/

# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Brodocs
  - - meta
    - name: title
      content: Brodocs
  - - link
    - rel: icon
      type: image/svg
      href: logo.svg
---


<!-- Custom home layout -->
<!-- <div class="custom-layout">
  <h1>🏀</h1>
  <h1>Custom Layout</h1>
  <p>This section was added using plain HTML and CSS.</p>
  <a href="https://github.com/Evavic44/adocs/blob/main/docs/index.md#custom-layout" target="_blank" class="btn">Source Code</a>
</div> -->
