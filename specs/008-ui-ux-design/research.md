# Research: UI/UX & Landing Page Design for Physical AI Book

## Current State Analysis

### Technology Stack
- **Framework**: Docusaurus v3.1.0 (React-based static site generator)
- **Frontend**: React 18, MDX for documentation
- **Styling**: Tailwind CSS, PostCSS
- **Language**: JavaScript/JSX
- **Package Manager**: npm
- **Node Version**: >=18.0

### Project Structure
- **Documentation**: `/docs/` directory with modules organized by topic
- **Pages**: `/src/pages/` for standalone pages (index, 404, capstone, hardware)
- **Components**: `/src/components/` for reusable UI components
- **Static Assets**: `/static/` for images and other static files
- **Configuration**: `docusaurus.config.js` for site configuration
- **Navigation**: `sidebars.js` for documentation sidebar navigation

### Existing Pages
- **Home**: `/` (using index.js)
- **Capstone**: `/capstone` (using capstone.jsx)
- **Hardware**: `/hardware` (using hardware.jsx)
- **404**: Custom 404 page
- **Documentation**: `/docs/` routes handled by Docusaurus docs plugin

### Navigation Issues Identified
- Navbar has links to: Book, Modules, Capstone, Hardware, Chatbot
- Footer has links to: Modules (with sub-modules), Docs, Hardware, GitHub, License, Credits
- `/modules` route doesn't exist as a standalone page
- `/chatbot` route doesn't exist
- Module-specific routes like `/modules/module-1` may not exist
- Sidebar shows both individual modules and a "Learning Modules" category with separate module docs

### UI Components Available
- `ModuleCard.js` and `ModuleCard.jsx` (duplicate components?)
- `ModuleGrid.js` and `ModulesGrid.jsx` (duplicate components?)
- `Button.js`, `Badge.js`
- `Layout.js` - Custom layout component
- `Breadcrumb.jsx` - Breadcrumb navigation
- `CapstoneLayout.js` - Layout for capstone pages
- `VisualSystemDiagram.js` - For visual diagrams

### Current Branding
- Site title: "Physical AI & Humanoid Robotics"
- Tagline: "A comprehensive guide to robotics, AI, and humanoid systems"
- Logo path: `img/logo.svg` (may not exist)
- Favicon: `img/favicon.ico` (may not exist)
- Primary color scheme appears to be dark mode by default
- Google Fonts Inter used for typography

### Key Findings
1. **Duplicate Components**: There are duplicate components like `ModuleCard.js`/`ModuleCard.jsx` and `ModuleGrid.js`/`ModulesGrid.jsx` that need to be consolidated.

2. **Missing Pages**: Several navigation links point to non-existent pages:
   - `/modules` - Main modules page
   - `/chatbot` - Chatbot page
   - Individual module pages like `/modules/module-1`

3. **Inconsistent Navigation**: The sidebar shows documentation structure while navbar expects different page routes.

4. **Landing Page**: Currently uses the default Docusaurus index.js which may not match the required hero section and curriculum overview.

5. **Logo**: The logo is referenced as `img/logo.svg` but may not exist with the required design specifications.

## Technical Decisions

### Decision: Use Docusaurus for Landing Page
- **Rationale**: The project is already built on Docusaurus, so extending it is most efficient
- **Implementation**: Create a custom home page that meets the landing page requirements
- **Alternatives considered**: React app with different framework (would require significant refactoring)

### Decision: Create Dedicated Modules Page
- **Rationale**: The navbar links to `/modules` but no such page exists
- **Implementation**: Create a modules page using existing ModuleCard components
- **Alternatives considered**: Redirect modules to documentation (would confuse users)

### Decision: Consolidate Duplicate Components
- **Rationale**: There are duplicate components that serve the same purpose
- **Implementation**: Choose the most up-to-date version and remove duplicates
- **Alternatives considered**: Keep both (would cause maintenance issues)

### Decision: Implement Custom 404 Page
- **Rationale**: Current 404 page exists but may not have proper navigation recovery
- **Implementation**: Enhance current 404 page with clear navigation options
- **Alternatives considered**: Use default Docusaurus 404 (less user-friendly)

## Requirements Clarification

### Logo Design
- **Status**: NEEDS IMPLEMENTATION - No logo currently exists at `img/logo.svg`
- **Requirements**: Minimal, modern, technical design combining humanoid silhouette/robotic head with neural network/circuit motif in dark navy and electric blue colors

### Module Cards
- **Status**: PARTIALLY IMPLEMENTED - Components exist but may need enhancement for status badges and tool display

### Active Navigation State
- **Status**: Docusaurus handles this automatically, but may need customization for active state styling

### Dark/Light Mode Consistency
- **Status**: Docusaurus has built-in dark mode, but may need customization for brand colors

## Next Steps

1. Create the landing page with hero section, curriculum overview, and visual diagram
2. Implement the modules page with responsive module cards
3. Create missing chatbot page
4. Fix navigation by ensuring all links point to valid pages
5. Design and implement the required logo
6. Enhance the 404 page with proper navigation recovery