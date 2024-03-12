import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

export const sendEmail = async (data: any) => {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      {
        phone: data.phone,
        email: data.email,
        title: data.role,
        name: data.name,
        message: data.topic,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    return toast.error('Something went wrong!');
  }
  return toast.success('Email sent successfully!');
};
