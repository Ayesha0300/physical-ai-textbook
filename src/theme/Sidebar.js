import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { translate } from '@docusaurus/Translate';

// Enhanced sidebar with Tailwind styling
function Sidebar({ sidebar, className }) {
  const location = useLocation();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Toggle sidebar on mobile
  useEffect(() => {
    setIsSidebarVisible(false);
  }, [location]);

  return (
    <aside
      className={clsx(
        'sidebar',
        'border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900',
        'w-full md:w-64 lg:w-72',
        'md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:flex-shrink-0',
        'transition-all duration-300',
        className,
      )}>
      <nav
        className={clsx(
          'menu',
          'py-4 px-2 md:py-6 md:px-4',
          'h-full overflow-y-auto',
          ThemeClassNames.docs.docSidebarMenu,
        )}
        aria-label={translate({
          id: 'theme.docs.sidebar.navAriaLabel',
          message: 'Docs sidebar',
          description: 'The ARIA label for the sidebar navigation',
        })}>
        <ul className="menu__list">
          {sidebar.map((item, index) => (
            <SidebarItem
              key={index}
              item={item}
              onClick={() => {
                // Close sidebar on mobile after clicking
                if (window.innerWidth < 768) {
                  setIsSidebarVisible(false);
                }
              }}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

// Sidebar item component with Tailwind styling
function SidebarItem({ item, onClick, level = 0 }) {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine if the current item is active
  const isActive = item.type === 'doc' && location.pathname === useBaseUrl(item.href);

  // Auto-expand items that contain the active page
  useEffect(() => {
    if (isActive && level === 0) {
      setIsExpanded(true);
    }
  }, [isActive, level]);

  // Handle category items (collapsible sections)
  if (item.type === 'category') {
    return (
      <li
        className={clsx('menu__list-item', {
          'menu__list-item--collapsed': !isExpanded,
        })}>
        <button
          type="button"
          className={clsx(
            'menu__link',
            'flex items-center justify-between w-full',
            'text-left py-2 px-3 rounded-lg',
            'hover:bg-gray-100 dark:hover:bg-gray-800',
            'transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-primary-500',
            level === 0 ? 'font-semibold text-base' : 'font-medium text-sm',
            level > 0 ? 'ml-2' : '',
          )}
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}>
          <span>{item.label}</span>
          <svg
            className={clsx(
              'w-4 h-4 transition-transform duration-200',
              isExpanded ? 'rotate-90' : '',
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {item.items.length > 0 && (
          <ul
            className={clsx('menu__list', {
              'hidden': !isExpanded,
              'mt-2': level === 0,
              'mt-1': level > 0,
            })}>
            {item.items.map((childItem, index) => (
              <SidebarItem
                key={index}
                item={childItem}
                onClick={onClick}
                level={level + 1}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }

  // Handle regular doc links
  if (item.type === 'doc') {
    return (
      <li className="menu__list-item">
        <Link
          className={clsx(
            'menu__link',
            'block py-2 px-3 rounded-lg',
            'hover:bg-gray-100 dark:hover:bg-gray-800',
            'transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-primary-500',
            isActive
              ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 font-semibold'
              : 'text-gray-700 dark:text-gray-300',
            level === 0 ? 'font-medium' : 'text-sm',
            level > 0 ? 'ml-4' : '',
          )}
          to={item.href}
          onClick={onClick}>
          {item.label}
        </Link>
      </li>
    );
  }

  // Handle external links
  if (item.type === 'link') {
    return (
      <li className="menu__list-item">
        <a
          className={clsx(
            'menu__link',
            'block py-2 px-3 rounded-lg',
            'hover:bg-gray-100 dark:hover:bg-gray-800',
            'transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-primary-500',
            'text-gray-700 dark:text-gray-300',
            level === 0 ? 'font-medium' : 'text-sm',
            level > 0 ? 'ml-4' : '',
          )}
          href={item.href}
          target={item.target || '_blank'}
          rel={item.rel || 'noopener noreferrer'}
          onClick={onClick}>
          {item.label}
        </a>
      </li>
    );
  }

  // Fallback for other item types
  return (
    <li className="menu__list-item">
      <span className="menu__link text-gray-500 dark:text-gray-500 text-sm">
        {item.label}
      </span>
    </li>
  );
}

export default Sidebar;