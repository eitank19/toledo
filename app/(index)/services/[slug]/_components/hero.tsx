import { Img } from '@/components/image';
import { Motion } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import type { HeroType, ServicePage } from '@/types/index.types';
import { Iconify } from '@sohanemon/utils/components';
import Link from 'next/link';
import type * as React from 'react';
import { Gallery } from './gallery';
type HeroProps = React.ComponentProps<'div'> & ServicePage;

export async function Hero({
  className,
  benefits,
  caption,
  description,
  gallery,
  title,
  ...props
}: HeroProps) {
  const callToAction = await client.fetch<HeroType['phoneNumber']>(
    '*[_type=="hero"][0].callToAction'
  );
  return (
    <div
      className="grid items-center grid-cols-1 md:grid-cols-2 py-12 md:py-24  gap-16"
      {...props}
    >
      <Gallery images={gallery.slice(0, 4)} />
      <Motion initial={{ opacity: 0, scale: 0.3, y: 100, x: -100 }}>
        <p className="text-lg max-md:text-center">{caption}</p>
        <h1 className="text-4xl font-black pb-4 max-md:text-center">{title}</h1>
        <p className="text-lg line-clamp-4 leading-snug">{description}</p>
        <div className="space-y-2 py-6">
          {benefits.map((el) => (
            <div className="flex items-center text-accent gap-4" key={el}>
              <Img src="/public/check.svg" width={20} />
              <h3 className="font-bold text-lg">{el}</h3>
            </div>
          ))}
        </div>

        <div className="flex gap-5 md:gap-7 max-md:flex-col items-center">
          <Button
            size="lg"
            variant={'gray-outline'}
            className="w-fit max-md:flex max-md:w-full px-5"
          >
            שנחזור אליכם?
            <Img src="/public/note-favorite.svg" width={21} />
          </Button>
          <Link
            className="max-md:w-full max-md:flex"
            href={callToAction}
            target="_blank"
          >
            <Button size="lg" className="w-fit max-md:flex max-md:w-full">
              פנייה בווצאפ
              <Iconify icon="mingcute:whatsapp-fill" className="text-lg" />
            </Button>
          </Link>
        </div>
      </Motion>
    </div>
  );
}
