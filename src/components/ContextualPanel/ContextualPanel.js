import React from 'react';
import clsx from 'clsx';

// Contextual panel for glossary, chatbot, and notes
function ContextualPanel({ title, children, isOpen, onToggle, position = 'right' }) {
  if (!children) return null;

  return (
    <div className={clsx(
      "fixed top-16 h-[calc(100vh-4rem)] z-40 transition-transform duration-300 ease-in-out",
      position === 'right' ? "right-0" : "left-0",
      isOpen ? "translate-x-0" : position === 'right' ? "translate-x-full" : "-translate-x-full"
    )}>
      <div className="w-80 h-full bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 shadow-lg overflow-y-auto">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title || 'Context'}
          </h3>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

// Default export with toggle functionality
function ContextualPanelWithToggle({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  React.useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  if (!children) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-24 z-50 p-2 bg-gray-800 text-white rounded-l-lg shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-label={isOpen ? "Close context panel" : "Open context panel"}
      >
        <svg
          className={clsx("w-5 h-5 transition-transform duration-200", isOpen ? "rotate-180" : "")}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <ContextualPanel
        title={title}
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      >
        {children}
      </ContextualPanel>
    </>
  );
}

export default ContextualPanelWithToggle;