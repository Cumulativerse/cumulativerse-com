import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';
import logo from '@/assets/images/logo.png';
// Simple Icons
import {
  SiX,
  SiInstagram,
  SiDiscord,
  SiMedium,
  SiOpensea,
  SiGithub,
  SiMaildotru,
} from '@icons-pack/react-simple-icons';

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
      <body className={`${inter.className} min-h-screen`}>
        <div className="flex min-h-screen flex-col items-center justify-between p-8">
          {/* Header */}
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              className="h-12 w-fit rounded-xl"
              priority
            />
          </Link>
          {/* Main */}
          {children}
          {/* Footer */}
          <div className="grid w-full grid-cols-1 items-center justify-items-center gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3">
            <span>
              IPFS{' '}
              <Link
                href="https://ipfs.io/ipfs/QmVmifbia6WpwYnnEiq6AA3KVwmHUiS6TvkeEpENAg8ex5"
                className="hover:text-accent underline"
                target="_blank"
                rel="noreferrer"
              >
                link
              </Link>{' '}
              for first proposal
            </span>
            {/* prettier-ignore */}
            <div className="flex space-x-2">
              {/* @ts-ignore */}
              <Link href="https://twitter.com/cumulativerse" target="_blank" rel="noreferrer" ><SiX /></Link>
              {/* @ts-ignore */}
              <Link href="https://www.instagram.com/cumulativerse/" target="_blank" rel="noreferrer" ><SiInstagram /></Link>
              {/* @ts-ignore */}
              <Link href="https://discord.com/invite/XJKdhfmD4t" target="_blank" rel="noreferrer" ><SiDiscord /></Link>
              {/* @ts-ignore */}
              <Link href="https://medium.com/@cumulativerse" target="_blank" rel="noreferrer" ><SiMedium /></Link>
              {/* @ts-ignore */}
              <Link href="https://opensea.io/collection/cumulativerse" target="_blank" rel="noreferrer" ><SiOpensea /></Link>
              {/* @ts-ignore */}
              <Link href="https://github.com/Cumulativerse" target="_blank" rel="noreferrer" ><SiGithub /></Link>
              {/* @ts-ignore */}
              <Link href="mail:social@cumulativerse.com" target="_blank" rel="noreferrer" ><SiMaildotru /></Link>
            </div>
            <span className="sm:col-span-2 lg:col-span-1">
              ©{new Date().getFullYear()} — Made by{' '}
              <a
                href="https://www.cumulativerse.com"
                className="hover:text-accent underline"
                target="_blank"
                rel="external author"
              >
                Cumulativerse
              </a>
            </span>
          </div>
        </div>
      </body>
    </html>
  );
}
