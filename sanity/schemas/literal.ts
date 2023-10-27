import { defineType, defineField } from 'sanity';

// schemas/literal.js
export default defineType({
  name: 'literal',
  type: 'document',
  title: 'Literal',
  fields: [
    defineField({
      name: 'key',
      type: 'string',
      title: 'key',
    }),
    defineField({
      name: 'name',
      type: 'localeString',
      title: 'name',
    }),
  ],
});
