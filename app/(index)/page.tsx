import { Form } from './_components/form';
import { Hero } from './_components/hero';

export default async function IndexPage() {
  return (
    <section className="container py-4 space-y-4">
      <Hero />
      <Form />
    </section>
  );
}
