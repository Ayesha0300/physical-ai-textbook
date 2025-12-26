import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';

// Module Overview Component
function ModuleOverview({ title, description, learningObjectives, chapters, requirements, estimatedTime, systemDiagram, nextModule, prevModule }) {
  const { colorMode } = useColorMode();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{description}</p>
      </header>

      {/* Module Info Cards */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Requirements Section */}
        {requirements && requirements.length > 0 && (
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Requirements
            </h2>
            <ul className="space-y-2">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Time Commitment Section */}
        {estimatedTime && (
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Time Commitment
            </h2>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{estimatedTime}</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Estimated time to complete this module</p>
          </div>
        )}
      </section>

      {/* Learning Objectives Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <svg className="w-6 h-6 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Learning Objectives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {learningObjectives.map((objective, index) => (
            <div
              key={index}
              className="flex items-start p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-600 dark:text-primary-300">{index + 1}</span>
                </div>
              </div>
              <p className="ml-3 text-gray-700 dark:text-gray-300">{objective}</p>
            </div>
          ))}
        </div>
      </section>

      {/* System Diagram Preview */}
      {systemDiagram && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <svg className="w-6 h-6 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            System Architecture
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <p className="mt-4 text-gray-500 dark:text-gray-400">System diagram visualization</p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Module-specific architecture</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Module Roadmap */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <svg className="w-6 h-6 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Module Roadmap
        </h2>
        <div className="space-y-4">
          {chapters.map((chapter, index) => (
            <div key={index} className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                <span className="text-sm font-bold text-primary-600 dark:text-primary-300">{index + 1}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{chapter.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{chapter.description}</p>
              </div>
              <Link
                to={chapter.url}
                className="ml-4 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Start
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
        <div className="flex justify-between">
          {prevModule && (
            <Link
              to={prevModule.url}
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              ← Previous Module
            </Link>
          )}
          {nextModule && (
            <Link
              to={nextModule.url}
              className="ml-auto px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Next Module →
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}

export default ModuleOverview;