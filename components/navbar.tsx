'use client';

import { cn, isNavActive } from '@sohanemon/utils';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { client } from '@/sanity/lib/client';
import type { HeroType } from '@/types/index.types';
import { Iconify } from '@sohanemon/utils/components';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Brand } from './brand';
import { Img } from './image';
import { Motion } from './motion';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Motion
      initial={{ y: -20, opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className={cn('sticky inset-x-0 top-0 bg-primary z-40 ')}
    >
      <nav className="container flex items-center gap-5 md:justify-between py-5">
        <React.Suspense>
          <Brand />
        </React.Suspense>
        <React.Suspense>
          <NavContent />
        </React.Suspense>
        <div className="flex gap-5 max-md:grow">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="max-md:hidden"
                // onClick={() =>
                //   document
                //     .getElementById('send-mail')
                //     ?.scrollIntoView({ behavior: 'smooth' })
                // }
              >
                השאירו פרטים
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>טולדו עבודות בנייה ושיפוצים</DialogTitle>
                <DialogDescription>
                  אתם מוזמנים לפנות אלינו בכתובות הבאות:
                </DialogDescription>
                <div className="space-y-2 py-6 text-base">
                  {contacts.map((el) => (
                    <div
                      className="flex justify-between max-w-[80%] mx-auto font-black"
                      key={el.label}
                    >
                      <p>{el.label}</p>
                      <p>{el.info}</p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-base pb-3">
                  נשמח לעבוד יחד ולהגשים את חזון בית חלומותיכם
                </p>
                <p className="text-foreground/60 text-base text-center">
                  מעוניינים שנחזור אליכם?{' '}
                  <button
                    className="text-link underline underline-offset-1"
                    onClick={() =>
                      document
                        .getElementById('send-mail')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    השאירו פנייה כאן
                  </button>
                </p>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <React.Suspense>
            <Phone />
          </React.Suspense>
        </div>
        {!isMenuOpen ? (
          <Button
            size="icon-lg"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Iconify className="text-2xl" icon="mdi:menu" />
          </Button>
        ) : (
          <Button
            size="icon-lg"
            onClick={() => setIsMenuOpen(false)}
            className="lg:hidden"
          >
            <Iconify className="text-3xl" icon="mdi:close" />
          </Button>
        )}
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <React.Suspense fallback={<div className="blur-md" />}>
            <NavContentMob setIsMenuOpen={setIsMenuOpen} />
          </React.Suspense>
        )}
      </AnimatePresence>
    </Motion>
  );
}

const NavContent = React.memo(() => {
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
});

const Phone = React.memo(() => {
  const data = React.use(
    client.fetch<HeroType>('*[_type=="hero"][0]{phoneNumber}')
  );
  return (
    <Link
      className="max-md:grow shrink-0 flex justify-end"
      href={`tel:${data?.phoneNumber}`}
    >
      <Button size="icon-lg">
        <Img src="/public/call-calling.svg" width={18} />
      </Button>
    </Link>
  );
});

const NavContentMob = React.memo(
  ({ setIsMenuOpen }: { setIsMenuOpen: Function }) => {
    const { links } = React.use(client.fetch('*[_type=="info"][0]{links}'));

    const data = React.use(
      client.fetch<HeroType>('*[_type=="hero"][0]{phoneNumber}')
    );

    return (
      <Motion
        key={'header'}
        animate="visible"
        className="absolute items-center backdrop-blur-md z-40 h-[calc(100vh-5rem)] py-10 inset-x-0 flex flex-col gap-8 bg-foreground/60 p-5 lg:hidden"
        exit={'bottom-full'}
        initial="hidden"
      >
        {links.map((_: any) => (
          <button key={_.title} onClick={() => setIsMenuOpen(false)}>
            <span className="capitalize font-black text-2xl text-background hover:underline underline-offset-2">
              <Link href={_.href}>{_.title}</Link>
            </span>
          </button>
        ))}
        <Button size={'lg'}>
          התקשרו {data?.phoneNumber}
          <Img src="/public/call-calling.svg" width={18} />
        </Button>
      </Motion>
    );
  }
);

const contacts = [
  {
    label: 'משב טולדנו',
    info: '050-444332',
  },
  {
    label: 'נבו טולדנו',
    info: '054-333422',
  },
  {
    label: 'דוא”ל',
    info: 'toledogroup60@gmail.com',
  },
];
