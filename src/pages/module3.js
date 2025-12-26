import React from 'react';
import Layout from '@theme/Layout';
import ModuleOverview from '@site/src/components/ModuleOverview';

function Module3Page() {
  const moduleData = {
    title: "Module 3: AI-Robot Brain (NVIDIA Isaac™)",
    description: "Dive into NVIDIA Isaac™ platform for creating AI-powered robot brains with perception, localization, and planning capabilities.",
    learningObjectives: [
      "Transition from middleware to intelligent systems",
      "Understand NVIDIA Isaac™ platform architecture",
      "Master Isaac Sim for photorealistic simulation",
      "Generate synthetic data for robot training",
      "Implement Visual SLAM for humanoid robots",
      "Use Isaac ROS for hardware-accelerated perception",
      "Navigate with Nav2 and coordinate complex tasks"
    ],
    chapters: [
      {
        title: "From Middleware to Intelligence",
        description: "Understanding the transition from ROS2 to AI-powered systems",
        url: "/docs/module3-isaac/chapter1-from-middleware-to-intelligence"
      },
      {
        title: "NVIDIA Isaac™ Platform Overview",
        description: "Comprehensive introduction to Isaac platform",
        url: "/docs/module3-isaac/chapter2-nvidia-isaac-platform-overview"
      },
      {
        title: "Isaac Sim Photorealistic Simulation",
        description: "Creating photorealistic simulation environments",
        url: "/docs/module3-isaac/chapter3-isaac-sim-photorealistic-simulation"
      },
      {
        title: "Synthetic Data Generation",
        description: "Generating training data using Isaac Sim",
        url: "/docs/module3-isaac/chapter4-synthetic-data-generation"
      },
      {
        title: "Visual SLAM for Humanoid Robots",
        description: "Implementing Simultaneous Localization and Mapping",
        url: "/docs/module3-isaac/chapter5-visual-slam-humanoid-robots"
      },
      {
        title: "Isaac ROS Hardware-Accelerated Perception",
        description: "Using Isaac ROS for accelerated perception tasks",
        url: "/docs/module3-isaac/chapter6-isaac-ros-hardware-accelerated-perception"
      },
      {
        title: "Navigation with Nav2",
        description: "Robot navigation using Nav2 framework",
        url: "/docs/module3-isaac/chapter7-navigation-with-nav2"
      },
      {
        title: "Coordinating Perception, Localization, and Planning",
        description: "Integrating all components for intelligent behavior",
        url: "/docs/module3-isaac/chapter8-coordinating-perception-localization-planning"
      }
    ],
    nextModule: {
      url: "/docs/vla/vla-fundamentals",
      title: "Module 4: Vision-Language-Action (VLA)"
    },
    prevModule: {
      url: "/docs/module2-digital-twin/chapter1-intro",
      title: "Module 2: Digital Twin Simulation"
    }
  };

  return (
    <Layout
      title={`Module 3: AI-Robot Brain (NVIDIA Isaac™)`}
      description="Dive into NVIDIA Isaac™ platform for creating AI-powered robot brains with perception, localization, and planning capabilities">
      <main className="container mx-auto px-4 py-8">
        <ModuleOverview {...moduleData} />
      </main>
    </Layout>
  );
}

export default Module3Page;