import { defineType } from 'sanity';

export default defineType({
  name: 'benefits',
  type: 'document',
  title: 'Benefits of our services',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'description',
      type: 'string',
    },
    {
      name: 'icon',
      type: 'image',
    },
    {
      name: 'link',
      type: 'object',
      fields: [
        {
          name: 'label',
          type: 'string',
        },
        {
          name: 'href',
          type: 'string',
          initialValue: '/',
          description: 'Url for redirecting page',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
  },
});
