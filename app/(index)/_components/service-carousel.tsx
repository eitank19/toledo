'use client';
import { Carousel, CarouselContent } from '@/components/ui/carousel';
import type { Homepage } from '@/types/index.types';
import { cn } from '@sohanemon/utils';
import { Iconify } from '@sohanemon/utils/components';
import { useMediaQuery } from '@sohanemon/utils/hooks';
import * as React from 'react';
import useEmbla from '../_lib/embla';
import { ServiceCard } from './service-card';

type ServiceCarouselProps = React.ComponentProps<'div'> & {
  services: Homepage[];
};

export function ServiceCarousel({
  className,
  services,
  ...props
}: ServiceCarouselProps) {
  const { api, current, setApi } = useEmbla();
  const [slideToShow, setSlideToShow] = React.useState(4);

  const md = useMediaQuery('md');
  return (
    <div {...props}>
      {!md ? (
        <>
          {/* mobile content */}
          <div className="-ml-10 md:hidden px-5 space-y-7 pt-10 select-none">
            {services.slice(0, slideToShow).map((el) => (
              <ServiceCard key={el.slug.current} {...el} />
            ))}
          </div>
          {/* go down for mobile */}
          <button
            onClick={() => setSlideToShow((prev) => (prev === 4 ? -1 : 4))}
            className="flex md:hidden w-full *:translate-y-6 gap-1 items-center justify-center pt-10 pb-5 bg-gradient-to-t via-primary from-primary to-transparent -mt-10 relative z-10"
          >
            <p className="text-base  font-black">הצג את כל השירותים</p>
            <Iconify
              icon="bi:caret-down-fill"
              className={cn(
                'text-accent mt-0.5',
                slideToShow === 4 ? 'rotate-0' : 'rotate-180'
              )}
            />
          </button>
        </>
      ) : (
        <>
          <Carousel
            setApi={setApi}
            className="mt-7 max-md:hidden max-md:px-4"
            opts={{
              align: 'center',
              loop: true,
            }}
            dir="ltr"
          >
            <CarouselContent className="-ml-10 select-none max-md:h-[540px]">
              {services.map((el) => (
                <ServiceCard key={el.slug.current} {...el} />
              ))}
            </CarouselContent>
            <div className="absolute max-md:hidden inset-y-0 left-0 w-56 bg-gradient-to-l from-transparent to-primary" />
            <div className="absolute max-md:hidden inset-y-0 right-0 w-56 bg-gradient-to-r from-transparent to-primary" />
          </Carousel>
          <div
            dir="rtl"
            className="mt-8 max-md:hidden flex justify-center gap-3"
          >
            {/* pagination for pc */}
            {services.map((_, index) => (
              <button
                onClick={() => api?.scrollTo(index)}
                key={_.slug.current}
                className={cn(
                  'size-4 rounded bg-background transition-colors',
                  {
                    'bg-accent ring-[3px] ring-background': current === index,
                  }
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
