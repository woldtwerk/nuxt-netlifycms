<script setup lang="ts">

const config = useRuntimeConfig()

useHead({
  script: [
    {
      src: 'https://unpkg.com/react@^16/umd/react.production.min.js',
      body: true
    },
    {
      src: 'https://unpkg.com/react-dom@^16/umd/react-dom.production.min.js',
      body: true
    },
    {
      src: 'https://unpkg.com/netlify-cms-app/dist/netlify-cms-app.js',
      body: true
    },
  ],
})

onMounted(() => {
  const contentPrefix = import.meta.env.DEV ? 'content/' : ''

  NetlifyCmsApp.init({
    config: {
      ...(!config.public.githubRepository ? {
        backend: {
          name: 'git-gateway'
        },
        local_backend: true,
      } : {
        backend: {
          name: 'github',
          repo: config.public.githubRepository,
          branch: 'content',
          base_url: 'https://netlify-cms-github-auth.woldtwerk.de',
          auth_endpoint: 'auth'
        }
      }),
      load_config_file: false,
      locale: 'de',
      media_folder: `${contentPrefix}_uploads/media`,
      public_folder: '/img',
      collections: [
        ...(Object.values(
          import.meta.glob('~/assets/collections/*.ts', { eager: true }))
          .map(col => (col as Record<string, any>).default
          ).map(col => {
            col.folder = `${contentPrefix}${col.folder}`
            return col
          }))
      ]
    }
  })
})
</script>

<template>
  <div></div>
</template>