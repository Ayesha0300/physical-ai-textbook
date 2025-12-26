import React from 'react';
import clsx from 'clsx';

// Comparison Table component for hardware comparisons
function ComparisonTable({ headers, rows, notes }) {
  return (
    <div className="overflow-x-auto my-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className={clsx(
                  "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider",
                  "text-gray-500 dark:text-gray-400"
                )}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                {row.feature}
              </td>
              {row.values.map((value, valueIndex) => (
                <td
                  key={valueIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {notes && notes.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-800 px-6 py-3 border-t border-gray-200 dark:border-gray-700">
          <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
            {notes.map((note, index) => (
              <li key={index} className="flex">
                <span className="mr-2">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ComparisonTable;