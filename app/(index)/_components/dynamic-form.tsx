'use client';
import { useMediaQuery } from '@sohanemon/utils/hooks';
import { FormComponent } from './form';
import { FormDesktop } from './form-desktop';

export const DynamicForm = (props: any) => {
  const md = useMediaQuery('md');
  if (md) return <FormDesktop {...props} />;
  return <FormComponent {...props} />;
};
