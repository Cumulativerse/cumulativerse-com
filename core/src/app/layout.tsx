import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';
import logo from '@/assets/images/logo.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: process.env.NEXT_PUBLIC_APP_SHORT_NAME,
    template: '%s | ' + process.env.NEXT_PUBLIC_APP_SHORT_NAME,
  },
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  keywords: ['cumulativerse'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${inter.className} min-h-screen`}
      >
        <div className="container flex min-h-screen flex-col items-center justify-between p-8">
          {/* Header */}
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              className="h-10 w-fit rounded-xl"
              priority
            />
          </Link>
          {/* Main */}
            {children}
          {/* Footer */}
          <div>
            <span>©{new Date().getFullYear()} — Made by </span>
            <a
              href="https://www.cumulativerse.com"
              className="hover:text-accent underline"
              target="_blank"
              rel="external author"
            >
              Cumulativerse
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
