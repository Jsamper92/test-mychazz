import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    }
  }
})
