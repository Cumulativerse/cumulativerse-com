import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: process.env.NEXT_PUBLIC_APP_TITLE,
    short_name: process.env.NEXT_PUBLIC_APP_SHORT_NAME,
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    scope: '/',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon384.png',
        sizes: '384x384',
        type: 'image/png',
      },
    ],
  };
}
