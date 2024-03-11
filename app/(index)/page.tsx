import { FormComponent } from './_components/form';
import { Hero } from './_components/hero';

export default async function IndexPage() {
  return (
    <section className="container py-6 space-y-6">
      <Hero />
      <FormComponent />
    </section>
  );
}
