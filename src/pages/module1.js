import React from 'react';
import Layout from '@theme/Layout';
import ModuleOverview from '@site/src/components/ModuleOverview';

function Module1Page() {
  const moduleData = {
    title: "Module 1: ROS2 Nervous System",
    description: "Learn how ROS2 serves as the middleware nervous system for robots, enabling distributed components to communicate effectively.",
    learningObjectives: [
      "Understand why robots need a middleware nervous system",
      "Learn ROS2 architecture and core concepts",
      "Master communication primitives like topics, services, and actions",
      "Implement ROS2 nodes in practice",
      "Connect Python AI agents with ROS2 using rclpy",
      "Create robot descriptions with URDF",
      "Bridge digital brain to physical body",
    ],
    requirements: [
      "Basic Python programming knowledge",
      "Understanding of robotics fundamentals",
      "Ubuntu 22.04 or higher",
      "Docker for containerization (recommended)"
    ],
    estimatedTime: "4-6 weeks",
    systemDiagram: "/img/ros2-architecture.svg",
    chapters: [
      {
        title: "Why Robots Need a Nervous System",
        description: "Understanding the need for middleware in robotic systems",
        url: "/docs/module1-ros2/chapter1-why-robots-need-nervous-system"
      },
      {
        title: "ROS2 Architecture Overview",
        description: "Deep dive into ROS2's distributed architecture",
        url: "/docs/module1-ros2/chapter2-ros2-architecture"
      },
      {
        title: "Communication Primitives",
        description: "Topics, services, actions, and parameters in ROS2",
        url: "/docs/module1-ros2/chapter3-communication-primitives"
      },
      {
        title: "ROS2 Nodes in Practice",
        description: "Creating and managing ROS2 nodes",
        url: "/docs/module1-ros2/chapter4-nodes-in-practice"
      },
      {
        title: "Bridging Python AI Agents with ROS2",
        description: "Connecting AI agents to ROS2 using rclpy",
        url: "/docs/module1-ros2/chapter5-bridging-python-ai-agents"
      },
      {
        title: "Robot Description with URDF",
        description: "Creating robot models using Unified Robot Description Format",
        url: "/docs/module1-ros2/chapter6-robot-description-with-urdf"
      },
      {
        title: "From Digital Brain to Physical Body",
        description: "Connecting high-level AI to low-level robot controls",
        url: "/docs/module1-ros2/chapter7-digital-brain-to-physical-body"
      }
    ],
    nextModule: {
      url: "/docs/module2-digital-twin/chapter1-intro",
      title: "Module 2: Digital Twin Simulation"
    },
    prevModule: null // This is the first module
  };

  return (
    <Layout
      title={`Module 1: ROS2 Nervous System`}
      description="Learn how ROS2 serves as the middleware nervous system for robots">
      <main className="container mx-auto px-4 py-8">
        <ModuleOverview {...moduleData} />
      </main>
    </Layout>
  );
}

export default Module1Page;