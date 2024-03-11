'use client';

import { ResponsiveIndicator } from '@sohanemon/utils/components';

import { Toaster } from '@/components/ui/sonner';
import { isSSR } from '@/lib/utils';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      {children}
      {isSSR || <ResponsiveIndicator />}
    </>
  );
}
