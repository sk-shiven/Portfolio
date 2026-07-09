# Impeccable Design Vocabulary

## Core Constraints
This document enforces strict design constraints for the portfolio project.

1. **Colors (OKLCH)**
   - All colors must be defined in the OKLCH color space.
   - **No Pure Black / White:** 
     - True black (`#000000`) and pure white (`#ffffff`) are strictly forbidden.
     - Darkest neutral: `oklch(15% 0.02 250)` (tinted dark).
     - Lightest neutral: `oklch(98% 0.01 250)` (tinted light).
   - **Accent Palette:** Use saturated OKLCH pops (e.g., Emerald `oklch(70% 0.15 160)` or Electric Blue `oklch(65% 0.15 250)`).

2. **Typography**
   - **Font Family:** `Geist Sans` (primary display and body).
   - *Forbidden:* Inter, Roboto, Arial, or overused AI default sans-serifs.
   - **Fluid Type:** Use `clamp()` for scalable headings instead of rigid pixel steps.

3. **Motion & Interaction**
   - **Easing:** Never use `bounce` or `elastic` easing in Framer Motion. All physics should be stiff springs (e.g., `ease: [0.16, 1, 0.3, 1]` or stiff spring configs).
   - **Micro-interactions:** Use scale transforms (e.g., `scale: 0.98`) for tactile clicks.

4. **Composition & Density**
   - **No Nested Cards:** Do not place cards within cards. Flatten the visual hierarchy using borders, negative space, or dividers (`divide-y`).
   - **Grids:** Rely on CSS grid with asymmetric cell sizes for variety rather than uniform columns everywhere.
