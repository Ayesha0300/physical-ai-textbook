import React from 'react';
import Layout from '@theme/Layout';
import HardwareCard from '@site/src/components/HardwareCards/HardwareCard';
import ComparisonTable from '@site/src/components/HardwareCards/ComparisonTable';

// Hardware & Lab pages with card-based layout for hardware tiers
function HardwarePage() {
  const hardwareTiers = [
    {
      id: 'simulation',
      name: 'Simulation Only',
      description: 'Start with simulation to understand concepts before moving to hardware',
      type: 'simulation',
      specifications: {
        os: 'Ubuntu 22.04+',
        gpu: 'Recommended for rendering',
        memory: '8GB RAM minimum, 16GB recommended',
        disk: '50GB free space'
      },
      price: 'Free',
      compatibility: ['Gazebo', 'Isaac Sim', 'Unity'],
      warning: 'GPU acceleration recommended for realistic physics simulation'
    },
    {
      id: 'edge-ai',
      name: 'Edge AI Kit',
      description: 'Complete development kit for AI-powered robotics',
      type: 'edge-ai',
      specifications: {
        processor: 'NVIDIA Jetson Orin AGX',
        memory: '32GB LPDDR5',
        storage: '64GB eMMC',
        ai_performance: '275 TOPS'
      },
      price: '$1,999',
      compatibility: ['ROS 2 Humble', 'Isaac ROS', 'TensorRT'],
      warning: 'Requires Ubuntu 20.04 or 22.04 on host computer'
    },
    {
      id: 'robot',
      name: 'Humanoid Robot',
      description: 'Full humanoid robot platform for advanced development',
      type: 'robot',
      specifications: {
        height: '1.2m',
        weight: '25kg',
        joints: '28 DOF',
        battery_life: '2-3 hours',
        sensors: 'LIDAR, RGB-D Camera, IMU'
      },
      price: '$24,999',
      compatibility: ['ROS 2 Humble', 'MoveIt', 'Nav2'],
      warning: 'Requires dedicated space and safety protocols'
    }
  ];

  const comparisonTable = {
    headers: ['Feature', 'Simulation', 'Edge AI Kit', 'Humanoid Robot'],
    rows: [
      {
        feature: 'Cost',
        values: ['Free', '$1,999', '$24,999']
      },
      {
        feature: 'Development Stage',
        values: ['Early Prototyping', 'AI Development', 'Full Deployment']
      },
      {
        feature: 'Safety Requirements',
        values: ['None', 'Basic', 'Advanced']
      },
      {
        feature: 'Space Requirements',
        values: ['Minimal', 'Small Lab', 'Large Lab']
      },
      {
        feature: 'AI Performance',
        values: ['Host Dependent', '275 TOPS', '275 TOPS + Perception']
      }
    ],
    notes: [
      'Simulation tier is ideal for learning and algorithm development',
      'Edge AI Kit provides balance of cost and capability for AI development',
      'Humanoid Robot enables full end-to-end system testing'
    ]
  };

  return (
    <Layout
      title="Hardware & Lab Setup"
      description="Hardware tiers and lab setup requirements for Physical AI & Humanoid Robotics">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hardware Header */}
          <header className="mb-12 text-center">
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm font-medium mb-4">
              HARDWARE & LAB
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Hardware & Lab Setup
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the right hardware tier for your development stage, from simulation to full humanoid robots. Each tier builds on the previous one.
            </p>
          </header>

          {/* Hardware Tiers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Hardware Tiers</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {hardwareTiers.map((tier, index) => (
                <HardwareCard
                  key={tier.id}
                  name={tier.name}
                  description={tier.description}
                  type={tier.type}
                  specifications={tier.specifications}
                  price={tier.price}
                  compatibility={tier.compatibility}
                  warning={tier.warning}
                />
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Hardware Comparison</h2>
            <ComparisonTable
              headers={comparisonTable.headers}
              rows={comparisonTable.rows}
              notes={comparisonTable.notes}
            />
          </section>

          {/* Lab Setup */}
          <section className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Lab Setup Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Simulation Lab</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Standard computer with Ubuntu 22.04+</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">8GB+ RAM recommended</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Dedicated GPU for rendering (optional)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Physical Lab</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Safety protocols and equipment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Dedicated workspace (minimum 3x3 meters)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Power and network infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Warnings Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Important Warnings</h2>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <div className="flex">
                  <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">GPU Requirements</h3>
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-1">
                      For simulation environments like Gazebo and Isaac Sim, a dedicated GPU with CUDA support is strongly recommended for realistic physics and rendering.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <div className="flex">
                  <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">Safety Protocols</h3>
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-1">
                      Physical robots require comprehensive safety protocols. Ensure adequate space, emergency stop procedures, and safety equipment before operating any physical hardware.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Getting Started</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Start with the simulation tier to understand concepts before moving to hardware. Each tier builds on the previous one.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/docs/hardware/simulation-setup"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Simulation Setup
              </a>
              <a
                href="/docs/hardware/edge-ai-setup"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                Edge AI Setup
              </a>
              <a
                href="/docs/hardware/robot-operation"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
              >
                Robot Operation
              </a>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default HardwarePage;