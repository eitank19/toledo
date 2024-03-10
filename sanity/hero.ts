import { defineType } from 'sanity';

export default defineType({
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'subtitle',
      type: 'string',
    },
    {
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'backgroundImage',
      type: 'image',
    },
    {
      name: 'bulletPoints',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'callToAction',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      type: 'string',
    },
  ],
});
