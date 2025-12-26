import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';

// Enhanced sidebar component for module navigation
function Sidebar({ sidebar }) {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const renderItems = (items, level = 0) => {
    return items.map((item, index) => {
      if (item.type === 'category') {
        const isExpanded = expandedCategories[`${item.label}-${index}`] ?? !item.collapsed;
        const isActive = location.pathname.includes(item.items.some(subItem =>
          typeof subItem === 'string' ?
            location.pathname.includes(subItem) :
            subItem.items?.some(grandChild =>
              typeof grandChild === 'string' ?
                location.pathname.includes(grandChild) :
                location.pathname.includes(grandChild.href || grandChild.docId)
            )
        ));

        return (
          <div key={`${item.label}-${index}`} className={clsx("mb-2", { "ml-4": level > 0 })}>
            <button
              onClick={() => toggleCategory(`${item.label}-${index}`)}
              className={clsx(
                "flex items-center justify-between w-full text-left py-2 px-3 rounded-lg transition-colors duration-200",
                "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
                { "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300": isActive }
              )}
            >
              <span className="font-medium">{item.label}</span>
              <svg
                className={clsx(
                  "w-4 h-4 transition-transform duration-200",
                  { "transform rotate-180": isExpanded }
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isExpanded && (
              <div className="mt-2 space-y-1">
                {renderItems(item.items, level + 1)}
              </div>
            )}
          </div>
        );
      } else if (item.type === 'link' || typeof item === 'string') {
        const href = typeof item === 'string' ? `/docs/${item}` : item.href || item.docId;
        const label = typeof item === 'string' ? item.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : item.label;
        const isActive = location.pathname === href;

        return (
          <Link
            key={typeof item === 'string' ? item : item.href || item.docId}
            to={href}
            className={clsx(
              "block py-2 px-3 rounded-lg transition-colors duration-200",
              "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
              { "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium": isActive }
            )}
          >
            {label}
          </Link>
        );
      }

      return null;
    });
  };

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Table of Contents</h2>
        <nav className="space-y-1">
          {renderItems(sidebar.tutorialSidebar)}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;