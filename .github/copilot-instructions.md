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

## Design Guide: Retro Arcade Theme

- **Fonts:** `Press Start 2P` from Google Fonts for a classic 8-bit feel.
- **Colors:**
  - Background: Deep Dark `#0a0a1a`
  - Neon Green Accent: `#5fed83`
  - Neon Purple Accent: `#8a2be2`
  - Error/Clash Red: `#cf222e`
- **Animation Style:**
  - **CRT Screen Effect:** Subtle, static scanline overlay (linear gradient at 0.03 opacity) applied globally.
  - **Neon Glows:** Utilize layered `text-shadow` and `box-shadow` for intense glowing borders and text. Pulses should be dramatic but smooth (e.g., 3-second heartbeat loops).
  - **Gradients & Shifts:** Employ infinite color-shifting keyframes and animated background gradients (like the 'VS' badge and loading text) to make the page feel alive.
  - **Staggered Entries:** UI elements (inputs, buttons) should float in smoothly (`translateY` + `opacity`) with staggered delays on load.
  - **Hover & Shimmer:** Interactive elements must give vivid feedback (e.g., glowing and scaling on hover). Static cards should feature an animated, angled sweep (shimmer) to mimic arcade cabinet lighting.
