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
          },
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
          name: 'benefits',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'gallery',
          type: 'array',
          of: [
            {
              type: 'image',
            },
          ],
        },
        {
          name: 'article',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'content',
              type: 'text',
            },
            {
              name: 'faq',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'question',
                      type: 'string',
                    },
                    {
                      name: 'answer',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
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
