import { type SchemaTypeDefinition } from 'sanity';

import page from './schemas/page';
import component from './schemas/component';
import error from './schemas/error';
import { localeString } from './schemas/localeStringType';
import literal from './schemas/literal';

export const listSchemaTypes = [page, localeString, component, error, literal];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: listSchemaTypes,
};
