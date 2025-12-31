import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useColorMode } from '@docusaurus/theme-common';

function NotFound() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();

  return (
    <Layout title="Page Not Found" description="The requested page does not exist">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div className={clsx(
              'text--center padding-vert--xl',
              colorMode === 'dark'
                ? 'bg-gray-800 border-gray-700'
                : 'bg-gray-50 border-gray-200',
              'border rounded-lg'
            )}>
              <div className="margin-bottom--lg">
                <svg
                  className={clsx(
                    'mx-auto',
                    colorMode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  )}
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M30 30 L70 70 M70 30 L30 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="50" cy="40" r="5" fill="currentColor" />
                  <path d="M40 60 Q50 70 60 60" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </div>

              <h1 className="hero__title">Page Not Found</h1>
              <p className={clsx(
                'hero__subtitle',
                colorMode === 'dark' ? 'text-gray-300' : 'text-gray-600'
              )}>
                Oops! We couldn't find the page you're looking for.
              </p>

              <div className="margin-vert--lg">
                <p className={clsx(
                  colorMode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                )}>
                  The page you're looking for might have been moved, renamed, or doesn't exist.
                </p>

                <div className="button-group button-group--block margin-top--lg">
                  <Link className="button button--primary button--lg" to="/">
                    Go to Home
                  </Link>
                  <Link className="button button--secondary button--lg margin-left--md" to="/modules">
                    Browse Modules
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;