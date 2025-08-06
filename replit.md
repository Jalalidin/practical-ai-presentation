# Overview

This is a React-based interactive presentation application titled "Practical AI - Beyond ChatGPT". The application is designed as a slide deck exploring AI concepts, tools, and practical applications. It features a modern, responsive design with animation effects and interactive elements. The project uses a full-stack architecture with an Express.js backend and React frontend, configured for both development and production environments.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React and TypeScript, utilizing a component-based architecture. The presentation is structured as a single-page application with multiple slide components, each representing different AI topics. The UI framework is based on shadcn/ui components with Radix UI primitives, providing a consistent and accessible design system. Animation effects are handled by Framer Motion for smooth transitions between slides.

**Key Design Patterns:**
- **Component Composition**: Each slide is an independent React component allowing for modular development
- **Custom Hooks**: `usePresentation` hook manages slide navigation state and keyboard controls
- **Theme System**: CSS custom properties enable consistent theming with AI-specific color schemes

## Backend Architecture
The backend uses Express.js with TypeScript in ESM format. It follows a minimal API structure with a modular route registration system. The server implements development-specific middleware for Vite integration and includes basic error handling and request logging.

**Key Features:**
- **Development Mode**: Vite middleware integration for hot reloading
- **Production Mode**: Static file serving for built assets
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations

## Data Storage Solutions
The application includes both in-memory storage and database support through Drizzle ORM. The storage interface is designed to be implementation-agnostic, allowing for easy switching between storage backends.

**Storage Implementation:**
- **In-Memory Storage**: Simple Map-based storage for development and testing
- **Database Support**: PostgreSQL integration through Drizzle ORM with Neon Database
- **Schema Management**: Type-safe database schemas with Zod validation

## Authentication and Authorization
The project includes a basic user schema and storage interface for authentication, though specific authentication mechanisms are not yet implemented. The foundation supports username/password authentication with UUID-based user identification.

# External Dependencies

## Core Framework Dependencies
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express.js**: Backend web framework for Node.js
- **TypeScript**: Type safety across the entire stack
- **Vite**: Build tool and development server with HMR support

## Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM for PostgreSQL
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **PostgreSQL**: Primary database dialect

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library based on Radix UI
- **Radix UI**: Unstyled, accessible UI primitives
- **Framer Motion**: Animation library for React components
- **Lucide React**: Icon library with consistent design

## Development and Build Tools
- **Replit Integration**: Development environment support with error overlay and cartographer
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer

## State Management and Data Fetching
- **TanStack React Query**: Server state management and caching
- **Wouter**: Lightweight routing for React
- **React Hook Form**: Form handling with validation

The application is configured for deployment on Replit with specific plugins and development tools that enhance the coding experience in that environment.