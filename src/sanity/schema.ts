import { type SchemaTypeDefinition } from 'sanity'

import author from './schemas/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author],
}
