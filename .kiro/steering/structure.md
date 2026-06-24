# Project Structure & Organization

## Root Directory Structure

```
Shorty/
├── .git/                    # Git version control
├── .gitignore              # Git ignore rules
├── .kiro/                  # Kiro AI assistant configuration
├── Frontend/               # React frontend application
├── README.md               # Project documentation
└── Shorty.code-workspace   # VS Code workspace configuration
```

## Frontend Directory Structure

```
Frontend/
├── public/                 # Static assets served directly
├── src/                    # Source code
│   ├── assets/            # Images, icons, media files
│   │   ├── background.jpg # Background images
│   │   ├── github.png     # GitHub icon
│   │   ├── link.png       # Link/logo icon
│   │   └── react.svg      # React logo
│   ├── components/        # Reusable UI components
│   │   ├── Backdrop.jsx   # Modal backdrop component
│   │   └── Squares.jsx    # Animated squares background
│   ├── pages/             # Route-based page components
│   │   ├── dashboard/     # Dashboard-specific components
│   │   ├── Aboutpage.jsx  # About page
│   │   ├── Landingpage.jsx # Landing/home page
│   │   ├── LinkEntrypage.jsx # Link creation form
│   │   ├── LoginPage.jsx  # User login
│   │   └── Signuppage.jsx # User registration
│   ├── App.css           # Global application styles
│   ├── App.jsx           # Root React component
│   ├── index.css         # Base CSS and Tailwind imports
│   └── main.jsx          # Application entry point
├── .env                  # Environment variables
├── .gitignore           # Frontend-specific git ignores
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── package-lock.json    # Dependency lock file
├── README.md            # Frontend documentation
└── vite.config.js       # Vite build configuration
```

## Code Organization Patterns

### Component Structure

- **Pages**: Route-level components in `/src/pages/`
- **Components**: Reusable UI components in `/src/components/`
- **Assets**: Static files in `/src/assets/`

### Naming Conventions

- **Components**: PascalCase (e.g., `Landingpage.jsx`, `Dashboard.jsx`)
- **Files**: camelCase for utilities, PascalCase for components
- **Directories**: lowercase with hyphens for multi-word names

### Import Organization

- External libraries first
- Internal components second
- Relative imports last
- Group related imports together

### Styling Approach

- Tailwind CSS utility classes for styling
- Responsive design with mobile-first approach
- Dark/light mode support via conditional classes
- Component-scoped styles when needed
