import { client } from '@/sanity/lib/client';
import type { PageProps, ServicePage } from '@/types/index.types';
import { Suspense } from 'react';
import { FormComponent } from '../../_components/form';
import { Services } from '../../_components/services';
import { Article } from './_components/article';
import { Faq } from './_components/faq';
import { GalleryCarousel } from './_components/gallery-carousel';
import { Hero } from './_components/hero';

export async function generateMetadata({ params: { slug } }: PageProps) {
  return {
    title: slug,
  };
}

export default async function SlugPage({ params: { slug } }: PageProps) {
  const data = await client.fetch<ServicePage>(
    `*[_type=="services" && homepage.slug.current=="${slug}"][0].servicePage`
  );
  const formData = await client.fetch('*[_type=="form"][0]');

  return (
    <main className="container">
      <Hero {...data} />
      <div className="bg-primary w-screen -left-1/2 translate-x-1/2 text-background  relative">
        <GalleryCarousel images={data.gallery} />
      </div>
      <Article image={data.gallery[0] || {}} article={data.article} />
      <br />
      <Faq faqs={data.article.faq} />
      <div className="h-32" />
      <Suspense fallback={'loading ...'}>
        <FormComponent formData={formData} />
      </Suspense>
      <br />
      <br />
      <Suspense>
        <Services />
      </Suspense>
    </main>
  );
}
