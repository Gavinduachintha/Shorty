# Technology Stack & Development Guide

## Tech Stack

### Frontend

- **Framework**: React 19.1.0 with Vite 7.0.0 as build tool
- **Styling**: Tailwind CSS 4.1.11 with DaisyUI 5.0.43 components
- **Routing**: React Router DOM 7.6.3
- **Animations**: GSAP 3.13.0 for advanced animations
- **Icons**: React Icons 5.5.0
- **Notifications**: React Hot Toast 2.5.2 and React Toastify 11.0.5

### Backend & Database

- **Backend**: Node.js with Express.js
- **Database**: Supabase (PostgreSQL with real-time features)
- **Authentication**: Supabase Auth (@supabase/supabase-js 2.51.0)

### Additional Libraries

- **QR Code Generation**: qrcode.react 4.2.0 and react-qr-code 2.0.18
- **Unique ID Generation**: nanoid 5.1.5
- **Environment Variables**: dotenv 17.2.0
- **CORS**: cors 2.8.5

## Development Commands

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Development Server

- **Local URL**: http://localhost:3000 (default Vite port may vary)
- **Hot Module Replacement**: Enabled via Vite

## Build Configuration

- **Build Tool**: Vite with React plugin and Tailwind CSS integration
- **ESLint**: Configured with React hooks and refresh plugins
- **Module Type**: ES modules (type: "module" in package.json)

## Environment Setup

- Environment variables stored in `.env` file in Frontend directory
- Supabase configuration required for database and authentication
