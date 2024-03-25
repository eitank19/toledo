import { client } from '@/sanity/lib/client';
import type { Homepage } from '@/types/index.types';
import { cn } from '@sohanemon/utils';
import type * as React from 'react';

type ServicesProps = React.ComponentProps<'div'>;

export async function Services({ className, ...props }: ServicesProps) {
  const services = await client.fetch<Homepage[]>(
    '*[_type=="services"].homepage'
  );

  return (
    <div
      {...props}
      className={cn(
        'bg-primary text-background w-screen translate-x-1/2 -left-1/2 relative'
      )}
    >
      <div className="container py-14">
        <h2 className="font-black text-balance text-2xl text-center">
          השירות שלנו <span className="text-accent">מקיף</span> וכולל הרבה דברים
        </h2>
        <br />
        <p className="text-center text-balance">
          עם הזמן גדלנו מעסק קטן ואיזורי לחברה מחוזית ומקיפה שמספקת מגוון שירותי
          שיפוצים ובנייה
        </p>
      </div>
    </div>
  );
}
