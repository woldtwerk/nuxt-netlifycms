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

  Object.values(
    import.meta.glob('~/components/cms/editor/*.ts', { eager: true }))
    .forEach(comp => NetlifyCmsApp.registerEditorComponent((comp as any).default))

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
      editor: {
        preview: false
      },
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

<style global lang="postcss">
#nc-root :is([class*="EditorContainer"], [class*="AppHeaderContent"], [class*="AppMainContainer"]) {
  min-width: fit-content;
}

#nc-root :is([class*="CollectionMain"] > div, [class*="ListCard-card"]) {
  max-width: 682px;
  width: 100%;
}

@media (max-width: 600px) {
  #nc-root [class*="CollectionContainer"] {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    > aside {
      position: relative;
      width: 100%;
    }

    > main {
      padding-left: 0;
    }
  }
}

</style>