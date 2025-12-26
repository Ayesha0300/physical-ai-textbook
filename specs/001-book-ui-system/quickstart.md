# Quickstart Guide: Physical AI & Humanoid Robotics Book UI

## Prerequisites
- Node.js LTS (v18 or higher)
- npm or yarn package manager
- Git for version control

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd physical-ai-book
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Install Docusaurus and Tailwind CSS
```bash
npm install @docusaurus/core@latest @docusaurus/preset-classic@latest
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4. Configure Tailwind CSS
Update `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{md,mdx}",
    "./pages/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        perception: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        control: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        cognition: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        }
      }
    },
  },
  plugins: [],
}
```

### 5. Configure Docusaurus
Update `docusaurus.config.js` with the required navigation and theme settings:
- Set dark mode as default
- Configure navigation items (Home, Curriculum, Modules, Capstone, Hardware Lab, Chat)
- Set up sidebar structure for the 4 modules

### 6. Run Development Server
```bash
npm run start
```
The site will be available at http://localhost:3000

### 7. Build for Production
```bash
npm run build
```
The static files will be generated in the `build/` directory

## Key Features

### Navigation
- Fixed top navigation bar with project title and subtitle
- Collapsible sidebar with module/chapter structure
- Progress indicators for each module

### Theme System
- Dark mode enabled by default
- Theme toggle switch in navigation bar
- Color-coded system (blue=perception, green=control, purple=cognition)

### Content Components
- Specialized callout components for definitions, warnings, and system insights
- System diagram containers with "Where this fits in the robot" context
- Hardware comparison tables with card-based layout

### Module Structure
- Module landing pages with learning outcomes and requirements
- Chapter pages with estimated reading time and learning objectives
- Previous/Next navigation between chapters