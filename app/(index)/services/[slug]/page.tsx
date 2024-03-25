import { client } from '@/sanity/lib/client';
import type { PageProps, ServicePage } from '@/types/index.types';
import { Article } from './_components/article';
import { GalleryCarousel } from './_components/gallery-carousel';
import { Hero } from './_components/hero';

export async function generateMetadata({ params: { slug } }: PageProps) {
  return {
    title: slug,
  };
}

export default async function SlugPage({ params: { slug } }: PageProps) {
  const data = await client.fetch<ServicePage>(
    `*[_type=="services" && slug.current==${slug}][0].servicePage`
  );

  return (
    <main className="container">
      <Hero {...data} />
      <div className="bg-primary w-screen -left-1/2 translate-x-1/2 text-background  relative">
        <GalleryCarousel images={data.gallery} />
      </div>
      <Article image={data.gallery[0] || {}} article={data.article} />
    </main>
  );
}
