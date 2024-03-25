import { defineType } from 'sanity';

export default defineType({
  name: 'locations',
  type: 'document',
  fields: [
    {
      name: 'image',
      type: 'image',
    },
    {
      name: 'locations',
      type: 'array',
      description: 'List of all locations',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
