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
      className="relative rounded-3xl md:px-14 md:grid grid-cols-2 gap-16 px-6  py-10 max-sm:text-center text-background "
      {...props}
    >
      <Img
        src={urlForImage(data?.backgroundImage)}
        className="absolute brightness-50 object-cover -z-10 inset-0 size-full rounded-2xl"
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
        <div className="flex gap-7 max-md:flex-col items-center">
          <Button size="lg" variant={'outline'} className="w-fit px-5">
            שנחזור אליכם?
            <Img src="/public/note-favorite.svg" width={21} />
          </Button>
          <Link href={data.callToAction} target="_blank">
            <Button size="lg" className="w-fit">
              ישר לווצאפ{' '}
              <Iconify icon="mingcute:whatsapp-fill" className="text-lg" />
            </Button>
          </Link>
        </div>
      </div>
      <Img
        className="w-full h-[calc(100%+4rem)] max-md:hidden object-cover translate-y-5 rounded-2xl"
        src={urlForImage(data.mainImage)}
      />
    </div>
  );
}
