import { Img } from '@/components/image';
import { CarouselItem } from '@/components/ui/carousel';
import { urlForImage } from '@/sanity/lib/image';
import type { Homepage } from '@/types/index.types';
import { cn } from '@sohanemon/utils';
import { useMediaQuery } from '@sohanemon/utils/hooks';
import Link from 'next/link';
import type * as React from 'react';

type ServiceCardProps = React.ComponentProps<'div'> & Homepage;

export function ServiceCard({
  className,
  icon,
  description,
  name,
  slug,
  ...props
}: ServiceCardProps) {
  const Wrapper = useMediaQuery('md') ? CarouselItem : 'div';
  return (
    <Wrapper
      dir="rtl"
      className={cn('md:basis-60 basis-0 pl-10', className)}
      {...props}
    >
      <main className="bg-background max-md:my-1 max-md:flex cursor-grab active:cursor-grabbing text-foreground overflow-hidden md:rounded-xl rounded-md">
        <div className="flex max-md:gap-5 md:flex-col px-3 items-center md:pt-7 pb-4">
          <Img className="max-md:min-w-16" width={70} src={urlForImage(icon)} />
          <div>
            <h3 className="font-bold pt-3 md:text-center text-base pb-1">
              {name}
            </h3>
            <p className="md:text-center leading-snug line-clamp-3">
              {description}
            </p>
          </div>
        </div>
        <Link
          className="bg-accent max-md:flex-col max-md:min-h-32 max-md:gap-5 max-md:px-2 hover:bg-accent/80 transition-all text-background flex md:py-6 justify-center gap-2 items-center font-bold"
          href={`/services/${slug.current}`}
        >
          <span className="max-md:rotate-90">
            <span className="max-md:hidden">להמשך</span> קריאה
          </span>
          <Img
            src="/public/export.svg"
            className="max-md:scale-x-[-0.9] max-md:scale-y-90 "
            width={20}
          />
        </Link>
      </main>
    </Wrapper>
  );
}
