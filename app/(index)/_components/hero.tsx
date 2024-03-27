import { Img } from '@/components/image';
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import type { HeroType } from '@/types/index.types';
import { Iconify } from '@sohanemon/utils/components';
import Link from 'next/link';
import type * as React from 'react';

type HeroProps = React.ComponentProps<'div'>;

export async function Hero({ className, ...props }: HeroProps) {
  const data = await client.fetch<HeroType>('*[_type=="hero"][0]');

  return (
    <div
      className="relative drop-shadow-xl items-center rounded-xl md:h-[490px] md:p-16 md:grid grid-cols-2 gap-16 px-6  py-10 max-sm:text-center text-background "
      {...props}
    >
      <Img
        src={urlForImage(data?.backgroundImage)}
        className="absolute brightness-50 object-cover -z-10 inset-0 size-full rounded-xl"
      />
      <div className="space-y-5">
        <h3 className="font-medium">{data.subtitle}</h3>
        <h1 className="text-3xl font-black">{data.title}</h1>
        <ul>
          {data.bulletPoints.map((el) => (
            <li key={el} className="font-light text-background/70">
              {el}
            </li>
          ))}
        </ul>
        <p className="font-black py-2">{data.description}</p>
        <div className="flex gap-5 md:gap-7 max-md:flex-col items-center">
          <Button
            size="lg"
            variant={'outline'}
            className="w-fit max-md:flex max-md:w-full px-5"
          >
            שנחזור אליכם?
            <Img src="/public/note-favorite.svg" width={21} />
          </Button>
          <Link
            className="max-md:w-full max-md:flex"
            href={data.callToAction}
            target="_blank"
          >
            <Button size="lg" className="w-fit max-md:flex max-md:w-full">
              פנייה בווצאפ
              <Iconify icon="mingcute:whatsapp-fill" className="text-lg" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="max-md:hidden" />
      <Img
        className="w-full md:absolute drop-shadow-lg left-16 top-16 max-w-[460px] aspect-[460/490] max-h-[490px] max-md:hidden object-cover max-md:translate-y-5 rounded-xl"
        src={urlForImage(data.mainImage)}
      />
    </div>
  );
}
