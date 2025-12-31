import React from 'react';
import Layout from '@theme/Layout';
import ModuleCard from '../components/ModuleCard';
import ModulesGrid from '../components/ModulesGrid';

// Sample module data following the ModuleCard entity structure
const modules = [
  {
    id: 'module-1',
    title: 'ROS 2 Control Systems',
    description: 'Learn the fundamentals of ROS 2 for robotics control and communication',
    tools: ['ROS 2', 'Python', 'C++'],
    difficulty: 'Beginner',
    route: '/modules/module-1'
  },
  {
    id: 'module-2',
    title: 'Simulation with Gazebo',
    description: 'Master robotic simulation using Gazebo for testing and development',
    tools: ['Gazebo', 'Simulation', 'Physics'],
    difficulty: 'Intermediate',
    route: '/modules/module-2'
  },
  {
    id: 'module-3',
    title: 'NVIDIA Isaac Sim',
    description: 'Advanced simulation and development with NVIDIA Isaac ecosystem',
    tools: ['Isaac Sim', 'Unity', 'AI'],
    difficulty: 'Advanced',
    route: '/modules/module-3'
  },
  {
    id: 'module-4',
    title: 'Vision-Language-Action (VLA)',
    description: 'Understanding how robots perceive and interact with the world',
    tools: ['Computer Vision', 'LLMs', 'Robotics'],
    difficulty: 'Advanced',
    route: '/modules/module-4'
  }
];

function ModulesPage() {
  return (
    <Layout
      title="Learning Modules"
      description="Explore our comprehensive curriculum designed to guide you through Physical AI and Humanoid Robotics">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-light-text-50 mb-4">
            Learning Modules
          </h1>
          <p className="text-xl text-light-text-200 max-w-3xl mx-auto">
            Explore our comprehensive curriculum designed to guide you through Physical AI and Humanoid Robotics
          </p>
        </div>

        <ModulesGrid modules={modules} />
      </main>
    </Layout>
  );
}

export default ModulesPage;