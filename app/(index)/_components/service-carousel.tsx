'use client';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
} from '@/components/ui/carousel';
import type { Homepage } from '@/types/index.types';
import { cn } from '@sohanemon/utils';
import * as React from 'react';
import { ServiceCard } from './service-card';

type ServiceCarouselProps = React.ComponentProps<'div'> & {
  services: Homepage[];
};

export function ServiceCarousel({
  className,
  services,
  ...props
}: ServiceCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <div {...props}>
      <Carousel
        setApi={setApi}
        className="mt-7"
        opts={{
          align: 'center',
          loop: true,
        }}
        dir="ltr"
      >
        <CarouselContent className="-ml-10 select-none">
          {services.map((el) => (
            <ServiceCard key={el.slug.current} {...el} />
          ))}
        </CarouselContent>
        <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-l from-transparent to-primary" />
        <div className="absolute inset-y-0 right-0 w-56 bg-gradient-to-r from-transparent to-primary" />
      </Carousel>
      <div dir="rtl" className="mt-8 flex justify-center gap-3">
        {services.map((_, index) => (
          <button
            onClick={() => api?.scrollTo(index)}
            key={_.slug.current}
            className={cn('size-4 rounded bg-background transition-colors', {
              'bg-accent ring-[3px] ring-background': current === index,
            })}
          />
        ))}
      </div>
    </div>
  );
}
