// ./schemas/presenterType.ts

import {defineType, defineField} from 'sanity'
import {baseLanguage} from './localeStringType'

export const presenterType = defineType({
  title: 'Presenter',
  name: 'presenter',
  type: 'document',
  fields: [
	defineField({
      name: 'name',
      type: 'string'
    }),
	defineField({
      name: 'title',
      type: 'localeString'
    }),
  ],
  preview: {
    select: {
	  title: 'name',
      subtitle: `title.${baseLanguage!.id}`
    }
  }
})