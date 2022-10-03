// https://v3.nuxtjs.org/api/configuration/nuxt.config

const { GITHUB_REPOSITORY } = process.env

export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  runtimeConfig: {
    public: {
      githubRepository: ''
    },
  },
  app: {
    baseURL: GITHUB_REPOSITORY ? GITHUB_REPOSITORY.split('/').at(-1) : '/',
  }
})
