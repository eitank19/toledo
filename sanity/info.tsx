import { defineType } from 'sanity';

export default defineType({
  name: 'info',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      image: 'logo',
    },
  },
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'logo',
      type: 'image',
    },
    {
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'href',
              type: 'string',
              initialValue: '/',
            },
          ],
        },
      ],
    },
  ],
});
