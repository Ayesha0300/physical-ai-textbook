import React from 'react';
import clsx from 'clsx';

// Callout component with variants for Definitions, Warnings, and System insights
function Callout({ type, title, children, icon }) {
  const calloutConfig = {
    definition: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-800 dark:text-blue-200',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      title: 'Definition'
    },
    warning: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      text: 'text-yellow-800 dark:text-yellow-200',
      icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z',
      title: 'Warning'
    },
    'system-insight': {
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      border: 'border-purple-200 dark:border-purple-800',
      text: 'text-purple-800 dark:text-purple-200',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'System Insight'
    }
  };

  const config = calloutConfig[type] || calloutConfig.definition;

  return (
    <div className={clsx(
      "rounded-lg border p-4 my-6",
      config.bg,
      config.border
    )}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg
            className={clsx("w-6 h-6", config.text)}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={config.icon}
            />
          </svg>
        </div>
        <div className="ml-4">
          <h4 className={clsx("text-lg font-semibold", config.text)}>
            {title || config.title}
          </h4>
          <div className={clsx("mt-2", config.text)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Callout;