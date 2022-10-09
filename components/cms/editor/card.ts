import type { NetlifyCmsCore } from '~/types/netlify-cms-core'

export default {
  // Internal id of the component
  id: 'card',
  // Visible label
  label: 'Card',
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string',
    },
    {
      name: 'content',
      label: 'Content',
      widget: 'text',
    },
  ],
  // Regex pattern used to search for instances of this block in the markdown document.
  // Patterns are run in a multline environment (against the entire markdown document),
  // and so generally should make use of the multiline flag (`m`). If you need to capture
  // newlines in your capturing groups, you can either use something like
  // `([\S\s]*)`, or you can additionally enable the "dot all" flag (`s`),
  // which will cause `(.*)` to match newlines as well.
  //
  // Additionally, it's recommended that you use non-greedy capturing groups (e.g.
  // `(.*?)` vs `(.*)`), especially if matching against newline characters.
  pattern: /^::card{.*="(.*)"}$\s^(.*?)$\s^::$/ms,
  // Given a RegExp Match object
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#return_value),
  // return an object with one property for each field defined in `fields`.
  //
  // This is used to populate the custom widget in the markdown editor in the CMS.
  fromBlock: function (match) {
    console.log(match)
    return {
      title: match[1],
      content: match[2],
    }
  },
  // Given an object with one property for each field defined in `fields`,
  // return the string you wish to be inserted into your markdown.
  //
  // This is used to serialize the data from the custom widget to the
  // markdown document
  toBlock: function (data) {
    // console.log(data)
    return `
::card{title="${data.title}"}
${data.content}
::`
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (data) {
    return `
<card>
  <card-title>${data.title}</card-title>
  ${data.content}
</card>
`
  },
} as NetlifyCmsCore.EditorComponentOptions
