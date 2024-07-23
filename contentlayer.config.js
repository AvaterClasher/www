import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: doc => doc._raw.sourceFileName.replace(/\.mdx/, '')
  }
}

/** @type {import('contentlayer/source-files').defineDocumentType} */
const Projects = defineDocumentType(() => ({
  name: 'Projects',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'string', required: true },
    tag: {
      type: 'list',
      of: { type: 'string' },
      required: true
    }
  },
  computedFields
}))

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyOptions = {
  theme: {
    dark: 'github-dark-dimmed',
    light: 'github-light'
  },
  keepBackground: true
}

/** @type {import('contentlayer/source-files').SourcePlugin} */
export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Projects],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, [rehypePrettyCode, rehypePrettyOptions]]
  }
})