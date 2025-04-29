import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter, Noto_Serif } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
});

export const metadata: Metadata = {
  title: 'Caraka',
  description: 'All-in-one Javanese Script Translator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          notoSerif.variable,
          'font-sans font-medium antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}
