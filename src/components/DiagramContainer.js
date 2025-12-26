import React from 'react';

// Diagram container component with responsive styling and caption support
function DiagramContainer({ src, alt, caption, className = '', ...props }) {
  return (
    <div className={`my-8 ${className}`}>
      <div className="flex justify-center">
        <figure className="max-w-full">
          <div className="inline-block rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2">
            <img
              src={src}
              alt={alt}
              className="max-w-full h-auto rounded-lg"
              {...props}
            />
          </div>
        </figure>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400 italic">
          {caption}
        </figcaption>
      )}
    </div>
  );
}

export default DiagramContainer;