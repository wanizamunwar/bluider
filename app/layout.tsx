import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Meridian Properties — Building Spaces for Better Living',
  description: 'Quality apartments and thoughtfully planned developments in Karachi. Clear pricing, flexible payment plans, and trusted construction standards.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-bg text-brand-fg font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
