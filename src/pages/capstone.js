import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

// Capstone page with mission briefing treatment
function CapstonePage() {
  const capstoneData = {
    title: 'Capstone Project: Autonomous Humanoid Robot',
    briefing: 'In this capstone project, you will integrate all the systems learned throughout the modules to create an autonomous humanoid robot capable of understanding voice commands, planning actions, and executing them in the physical world.',
    objectives: [
      'Integrate VLA (Vision-Language-Action) pipeline for human-robot interaction',
      'Coordinate perception, control, and cognition systems',
      'Implement safe navigation and manipulation',
      'Deploy end-to-end system on physical or simulated robot'
    ],
    pipeline: [
      {
        id: 'voice',
        name: 'Voice',
        description: 'Human speaks command to robot',
        color: 'text-blue-600 dark:text-blue-400'
      },
      {
        id: 'llm',
        name: 'LLM',
        description: 'Large Language Model interprets command and creates plan',
        color: 'text-purple-600 dark:text-purple-400'
      },
      {
        id: 'plan',
        name: 'Plan',
        description: 'High-level task decomposition into executable steps',
        color: 'text-purple-600 dark:text-purple-400'
      },
      {
        id: 'ros',
        name: 'ROS',
        description: 'Robot Operating System coordinates execution',
        color: 'text-green-600 dark:text-green-400'
      },
      {
        id: 'navigation',
        name: 'Navigation',
        description: 'Robot navigates to required locations',
        color: 'text-green-600 dark:text-green-400'
      },
      {
        id: 'vision',
        name: 'Vision',
        description: 'Perception system identifies objects and environment',
        color: 'text-blue-600 dark:text-blue-400'
      },
      {
        id: 'manipulation',
        name: 'Manipulation',
        description: 'Robot performs required physical actions',
        color: 'text-green-600 dark:text-green-400'
      }
    ],
    systemArchitecture: 'The capstone system architecture integrates all modules: ROS2 for communication (blue), Digital Twin for simulation (blue), AI-Robot Brain for intelligence (purple), and VLA for interaction (blue/green/purple).',
    successCriteria: [
      'Robot successfully interprets and executes natural language commands',
      'System demonstrates safe navigation and manipulation',
      'All subsystems integrate seamlessly',
      'Performance meets specified metrics'
    ]
  };

  return (
    <Layout
      title={capstoneData.title}
      description="Capstone project integrating all modules to create an autonomous humanoid robot">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Capstone Header */}
          <header className="mb-12 text-center">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200 rounded-full text-sm font-medium mb-4">
              CAPSTONE PROJECT
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {capstoneData.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {capstoneData.briefing}
            </p>
          </header>

          {/* Mission Objectives */}
          <section className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Mission Objectives</h2>
            <ul className="space-y-4">
              {capstoneData.objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-600 dark:text-purple-300">{index + 1}</span>
                    </div>
                  </div>
                  <p className="ml-4 text-gray-700 dark:text-gray-300 text-lg">{objective}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Visual Pipeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">System Pipeline</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
                {capstoneData.pipeline.map((stage, index) => (
                  <React.Fragment key={index}>
                    <div className="text-center">
                      <div className={`w-24 h-24 rounded-full border-4 border-dashed flex items-center justify-center ${index % 2 === 0 ? 'border-purple-300 dark:border-purple-600' : 'border-blue-300 dark:border-blue-600'}`}>
                        <div className="text-center">
                          <div className={`text-lg font-bold ${stage.color}`}>{stage.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stage.description}</div>
                        </div>
                      </div>
                    </div>
                    {index < capstoneData.pipeline.length - 1 && (
                      <div className="hidden md:block">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    )}
                    {index < capstoneData.pipeline.length - 1 && (
                      <div className="md:hidden flex justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          {/* System Architecture */}
          <section className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">System Architecture</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{capstoneData.systemArchitecture}</p>
            <div className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">System architecture diagram</span>
            </div>
          </section>

          {/* Success Criteria */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Success Criteria</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {capstoneData.successCriteria.map((criteria, index) => (
                <div key={index} className="flex items-start p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 dark:text-gray-300">{criteria}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Project Resources */}
          <section className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Resources</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                to="/docs/capstone/project-template"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow text-center"
              >
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="font-semibold text-gray-900 dark:text-white">Project Template</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Get started with our capstone project template</p>
              </Link>
              <Link
                to="/docs/capstone/submission-guidelines"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow text-center"
              >
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h3 className="font-semibold text-gray-900 dark:text-white">Guidelines</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Submission requirements and evaluation criteria</p>
              </Link>
              <Link
                to="/docs/capstone/evaluation-rubric"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow text-center"
              >
                <svg className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
                <h3 className="font-semibold text-gray-900 dark:text-white">Evaluation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Rubric for project assessment</p>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Begin?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your capstone project by reviewing the project template and guidelines.
            </p>
            <Link
              to="/docs/capstone/project-template"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Capstone Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default CapstonePage;