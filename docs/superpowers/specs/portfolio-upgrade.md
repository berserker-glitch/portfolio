# Portfolio upgrade specification

## Goal

Improve the existing Yasser Mbarek portfolio without changing its React/Vite/Tailwind/GSAP stack.

## Required changes

- Make every navigation target resolve to a real section.
- Remove dead `#` links and use the known GitHub profile and email contact; do not invent unavailable social or résumé URLs.
- Remove the unexplained hero delay caused by the unused boot sequence.
- Make the scroll progress indicator reactive and clean up all animation listeners, requestAnimationFrame loops, timers, and GSAP ticker callbacks.
- Add a usable mobile navigation menu and make the command palette close with Escape, lock background scrolling, and expose dialog semantics.
- Add visible keyboard focus states, a skip link, icon-link labels, lazy-loaded project images, and reduced-motion behavior.
- Replace pure black and saturated indigo with a consistent off-black and muted sage accent.
- Rewrite the hero, section, project, and footer copy in direct sentence case; feature the strongest project and make project stacks/descriptions specific.
- Add title, description, theme-color, Open Graph, and Twitter metadata.
- Preserve existing project URLs and image assets.

## Acceptance checks

- `npm run lint` exits successfully.
- No source navigation points to `#` except intentional in-page anchors.
- `#skills` exists and is used consistently.
- The page remains usable with keyboard navigation, Escape, and reduced-motion preferences.
