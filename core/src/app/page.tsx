'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="prose lg:prose-xl my-4 text-center">
        <h1>Projects</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Bupo:</h2>
            <p>Business Portal for companies</p>
            <p>
              Build over most popular open source ERP system:{' '}
              <Link
                href="https://www.odoo.com"
                className="hover:text-accent underline"
                target="_blank"
                rel="noreferrer"
              >
                Odoo
              </Link>
            </p>
            <div className="card-actions justify-end">
              <Link href={'https://bupo.app'} className="btn btn-primary">
                Go to App
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">App Template:</h2>
            <p>Javascript App template for fellow developers </p>
            <p>
              Use same code to write website, browser extension, mobile and
              desktop app
            </p>
            <div className="card-actions justify-end">
              <Link
                href={'https://github.com/Cumulativerse/js-app-template'}
                className="btn btn-primary"
              >
                Github
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Cupapp:</h2>
            <p>Serverless utility app collection for users to use freely</p>
            <p>Includes image processing, direct file sharing etc.</p>
            <p>Can be used from browser, PWA, mobile app, desktop app</p>
            <div className="card-actions justify-end">
              <div className="btn btn-disabled">Web Coming Soon</div>
              <Link
                href={'https://github.com/Cumulativerse/cupapp'}
                className="btn btn-primary"
              >
                Github
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Coming projects:</h2>
            <p>1. Free to play game fully on blockchain with Godot</p>
            <p>2. Decentralized Discord</p>
            <p>3. Social Network on substrate blockchain</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
