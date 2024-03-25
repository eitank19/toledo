import { Img } from '@/components/image';
import type { CarouselItem } from '@/components/ui/carousel';
import { urlForImage } from '@/sanity/lib/image';
import type { Homepage } from '@/types/index.types';
import { cn } from '@sohanemon/utils';
import type * as React from 'react';

type ServiceCardProps = React.ComponentProps<typeof CarouselItem> & Homepage;

export function ServiceCard({
  className,
  icon,
  description,
  name,
  slug,
  ...props
}: ServiceCardProps) {
  return (
    <div className={cn('basis-1/5 bg-background', className)} {...props}>
      <Img src={urlForImage(icon)} />
    </div>
  );
}
