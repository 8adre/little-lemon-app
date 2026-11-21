# Little Lemon Web Application

A responsive, accessible React web application for the Little Lemon Mediterranean Restaurant in Chicago (this app is part of the Coursera course Meta front-end developer ).

## Features
- **Responsive Design (kind of):** Built with CSS Grid and Flexbox for desktop, tablet, and mobile viewports.
- **Table Reservations:** Connected to the `fetchAPI` and `submitAPI` endpoints for real-time date availability and booking confirmation.
- **Dual Validation:** Combines HTML5 constraints (`required`, `min`, `max`, `type="email"`) with real-time React validation and accessible error alerts (`aria-invalid`, `role="alert"`).
- **semantics (for SEO and accessibility) & Social Sharing (using meta tags and OGP):** Configured with semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) and Open Graph Protocol meta tags.

## Setup Instructions

1. **Create a new React project and install React Router:**
   ```bash
   npx create-react-app little-lemon
   cd little-lemon
   npm install react-router-dom
   ```

2. **Copy the source files** into `public/` and `src/` matching the project structure.

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Run unit tests:**
   ```bash
   npm test
   ```
