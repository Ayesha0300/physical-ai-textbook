import React from 'react';
import Layout from '@theme/Layout';
import ModuleOverview from '@site/src/components/ModuleOverview';

function Module2Page() {
  const moduleData = {
    title: "Module 2: Digital Twin Simulation",
    description: "Explore digital twin simulation platforms including Gazebo and Unity for creating realistic robot environments.",
    learningObjectives: [
      "Understand digital twin concepts and their importance in robotics",
      "Master Gazebo simulation environment setup",
      "Learn Unity simulation workflows for robotics",
      "Implement sensor simulation and physics modeling",
      "Create and manage simulation environments",
      "Calibrate digital models with real-world data",
      "Integrate simulation with real robot systems"
    ],
    chapters: [
      {
        title: "Introduction to Digital Twins",
        description: "Understanding digital twin concepts in robotics",
        url: "/docs/module2-digital-twin/chapter1-intro"
      },
      {
        title: "Gazebo Simulation Environment",
        description: "Setting up and working with Gazebo simulator",
        url: "/docs/module2-digital-twin/chapter2-gazebo"
      },
      {
        title: "Unity for Robotics",
        description: "Using Unity for advanced robotics simulation",
        url: "/docs/module2-digital-twin/chapter3-unity"
      },
      {
        title: "Sensor Simulation",
        description: "Simulating various robot sensors in virtual environments",
        url: "/docs/module2-digital-twin/chapter4-sensors"
      },
      {
        title: "Environment Modeling",
        description: "Creating realistic simulation environments",
        url: "/docs/module2-digital-twin/chapter5-environments"
      },
      {
        title: "Calibration and Validation",
        description: "Calibrating simulation with real-world data",
        url: "/docs/module2-digital-twin/chapter6-calibration"
      },
      {
        title: "Simulation Integration",
        description: "Connecting simulation to real robot systems",
        url: "/docs/module2-digital-twin/chapter7-integration"
      }
    ],
    nextModule: {
      url: "/docs/module3-isaac/chapter1-from-middleware-to-intelligence",
      title: "Module 3: AI-Robot Brain (NVIDIA Isaac™)"
    },
    prevModule: {
      url: "/docs/module1-ros2/chapter1-why-robots-need-nervous-system",
      title: "Module 1: ROS2 Nervous System"
    }
  };

  return (
    <Layout
      title={`Module 2: Digital Twin Simulation`}
      description="Explore digital twin simulation platforms including Gazebo and Unity for creating realistic robot environments">
      <main className="container mx-auto px-4 py-8">
        <ModuleOverview {...moduleData} />
      </main>
    </Layout>
  );
}

export default Module2Page;