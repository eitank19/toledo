import { client } from '@/sanity/lib/client';
import { Suspense } from 'react';
import { Benefits } from './_components/benefits';
import { FormComponent } from './_components/form';
import { Hero } from './_components/hero';
import { Locations } from './_components/locations';
import { Services } from './_components/services';

export default async function IndexPage() {
  const formData = await client.fetch('*[_type=="form"][0]');
  return (
    <section className="container py-6 md:py-16 space-y-6 md:space-y-24">
      <Suspense fallback={'loading ...'}>
        <Hero />
      </Suspense>
      <Suspense>
        <Services />
      </Suspense>
      <Suspense>
        <Benefits />
      </Suspense>
      <br />
      <Suspense>
        <Locations />
      </Suspense>
      <Suspense fallback={'loading ...'}>
        <FormComponent formData={formData} />
      </Suspense>
    </section>
  );
}
