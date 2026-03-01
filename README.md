# OS Themed Web Portfolio

## Overview
This project is an interactive **operating system themed portfolio** built with React and Vite.
Instead of a standard single-page layout, it simulates a desktop experience with:
- Boot screen and login flow
- Desktop icons
- Draggable/resizable windows
- Taskbar and start menu
- Terminal-inspired portfolio navigation

The portfolio highlights profile information, skills, projects, resume, and contact options in an immersive UI.

## Features
- Boot animation and login screen before entering the desktop
- Fullscreen suggestion prompt for better desktop immersion
- Desktop icons with double-click behavior
- Window manager powered by Zustand:
  - Open/focus/close windows
  - Minimize/restore from taskbar
  - Maximize and snap (left/right/full)
  - Layered z-index window focus handling
- Start menu with quick access to portfolio sections and social links
- Terminal window with commands:
  - `help`, `clear`, `whoami`, `projects`, `skills`, `contact`
- Resume PDF launcher
- Contact section with quick mail/linkedin actions
- Responsive behavior for desktop and smaller screens

## Tech Stack
- **Frontend:** React 19, Vite 7
- **Styling:** Tailwind CSS 4
- **State Management:** Zustand
- **Window/Drag System:** `react-rnd`
- **Utilities:** Day.js
- **Linting:** ESLint

## Setup
### 1. Clone the repository
```bash
git clone <your-repo-url>
cd web-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run in development
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

## Live Link
- Main portfolio: **Add your deployed URL here**
- Standard portfolio link currently referenced in app: https://krish-dua.onrender.com

## Project Sections
- **About Me**: Background, development approach, goals, and hobbies
- **Skills & Education**: Technical stack and academic timeline
- **Projects**: Featured projects with live demos and source links
- **Contact**: Email and LinkedIn outreach
- **Terminal**: Command-based navigation to major sections

## Project Structure
```text
src/
  Components/
    BootScreen.jsx
    LoginScreen.jsx
    Desktop.jsx
    Taskbar.jsx
    StartMenu.jsx
    AboutMeContent.jsx
    SAEContent.jsx
    ProjectsContent.jsx
    ContactContent.jsx
    TerminalContent.jsx
  Store.js
  App.jsx
```

## Scripts
- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

## Notes
- The portfolio is designed for an OS-like interaction style, so fullscreen gives the best user experience.
- Static assets like the boot video, start button image, and resume PDF are served from the `public/` directory.
