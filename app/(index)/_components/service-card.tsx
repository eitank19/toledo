import { cn } from '@sohanemon/utils';
import type * as React from 'react';

type ServiceCardProps = React.ComponentProps<'div'>;

export function ServiceCard({ className, ...props }: ServiceCardProps) {
  return <div className={cn('', className)} {...props}>
    
  </div>;
}
