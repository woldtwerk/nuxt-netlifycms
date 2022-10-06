// https://v3.nuxtjs.org/api/configuration/nuxt.config

const { GITHUB_REPOSITORY, GITHUB_REF_NAME } = process.env

export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  runtimeConfig: {
    public: {
      githubRepository: GITHUB_REPOSITORY || '',
      githubRefName: GITHUB_REF_NAME || 'main'
    },
  },
  app: {
    baseURL: GITHUB_REPOSITORY ? `/${GITHUB_REPOSITORY.split('/').at(-1)}` : '/',
  },
  experimental: {
    payloadExtraction: false
  }
})
