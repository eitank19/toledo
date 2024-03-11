import emailjs from '@emailjs/browser';
import { form } from 'sanity/structure';

export const sendEmail = (data: any) => {
  emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    {
      from_name: form.name,
      to_name: 'Eitan',
      from_email: data.email,
      to_email: 'eitank19@me.com',
      message: data.topic,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  );
};
