import React from 'react';
import clsx from 'clsx';

// Component to display chapter header with metadata
function ChapterHeader({ title, estimatedReadingTime, learningObjectives, moduleTag }) {
  return (
    <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
      <div className="flex flex-wrap items-center gap-4 mb-4">
        {moduleTag && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
            {moduleTag}
          </span>
        )}
        {estimatedReadingTime && (
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {estimatedReadingTime} min read
          </div>
        )}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>

      {learningObjectives && learningObjectives.length > 0 && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Learning Objectives
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            {learningObjectives.map((objective, index) => (
              <li key={index} className="ml-2">{objective}</li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default ChapterHeader;