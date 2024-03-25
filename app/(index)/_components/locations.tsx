import { Img } from '@/components/image';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import type { LocationType } from '@/types/index.types';
import type * as React from 'react';

type LocationsProps = React.ComponentProps<'div'>;

export async function Locations({ className, ...props }: LocationsProps) {
  const location = await client.fetch<LocationType>('*[_type=="locations"][0]');

  return (
    <div className="container" {...props}>
      <h2 className="font-black text-pretty text-2xl max-w-md mx-auto text-center">
        כולם רוצים אותנו איתם, לכן גם אתה
      </h2>
      <p className="text-center mt-3 text-balance">
        עם הזמן גדלנו מעסק קטן ואיזורי לחברה מחוזית ומקיפה שמספקת מגוון שירותי
        שיפוצים ובנייה
      </p>
      <div className="md:flex grid grid-cols-2 gap-10 items-center">
        <Img
          width={382}
          className="min-w-36 md:min-w-72"
          src={urlForImage(location.image)}
        />
        <div className="flex-1 text-base space-y-1 md:space-y-10 md:columns-3">
          {location.locations.map((el) => (
            <p key={el}>
              <span className="text-accent">🗸</span> {el}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
