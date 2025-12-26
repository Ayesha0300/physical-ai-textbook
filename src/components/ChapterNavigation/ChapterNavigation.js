import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';

// Component for Previous/Next chapter navigation
function ChapterNavigation({ previous, next }) {
  const location = useLocation();

  if (!previous && !next) {
    return null;
  }

  return (
    <nav
      className={clsx(
        'chapter-navigation',
        'flex flex-col sm:flex-row justify-between items-start sm:items-center',
        'pt-8 mt-12 border-t border-gray-200 dark:border-gray-700',
        'gap-4'
      )}
      aria-label="Chapter navigation"
    >
      {previous && (
        <div className="flex-1 min-w-0">
          <Link
            to={previous.permalink}
            className={clsx(
              'inline-flex items-center gap-2',
              'text-base font-medium text-gray-700 hover:text-gray-900',
              'dark:text-gray-300 dark:hover:text-white',
              'transition-colors duration-200',
              'group'
            )}
            aria-label={`Previous: ${previous.title}`}
          >
            <svg
              className={clsx(
                'w-4 h-4',
                'group-hover:-translate-x-0.5',
                'transition-transform duration-200',
                'text-gray-500 dark:text-gray-400'
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="truncate">
              <span className="block text-sm text-gray-500 dark:text-gray-400">Previous</span>
              <span className="block font-medium truncate">{previous.title}</span>
            </span>
          </Link>
        </div>
      )}

      {next && (
        <div className={clsx(
          'flex-1 min-w-0',
          previous ? 'sm:ml-auto text-right' : 'w-full sm:w-auto'
        )}>
          <Link
            to={next.permalink}
            className={clsx(
              'inline-flex items-center justify-end gap-2',
              'text-base font-medium text-gray-700 hover:text-gray-900',
              'dark:text-gray-300 dark:hover:text-white',
              'transition-colors duration-200',
              'group'
            )}
            aria-label={`Next: ${next.title}`}
          >
            <span className="truncate">
              <span className="block text-sm text-gray-500 dark:text-gray-400 text-right">Next</span>
              <span className="block font-medium truncate">{next.title}</span>
            </span>
            <svg
              className={clsx(
                'w-4 h-4',
                'group-hover:translate-x-0.5',
                'transition-transform duration-200',
                'text-gray-500 dark:text-gray-400'
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default ChapterNavigation;