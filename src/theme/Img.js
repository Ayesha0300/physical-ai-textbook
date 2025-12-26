import React from 'react';
import OriginalImg from '@theme-original/Img';

// Enhanced image component with responsive containers and Tailwind styling
export default function Img(props) {
  const { className, style, ...rest } = props;

  return (
    <div className="my-6 flex justify-center">
      <div className="max-w-full">
        <OriginalImg
          className={`rounded-lg shadow-md ${className || ''}`}
          style={{ maxWidth: '100%', height: 'auto', ...style }}
          {...rest}
        />
      </div>
    </div>
  );
}