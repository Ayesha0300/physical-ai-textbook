# Data Model: Book UI/UX System for Physical AI & Humanoid Robotics

## UI Components

### Navigation System
- **NavbarItem**
  - id: string
  - label: string
  - href: string
  - position: 'left' | 'right'
  - icon?: string
  - active: boolean

- **SidebarCategory**
  - id: string
  - label: string
  - items: SidebarItem[]
  - collapsed: boolean
  - collapsible: boolean

- **SidebarItem**
  - id: string
  - label: string
  - href: string
  - type: 'link' | 'doc'
  - active: boolean
  - progress?: number (0-100)

### Content Structure
- **Module**
  - id: string
  - title: string
  - focus: string
  - description: string
  - learningOutcomes: string[]
  - requirements: string[]
  - estimatedTime: string
  - chapters: Chapter[]
  - systemDiagram?: string
  - ctaText: string
  - ctaHref: string

- **Chapter**
  - id: string
  - title: string
  - module: string
  - content: string
  - estimatedReadingTime: number (minutes)
  - learningObjectives: string[]
  - previousChapter?: string
  - nextChapter?: string
  - systemContext?: string ("Where this fits in the robot")

### UI Elements
- **Callout**
  - type: 'definition' | 'warning' | 'system-insight'
  - title: string
  - content: string
  - icon?: string

- **SystemDiagram**
  - title: string
  - description: string
  - imageUrl: string
  - systemType: 'perception' | 'control' | 'cognition'
  - color: 'blue' | 'green' | 'purple'

- **HardwareTier**
  - id: string
  - name: string
  - description: string
  - components: HardwareComponent[]
  - requirements: string[]
  - comparisonTable: ComparisonTable
  - warning?: string

- **HardwareComponent**
  - id: string
  - name: string
  - type: 'simulation' | 'edge-ai' | 'robot'
  - specifications: object
  - price?: string
  - compatibility: string[]

- **ComparisonTable**
  - headers: string[]
  - rows: ComparisonRow[]
  - notes: string[]

- **ComparisonRow**
  - feature: string
  - values: string[]

### Theme System
- **ThemeConfig**
  - mode: 'dark' | 'light'
  - primaryColor: string
  - perceptionColor: 'blue'
  - controlColor: 'green'
  - cognitionColor: 'purple'
  - typography: TypographyConfig

- **TypographyConfig**
  - fontFamily: string
  - fontSize: string
  - lineHeight: number
  - maxWidth: string (for reading width)

### Capstone Mission
- **CapstoneMission**
  - id: string
  - title: string
  - briefing: string
  - objectives: string[]
  - pipeline: PipelineStage[]
  - systemArchitecture: string
  - successCriteria: string[]

- **PipelineStage**
  - id: string
  - name: string
  - description: string
  - color: 'blue' | 'green' | 'purple' (for voice→LLM→Plan→ROS→Navigation→Vision→Manipulation)