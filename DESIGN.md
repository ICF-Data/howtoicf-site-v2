---
name: HowToICF
description: Visual identity for HowToICF / Stronghold ICF — field manual aesthetic for ICF construction guides.
colors:
  primary: "#1A1A1A"
  on-primary: "#F0EBE3"
  secondary: "#F4EFE8"
  on-secondary: "#1A1A1A"
  accent: "#2D4A6B"
  on-accent: "#F0EBE3"
  neutral: "#9A9087"
  stat: "#C8883A"
  warning: "#A63D2F"
  success: "#4A7C59"
  surface: "#242424"
typography:
  h1:
    fontFamily: Inter
    fontSize: 3rem
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 1.375rem
    fontWeight: 700
    lineHeight: 1.3
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 500
    letterSpacing: 0.05em
  stat:
    fontFamily: Inter
    fontSize: 6rem
    fontWeight: 800
    lineHeight: 1
rounded:
  sm: 2px
  md: 4px
spacing:
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
  button-primary-hover:
    backgroundColor: "#1E3552"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
  nav:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  stat-callout:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.stat}"
    rounded: "{rounded.sm}"
  badge-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  badge-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
---

## Overview

Field Manual. The visual equivalent of a laminated instruction card pinned to a job site trailer. Concrete Black and Near White as the foundation — high contrast, nothing decorative. A single Slate Blue accent drives all interactive elements. Amber for numbers that need to stop the eye.

The mood is Carhartt meets Economist magazine: utility without trying to be cool, type-forward confidence with zero ornamentation. Clean but never precious. Looks like it was designed by someone who has read the specs and walked the site.

Reference aesthetics: Carhartt (utility without performing cool), Milwaukee Tool marketing (specs as personality), Economist magazine covers (type-forward, confident, zero decoration).

Avoid at all costs: the green "eco/sustainable" palette saturated by every ICF competitor (Fox Blocks, Nudura, BuildBlock), SaaS-style gradients, rounded corners everywhere, stock photo aesthetics, decorative icons, drop shadows.

## Colors

The palette is rooted in job-site materials — concrete and raw steel — not lifestyle or sustainability marketing.

- **Primary (#1A1A1A):** Concrete Black. Page backgrounds, slide backgrounds. The dominant surface. Never use pure black (#000000) — this has just enough warmth to feel like material, not a void.
- **On-Primary (#F0EBE3):** Near White. All body text on dark surfaces. Never pure white (#FFFFFF) — that reads clinical and cold.
- **Secondary (#F4EFE8):** Warm White. Light-mode surfaces, alternate section backgrounds.
- **On-Secondary (#1A1A1A):** Concrete Black on light backgrounds.
- **Accent (#2D4A6B):** Slate Blue. The sole interactive color. All CTA buttons, links, active states. Use only where action is required — never decorative.
- **On-Accent (#F0EBE3):** Near White on Slate Blue backgrounds.
- **Neutral (#9A9087):** Warm Gray. Captions, metadata, nav links at rest, supporting text, borders at low opacity. Never for primary content.
- **Stat (#C8883A):** Amber. Key performance numbers, metrics, anything that needs to stop the scroll. Use sparingly — loses impact if overused. One stat callout per section maximum.
- **Warning (#A63D2F):** Warm Red. Caution callouts and "what not to do" blocks only. Never for branding.
- **Success (#4A7C59):** Concrete Green. Checkmarks and positive outcome indicators only. Not a brand color — do not use it for general UI decoration.
- **Surface (#242424):** Slightly lighter than Primary. Cards and elevated containers on dark backgrounds. Creates depth without glows or drop shadows.

## Typography

Inter across the board. Heavy weights for headlines — they should fill the space and land like a stamp. Never serif, never script, never decorative. The type does the work; no illustration needed.

- **h1:** 3rem / 800 weight / -0.02em tracking / 1.1 line-height. Page-level headlines. Should feel like a stamp, not a title. One per page.
- **h2:** 2rem / 700 weight / -0.01em tracking / 1.2 line-height. Section headers.
- **h3:** 1.375rem / 700 weight / 1.3 line-height. Sub-section headers, card titles.
- **body-md:** 1rem / 400 weight / 1.6 line-height. All running text. Wide enough to read fast, tight enough to feel efficient.
- **body-sm:** 0.875rem / 400 weight / 1.5 line-height. Secondary content, metadata, disclaimers.
- **label:** 0.75rem / 500 weight / 0.05em tracking. Button text, tags, captions. Tracked out so they read as identifiers, not prose.
- **stat:** 6rem / 800 weight / 1 line-height. Key performance numbers only. The number dominates; a label sits below in body-sm Neutral. Never use at this scale for anything other than a key metric.

## Layout

Reads left-to-right and top-to-bottom like a field manual — no diagonal layouts, no overlapping elements, no "hero with tilted cards." Sections have clear divisions. White space is structural, not decorative.

- Section vertical padding: 64px (xl)
- Between logical groups: 32px (lg)
- Between related items: 16px (md)
- Between tightly coupled elements (label + value): 8px (sm)
- Max content width: 1200px
- Text column max width: 680px — never full-bleed text

## Elevation & Depth

No drop shadows. Depth comes from background color steps: Primary (#1A1A1A) → Surface (#242424) → Secondary (#F4EFE8). Cards sit on Surface. Borders use Neutral (#9A9087) at 20% opacity — a line that defines without boxing in. Never use glow effects.

## Shapes

2px radius as the default for all interactive elements. 4px for cards and input fields only. Never pill-shaped buttons — they signal consumer SaaS, not a field tool. No decorative shapes, no background blobs, no illustration of any kind.

## Components

### button-primary
Slate Blue (#2D4A6B) background, Near White text, label typography, 2px radius, 12px/24px padding. Hover darkens to #1E3552. No border, no shadow — the only affordance is the color shift. This is the only CTA color; do not create alternate accent-colored buttons.

### button-secondary
Transparent background, Near White text, 1px Neutral border at 40% opacity, 2px radius, same padding as primary. Use when a secondary action sits alongside a primary CTA. Never use two primary buttons side by side.

### nav
Primary (#1A1A1A) background. Links in Neutral (#9A9087) at rest. Active and hover state: Accent (#2D4A6B) or On-Primary (#F0EBE3). No underlines. No background pills on nav items. Flat.

### card
Surface (#242424) background, 4px radius, 24px inner padding, 1px Neutral border at 20% opacity. No shadow. Cards never float — they read as grounded slabs against the primary background.

### stat-callout
Large format block. Amber stat number (stat typography, {colors.stat}) over Primary or Surface background. Unit in body-md, same Amber. Descriptor label below in body-sm Neutral. One stat callout per section.

### badge-warning
Warm Red (#A63D2F) background, Near White text, 2px radius. Use only for caution callouts and "what not to do" annotations. Never decorative.

### badge-success
Concrete Green (#4A7C59) background, Near White text, 2px radius. Use only for confirmed positive outcomes (checklist items complete, test results passing). Never decorative.

## Do's and Don'ts

**DO:**
- Use Amber (#C8883A) for numbers that matter — blower door results, energy savings percentages, cost comparisons
- Keep buttons sharp-cornered (2px). Soft corners signal the wrong brand.
- Let text and data carry visual weight. No icons, no illustration.
- Reserve Slate Blue exclusively for interactive elements — if it's blue, it should be clickable
- Use subtle concrete texture overlays at 8% opacity max to add credibility to dark backgrounds
- Keep photography on job sites: concrete walls mid-pour, ICF blocks being stacked, real crews and hands on materials

**DON'T:**
- Use green (#4A7C59) outside of success indicators — competitors own that palette
- Use gradients anywhere
- Round corners beyond 4px
- Use decorative icons or illustration
- Apply drop shadows
- Use pure white (#FFFFFF) — use Near White (#F0EBE3) or Warm White (#F4EFE8) instead
- Apply ALL CAPS to more than one element per section — use it once for impact, never as a default style
- Use the accent color (Slate Blue) for non-interactive decoration
