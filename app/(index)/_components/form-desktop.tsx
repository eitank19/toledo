'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
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

export function FormDesktop({
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
        <div>
          <FormField
            name="..."
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-32">שליחה</Button>
      </form>
    </Form>
  );
}
