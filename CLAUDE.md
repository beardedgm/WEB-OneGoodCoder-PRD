# CLAUDE.md

Personal resume/portfolio site for Derrick Dedmon. Static single-page site: `index.html`, `style.css`, `main.js` at the repo root (no build step). Deployed via GitHub Pages (`CNAME`).

## Design Context

This is a **brand** surface (design IS the product). Before any UI work, read the design specs:

- **`PRODUCT.md`** — strategy: register, users, "warm, editorial, credible" personality, anti-references, design principles.
- **`DESIGN.md`** — visual system (Stitch format): tokens + Colors / Typography / Elevation / Components / Do's & Don'ts.
- **`.impeccable/design.json`** — machine-readable sidecar (tonal ramps, motion/shadow tokens, component snippets).

**Creative North Star: "The Editorial Résumé."** Warm cream paper, a single burnt-terracotta accent (≤10% of any screen) with antique gold as a quiet second, Syne display + DM Sans body. Identity is committed: preserve the fonts and palette rather than swapping them. Background is always cream/sand, never pure white (white is for cards). Honor `prefers-reduced-motion`; never gate content behind a reveal transition.

Watch contrast: `--color-text-secondary` (#645D57) clears AA on both cream and `--color-bg-alt`, but it's a muted secondary tone — use `--color-text` for long body copy.

The `/impeccable` skill is set up here (`/impeccable critique`, `audit`, `polish`, `live`).
