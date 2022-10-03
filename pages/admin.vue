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
  // link: [
  //   {
  //     href: '/netlify-cms.yml', 
  //     type: 'text/yaml',
  //     rel: 'cms-config-url'
  //   }
  // ]
})

onMounted(() => {
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
          repo: config.public.githubRepository
        }
      }),
      load_config_file: false,
      locale: 'de',
      media_folder: 'public/uploads/media',
      public_folder: '/img',
      collections: [
        ...Object.values(
          import.meta.glob('~/assets/collections/*.ts', { eager: true }))
          .map(col => (col as Record<string, any>).default
          )
      ]
    }
  })
})
</script>

<template>
  <div></div>
</template>