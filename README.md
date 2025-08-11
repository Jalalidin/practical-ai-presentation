# Practical AI — Beyond ChatGPT
### An open-source, interactive slide deck that explains AI basics for everyone

Live demo: https://jalalidin.github.io/practical-ai-presentation/

## About

This project is a friendly, interactive presentation for non‑technical audiences. It explains what AI is, how modern tools like ChatGPT work, and where AI can help in day‑to‑day life and work. It’s built to be shared in meetups, classrooms, community groups, and team sessions. Fully open‑source—feel free to fork, remix, and present.

Live demo: https://jalalidin.github.io/practical-ai-presentation/

## 🚀 Live Demo

The presentation works like a website. Use these controls to navigate:
- **Arrow Keys** (← → ↑ ↓) for slide navigation
- **Space Bar** to advance to next slide
- **Mouse/Touch** for interactive elements and external tool links

## 📋 What’s inside

### 14 Comprehensive Slides Covering:

1. **Introduction** - Welcome to the AI revolution
2. **Current State** - Where we stand with AI today
3. **LLM Fundamentals** - Large Language Models explained
4. **Generative AI Types** - Different AI model architectures
5. **GPU vs CPU** - The hardware powering AI
6. **AI Deployment Models** - Cloud, Local, Edge, and Custom solutions
7. **Perfect Prompt Recipe** - The 3-part formula for better results
8. **RAG (Retrieval-Augmented Generation)** - Giving AI your knowledge
9. **Getting Started** - Tools and resources by profession

### Key features
- **Interactive Navigation** with smooth animations
- **Professional UI/UX** with dark theme and gradients
- **Responsive Design** optimized for all screen sizes
- **External Tool Integration** with direct links to AI platforms
- **Profession-Specific Recommendations** for different career paths
- **Visual Demonstrations** with animated explanations

## 🛠️ How it’s built

### Frontend
- **React 18** - Modern frontend framework
- **TypeScript** - Type-safe JavaScript
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality UI components
- **Radix UI** - Accessible UI primitives

### Backend (optional)
- **Express.js** server wraps the static build for local dev and optional deployments. You don’t need a database to run or present this project.

### Development Tools
- **Vite** - Fast development server and build tool
- **ESBuild** - Lightning-fast bundling
- **Replit** - Cloud development environment

## 🎨 AI Tools Categories

The presentation includes comprehensive tool recommendations across 5 categories:

### 1. Writing & Research
- ChatGPT - General purpose AI assistant
- Claude - Advanced reasoning and analysis
- Perplexity - AI-powered search with sources  
- Notion AI - AI-powered note-taking

### 2. Translation & Language
- DeepL - Professional translation
- Grammarly - Writing enhancement

### 3. Development
- Cursor - AI-powered code editor
- GitHub Copilot - AI pair programmer
- Claude Code - AI coding assistant
- Replit AI - AI coding in the browser

### 4. Presentation & Media
- Gamma - AI presentation maker
- Otter.ai - Meeting transcription
- Beautiful.AI - Smart presentation design
- Tome - AI storytelling presentations

### 5. Productivity & Organization
- Motion - AI-powered calendar and task management
- Superhuman - AI email management
- Jasper - AI marketing content creation

## 🏗️ Project structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     
│   │   │   ├── slides/     # Individual slide components
│   │   │   ├── ui/         # Reusable UI components
│   │   │   └── slide-navigation.tsx
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and configurations
│   │   ├── pages/          # Page components
│   │   └── App.tsx         # Main application component
│   └── index.html
├── server/                 # Backend Express server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage interface
│   └── vite.ts            # Vite integration
├── shared/                 # Shared types and schemas
│   └── schema.ts
└── package.json
```

## 🧰 Getting started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/practical-ai-presentation.git
   cd practical-ai-presentation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the presentation locally**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Go to `http://localhost:5000` to view the slides

### Available scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server

## 📱 How to use

### Navigation Controls
- **← → Arrow Keys**: Navigate between slides
- **↑ ↓ Arrow Keys**: Navigate within slide sections
- **Space Bar**: Advance to next slide
- **Mouse Click**: Interact with buttons and external links

### Interactive elements
- **Tool Cards**: Click to open external AI tool websites
- **Progress Indicators**: Track your progress through the presentation
- **Professional Recommendations**: Tailored tool suggestions by career
- **Learning Resources**: Direct links to documentation and guides

## 🎯 Who this is for

This presentation is designed for:
- **Business Professionals** exploring AI adoption
- **Developers** interested in AI integration
- **Educators** teaching AI concepts  
- **Students** learning about AI fundamentals
- **Anyone** curious about practical AI applications

## 🌟 What you’ll learn

After viewing this presentation, users will understand:
- **Fundamental AI Concepts** - LLMs, generative AI, and deployment models
- **Practical Tools** - Specific AI tools for different professional needs
- **Best Practices** - How to write effective prompts and use AI efficiently  
- **Implementation Strategies** - When to use cloud vs local AI solutions
- **Advanced Techniques** - RAG and custom AI implementations

## 🔧 Customize the deck

The presentation is built with modularity in mind:
- **Slides** can be easily added, removed, or reordered
- **Themes** can be customized through CSS variables
- **Content** is easily editable through TypeScript interfaces
- **Tools** and recommendations can be updated as AI landscape evolves

## 📊 Performance

- **Optimized Loading** - Progressive slide loading for fast initial display
- **Smooth Animations** - Hardware-accelerated transitions with Framer Motion
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **SEO Friendly** - Proper meta tags and semantic HTML structure

## 🤝 Contributing

Contributions are welcome! Please feel free to:
- Report bugs or suggest improvements
- Add new AI tools and resources
- Improve slide content and animations
- Enhance mobile responsiveness

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **OpenAI** - For inspiring AI innovation
- **Anthropic** - For advancing AI safety and capabilities  
- **AI Community** - For the wealth of tools and resources
- **React Team** - For the incredible frontend framework
- **Vercel** - For the amazing developer experience

---

*Built with ❤️ for the community. Helping everyone navigate the AI revolution with practical tools and plain‑English explanations.*

---

## 🌐 Deploying to GitHub Pages

This repository includes a GitHub Actions workflow that builds and deploys the static site to GitHub Pages from the `main` branch.

1) Enable Pages for this repo
- Settings → Pages → Build and deployment → Source: GitHub Actions

2) Push to `main`
- The workflow at `.github/workflows/pages.yml` will:
  - Install dependencies
  - Build the site with Vite
  - Publish `dist/public` to GitHub Pages

3) Your site will be available at:
- `https://jalalidin.github.io/practical-ai-presentation/`

Notes
- The Vite `base` is set to `/practical-ai-presentation/` in production so assets resolve correctly on Pages.
- If you fork the project, update the repository name in `vite.config.ts` `base` and the URL above.