import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { RootProvider } from 'fumadocs-ui/provider/next';
import PlausibleProvider from 'next-plausible';

import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.sign.pixeldesign.io'),
  title: {
    template: '%s | PxSign Docs',
    default: 'PxSign Docs',
  },
  description:
    'The official documentation for PxSign, the open-source document signing platform.',
  openGraph: {
    siteName: 'PxSign Docs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@documenso',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <PlausibleProvider domain="sign.pixeldesign.io">
          <RootProvider>{children}</RootProvider>
        </PlausibleProvider>
      </body>
    </html>
  );
}
