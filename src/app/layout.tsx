import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Búa Chaval | Asador Tradicional & Fusión Caribeña en Utebo',
  description:
    'Restaurante y Asador hispano-cubano en Utebo (Zaragoza). Comida casera, carnes a la brasa al carbón vegetal, Cachopo XL y especialidades criollas.',
  keywords: [
    'Búa Chaval',
    'Asador Utebo',
    'Restaurante Utebo',
    'Comida cubana Zaragoza',
    'Brasas de carbón vegetal',
    'Cachopo Zaragoza',
    'Restaurante familiar Utebo',
  ],
  authors: [{ name: 'Chef Daniel Pando' }],
  openGraph: {
    title: 'Búa Chaval | Asador Tradicional & Fusión Caribeña en Utebo',
    description:
      'Donde la tradición española y el sabor cubano se encuentran. Disfruta de nuestras brasas al carbón vegetal y ambiente cálido.',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary">
        {children}
      </body>
    </html>
  );
}
