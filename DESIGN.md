---
name: Derrick Dedmon Portfolio
description: Warm editorial resume and portfolio for a communications and creative leader.
colors:
  terracotta: "#C2410C"
  terracotta-deep: "#9A3412"
  terracotta-wash: "#FFF7ED"
  antique-gold: "#B8860B"
  antique-gold-text: "#8A6309"
  gold-wash: "#FDF6E3"
  cream-paper: "#FAF7F2"
  sand: "#F0EBE3"
  card-white: "#FFFFFF"
  espresso: "#1C1917"
  ink: "#292524"
  ink-muted: "#645D57"
  ink-faint: "#6E6760"
  border-sand: "#E7E0D6"
typography:
  display:
    fontFamily: "Syne, 'Arial Black', sans-serif"
    fontSize: "clamp(2rem, 3.5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Syne, 'Arial Black', sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "normal"
  title:
    fontFamily: "Syne, 'Arial Black', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "DM Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "DM Sans, -apple-system, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.15em"
rounded:
  sm: "6px"
  lg: "10px"
  xl: "16px"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  section: "clamp(5rem, 8vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.terracotta-deep}"
    textColor: "{colors.card-white}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 2rem"
  card:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "2rem 3rem"
---

# Design System: Derrick Dedmon Portfolio

## 1. Overview

**Creative North Star: "The Editorial Résumé"**

This is a printed magazine feature about a career, rendered for the web. Warm paper stock, confident headlines, and generous prose carry a 25-year arc from graphic design to communications leadership. The personality is warm, editorial, and credible: approachable enough to feel human, composed enough to read as authority earned over decades. Nothing shouts. The work and the writing do the persuading.

Density is moderate and deliberate. Sections are paced with large vertical breaks (`clamp(5rem, 8vw, 9rem)`), content sits on a calm cream field, and white cards lift the substance (experience, education, work) just off the page. The accent is a single burnt terracotta, used sparingly against an antique gold secondary; the rarity of color is what makes it read as voice rather than decoration.

This system explicitly rejects the generic SaaS landing page (gradient heroes, purple-on-white, big-number metric templates), the corporate LinkedIn / resume-builder template (stock photos, default-blue, no POV), the dark developer-terminal look (neon-on-black, monospace cosplay), flashy maximalism (parallax and motion that upstage content), and anything that reads as AI slop (timid palette, average layout). Warmth here is carried by palette, typography, and copy, not by softness or vagueness.

**Key Characteristics:**
- Warm cream paper field, never stark white as the page background.
- A single terracotta accent used on a small fraction of any screen, with antique gold as a quieter second.
- Confident Syne display headlines paired with a humanist DM Sans body.
- White cards as the unit of substance; the page beneath stays calm.
- Motion supports reading and is fully optional; the page is legible with it off.

## 2. Colors

A warm editorial palette built on paper-toned neutrals, one decisive terracotta, and an antique-gold grace note.

### Primary
- **Burnt Terracotta** (#C2410C): The single brand accent. Section labels, links, primary buttons, the active nav state, focus rings, and small structural marks. Used sparingly; its scarcity is the point.
- **Deep Terracotta** (#9A3412): The pressed/hover state of the accent. Primary-button hover, link hover.
- **Terracotta Wash** (#FFF7ED): A near-white warm tint for accent backgrounds and text selection.

### Secondary
- **Antique Gold** (#B8860B): A quieter heritage accent that nods to his print/graphic-design roots. Decorative spines, the current-role marker, hairline accents. Never competes with terracotta; it supports.
- **Antique Gold Text** (#8A6309): The darker, AA-safe shade of the gold used for *text* (the experience date eyebrow), which #B8860B is too light to satisfy on white/gold-wash. Use this whenever gold carries words.
- **Gold Wash** (#FDF6E3): A faint gold tint used to mark the single "current" item (e.g. the present role card).

### Neutral
- **Cream Paper** (#FAF7F2): The dominant page background. The warm stock everything is printed on.
- **Sand** (#F0EBE3): Alternating section background for rhythm between cream sections.
- **Card White** (#FFFFFF): The lifted surface for cards holding real substance.
- **Espresso** (#1C1917): Reserved deep near-black for high-contrast surfaces (footer / dark panels).
- **Ink** (#292524): Primary text and headlines. The default reading color.
- **Ink Muted** (#645D57): Secondary text, body prose in cards, meta. Clears AA on cream (6.06:1), sand (5.45:1), and white (6.47:1).
- **Ink Faint** (#6E6760): Tertiary captions and labels (school, source, detail labels). AA-safe on cream (5.21:1) and sand (4.69:1); still clearly lighter than Ink Muted.
- **Border Sand** (#E7E0D6): Hairline borders, dividers, card outlines.

### Named Rules
**The One Accent Rule.** Terracotta carries the brand on ≤10% of any given screen. Gold is the only permitted second voice, and it stays quieter than terracotta. Never introduce a third hue to "balance" them; the restraint is the identity.

**The Warm-Paper Rule.** The page background is always a warm cream or sand, never pure `#FFFFFF`. White is reserved for cards that need to lift off the paper.

## 3. Typography

**Display Font:** Syne (with 'Arial Black' fallback)
**Body Font:** DM Sans (with system-sans fallback)

**Character:** A geometric, slightly idiosyncratic display face (Syne) against a clean humanist workhorse (DM Sans). The pairing is confident but unfussy: Syne gives headlines a contemporary, editorial spine; DM Sans keeps long prose comfortable and neutral. This is the project's committed identity; preserve it rather than swapping faces.

### Hierarchy
- **Display** (Syne 700, `clamp(2rem, 3.5vw, 3.25rem)`, line-height 1.15): The hero headline only. Slight negative tracking (-0.01em).
- **Headline** (Syne 700, 2.25rem, line-height 1.15): Section titles (`Professional Experience`, `Summary`).
- **Title** (Syne 700, 1.5rem, line-height 1.15): Card-level role and item headings.
- **Body** (DM Sans 400, 1.0625rem, line-height 1.65): All prose. Keep measure at 65–75ch (the summary and experience cards cap around 760px).
- **Label** (DM Sans 600, 0.8125rem, uppercase, letter-spacing 0.15em): Section eyebrows and meta. Terracotta for section labels, gold for card eyebrows.

### Named Rules
**The Caps-for-Labels-Only Rule.** Uppercase + wide tracking is reserved for short labels and eyebrows (≤4 words) and the logo. Never set sentences or body copy in all caps.

## 4. Elevation

A flat-by-default, lift-on-intent system. Surfaces rest flat on the cream field with only a hairline `--border-sand` outline; shadows appear as a response to elevation and hover, not as ambient decoration. Shadows are warm and tinted (built on `rgba(28, 25, 23, ...)`, the espresso ink), never neutral gray, so depth stays inside the warm world.

### Shadow Vocabulary
- **Card hover** (`box-shadow: 0 12px 32px rgba(28, 25, 23, 0.1)`): The standard lift when a card is hovered, paired with `translateY(-4px)`.
- **Accent button rest** (`box-shadow: 0 2px 8px rgba(194, 65, 12, 0.2)`): A soft terracotta-tinted glow grounding the primary button.
- **Accent button hover** (`box-shadow: 0 6px 20px rgba(194, 65, 12, 0.3)`): Deeper terracotta glow on hover with `translateY(-2px)`.
- **Modal / overlay** (`box-shadow: 0 32px 80px rgba(28, 25, 23, 0.16)`): Reserved for the heaviest overlays.

### Named Rules
**The Flat-at-Rest Rule.** Cards and surfaces are flat with a hairline border at rest. Shadow is a state, earned by hover, focus, or elevation, never the default look.

## 5. Components

### Buttons
- **Shape:** Gently rounded (6px, `--border-radius`). Compact padding (0.85rem 2rem); body font at 0.875rem, weight 600, letter-spacing 0.02em.
- **Primary:** Solid terracotta (#C2410C) on white text with a soft terracotta glow.
- **Hover / Focus:** Deepens to #9A3412, lifts `translateY(-2px)`, glow intensifies. Transitions on `--transition-base` (0.35s).
- **Outline:** Transparent with a 1.5px sand border and ink text; on hover the border and text shift to terracotta and the button lifts.

### Cards / Containers
- **Corner Style:** 10px (`--border-radius-lg`).
- **Background:** Card White (#FFFFFF) on the cream/sand page; the single current-item card uses Gold Wash (#FDF6E3).
- **Shadow Strategy:** Flat at rest (hairline border), `0 12px 32px` warm shadow + `translateY(-4px)` on hover (see Elevation).
- **Border:** 1px Border Sand (#E7E0D6); gold-tinted border on hover and on the current item.
- **Internal Padding:** Generous (`2rem`–`3rem`, `--space-xl`/`--space-2xl`).

### Navigation
- **Style:** Fixed top bar, transparent over the hero; on scroll it gains a translucent cream background (`rgba(250, 247, 242, 0.92)`) with a 16px backdrop blur and a hairline bottom rule.
- **Logo:** DM Sans 700, uppercase, wide tracking (0.12em), ink.
- **Links:** DM Sans 500, Ink Muted at rest; on hover/active they turn terracotta and a 1.5px terracotta underline grows from 0 to full width.
- **Mobile:** Off-canvas panel from the right with a slide-in shadow.

### Experience Card (signature)
A vertical stack of prose role cards (one paragraph per role). Each is a flat, full-bordered white card carrying a gold uppercase date·location eyebrow (Antique Gold Text #8A6309), a Syne role headline, a terracotta company line, and a DM Sans summary. Hierarchy is carried by type and color, not by chrome. On hover the card lifts, gains a soft shadow, and its border shifts to gold; the cards reveal in a short staggered cascade. The current (present) role is distinguished by the Gold Wash (#FDF6E3) background and a warmer gold border. No side-stripe or accent rail; the full border is the frame.

## 6. Do's and Don'ts

### Do:
- **Do** keep the page background warm (Cream #FAF7F2 or Sand #F0EBE3); reserve pure white for cards.
- **Do** spend terracotta sparingly (≤10% of a screen) and let gold play only a supporting second.
- **Do** set headlines in Syne and body in DM Sans; this pairing is the committed identity.
- **Do** keep prose measures at 65–75ch and use `--color-ink` (#292524) for primary reading text.
- **Do** treat shadows as a hover/elevation state with warm espresso-tinted values, not ambient gray.
- **Do** build accent/gold tints from the RGB-triplet tokens (`rgb(var(--color-accent-rgb) / 0.2)`, `rgb(var(--color-gold-rgb) / 0.3)`) rather than hard-coded `rgba()` literals, so the brand hues stay single-sourced.
- **Do** ship a `prefers-reduced-motion` fallback for every reveal and hover; content must be fully visible with motion off.

### Don't:
- **Don't** build a generic SaaS landing page: no gradient heroes, no purple-on-white, no big-number hero-metric template, no endless identical icon-card grids.
- **Don't** drift toward the corporate LinkedIn / resume-builder look: no stock photography, no default-blue corporate palette, no point-of-view-free layouts.
- **Don't** reach for the dark developer-terminal aesthetic: no neon-on-black, no monospace-as-costume.
- **Don't** add flashy maximalism: parallax overload or motion that upstages the content.
- **Don't** lighten the text tokens back toward the old #78716C / #A8A29E values; they failed AA on the sand sections. Every text color must clear 4.5:1 on the *darkest* background it lands on (sand #F0EBE3), and gold text must use Antique Gold Text (#8A6309), not #B8860B.
- **Don't** use a colored `border-left`/`border-right` stripe (or a `::before` bar faking one) as a card accent. Mark cards with a full border, a background tint (like the current-role gold wash), or a leading glyph instead.
- **Don't** repeat a tiny uppercase tracked eyebrow on every section as reflexive scaffolding; the label system here is deliberate, so keep it earned.
