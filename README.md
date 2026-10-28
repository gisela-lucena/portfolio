# Gisela Elia — Developer Portfolio

My personal portfolio, built with React and Vite to showcase my work in frontend, backend, and mobile development.

The design combines a dark theme, subtle animated backgrounds, floating code snippets, and a terminal typing effect.

## Features

- Responsive layouts for desktop, tablet, and mobile.
- About, technical skills, projects, education, and contact sections.
- Project cards linking to deployed applications and backend source code.
- Animated background grid, soft lighting, and floating code snippets.
- Terminal animation with typing and deleting effects.
- Reduced-motion support and visible keyboard focus styles.

## Tech Stack

- **React** — component-based interface.
- **JavaScript and JSX** — application structure.
- **CSS** — styling, responsive layouts, and animations.
- **Vite** — development server and production builds.
- **ESLint** — code linting.

## Featured Projects

### Filmera — Web Application

Full-stack MERN application with authentication, a REST API, and MongoDB Atlas.

[Visit Filmera](https://filmera.us/)

### Filmera — iOS Application

Mobile application built with React Native and Expo, connected to a Node.js and Express backend.

[View on the App Store](https://apps.apple.com/us/app/filmera/id6779366077)

### Filmera — REST API

Backend service featuring JWT authentication, MVC architecture, and cloud deployment on Render.

[View backend source code](https://github.com/gisela-lucena/filmera-backend)

## Getting Started

Install a Node.js version compatible with Vite 8, such as Node.js 22.12 or later.

From the project directory, install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal.

## Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the development server.            |
| `npm run build`   | Generate the production site in `dist/`. |
| `npm run preview` | Preview the production build locally.    |
| `npm run lint`    | Check the code with ESLint.              |

To preview a production build:

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── About/
│   ├── Certifications/
│   ├── Contact/
│   ├── Footer/
│   ├── Hero/
│   ├── Navbar/
│   ├── Projects/
│   └── Skills/
├── App.jsx
├── index.css
└── main.jsx
```

Each section has its own React component and CSS file. Shared styles, buttons, typography, and background effects are defined in `index.css`.

## Deployment

Run `npm run build` and deploy the generated `dist/` directory to a static hosting provider.

This portfolio does not require a backend server.

## Design Reference

The visual design was inspired by a portfolio prototype created with Lovable. The React components and CSS were implemented in this repository.

## Contact

- [GitHub](https://github.com/gisela-lucena)
- [LinkedIn](https://www.linkedin.com/in/giselaelia/)
- [Email](mailto:lucena.gisela@icloud.com)
