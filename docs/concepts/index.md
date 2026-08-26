# Concepts

Every developer has their own concepts. They are the foundation of how I work. This leads to a consistent and efficient workflow. The purpose are the same, to make the code easy to read, maintain, and solve the problem. 


<!-- Custom home layout -->
<div class="antialiased">
  <div class="grid grid-cols-2 md:grid-cols-1 gap-4">
    <div v-for="project in projects" :key="project.name" class="text-left flex flex-col justify-between hover:border hover:border-[#846358] p-6 rounded-lg gap-3 hover:cursor-pointer" style="background-color:var(--vp-c-bg-soft);" @click="navigate(project.link)">
      <div class="flex flex-col gap-3">
        <h3 class="!font-semibold text-lg !m-0" style="color:var(--vp-c-text-1)">{{ project.name }}</h3>
        <p class="text-sm !m-0" style="color: var(--vp-c-text-2)">{{ project.minutes }} minutes read • {{ project.posted }}</p>
        <p class="text-sm !m-0" style="color: var(--vp-c-text-2)">{{ project.description }}</p>
      </div>
      <div class="flex flex-col gap-4">
        <div class="grid grid-cols-8 justify-start items-center gap-2">
          <div v-for="tech in project.techStack" :key="tech" class="">
            <img :src="tech" alt="tech" width="36" height="36" />
          </div>
        </div>
        <a :href="project.link" class="rounded-lg p-2 text-center text-sm bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-100" style="color:var(--vp-c-text-1)">
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
    name: 'PR & Merge Runner with SonarQube and AI Review',
    description: 'How do I gate a pull request on the code it actually changed? A self-hosted Jenkins where one shared pipeline serves every repo, coverage is measured on new code only, and an AI reviews the diff against the team\'s own written standards.',
    link: '/concepts/pr-merge-runner-sonarqube-jenkins',
    minutes: '9',
    posted: 'Aug 23, 2026',
    techStack: [
      '/jk-icon.svg',
      '/sonar-icon.svg',
      '/docker-icon.svg',
      '/go-icon.svg',
      '/nuxt-icon.svg',
      '/linux-icon.svg',
    ],
  },
  {
    name: 'Telegram AI PC Controller',
    description: 'How do I let an AI operate my machine without handing it a shell? The assistant decides what to do; it never decides what is allowed — permission tiers, human approval, and a sandbox that never saw the prompt.',
    link: '/concepts/telegram-ai-pc-controller',
    minutes: '8',
    posted: 'Aug 23, 2026',
    techStack: [
      '/go-icon.svg',
      '/socket-icon.svg',
      '/docker-icon.svg',
      '/linux-icon.svg',
    ],
  },
  {
    name: 'n8n AI Agent with Google Sheets and PostgreSQL',
    description: 'How do I record finance and inventory by talking to a Telegram bot? The agent never writes SQL — it calls eleven fixed tools, each one SQL function that commits the ledger, the audit row and the sync job atomically.',
    link: '/concepts/n8n-ai-agent-finance-automation',
    minutes: '7',
    posted: 'Aug 23, 2026',
    techStack: [
      '/pg-icon.svg',
      '/node-icon.svg',
      '/docker-icon.svg',
      '/js-icon.svg',
    ],
  },
  {
    name: 'Jenkins Essentials',
    description: 'What are the essential steps to set up a Jenkins CI/CD pipeline? This guide covers the installation, configuration, and usage of Jenkins for automating the build, test, and deployment process.',
    link: '/concepts/jenkins-essentials',
    minutes: '4',
    posted: 'Jan 29, 2025',
    techStack: [
      '/docker-icon.svg',
      '/linux-icon.svg',
      '/jk-icon.svg',
    ],
  },
  {
    name: 'CI/CD Pipeline Strategy for Go Project',
    description: 'How do I automate the deployment process for a Go project? This pipeline script is designed to build, test, and deploy the application consistently across different environments.',
    link: '/concepts/ci-cd-pipeline-strategy',
    minutes: '7',
    posted: 'Dec 22, 2024',
    techStack: [
      '/go-icon.svg',
      '/pg-icon.svg',
      '/docker-icon.svg',
      '/linux-icon.svg',
      '/do-icon.svg',
      '/jk-icon.svg',
    ],
  },
  {
    name: '3 Recommended Patterns for Back-End Functionality',
    description: 'What code conventions do I use to organize back-end functionality? These patterns are designed to make the code more readable, maintainable, and efficient.',
    link: '/concepts/3-back-end-patterns',
    minutes: '5',
    posted: 'Dec 8, 2024',
    techStack: [
      '/lv-icon.svg',
      '/php-icon.svg',
      '/js-icon.svg',
      '/node-icon.svg',
      '/go-icon.svg',
    ],
  },
])

const navigate = (link) => {
  router.go(link)
}
</script>