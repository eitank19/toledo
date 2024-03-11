// @/lib/form.ts
import { z } from 'zod';

export type FieldType = {
  name: string;
  type: string;
  defaultValue?: any;
  schema?: z.ZodType;
  placeholder: string;
  cn?: string;
};

export function getDefaultValues(fields: FieldType[]) {
  return fields.reduce((acc: Record<string, any>, field) => {
    if (field.defaultValue) acc[field.name] = field.defaultValue;
    return acc;
  }, {});
}

export function getFormSchema(fields: FieldType[]) {
  const schema = fields?.reduce((acc: Record<string, any>, field) => {
    if (!field.schema) return acc;
    const keys = field.name.split('.');
    if (keys.length > 1 && keys[0] && keys[1]) {
      if (!acc[keys[0]]) {
        acc[keys[0]] = z.object({ [keys[1]]: field.schema });
      } else {
        acc[keys[0]] = acc[keys[0]].extend({ [keys[1]]: field.schema });
      }
    } else {
      acc[field.name] = field.schema;
    }
    return acc;
  }, {});

  return z.object(schema);
}
