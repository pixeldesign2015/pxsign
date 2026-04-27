import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://docs.sign.pixeldesign.io',
    sitemap: 'https://docs.sign.pixeldesign.io/sitemap.xml',
  };
}
