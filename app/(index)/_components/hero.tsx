import { Img } from '@/components/image';
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import type { HeroType } from '@/types/index.types';
import { Iconify } from '@sohanemon/utils/components';
import type * as React from 'react';

type HeroProps = React.ComponentProps<'div'>;

export async function Hero({ className, ...props }: HeroProps) {
  const data = await client.fetch<HeroType>('*[_type=="hero"][0]');

  return (
    <div
      className="relative rounded-3xl px-6 space-y-5 py-10 max-sm:text-center text-background overflow-hidden"
      {...props}
    >
      <Img
        src={urlForImage(data?.backgroundImage)}
        className="absolute object-cover -z-10 inset-0 size-full"
      />
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
      <div className="font-black">{data.phoneNumber}</div>
      <Button variant={'secondary'}>
        {' '}
        ישר לווצאפ <Iconify icon="mingcute:whatsapp-fill" className="text-lg" />
      </Button>
    </div>
  );
}
