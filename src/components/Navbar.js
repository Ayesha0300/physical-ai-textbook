import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useThemeConfig, useMobileSecondaryMenu } from '@docusaurus/theme-common';
import { useLocation } from '@docusaurus/router';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { translate } from '@docusaurus/Translate';
import NavbarItem from '@theme/NavbarItem';
import SearchBar from '@theme/SearchBar';
import { useColorMode } from '@docusaurus/theme-common';

// Simple implementation - we'll add more Tailwind styling later
function Navbar() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { navbar = {} } = siteConfig;
  const { title, logo = {} } = navbar;
  const [sidebarShown, setSidebarShown] = useState(false);
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  const { colorMode, setColorMode } = useColorMode();

  const logoLink = logo.href || useBaseUrl(logo.src || '/');

  return (
    <nav
      className={clsx(
        'navbar',
        'navbar--fixed-top',
        'border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm',
        {
          'navbar-sidebar--show': sidebarShown,
        },
      )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and title */}
          <div className="flex items-center">
            <Link
              href={logoLink}
              className={clsx('navbar__brand', {
                'me-3': logo.href !== '/' && logo.src,
              })}
              {...(logo.href && {
                'aria-label': translate(
                  {
                    id: 'theme.navbar.logo.ariaLabel',
                    message: `Navbar logo for ${title}`,
                    description: 'The ARIA label for the navbar logo',
                  },
                  { title },
                ),
              })}>
              {logo.src && (
                <img
                  src={useBaseUrl(logo.src)}
                  alt={logo.alt}
                  className="navbar__logo h-8 w-auto"
                />
              )}
              {title != null && (
                <strong
                  className={clsx('navbar__title text-lg font-semibold text-gray-900 dark:text-white', {
                    'ms-3': logo.src,
                  })}>
                  {title}
                </strong>
              )}
            </Link>
          </div>

          {/* Center - Navigation items */}
          <div className="hidden md:flex md:items-center md:space-x-8 lg:space-x-10">
            {navbar.items
              .filter((item) => item.position === 'left')
              .map((item, key) => (
                <NavbarItem {...item} key={key} />
              ))}
          </div>

          {/* Right side - Search, theme toggle, GitHub link */}
          <div className="flex items-center space-x-4">
            {/* Search bar */}
            <div className="hidden md:block">
              <SearchBar
                handleSearchBarToggle={setIsSearchBarExpanded}
                isSearchBarExpanded={isSearchBarExpanded}
              />
            </div>

            {/* Theme toggle */}
            <button
              onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}>
              {colorMode === 'light' ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>

            {/* GitHub link */}
            {navbar.items
              .filter((item) => item.position === 'right')
              .map((item, key) => (
                <NavbarItem {...item} key={key} />
              ))}

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              onClick={() => setSidebarShown(!sidebarShown)}
              aria-label="Toggle navigation menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {sidebarShown && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              {navbar.items
                .filter((item) => item.position !== 'right')
                .map((item, key) => (
                  <NavbarItem {...item} key={key} onClick={() => setSidebarShown(false)} />
                ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <SearchBar
                  handleSearchBarToggle={setIsSearchBarExpanded}
                  isSearchBarExpanded={isSearchBarExpanded}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;