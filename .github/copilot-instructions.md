# Mona Mayhem - Project Guidelines

## Overview
Mona Mayhem is a retro arcade-themed website built with Astro v5 that compares GitHub contribution graphs of two users.
- **Framework:** Astro v5
- **Adapter:** `@astrojs/node` (configured for `server` output mode).

## Build and Dev
- **Install dependencies:** `npm install`
- **Development server:** `npm run dev` 
- **Production build:** `npm run build`
- **Preview:** `npm run preview`

## Architecture & Astro Best Practices
- **Server-Side Rendering (SSR):** The project is configured for SSR. Pages and API routes are executed on the server.
- **Astro Components:** Build UI using `.astro` components. Rely on Astro's zero-JS by default principle.
- **Minimal Interactivity:** Only add client-side JavaScript (via `<script>` tags in `.astro` files) when strictly necessary for user interactions.
- **API Endpoints:** Implement API logic (such as fetching GitHub contributions) as TypeScript files inside `src/pages/api/` (e.g., `src/pages/api/contributions/[username].ts`).
- **Styling:** Utilize scoped CSS within Astro components or global styles in standard CSS files.
- **Scope:** The `workshop/` directory contains tutorial resources and should be ignored during core application development.