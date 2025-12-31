# Quickstart Guide: UI/UX & Landing Page Development

## Prerequisites

- Node.js >= 18.0
- npm or yarn package manager
- Git version control
- Code editor (VS Code recommended)

## Setup Development Environment

### 1. Clone and Install Dependencies

```bash
git clone [repository-url]
cd physical-ai-book
npm install
```

### 2. Start Development Server

```bash
npm start
```

This will start the Docusaurus development server at `http://localhost:3000`.

## Key Development Tasks

### 1. Create Landing Page

The landing page needs to include:
- Hero section with title "Physical AI & Humanoid Robotics"
- Subtitle "Bridging the Digital Brain with the Physical Body"
- CTA buttons: "Explore Modules" and "View Capstone"
- Visual diagram showing AI → Perception → Planning → Action
- Curriculum overview blocks

### 2. Implement Modules Page

Create a modules page at `/src/pages/modules.jsx` with:
- Responsive grid of module cards
- Each card showing title, description, tools, and difficulty badge
- Clickable cards that route to specific module pages

### 3. Fix Navigation Issues

Update navigation to resolve:
- Broken navbar links (Modules, Book, Hardware)
- Footer links pointing to missing pages
- Active page highlighting
- 404 error pages

### 4. Create Missing Pages

- Chatbot page at `/src/pages/chatbot.jsx`
- Enhanced 404 page with navigation recovery
- Individual module pages as needed

## Component Development

### Module Card Component

Located at `/src/components/ModuleCard.jsx`, includes:
- Title and description
- Tools list (ROS 2, Gazebo, Isaac, etc.)
- Difficulty badge (Beginner/Intermediate/Advanced)
- Click handler for navigation

### Navigation Component

Located in Docusaurus config, includes:
- Navbar items with proper routing
- Active state highlighting
- Responsive behavior

## Styling

### Tailwind CSS

- Use Tailwind utility classes for responsive design
- Follow consistent color scheme (dark navy, electric blue)
- Implement dark/light mode support

### Custom Styles

Located at `/src/css/custom.css`:
- Custom component styling
- Theme overrides
- Responsive adjustments

## Testing

### Local Testing

1. Run `npm start` to start development server
2. Navigate to different pages to verify navigation works
3. Test responsive design on different screen sizes
4. Verify all links point to valid pages

### Production Build

```bash
npm run build
npm run serve
```

Visit `http://localhost:3000` to test production build.

## Deployment

```bash
npm run deploy
```

This will build and deploy to GitHub Pages (if configured).

## Common Issues and Solutions

### Broken Links
- Check routes in `docusaurus.config.js`
- Verify page files exist in `/src/pages/`
- Update sidebar configuration in `sidebars.js`

### Component Not Loading
- Verify component imports are correct
- Check for JavaScript errors in browser console
- Ensure component file paths are correct

### Styling Issues
- Check Tailwind configuration in `tailwind.config.js`
- Verify custom CSS is properly linked
- Test in both light and dark modes