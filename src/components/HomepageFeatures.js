import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Physical AI & Humanoid Robotics',
    description: (
      <p>
        Comprehensive guide to robotics, AI, and humanoid systems with practical examples.
      </p>
    ),
  },
  {
    title: 'Modern Learning Experience',
    description: (
      <p>
        Enhanced with Tailwind CSS for a modern, responsive learning experience.
      </p>
    ),
  },
  {
    title: 'Hands-on Approach',
    description: (
      <p>
        Learn by doing with practical exercises and capstone projects.
      </p>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className="rounded-full bg-gray-200 dark:bg-gray-700 w-16 h-16 mx-auto flex items-center justify-center mb-4">
          <span className="text-2xl">🤖</span>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}