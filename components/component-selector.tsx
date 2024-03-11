// @/components/component-selector.tsx
import type { ReactNode } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import type { FieldType } from '@/lib/form';
import { Textarea } from './ui/textarea';

export type ComponentSelectorProps = {
  formField: FieldType;
  controllerProps: ControllerRenderProps;
};

export const ComponentSelector = (props: ComponentSelectorProps) => {
  const component: Record<string, ReactNode> = {
    textarea: (
      <Textarea
        placeholder={props.formField.placeholder}
        {...props.controllerProps}
      />
    ),
  };

  return (
    component[props.formField.type] || (
      <Input
        type={props.formField.type}
        placeholder={props.formField.placeholder}
        {...props.controllerProps}
      />
    )
  );
};
