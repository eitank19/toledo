import { Img } from '@/components/image';
import { CarouselItem } from '@/components/ui/carousel';
import { urlForImage } from '@/sanity/lib/image';
import type { Homepage } from '@/types/index.types';
import { cn } from '@sohanemon/utils';
import Link from 'next/link';
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
    <CarouselItem
      dir="rtl"
      className={cn('basis-52 pl-10', className)}
      {...props}
    >
      <main className="bg-background text-foreground overflow-hidden rounded-xl">
        <div className="flex flex-col px-3 items-center py-7">
          <Img width={70} src={urlForImage(icon)} />
          <h3 className='font-bold pt-3 pb-1'>{name}</h3>
          <p className='text-center leading-snug line-clamp-3'>{description}</p>
        </div>
        <Link
          className="bg-accent text-background flex py-6 justify-center gap-2 items-center font-bold"
          href={`/services/${slug.current}`}
        >
          להמשך קריאה
          <Img src="/public/export.svg" width={20} />
        </Link>
      </main>
    </CarouselItem>
  );
}
