import { client } from '@/sanity/lib/client';
import { cn } from '@sohanemon/utils';
import Link from 'next/link';

import { urlForImage } from '@/sanity/lib/image';
import type { HtmlHTMLAttributes } from 'react';
import { Img } from './image';

type CompType = {};

export async function Brand({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLAnchorElement> & CompType) {
  const data = await client.fetch('*[_type=="info"][0]{logo}');

  return (
    <Link href={'/'} {...props} className={cn('', className)}>
      <Img width={110} height={60} src={urlForImage(data.logo)} />
    </Link>
  );
}
