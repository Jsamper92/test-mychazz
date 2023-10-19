// ./schemas/localeStringType.ts

import { unescape } from 'querystring'
import {defineType, defineField} from 'sanity'

// Since schemas are code, we can programmatically build
// fields to hold translated values. We'll use this array
// of languages to determine which fields to define.
const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'es', title: 'Español' },
  { id: 'pt', title: 'Portugues' }
]

export const baseLanguage = supportedLanguages.find(l => l.isDefault)

export const localeString = defineType({
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true, collapsed: false},
    }
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => defineField({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? undefined : 'translations'
  }))
})