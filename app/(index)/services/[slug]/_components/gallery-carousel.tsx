'use client';
import { Img } from '@/components/image';
import { Motion } from '@/components/motion';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { urlForImage } from '@/sanity/lib/image';
import { cn } from '@sohanemon/utils';
import * as React from 'react';
import type { Image } from 'sanity';

type GalleryCarouselProps = React.ComponentProps<'div'> & {
  images: Image[];
};

export function GalleryCarousel({
  className,
  images,
  ...props
}: GalleryCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  console.log('current', current);

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
    <div className="container py-14" {...props}>
      <h2 className="font-black text-balance text-2xl text-center">
        שיראו קצת פרויקטים שלנו
      </h2>
      <Carousel
        setApi={setApi}
        className="mt-7"
        opts={{
          align: 'center',
          loop: true,
        }}
        dir="ltr"
      >
        <CarouselContent className="-ml-10 h-carousel-active select-none items-center">
          {[...images, ...images].map((el, idx) => (
            <CarouselItem
              className={cn(
                'pl-10 overflow-hidden basis-1/4 h-carousel-inactive',
                current === idx && 'basis-1/3 h-carousel-active'
              )}
              key={urlForImage(el)}
            >
              <Motion className="size-full" layout>
                <Img
                  className={cn('size-full rounded-xl object-cover')}
                  src={urlForImage(el)}
                  alt="gallery"
                />
              </Motion>
            </CarouselItem>
          ))}
        </CarouselContent>
        <br />
        <br />
        <br />
        <div className="relative max-w-5 mx-auto">
          <CarouselNext />
          <CarouselPrevious />
        </div>
        <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-l from-transparent to-primary" />
        <div className="absolute inset-y-0 right-0 w-56 bg-gradient-to-r from-transparent to-primary" />
      </Carousel>
    </div>
  );
}
