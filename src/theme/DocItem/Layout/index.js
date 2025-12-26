import React from 'react';
import clsx from 'clsx';
import { useDoc } from '@docusaurus/theme-common/internal';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import ChapterHeader from '@site/src/components/ChapterHeader/ChapterHeader';

// Enhanced DocItem Layout with Tailwind styling
export default function DocItemLayout({ children }) {
  const { frontMatter, content, toc, metadata } = useDoc();
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
    title,
    description,
    tags,
    module,
    learning_objectives: learningObjectives,
    estimated_reading_time: estimatedReadingTime
  } = frontMatter;

  return (
    <>
      <DocItemMetadata />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className={clsx('w-full', { 'lg:w-3/4': !hideTableOfContents })}>
            <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
              <DocVersionBanner />
              <DocVersionBadge />
              <DocBreadcrumbs />
              <ChapterHeader
                title={title}
                estimatedReadingTime={estimatedReadingTime}
                learningObjectives={learningObjectives}
                moduleTag={module}
              />
              <DocItemContent>{children}</DocItemContent>
              <DocItemFooter />
              <DocItemPaginator />
            </div>
          </div>

          {!hideTableOfContents && toc.length > 0 && (
            <div className="lg:w-1/4">
              <div className="sticky top-24 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">On this page</h3>
                <ul className="space-y-2">
                  {toc.map((item, index) => (
                    <li key={index} className={clsx('text-sm', `ml-${(item.level - 2) * 2}`)}>
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}