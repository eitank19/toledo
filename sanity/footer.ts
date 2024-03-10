import { defineType } from 'sanity';

export default defineType({
  name: 'footer',
  type: 'document',

  title: 'Footer',
  fields: [
    {
      name: 'text',
      type: 'string',
    },
    {
      name: 'textToBold',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
