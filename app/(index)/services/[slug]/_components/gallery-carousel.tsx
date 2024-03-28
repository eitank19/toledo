'use client';
import useEmbla from '@/app/(index)/_lib/embla';
import { Img } from '@/components/image';
import {
  Carousel,
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
  const [direction, setDirection] = React.useState(0);
  const { current, setApi } = useEmbla((api) => {
    api?.on('select', () => {
      const direction = api.internalEngine().scrollBody.direction();
      setDirection(direction);
    });
  });

  if (images.length)
    return (
      <div className="container py-14" {...props}>
        <h2 className="font-black text-balance text-2xl text-center">
          עבודות לעיון בנושא זה
        </h2>
        <Carousel
          setApi={setApi}
          className="mt-7"
          opts={{
            startIndex: 5,
            align: 'center',
            loop: true,
          }}
          dir="ltr"
        >
          <CarouselContent className="md:-ml-10 -ml-7 h-carousel-active select-none items-center">
            {[].concat(...Array(15).fill(images)).map((el, idx) => (
              <CarouselItem
                className={cn(
                  'md:pl-10 pl-7 will-change-auth overflow-hidden duration-500',
                  current === idx
                    ? 'basis-3/5 md:basis-1/3 max-md:!min-w-56 max-md:max-h-72 aspect-[225/290] md:aspect-[345/414] h-carousel-active'
                    : 'basis-1/5 md:basis-1/4 max-md:min-w-36 aspect-[135/175] md:aspect-[235/336] h-carousel-inactive'
                    , direction === 1 ? 'animate-in slide-in-from-right-20': 'animate-in slide-in-from-left-20'
                )}
                key={urlForImage(el)}
              >
                <Img
                  className={cn(
                    'size-full cursor-grab active:cursor-grabbing rounded-xl object-cover'
                  )}
                  src={urlForImage(el)}
                  alt="gallery"
                />
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
          <div className="absolute inset-y-0 left-0 w-6 md:w-56 bg-gradient-to-l from-transparent to-primary" />
          <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-r from-transparent to-primary" />
        </Carousel>
      </div>
    );
}
