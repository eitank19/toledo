import { Carousel, CarouselContent } from '@/components/ui/carousel';
import type { Homepage } from '@/types/index.types';
import type * as React from 'react';
import { ServiceCard } from './service-card';

type ServiceCarouselProps = React.ComponentProps<'div'> & {
  services: Homepage[];
};

export function ServiceCarousel({
  className,
  services,
  ...props
}: ServiceCarouselProps) {
  return (
    <div {...props}>
      <Carousel
        className="mt-7"
        opts={{
          align: 'start',
          loop: true,
        }}
        dir="ltr"
      >
        <CarouselContent className="-ml-10 select-none">
          {services.map((el) => (
            <>
              <ServiceCard key={el.slug.current} {...el} />
              <ServiceCard key={el.slug.current} {...el} />
              <ServiceCard key={el.slug.current} {...el} />
              <ServiceCard key={el.slug.current} {...el} />
              <ServiceCard key={el.slug.current} {...el} />
            </>
          ))}
        </CarouselContent>
        <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-l from-transparent to-primary" />
        <div className="absolute inset-y-0 right-0 w-56 bg-gradient-to-r from-transparent to-primary" />
      </Carousel>
    </div>
  );
}
