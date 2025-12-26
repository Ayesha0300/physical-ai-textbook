import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';

// Enhanced Admonition component with Tailwind styling
const admonitionTypes = {
  note: {
    infimaClassName: 'secondary',
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        height="14"
        viewBox="0 0 14 14"
        width="14">
        <path d="M7,3.5A0.5,0.5,0,0,1,7.5,3h5A0.5,0.5,0,0,1,13,3.5v5a0.5,0.5,0,0,1-.5,0.5H7.815l-2.1,2.1a0.5,0.5,0,0,1-.71,0L1.5,7.815V3.5A0.5,0.5,0,0,1,2,3Z" />
      </svg>
    ),
    label: (
      <Translate
        id="theme.admonition.note"
        description="The default label used for the Note admonition (:::note)">
        note
      </Translate>
    ),
  },
  tip: {
    infimaClassName: 'success',
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        height="14"
        viewBox="0 0 14 14"
        width="14">
        <path d="M7,3.5A0.5,0.5,0,0,1,7.5,3h5A0.5,0.5,0,0,1,13,3.5v5a0.5,0.5,0,0,1-.5,0.5H7.815l-2.1,2.1a0.5,0.5,0,0,1-.71,0L1.5,7.815V3.5A0.5,0.5,0,0,1,2,3Z" />
      </svg>
    ),
    label: (
      <Translate
        id="theme.admonition.tip"
        description="The default label used for the Tip admonition (:::tip)">
        tip
      </Translate>
    ),
  },
  danger: {
    infimaClassName: 'danger',
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        height="14"
        viewBox="0 0 14 14"
        width="14">
        <path d="M7,13A6,6,0,1,1,13,7,6,6,0,0,1,7,13ZM6.5,3.5h1v6h-1ZM7,11a0.75,0.75,0,1,0,.75-0.75A0.75,0.75,0,0,0,7,11Z" />
      </svg>
    ),
    label: (
      <Translate
        id="theme.admonition.danger"
        description="The default label used for the Danger admonition (:::danger)">
        danger
      </Translate>
    ),
  },
  info: {
    infimaClassName: 'info',
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        height="14"
        viewBox="0 0 14 14"
        width="14">
        <path d="M7,3.5A0.5,0.5,0,0,1,7.5,3h5A0.5,0.5,0,0,1,13,3.5v5a0.5,0.5,0,0,1-.5,0.5H7.815l-2.1,2.1a0.5,0.5,0,0,1-.71,0L1.5,7.815V3.5A0.5,0.5,0,0,1,2,3Z" />
      </svg>
    ),
    label: (
      <Translate
        id="theme.admonition.info"
        description="The default label used for the Info admonition (:::info)">
        info
      </Translate>
    ),
  },
  caution: {
    infimaClassName: 'warning',
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        height="14"
        viewBox="0 0 14 14"
        width="14">
        <path d="M7,13a6,6,0,1,1,6-6A6,6,0,0,1,7,13ZM6.5,3.5h1v6h-1ZM7,11a0.75,0.75,0,1,0,.75-0.75A0.75,0.75,0,0,0,7,11Z" />
      </svg>
    ),
    label: (
      <Translate
        id="theme.admonition.caution"
        description="The default label used for the Caution admonition (:::caution)">
        caution
      </Translate>
    ),
  },
};

function Admonition(props) {
  const { children, type = 'tip', title, icon: iconProp } = props;
  const typeConfig = admonitionTypes[type] ?? admonitionTypes.tip;
  const titleLabel = title ?? typeConfig.label;
  const icon = iconProp ?? typeConfig.icon;

  return (
    <div
      className={clsx(
        'alert',
        'my-6 rounded-lg border-l-4 p-4 shadow-sm',
        {
          'border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200': type === 'info',
          'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-200': type === 'tip' || type === 'success',
          'border-yellow-500 bg-yellow-50 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200': type === 'caution' || type === 'warning',
          'border-red-500 bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-200': type === 'danger',
          'border-gray-500 bg-gray-50 text-gray-800 dark:bg-gray-800/30 dark:text-gray-200': type === 'note',
        }
      )}>
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-0.5 text-current">
          {icon}
        </div>
        <div className="ml-3 flex-1">
          <h5 className="font-semibold text-current">
            {titleLabel}
          </h5>
          <div className="mt-2 text-current">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admonition;