'use client';

import { cn, isNavActive } from '@sohanemon/utils';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { client } from '@/sanity/lib/client';
import type { HeroType } from '@/types/index.types';
import Link from 'next/link';
import { Brand } from './brand';
import { Img } from './image';
import { Motion } from './motion';
import { Button } from './ui/button';

export function Navbar() {
  const data = React.use(client.fetch<HeroType>('*[_type=="hero"][0]'));
  return (
    <Motion
      initial={{ y: -20, opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className={cn('sticky inset-x-0 top-0 bg-primary z-40 ')}
    >
      <nav className="container flex items-center gap-5 justify-between py-5">
        <Brand />
        <NavContent />
        <Button
          onClick={() =>
            document
              .getElementById('send-mail')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          השאירו פרטים
        </Button>
        <Link href={`tel:${data?.phoneNumber}`}>
          <Button size="icon-lg">
            <Img src="/public/call-calling.svg" width={18} />
          </Button>
        </Link>
      </nav>
    </Motion>
  );
}

const NavContent = () => {
  const path = usePathname();
  const { links } = React.use(client.fetch('*[_type=="info"][0]{links}'));
  return (
    <>
      <ul className="flex items-center justify-center gap-10 max-lg:hidden ">
        {links?.map((_: any) => (
          <li
            key={_.title}
            className={cn('relative font-bold text-background', {})}
          >
            <h3 className="px-3 capitalize">
              <Link href={_.href}>{_.title}</Link>
            </h3>
            {isNavActive(_.href, path) && (
              <Motion
                as="span"
                className="absolute inset-0 -z-10 rounded-md bg-primary/10 "
                layoutId="nav-bg"
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
