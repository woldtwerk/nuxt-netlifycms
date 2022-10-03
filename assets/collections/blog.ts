import type { CmsCollection } from 'netlify-cms-core'

export default {
  name: "blog",
  label: "Blog",
  folder: "content/blog",
  create: true,
  slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
  fields: [
    {
      label: "Layout",
      name: "layout",
      widget: "hidden",
      default: "blog"
    },
    {
      label: "Title",
      name: "title",
      widget: "string"
    },
    {
      label: "Publish Date",
      name: "date",
      widget: "datetime"
    },
    {
      label: "Featured Image",
      name: "thumbnail",
      widget: "image"
    },
    {
      label: "Rating (scale of 1-5)",
      name: "rating",
      widget: "number"
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown"
    }
  ]
} as CmsCollection