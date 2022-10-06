// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { globby } from 'globby'

const { GITHUB_REPOSITORY, GITHUB_REF_NAME } = process.env

export default async () => {
  const paths = await globby(['./content/**/*'])
  const routes = paths.map(path => {
    if (path.match(/\/_/)) return
    return path
      .replace(/^\.\/content/, '')
      .replace(/\.md$/, '')
      .replace(/index$/, '')
  })

  return defineNuxtConfig({
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
    generate: {
      routes
    },
    experimental: {
      payloadExtraction: false
    }
  })
}
