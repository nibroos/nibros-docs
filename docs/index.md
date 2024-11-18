---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

# Hero section
hero:
  name: Brodocs
  text: Documentation.
  tagline: Showcasing my past & current work. Get more detailed information about work experience, projects, principles, concepts, features, and more!
  actions:
    - theme: brand
      text: More details
      link: /about

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
<div class="antialiased px-48">
  <div class="grid grid-cols-4 gap-4">
    <div v-for="project in projects" :key="project.name" class="text-left flex flex-col justify-between hover:border hover:border-[#846358] p-6 rounded-lg gap-3 hover:cursor-pointer" style="background-color:var(--vp-c-bg-soft);" @click="navigate(project.link)">
      <div class="flex flex-col gap-3">
        <div class="rounded-lg" style="background-color:var(--vp-c-bg-soft)">
          <h1 v-if="project.icon" class="!font-semibold !text-xl">{{ project.icon }}</h1>
          <img v-else :src="project.logo" alt="logo" width="28" height="28" />
        </div>
        <h2 class="!font-semibold text-lg" style="color:var(--vp-c-text-1)">{{ project.name }}</h2>
        <p class="text-sm" style="color: var(--vp-c-text-2)">{{ project.description }}</p>
      </div>
      <div class="flex flex-col gap-4">
        <div class="grid grid-cols-8 justify-start items-center gap-2">
          <div v-for="tech in project.techStack" :key="tech" class="">
            <img :src="tech" alt="tech" width="36" height="36" />
          </div>
        </div>
        <a :href="project.link" class="rounded-lg p-2 text-center text-sm bg-zinc-200 dark:bg-zinc-700 text-[var(--vp-c-text-1)] dark:text-zinc-100">
        Read More..</a>
      </div>
    </div>
  </div>

</div>


<script setup>
import { ref } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

const projects = ref([
  {
    name: 'D-ERP System',
    description: 'Sales, Purchase, Inventory, Production, etc',
    link: '/d-erp/getting-started/introduction',
    icon: '📚',
    techStack: [
      '/nuxt-icon.svg',
      '/vue-icon.svg',
      '/ts-icon.svg',
      '/tw-icon.svg',
      '/lv-icon.svg',
      // '/php-icon.svg',
      '/mysql-icon.svg',
      '/docker-icon.svg',
      '/ghaction-icon.svg',
      // '/linux-icon.svg',
    ],
  },
  {
    name: 'E-SPBU Management',
    description: 'Fuel station assets management',
    link: '/espbu/getting-started/introduction',
    icon: '⛽',
    techStack: [
      '/vue-icon.svg',
      '/js-icon.svg',
      '/tw-icon.svg',
      '/lv-icon.svg',
      '/php-icon.svg',
      '/mysql-icon.svg',
    ],
  },
  {
    name: 'SIM-RS',
    description: 'Hospital management system',
    link: '/sim-rs/getting-started/introduction',
    icon: '🏥',
    techStack: [
      '/vue-icon.svg',
      '/js-icon.svg',
      '/node-icon.svg',
      '/pg-icon.svg',
      '/socket-icon.svg',
    ],
  },
  {
    name: 'E-Learning',
    description: 'Online learning platform',
    link: '/e-learning/getting-started/introduction',
    icon: '🎓',
    techStack: [
      '/nuxt-icon.svg',
      '/ts-icon.svg',
      '/tw-icon.svg',
      '/go-icon.svg',
      '/pg-icon.svg',
      '/docker-icon.svg',
      // '/linux-icon.svg',
      '/do-icon.svg',
      '/jk-icon.svg',
    ],
  },
  {
    name: 'Koperasi Multiasa',
    description: 'Cooperation transaction control',
    link: '/koperasi-multiasa/getting-started/introduction',
    icon: '💸',
    techStack: [
      '/nuxt-icon.svg',
      '/vue-icon.svg',
      '/tw-icon.svg',
      '/lv-icon.svg',
      '/php-icon.svg',
      '/mysql-icon.svg',
    ],
  },
  {
    name: 'Portfolio',
    description: 'Personal portfolio site',
    link: '/portfolio/getting-started/introduction',
    logo: '/logo.svg',
    techStack: [
      '/nuxt-icon.svg',
      '/tw-icon.svg',
      '/vue-icon.svg',
      '/jk-icon.svg',
    ],
  },
  {
    name: 'Brodocs',
    description: 'Personal documentation site',
    link: '/brodocs/getting-started/introduction',
    logo: '/logo.svg',
    techStack: [
      '/vue-icon.svg',
      '/tw-icon.svg',
      '/jk-icon.svg',
    ],
  }
])

const navigate = (link) => {
  console.log(link)
  router.go(link)
}
</script>