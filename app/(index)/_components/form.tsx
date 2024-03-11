'use client';
import * as React from 'react';

type FormProps = React.ComponentProps<'div'>;

import { client } from '@/sanity/lib/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const FormSchema = z.object({});
type FormType = z.infer<typeof FormSchema>;

export function Form({ className, ...props }: FormProps) {
  const data = React.use(client.fetch('*[_type=="form"][0]'));

  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(values: FormType) {
    alert(JSON.stringify(values, null, 2));
  }
  return (
    <form
      className="rounded-2xl bg-card p-6"
      onSubmit={form.handleSubmit(onSubmit, console.log)}
    >
      <h2 className="font-black text-2xl">{data?.title}</h2>
      <p>{data?.description}</p>
    </form>
  );
}
