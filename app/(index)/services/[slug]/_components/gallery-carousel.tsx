'use client';
import useEmbla from '@/app/(index)/_lib/embla';
import { Img } from '@/components/image';
import { Motion } from '@/components/motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { urlForImage } from '@/sanity/lib/image';
import { cn } from '@sohanemon/utils';
import type * as React from 'react';
import type { Image } from 'sanity';

type GalleryCarouselProps = React.ComponentProps<'div'> & {
  images: Image[];
};

export function GalleryCarousel({
  className,
  images,
  ...props
}: GalleryCarouselProps) {
  const { api, current, setApi } = useEmbla();

  if (images.length)
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
                  'pl-10 overflow-hidden ',
                  current === idx
                    ? 'basis-3/5 md:basis-1/3 h-carousel-active'
                    : 'basis-1/5 md:basis-1/4 h-carousel-inactive'
                )}
                key={urlForImage(el)}
              >
                <Motion className="size-full flex flex-col" layout>
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
