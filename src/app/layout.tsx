import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import styles from './layout.module.css';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ultrapanel',
  description: 'THe go to app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${styles.body} ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}