import { Img } from '@/components/image';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import type { BenefitType } from '@/types/index.types';
import Link from 'next/link';
import type * as React from 'react';

type BenefitsProps = React.ComponentProps<'div'>;

export async function Benefits({ className, ...props }: BenefitsProps) {
  const benefits = await client.fetch<BenefitType[]>('*[_type=="benefits"]');
  return (
    <div {...props}>
      <h2 className="font-black text-pretty text-2xl max-w-md mx-auto text-center">
        כבר <span className="text-accent">מעל שישים שנים </span>
        שאנו משפצים בתים, עברנו המון, אז מה אנחנו מספקים?
      </h2>
      <p className="text-center mt-3 text-balance">
        עם הזמן גדלנו מעסק קטן ואיזורי לחברה מחוזית ומקיפה שמספקת מגוון שירותי
        שיפוצים ובנייה
      </p>

      <div className="grid gap-7 mt-10 md:gap-11 grid-cols-1 md:grid-cols-3 ">
        {benefits.map((benefit) => (
          <div className="flex bg-card gap-5 p-6 rounded-lg" key={benefit._id}>
            <Img
              className="object-contain min-w-16"
              src={urlForImage(benefit.icon)}
              width={70}
            />
            <div>
              <h4 className="font-bold text-base">{benefit.title}</h4>
              <p className="leading-snug">{benefit.description}</p>
              <Link
                href={benefit.link.href}
                className="font-bold text-base underline underline-offset-2"
              >
                {benefit.link.label}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
