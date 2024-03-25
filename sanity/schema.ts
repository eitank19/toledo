import type { SchemaTypeDefinition } from 'sanity';

import footer from './footer';
import form from './form';
import hero from './hero';
import info from './info';
import services from './services';
import benefits from './benefits';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [info, hero, form, footer, services, benefits],
};
