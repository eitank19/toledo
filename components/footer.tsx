import { client } from '@/sanity/lib/client';

export const Footer = async () => {
  const data = await client.fetch('*[_type=="footer"][0]');

  return (
    <footer className="bg-primary text-primary-foreground/70 text-center py-6">
      <p className="container">
        {data.text.split(data.textToBold)[0]}{' '}
        <span className="font-black text-primary-foreground">
          {data.textToBold}
        </span>
        {data.text.split(data.textToBold)[1]}
      </p>
    </footer>
  );
};
