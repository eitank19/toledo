'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Brand } from '@/components/brand';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default function NotFound() {
  const pathname = usePathname();

  return (
    <section className="fixed inset-0 flex min-h-full flex-col items-center justify-center">
      <Suspense fallback="loading...">
        <Brand />
      </Suspense>
      <br />
      <p>
        <strong className="capitalize">{pathname.split('/').pop()}</strong>{' '}
        under Construction
      </p>
      <Link className="mt-6 text-xs hover:text-primary" href="/">
        Back to home
      </Link>
    </section>
  );
}
