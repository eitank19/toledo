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
      <h2 className="font-black text-pretty text-2xl max-w-72 md:max-w-2xl mx-auto text-center">
        שישים שנה בתחום, איפה לא עבדנו?
      </h2>
      <p className="text-center mt-3 text-balance">
        הפסקנו לספור מיקומים חדשים, אבל כשעוברים על הרשימה שמנו לב שאשכרה עבדנו במלא מקומות, רואים את היישוב שלכם ברשימה?
      </p>
      <div className="md:flex grid grid-cols-2 gap-6 md:gap-10 items-center">
        <Img
          width={382}
          className="max-md:w-36 max-md:justify-self-end max-md:h-56 object-cover rounded-xl md:order-last md:min-w-72"
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
