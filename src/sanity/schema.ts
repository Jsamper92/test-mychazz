import { type SchemaTypeDefinition } from 'sanity'

import author from './schemas/author'
import {presenterType} from './schemas/presenterType'
import {localeString} from './schemas/localeStringType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, presenterType, localeString],
}
