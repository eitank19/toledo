import { Noto_Sans_Hebrew as FontSans } from 'next/font/google';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-sans',
});

export const fonts = [fontSans.variable].join(' ');

// add to font variable in tailwind/typography.ts
