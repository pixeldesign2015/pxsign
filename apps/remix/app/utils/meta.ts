import { type MessageDescriptor, i18n } from '@lingui/core';
import { NEXT_PUBLIC_WEBAPP_URL } from '@documenso/lib/constants/app';

export const appMetaTags = (title?: MessageDescriptor) => {
  const description =
    'PxSign by Pixel Design — a fast, secure, and beautiful document signing platform. Send documents for signature, create templates, and integrate with your favorite tools.';

  return [
    {
      title: title ? `${i18n._(title)} - PxSign` : 'PxSign by Pixel Design',
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content:
        'PxSign, Pixel Design, document signing, eSignature, DocuSign alternative, open source signing, digital signatures',
    },
    {
      name: 'author',
      content: 'Pixel Design Inc.',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'PxSign - Document Signing by Pixel Design',
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@pixeldesign',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
  ];
};
