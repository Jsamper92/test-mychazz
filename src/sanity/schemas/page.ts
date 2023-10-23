import { defineField, defineType } from 'sanity';
import { MyCustomAddLiteralComponent } from '../components/test';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Nombre del módulo',
    }),
    defineField({
      name: 'literals',
      type: 'array',
      title: 'Literales',
      of: [{ type: 'reference', to: [{ type: 'literal' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
