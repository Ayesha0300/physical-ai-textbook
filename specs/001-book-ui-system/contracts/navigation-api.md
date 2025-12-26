# UI Interaction Contracts: Physical AI & Humanoid Robotics Book

## Navigation API

### GET /api/navigation/modules
**Description**: Retrieve the complete navigation structure for all modules

**Response**:
```json
{
  "modules": [
    {
      "id": "module1-ros2",
      "title": "Module 1: ROS2 Nervous System",
      "focus": "ROS 2 as the middleware nervous system for robot intelligence",
      "chapters": [
        {
          "id": "chapter1-why-robots-need-nervous-system",
          "title": "Why Robots Need a Nervous System",
          "href": "/docs/module1-ros2/chapter1-why-robots-need-nervous-system",
          "active": false,
          "progress": 0
        }
      ],
      "active": false,
      "progress": 0
    }
  ]
}
```

### GET /api/navigation/current
**Description**: Retrieve the current navigation state based on URL

**Response**:
```json
{
  "currentModule": {
    "id": "module1-ros2",
    "title": "Module 1: ROS2 Nervous System"
  },
  "currentChapter": {
    "id": "chapter1-why-robots-need-nervous-system",
    "title": "Why Robots Need a Nervous System"
  },
  "previousChapter": {
    "id": "intro",
    "title": "Introduction",
    "href": "/docs/intro"
  },
  "nextChapter": {
    "id": "chapter2-ros2-architecture",
    "title": "ROS2 Architecture",
    "href": "/docs/module1-ros2/chapter2-ros2-architecture"
  },
  "moduleProgress": 12
}
```

## Theme API

### GET /api/theme/config
**Description**: Retrieve current theme configuration

**Response**:
```json
{
  "mode": "dark",
  "primaryColor": "#1e40af",
  "perceptionColor": "#3b82f6",
  "controlColor": "#22c55e",
  "cognitionColor": "#a855f7",
  "typography": {
    "fontFamily": "Inter, sans-serif",
    "lineHeight": 1.6,
    "maxWidth": "65ch"
  }
}
```

### POST /api/theme/toggle
**Description**: Toggle between dark and light mode

**Request**:
```json
{
  "mode": "light"
}
```

**Response**:
```json
{
  "mode": "light",
  "updated": true
}
```

## Content API

### GET /api/content/chapter/{moduleId}/{chapterId}
**Description**: Retrieve specific chapter content with metadata

**Response**:
```json
{
  "id": "chapter1-why-robots-need-nervous-system",
  "title": "Why Robots Need a Nervous System",
  "moduleId": "module1-ros2",
  "estimatedReadingTime": 8,
  "learningObjectives": [
    "Understand why robots need a communication system",
    "Identify the challenges of robot coordination",
    "Compare ROS2 to other communication frameworks"
  ],
  "systemContext": "Where this fits in the robot: The communication layer that enables all other systems to work together",
  "content": "<rendered markdown content>",
  "previousChapter": "/docs/intro",
  "nextChapter": "/docs/module1-ros2/chapter2-ros2-architecture"
}
```

## Hardware API

### GET /api/hardware/tiers
**Description**: Retrieve hardware tier comparison data

**Response**:
```json
{
  "tiers": [
    {
      "id": "simulation",
      "name": "Simulation Only",
      "description": "Start with simulation to understand concepts",
      "components": [
        {
          "id": "gazebo",
          "name": "Gazebo Simulation",
          "type": "simulation",
          "specifications": {
            "os": "Ubuntu 22.04+",
            "gpu": "Recommended for rendering"
          }
        }
      ],
      "requirements": [
        "Ubuntu 22.04 or higher",
        "8GB RAM minimum, 16GB recommended"
      ],
      "warning": "GPU acceleration recommended for realistic physics simulation"
    }
  ],
  "comparisonTable": {
    "headers": ["Feature", "Simulation", "Edge AI Kit", "Robot"],
    "rows": [
      {
        "feature": "Cost",
        "values": ["Free", "$2,000", "$20,000+"]
      }
    ]
  }
}
```