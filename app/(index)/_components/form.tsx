'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { ComponentSelector } from '@/components/component-selector';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { type FieldType, getDefaultValues, getFormSchema } from '@/lib/form';
import { cn } from '@sohanemon/utils';
import { Iconify } from '@sohanemon/utils/components';
import { sendEmail } from '../_lib/send-mail';

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
    placeholder: 'דוא"ל *',
  },
  {
    name: 'phone',
    type: 'number',
    schema: z.string().min(8),
    placeholder: 'מס’ טלפון *',
    cn: 'md:order-last',
  },
  {
    name: 'role',
    type: 'string',
    schema: z.string().optional(),
    placeholder: 'תפקיד',
    cn: 'md:order-last',
  },
  {
    name: 'topic',
    type: 'text',
    schema: z.string().optional(),
    placeholder: 'באיזה נושא תרצו שנחזור אליכם?',
    cn: 'md:row-span-2 md:col-span-2 md:[&>input]:h-full md:[&>input]:pb-20',
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

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await sendEmail(data);
  }

  return (
    <Form {...form}>
      <form
        className="rounded-2xl md:grid grid-cols-4 relative bg-card p-6"
        onSubmit={form.handleSubmit(onSubmit, console.log)}
      >
        <h2 className="font-black col-span-full text-2xl">{formData?.title}</h2>
        <p className="col-span-full md:mb-2">{formData?.description}</p>

        {fields.map((formField) => {
          return (
            <FormField
              key={formField.name}
              name={formField.name}
              render={({ field: controllerProps }) => (
                <FormItem
                  className={cn(
                    'my-5 md:my-2 md:mx-2 relative z-10',
                    formField.cn
                  )}
                >
                  <FormControl>
                    <ComponentSelector
                      controllerProps={controllerProps}
                      formField={formField}
                    />
                  </FormControl>
                  <FormMessage className="md:hidden" />
                </FormItem>
              )}
            />
          );
        })}
        <div className="flex md:hidden justify-center !-mt-8 bg-background py-6 rounded-b-2xl">
          <Button disabled={form.formState.isSubmitting} className="w-32">
            שליחה
            {form.formState.isSubmitting && (
              <Iconify icon="eos-icons:loading" />
            )}
          </Button>
        </div>
        <Button
          disabled={form.formState.isSubmitting}
          className="w-fit max-md:hidden z-20 absolute left-12 bottom-12"
        >
          שליחה
          {form.formState.isSubmitting && <Iconify icon="eos-icons:loading" />}
        </Button>
      </form>
    </Form>
  );
}
