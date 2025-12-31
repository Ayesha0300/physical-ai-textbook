import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Physical AI & Humanoid Robotics
          </h1>
          <p className={styles.heroSubtitle}>
            Bridging the Digital Brain with the Physical Body
          </p>

          <div className={styles.heroButtons}>
            <Link
              className="button button--primary button--lg"
              to="/intro">
              Get Started
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/modules">
              Explore Modules
            </Link>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardText}>
                <h2 className={styles.heroCardTitle}>
                  AI → Perception → Planning → Action
                </h2>
                <p className={styles.heroCardDescription}>
                  Learn how artificial intelligence connects with physical systems through
                  perception, planning, and action loops. Master the technologies that bring
                  robots to life.
                </p>
              </div>
              <div className={styles.heroCardDiagram}>
                <div className={styles.diagramContainer}>
                  <div className={styles.diagramItem}>
                    <div className={`${styles.diagramIcon} ${styles.diagramIconAI}`}>
                      <span>🧠</span>
                    </div>
                    <div className={styles.diagramLabel}>AI</div>
                  </div>
                  <div className={styles.diagramArrow}>→</div>
                  <div className={styles.diagramItem}>
                    <div className={`${styles.diagramIcon} ${styles.diagramIconPerception}`}>
                      <span>👁️</span>
                    </div>
                    <div className={styles.diagramLabel}>Perception</div>
                  </div>
                  <div className={styles.diagramArrow}>→</div>
                  <div className={styles.diagramItem}>
                    <div className={`${styles.diagramIcon} ${styles.diagramIconPlanning}`}>
                      <span>🎯</span>
                    </div>
                    <div className={styles.diagramLabel}>Planning</div>
                  </div>
                  <div className={styles.diagramArrow}>→</div>
                  <div className={styles.diagramItem}>
                    <div className={`${styles.diagramIcon} ${styles.diagramIconAction}`}>
                      <span>🦾</span>
                    </div>
                    <div className={styles.diagramLabel}>Action</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function CurriculumOverview() {
  const curriculumBlocks = [
    {
      title: 'ROS 2 Control Systems',
      description: 'Master the Robot Operating System for distributed robotics control',
      icon: '⚙️',
      tech: 'ROS',
      link: '/module1-ros2/chapter1-why-robots-need-nervous-system'
    },
    {
      title: 'Simulation with Gazebo & Isaac',
      description: 'Create realistic environments for robot testing and development',
      icon: '🎮',
      tech: 'Gazebo',
      link: '/module2-digital-twin/chapter1-intro'
    },
    {
      title: 'Vision-Language-Action (VLA)',
      description: 'Build robots that perceive, understand, and act in the real world',
      icon: '🤖',
      tech: 'VLA',
      link: '/vla/vla-fundamentals'
    },
    {
      title: 'Autonomous Humanoid Capstone',
      description: 'Apply all concepts in a comprehensive humanoid robotics project',
      icon: '🚀',
      tech: 'Advanced',
      link: '/capstone'
    }
  ];

  return (
    <section className={styles.curriculumSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Curriculum Overview</h2>
          <p className={styles.sectionDescription}>
            A comprehensive learning path designed to take you from fundamentals to advanced applications
          </p>
        </div>

        <div className={styles.curriculumGrid}>
          {curriculumBlocks.map((block, index) => (
            <Link
              key={index}
              to={block.link}
              className={styles.curriculumCard}
            >
              <div className={styles.cardIcon}>{block.icon}</div>
              <h3 className={styles.cardTitle}>{block.title}</h3>
              <p className={styles.cardDescription}>{block.description}</p>
              <div className={styles.cardFooter}>
                <span className={`badge badge--${block.tech.toLowerCase()}`}>
                  {block.tech}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningPath() {
  const learningSteps = [
    {
      icon: '📚',
      title: 'Modules 1-4',
      subtitle: 'Core Technologies',
      description: 'Build a solid foundation in ROS 2, simulation, AI perception, and VLA models'
    },
    {
      icon: '🛠️',
      title: 'Hands-on Labs',
      subtitle: 'Practical Experience',
      description: 'Apply concepts through structured exercises and real-world scenarios'
    },
    {
      icon: '🎯',
      title: 'Capstone Project',
      subtitle: 'Real-world Application',
      description: 'Integrate all skills to build an autonomous humanoid robot system'
    }
  ];

  return (
    <section className={styles.learningPathSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Your Learning Journey</h2>
          <p className={styles.sectionDescription}>
            From foundational concepts to advanced applications, our structured path guides you through Physical AI
          </p>
        </div>

        <div className={styles.learningPathGrid}>
          {learningSteps.map((step, index) => (
            <div key={index} className={styles.learningStepCard}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <div className={styles.stepSubtitle}>{step.subtitle}</div>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: 'Industry-Standard Tools',
      description: 'Learn ROS 2, Gazebo, Isaac Sim, and cutting-edge VLA models used in production robotics',
      icon: '🔧'
    },
    {
      title: 'Hands-On Learning',
      description: 'Build real projects from simulated environments to physical robot deployments',
      icon: '💻'
    },
    {
      title: 'Expert Guidance',
      description: 'Follow a curriculum designed by robotics engineers and AI researchers',
      icon: '👨‍🏫'
    },
    {
      title: 'Community Support',
      description: 'Join a community of learners and practitioners in the Physical AI space',
      icon: '🤝'
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Build the Future?</h2>
          <p className={styles.ctaDescription}>
            Start your journey into Physical AI and humanoid robotics today
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className="button button--primary button--lg"
              to="/intro">
              Start Learning
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/hardware">
              View Hardware Setup
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics"
      description="A comprehensive guide to robotics, AI, and humanoid systems - from ROS 2 to Vision-Language-Action models">
      <HomepageHeader />
      <main>
        <CurriculumOverview />
        <LearningPath />
        <FeaturesSection />
        <CTASection />
      </main>
    </Layout>
  );
}
