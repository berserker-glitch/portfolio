# Portfolio Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the existing portfolio's reliability, accessibility, content, and visual hierarchy while preserving its current React/Vite/Tailwind/GSAP architecture.

**Architecture:** Keep the current single-page React composition. Centralize interaction lifecycle cleanup in `App.tsx`, keep navigation and command actions in their existing components, and use Tailwind plus the existing CSS variables for the visual refresh. Use only URLs and project facts already present in the repository.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS 3, GSAP, Lenis, cmdk, Lucide React.

**Spec:** `docs/superpowers/specs/portfolio-upgrade.md`

## Global Constraints

- Work with the existing React/Vite/Tailwind/GSAP/Lenis stack; do not migrate frameworks or add UI libraries.
- Preserve the existing project links and image assets.
- Do not invent unavailable social, résumé, company, or performance URLs.
- Use sentence case for visible headings and direct, specific copy.
- Respect `prefers-reduced-motion` and preserve visible keyboard focus.
- Do not run a development server.

---

### Task 1: Create the upgrade specification and plan

**Files:**
- Create: `docs/superpowers/specs/portfolio-upgrade.md`
- Create: `docs/superpowers/plans/2026-08-25-portfolio-upgrade.md`

**Interfaces:**
- Produces the requirements used by Tasks 2–5.

- [x] **Step 1: Record the repository-specific requirements**

Document the resolved anchors, known external URLs, motion requirements, palette direction, copy direction, and acceptance checks.

- [x] **Step 2: Map each requirement to an implementation file**

Keep interaction changes in the existing components and keep global visual changes in `src/index.css` and `tailwind.config.js`.

---

### Task 2: Repair navigation and interaction lifecycles

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/CommandPalette.tsx`
- Modify: `src/components/SkillsConstellation.tsx`
- Modify: `src/components/Hero.tsx`

**Interfaces:**
- `Navbar` dispatches an `open-command-palette` browser event.
- `CommandPalette` listens for keyboard shortcuts and the custom open event.
- The Skills section exposes `id="skills"`.

- [ ] **Step 1: Add reactive progress and safe cleanup**

Track scroll progress in `Navbar` with a requestAnimationFrame-throttled listener. In `App`, remove the exact GSAP ticker callback that was added, cancel the active cursor frame, clear timers, and remove magnetic listeners on unmount.

- [ ] **Step 2: Add mobile navigation**

Provide a menu button with `aria-expanded`, show the same Work/Skills/Contact links on small screens, and close the menu after an anchor is selected.

- [ ] **Step 3: Make the command palette usable**

Add an Escape handler, a close button, dialog semantics, outside-click handling, and body scroll locking. Replace placeholder GitHub and résumé actions with the known GitHub profile and email action; omit unavailable links.

- [ ] **Step 4: Resolve the Skills target and hero delay**

Use `#skills` everywhere and remove the hero's boot-sequence wait because `BootSequence` is not mounted.

---

### Task 3: Apply accessibility, motion, metadata, and palette foundations

**Files:**
- Modify: `src/index.css`
- Modify: `tailwind.config.js`
- Modify: `index.html`
- Modify: `src/App.tsx`
- Modify: `src/components/ProjectAnimations.tsx`

**Interfaces:**
- Global colors remain available as `background`, `foreground`, `primary`, and `muted` Tailwind colors.
- Project images retain descriptive alt text and gain deferred loading hints.

- [ ] **Step 1: Add focus, skip-link, cursor, and reduced-motion CSS**

Keep the native cursor available except on fine-pointer devices, add a visible `:focus-visible` outline, and disable decorative animation under reduced motion.

- [ ] **Step 2: Replace the palette variables**

Use a consistent off-black background, cool neutral surface, muted sage accent, and matching muted text values in both Tailwind and CSS variables.

- [ ] **Step 3: Add document metadata**

Set a descriptive title, description, theme color, Open Graph fields, and Twitter card fields. Use the local branded social preview asset.

- [ ] **Step 4: Add semantic page entry points and image hints**

Add the skip link and main-content id, mark the custom cursor as decorative, and add `loading="lazy"` plus `decoding="async"` to below-the-fold project images.

---

### Task 4: Refresh portfolio content and hierarchy

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/Projects.tsx`
- Modify: `src/components/SkillsConstellation.tsx`
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Project data retains `title`, `description`, `stack`, `link`, `ImageComponent`, and `featured` so the existing renderer remains compatible.
- Footer continues to use the existing email address and known GitHub profile.

- [ ] **Step 1: Rewrite the hero proposition and CTA labels**

State what Yasser builds in direct language, keep the visual scale, and use “See selected work” and “Start a project” as primary actions.

- [ ] **Step 2: Make project data specific**

Rewrite descriptions using the repository's existing product facts, vary the visible technology/focus tags, and feature 9anon AI as the lead project.

- [ ] **Step 3: Reduce terminal-language dependency in section headings**

Use “Selected work,” “Tools I use,” and “Let's build something useful” while retaining small technical kicker labels for personality.

- [ ] **Step 4: Replace footer placeholders**

Use real GitHub and email links with accessible text/labels and remove unavailable LinkedIn, Twitter, and résumé placeholders.

---

### Task 5: Verify the focused upgrade

**Files:**
- Review: all modified source files and the final diff.

**Interfaces:**
- Acceptance is based on lint plus static repository checks; no server is started.

- [ ] **Step 1: Run the lint check**

Run `npm run lint` and expect exit code 0.

- [ ] **Step 2: Search for unresolved placeholders**

Run `rg -n "href=\"#\"|window\.open\('#'|id=\"stack\"|delay: 2\.2|framer-motion" src index.html package.json` and confirm no navigation placeholder or stale anchor remains. A remaining unused dependency may be removed only if package-lock stays consistent.

- [ ] **Step 3: Review the diff for scope**

Run `git diff --stat` and `git diff --check`; expect only the planned portfolio, metadata, asset, and documentation files to be changed.

