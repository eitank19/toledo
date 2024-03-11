import emailjs from '@emailjs/browser';
import { form } from 'sanity/structure';
import { toast } from 'sonner';

export const sendEmail = async (data: any) => {
  try {
    await emailjs.send(
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
  } catch (error) {
    return toast.error('Something went wrong!');
  }
  return toast.success('Email sent successfully!');
};
