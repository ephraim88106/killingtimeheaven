# Killing Time Heaven (킬링타임천국) Blueprint

## Project Overview
"Killing Time Heaven" is a modern, high-performance web platform designed to host simple and engaging games. The goal is to provide a premium user experience with a vibrant, interactive, and mobile-responsive interface.

## Design & Features
- **Aesthetics**:
  - **Color Palette**: High-contrast, vibrant hues using `oklch` for modern color support.
  - **Texture**: Subtle noise background for a premium feel.
  - **Visual Effects**: Deep shadows and "glow" effects on interactive elements.
  - **Typography**: Bold and expressive typography using modern sans-serif fonts.
- **Components**:
  - **Game Selection Section**: A beautifully styled container for game access.
  - **Action Buttons**: Custom-designed buttons with unique gradients and hover animations for each game.
- **Responsiveness**: Fully adaptive layout for mobile and desktop viewports.

## Implementation Plan (Current Task)
### 1. Structure the Landing Page
- Update `index.html` to include a hero section and a game selection area.
- Add a main title "킬링타임천국".

### 2. Design the Buttons
- **Hero's Adventure (용사의 모험)**: Gold and Red gradient buttons.
- **SSS-Class Challenge (SSS급 도전하기)**: Purple and Electric Blue gradient buttons.
- **Kingdom's Prosperity (왕국의 번영)**: Green and Emerald gradient buttons.
- **Demon King's Invasion (마왕의 침공)**: Dark Red and Crimson gradient buttons.
- Separate buttons for "PC" (standard) and "Mobile" versions.
- Apply high-end CSS effects: `box-shadow` glow, `backdrop-filter`, and hover scaling.

### 3. Polish the Environment
- Set up a clean CSS baseline using CSS Variables and Cascade Layers (`@layer`).
- Use CSS Grid/Flexbox for a centered, elegant layout.

### 4. Interactivity
- Add basic click handlers in `main.js` for future game loading.
