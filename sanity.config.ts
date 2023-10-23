/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/sanity/[[...index]]/page.tsx` route
 */

import { documentInternationalization } from '@sanity/document-internationalization';
import { visionTool } from '@sanity/vision';
import { SchemaTypeDefinition, defineConfig, defineField } from 'sanity';
import { deskTool } from 'sanity/desk';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { dataset, projectId } from './src/sanity/env';
import supportedLanguages from './src/sanity/lib/languages';
import { listSchemaTypes, schema } from './src/sanity/schema';
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
