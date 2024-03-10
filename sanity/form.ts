import { defineType } from 'sanity';

export default defineType({
  name: 'form',
  type: 'document',
  title: 'Form',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'description',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
