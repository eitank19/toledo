import { Brand } from '@/components/brand';
import { Suspense } from 'react';

export default function Loading() {
  return (
    <div className="grid min-h-screen animate-pulse place-content-center text-3xl">
      <Suspense fallback="loading...">
        <Brand />
      </Suspense>
    </div>
  );
}
