import { defineType } from 'sanity';

export default defineType({
  name: 'services',
  type: 'document',

  title: 'Services',
  fields: [
    {
      type: 'object',
      name: 'homepage',
      fields: [
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'slug',
          type: 'slug',
          options: {
            source: 'homepage.name',
          }
        },
        {
          name: 'description',
          type: 'string',
        },
        {
          name: 'icon',
          type: 'image',
        },
      ],
    },
    {
      type: 'object',
      name: 'servicePage',
      fields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'caption',
          type: 'string',
        },
        {
          name: 'icon',
          type: 'image',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'homepage.name',
      media: 'homepage.icon',
    },
  },
});
