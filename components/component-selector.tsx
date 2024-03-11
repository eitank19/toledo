// @/components/component-selector.tsx
import type { ControllerRenderProps } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import type { FieldType } from '@/lib/form';

export type ComponentSelectorProps = {
  formField: FieldType;
  controllerProps: ControllerRenderProps;
};

export const ComponentSelector = (props: ComponentSelectorProps) => {
  return (
    <Input
      type={props.formField.type}
      placeholder={props.formField.placeholder}
      {...props.controllerProps}
    />
  );
};
