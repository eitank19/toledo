'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { ComponentSelector } from '@/components/component-selector';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { getDefaultValues, getFormSchema, type FieldType } from '@/lib/form';

const fields: FieldType[] = [
  {
    name: 'name',
    type: 'text',
    schema: z.string().min(5),
    placeholder: 'שם מלא *',
  },
  {
    name: 'email',
    type: 'email',
    schema: z.string().email(),
    placeholder: 'שם מלא *',
  },
  {
    name: 'phone',
    type: 'number',
    schema: z.string().min(8),
    placeholder: 'מס’ טלפון *',
  },
  {
    name: 'role',
    type: 'string',
    schema: z.string().optional(),
    placeholder: 'תפקיד',
  },
  {
    name: 'topic',
    type: 'text',
    schema: z.string().optional(),
    placeholder: 'באיזה נושא תרצו שנחזור אליכם?',
  },
];

const FormSchema = getFormSchema(fields);
const defaultValues = getDefaultValues(fields);

export function FormComponent({
  formData,
}: { formData: { title: string; description: string } }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <Form {...form}>
      <form
        className="rounded-2xl bg-card p-6"
        onSubmit={form.handleSubmit(onSubmit, console.log)}
      >
        <h2 className="font-black text-2xl">{formData?.title}</h2>
        <p>{formData?.description}</p>
        {fields.map((formField) => {
          return (
            <FormField
              key={formField.name}
              name={formField.name}
              render={({ field: controllerProps }) => (
                <FormItem className="my-5 relative z-10">
                  <ComponentSelector
                    controllerProps={controllerProps}
                    formField={formField}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}
        <div className="flex justify-center !-mt-8 bg-background py-6 rounded-b-2xl">
          <Button className="w-32">שליחה</Button>
        </div>
      </form>
    </Form>
  );
}
