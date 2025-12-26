import React from 'react';
import Layout from '@theme/Layout';
import ModuleOverview from '@site/src/components/ModuleOverview';

function Module4Page() {
  const moduleData = {
    title: "Module 4: Vision-Language-Action (VLA)",
    description: "Explore Vision-Language-Action models for creating intelligent humanoid robots that can understand and execute complex tasks.",
    learningObjectives: [
      "Understand Vision-Language-Action model fundamentals",
      "Implement cognitive planning for robot tasks",
      "Design voice pipeline for human-robot interaction",
      "Integrate LLMs for task planning",
      "Ground visual information for action execution",
      "Connect VLA systems to ROS2 execution",
      "Build complete humanoid capstone project"
    ],
    chapters: [
      {
        title: "VLA Fundamentals",
        description: "Understanding Vision-Language-Action models",
        url: "/docs/vla/vla-fundamentals"
      },
      {
        title: "Cognitive Planning",
        description: "Planning complex tasks using cognitive architectures",
        url: "/docs/vla/cognitive-planning"
      },
      {
        title: "Humanoid Capstone Project",
        description: "Building a complete humanoid robot system",
        url: "/docs/vla/humanoid-capstone"
      }
    ],
    nextModule: null, // This is the final module
    prevModule: {
      url: "/docs/module3-isaac/chapter1-from-middleware-to-intelligence",
      title: "Module 3: AI-Robot Brain (NVIDIA Isaac™)"
    }
  };

  return (
    <Layout
      title={`Module 4: Vision-Language-Action (VLA)`}
      description="Explore Vision-Language-Action models for creating intelligent humanoid robots that can understand and execute complex tasks">
      <main className="container mx-auto px-4 py-8">
        <ModuleOverview {...moduleData} />
      </main>
    </Layout>
  );
}

export default Module4Page;