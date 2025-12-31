# Data Model: UI/UX & Landing Page Design for Physical AI Book

## Entities

### Module Card
- **Entity Name**: ModuleCard
- **Fields**:
  - id: string (unique identifier)
  - title: string (module title)
  - description: string (focus description)
  - tools: string[] (key tools like ROS 2, Gazebo, Isaac)
  - difficulty: string (Beginner/Intermediate/Advanced)
  - route: string (routing path like /modules/module-x)
  - icon: string (optional icon name/class)
- **Validation Rules**:
  - title is required and must be 1-100 characters
  - description is required and must be 1-500 characters
  - difficulty must be one of "Beginner", "Intermediate", "Advanced"
  - route must follow pattern /modules/module-[number]
- **Relationships**: None

### Navigation Item
- **Entity Name**: NavigationItem
- **Fields**:
  - label: string (display text)
  - route: string (navigation path)
  - position: string ("left", "right", "footer")
  - isActive: boolean (current page indicator)
  - subItems: NavigationItem[] (optional nested navigation)
- **Validation Rules**:
  - label is required
  - route is required and must be valid URL path
- **Relationships**: Self-referencing for nested navigation

### Page Layout
- **Entity Name**: PageLayout
- **Fields**:
  - header: object (navbar configuration)
  - main: object (main content configuration)
  - footer: object (footer configuration)
  - sidebar: object (optional sidebar configuration)
  - theme: string ("light", "dark", "auto")
- **Validation Rules**:
  - header and main are required
- **Relationships**: Contains multiple components

### Logo Asset
- **Entity Name**: LogoAsset
- **Fields**:
  - format: string ("svg", "png", "jpg")
  - path: string (file path)
  - altText: string (accessibility text)
  - dimensions: object {width: number, height: number}
  - colors: object {primary: string, accent: string}
- **Validation Rules**:
  - format must be valid image format
  - path must exist
  - colors must be valid CSS color values
- **Relationships**: Referenced by all pages

## State Transitions

### Navigation State
- **Initial State**: No active navigation item
- **Transition 1**: User navigates to page → Set corresponding navigation item as active
- **Transition 2**: User navigates away → Update active state to new page

### Theme State
- **Initial State**: Default theme (dark)
- **Transition 1**: User selects theme → Update theme across all components
- **Transition 2**: System preference changes → Update theme if respecting system preference

## UI Component Specifications

### Module Card Component
- **Props**: {module: ModuleCard}
- **State**: Hover state, Loading state
- **Events**: onClick (navigate to module page)

### Navigation Component
- **Props**: {items: NavigationItem[], activeRoute: string}
- **State**: Active item tracking
- **Events**: onNavigate (route change)

### Logo Component
- **Props**: {logo: LogoAsset}
- **State**: None
- **Events**: onClick (navigate to home)

## API Contracts (for future expansion)

### GET /api/modules
- **Request**: None (no parameters)
- **Response**: {modules: ModuleCard[]}
- **Errors**: 500 Internal Server Error if data unavailable
- **Rate Limit**: 100 requests/minute per IP

### GET /api/navigation
- **Request**: None (no parameters)
- **Response**: {navigation: NavigationItem[]}
- **Errors**: 500 Internal Server Error if data unavailable

## Validation Rules Summary

- All text fields must be properly sanitized to prevent XSS
- All routes must be validated against allowed paths
- All image paths must exist and be accessible
- All components must be responsive across screen sizes
- All interactive elements must be accessible (keyboard navigation, screen readers)