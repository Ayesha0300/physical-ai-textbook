import React from 'react';
import clsx from 'clsx';

// System Diagram container component with "Where this fits in the robot" context
function SystemDiagram({ title, description, imageUrl, systemType, children }) {
  const systemConfig = {
    perception: {
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
    },
    control: {
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
    },
    cognition: {
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      border: 'border-purple-200 dark:border-purple-800',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A8 8 0 1118 9.313l.548.547z'
    }
  };

  const config = systemConfig[systemType] || systemConfig.perception;

  return (
    <div className={clsx(
      "rounded-xl border p-6 my-6",
      config.bg,
      config.border
    )}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <svg
            className={clsx("w-6 h-6 mr-2", config.color)}
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
          <h3 className={clsx("text-xl font-semibold", config.color)}>
            {title}
          </h3>
        </div>
        <span className={clsx(
          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
          systemType === 'perception' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' :
          systemType === 'control' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' :
          'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200'
        )}>
          {systemType}
        </span>
      </div>

      {description && (
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>
      )}

      {imageUrl && (
        <div className="mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
          />
        </div>
      )}

      {children && (
        <div className="text-gray-700 dark:text-gray-300">
          {children}
        </div>
      )}

      <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          <strong>Where this fits in the robot:</strong> This component represents the {systemType} aspect of the overall system architecture.
        </p>
      </div>
    </div>
  );
}

export default SystemDiagram;