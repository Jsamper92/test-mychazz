/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/sanity/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { SchemaTypeDefinition, defineConfig, defineField } from 'sanity';
import { deskTool } from 'sanity/desk';
import { documentInternationalization } from '@sanity/document-internationalization';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { dataset, projectId } from './src/sanity/env';
import { listSchemaTypes, schema } from './src/sanity/schema';
import supportedLanguages from './public/locales/languages';
export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    visionTool({ defaultDataset: dataset }),
    documentInternationalization({
      supportedLanguages: supportedLanguages.map(({ id, title }) => ({
        id,
        title,
      })),
      schemaTypes: listSchemaTypes.map(
        ({ name }: SchemaTypeDefinition) => name
      ),
      languageField: `title`,
      weakReferences: true,
      bulkPublish: true,
      metadataFields: [defineField({ name: 'slug', type: 'slug' })],
      apiVersion: '2023-09-22',
    }),
  ],
});
