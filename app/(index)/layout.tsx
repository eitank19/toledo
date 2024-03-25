import { Footer } from '@/components/footer';
import { GoToTop } from '@/components/goto-top';
import { Navbar } from '@/components/navbar';
import type * as React from 'react';

interface IndexLayoutProps {
  children: React.ReactNode;
}

export default function IndexLayout({ children }: IndexLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <GoToTop />
      <Footer />
    </>
  );
}
