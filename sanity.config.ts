/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/sanity/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig, defineField } from 'sanity'
import { deskTool } from 'sanity/desk'
import { documentInternationalization } from '@sanity/document-internationalization'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schema'

export default defineConfig({
  basePath: '/sanity',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion, defaultDataset: dataset }),
    documentInternationalization({
      supportedLanguages: [
        { id: 'es', title: 'Español' },
        { id: 'en', title: 'English' }
      ],
      schemaTypes: ['author'],
      languageField: `language`,
      weakReferences: true,
      bulkPublish: true,
      metadataFields: [
        defineField({ name: 'slug', type: 'slug' })
      ],

      // Optional
      // Define API Version for all queries
      // https://www.sanity.io/docs/api-versioning
      apiVersion: '2023-05-22'
    })
  ],
})
