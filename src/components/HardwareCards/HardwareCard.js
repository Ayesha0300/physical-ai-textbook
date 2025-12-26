import React from 'react';
import clsx from 'clsx';

// Hardware Card component with card-based layout for hardware tiers
function HardwareCard({ name, description, type, specifications, price, compatibility, warning }) {
  const typeConfig = {
    simulation: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      color: 'text-blue-800 dark:text-blue-200',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    'edge-ai': {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      color: 'text-green-800 dark:text-green-200',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    robot: {
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      border: 'border-purple-200 dark:border-purple-800',
      color: 'text-purple-800 dark:text-purple-200',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 7h3m2 0h3m-5 7h3m2 0h3M3 21h18M3 3h18'
    }
  };

  const config = typeConfig[type] || typeConfig.simulation;

  return (
    <div className={clsx(
      "rounded-xl border p-6 hover:shadow-lg transition-shadow duration-200",
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
            {name}
          </h3>
        </div>
        <span className={clsx(
          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
          type === 'simulation' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' :
          type === 'edge-ai' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' :
          'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200'
        )}>
          {type}
        </span>
      </div>

      {description && (
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>
      )}

      {specifications && Object.keys(specifications).length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Specifications:</h4>
          <ul className="space-y-1">
            {Object.entries(specifications).map(([key, value]) => (
              <li key={key} className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400 capitalize">{key.replace(/_/g, ' ')}:</span>
                <span className="text-gray-900 dark:text-white">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {compatibility && compatibility.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Compatibility:</h4>
          <div className="flex flex-wrap gap-1">
            {compatibility.map((item, index) => (
              <span key={index} className="inline-block px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {price && (
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-1">Price:</h4>
          <p className="text-lg font-bold text-gray-900 dark:text-white">{price}</p>
        </div>
      )}

      {warning && (
        <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <div className="flex">
            <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
              {warning}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HardwareCard;