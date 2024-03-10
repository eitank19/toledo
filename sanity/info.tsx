import { defineType } from 'sanity';

export default defineType({
  name: 'info',
  type: 'document',
  fields: [
    {
      name: 'logo',
      type: 'image',
    },
    {
      name: 'links',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
});
