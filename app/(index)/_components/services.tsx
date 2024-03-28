import { client } from '@/sanity/lib/client';
import type { Homepage } from '@/types/index.types';
import { cn } from '@sohanemon/utils';
import type * as React from 'react';
import { ServiceCarousel } from './service-carousel';

type ServicesProps = React.ComponentProps<'div'>;

export async function Services({ className, ...props }: ServicesProps) {
  const services = await client.fetch<Homepage[]>(
    '*[_type=="services"].homepage'
  );

  return (
    <div
      {...props}
      className={cn(
        'bg-primary w-screen -left-1/2 translate-x-1/2 text-background  relative'
      )}
    >
      <div className="container py-14">
        <h2 className="font-black text-balance text-2xl text-center">
          אנו מציעים <span className="text-accent">מגוון שירותים מקיף</span> לעבודות שיפוצים ובנייה
        </h2>
        <br />
        <p className="text-center text-balance">
          מעל 60 שנים של בנייה ושיפוצים מביאים שלושה דורות של קבלנים רשומים מנוסים משלום טולדנו, בנו יעקב ונכדיו משב ונבו
        </p>
        <ServiceCarousel services={services} />
      </div>
    </div>
  );
}
