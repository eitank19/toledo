'use client';

import { cn, isNavActive } from '@sohanemon/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { siteConfig } from '@/config/site';
import useNavToggle from '@/hooks/nav-toggle';

import { Brand } from './brand';
import { Motion } from './motion';
import { Button } from './ui/button';
import { client } from '@/sanity/lib/client';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { hidden, leaved } = useNavToggle();

  return (
    <Motion
      animate={hidden ? 'top' : 'visible'}
      transition={{ delay: 0.1, duration: 0.5 }}
      className={cn('fixed inset-x-0 top-0 z-40 ', {
        'shadow-lg shadow-foreground/10  bg-background/50 backdrop-blur-md':
          leaved,
      })}
    >
      <nav className="container flex items-center justify-between py-4">
        <Brand />
        <NavContent />
        <Button>השאירו פרטים</Button>
      </nav>
    </Motion>
  );
}

const NavContent = () => {
  const path = usePathname();
  const links =React.use(client.fetch('*[_type=="info"][0]{links}'))
  return (
    <>
      <ul className="ml-20 flex items-center gap-12 max-lg:hidden ">
        {links?.map((_) => (
          <li
            key={_.title}
            className={cn('relative', {
              'text-primary': isNavActive(_.href, path),
            })}
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
