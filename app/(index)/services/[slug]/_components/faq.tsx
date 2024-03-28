// @ts-nocheck
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FAQ } from '@/types/index.types';

export const Faq = ({ faqs }: { faqs: FAQ[] }) => {
  return (
    <div className="max-w-screen-md mx-auto">
      <h2 className="font-black text-pretty text-2xl text-center">
        מה עוד <span className="text-accent">כדאי לכם לדעת?</span>
      </h2>
      <br />
      <Accordion className="space-y-6" type="single" collapsible>
        {faqs.map((faq) => (
          <AccordionItem key={faq._key} value={faq._key}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
