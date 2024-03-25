import type { SchemaTypeDefinition } from 'sanity';

import benefits from './benefits';
import footer from './footer';
import form from './form';
import hero from './hero';
import info from './info';
import locations from './locations';
import services from './services';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [info, hero, form, footer, services, benefits, locations],
};
