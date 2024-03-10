import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Layout from '../components/Layout/Layout';
import 'react-tooltip/dist/react-tooltip.css';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'My story',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
