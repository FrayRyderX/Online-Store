import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import Navbar from './components/Navbar';

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Online-Store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Navbar/ >
        {children}
      </body>
    </html>
  );
}
