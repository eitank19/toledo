'use client';
import { Img } from '@/components/image';
import { urlForImage } from '@/sanity/lib/image';
import type { Image } from 'sanity';

import { Motion } from '@/components/motion';
import { cn } from '@sohanemon/utils';
import { useMediaQuery } from '@sohanemon/utils/hooks';
export const Gallery = ({ images }: { images: Image[] }) => {
  const md = useMediaQuery('md');

  if (images.length)
    return (
      <div className="grid max-md:mx-8 md:grid-cols-3 gap-3 md:gap-6 aspect-[295/181] md:aspect-[590/407] md:grid-rows-3 grid-cols-7 max-md:translate-y-3 grid-rows-5">
        {images.map((el, idx) => (
          <Motion
            initial={{ opacity: 0, scale: 0.3 }}
            className={cn(
              'rounded-xl drop-shadow-xl overflow-hidden',
              md
                ? 'nth-[1]:col-span-2 nth-[1]:row-span-2 nth-[4]:col-span-2 nth-[3]:row-span-2 '
                : 'nth-[1]:col-span-3 nth-[1]:row-span-3 nth-[2]:col-span-4 nth-[2]:row-span-2 nth-[3]:col-span-4 nth-[3]:row-span-3 nth-[4]:col-span-3 nth-[4]:row-span-2'
            )}
            key={urlForImage(el)}
            transition={{
              delay: idx * 0.4,
              duration: 0.75,
              type: 'spring',
            }}
          >
            <Img
              src={urlForImage(el)}
              alt="gallery"
              className="object-cover size-full"
            />
          </Motion>
        ))}
      </div>
    );
};
