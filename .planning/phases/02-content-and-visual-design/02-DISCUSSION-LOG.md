# Phase 2: Content and Visual Design - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions captured in CONTEXT.md — this log preserves the discussion.

**Date:** 2026-04-11
**Phase:** 02-content-and-visual-design
**Mode:** discuss
**Areas discussed:** Hero Visual Style, Scroll Animations, Service Card Visual Weight, About Photo Placeholder

---

## Assumptions Presented

### Hero Gradient
| Option | Description |
|--------|-------------|
| Dark top-to-bottom ✓ | Black (#0A0A0A) → deep warm tones, classic and readable |
| Angular diagonal | More dynamic, modern diagonal energy |
| Radial vignette | Subtle understated glow, most minimal |

### Scroll Animations
| Option | Description |
|--------|-------------|
| Add AOS 2.3.4 ✓ | CDN-loaded, fade-up on scroll, ~7KB, listed as acceptable in CLAUDE.md |
| No animations | Pure CSS, simpler code, can add later |

### Service Cards
| Option | Description |
|--------|-------------|
| Elevated with shadow ✓ | White card, border-radius 12px, drop shadow, orange icon circle, hover lift |
| Flat with border | Minimal, no shadow, editorial feel |

### About Photo Placeholder
| Option | Description |
|--------|-------------|
| Styled portrait box ✓ | 320×400px, warm background, dashed border, Lucide camera icon + dimension hint |
| Simple dashed border | Minimal, clearly marks placeholder without design |

---

## Corrections Made

No corrections — all recommended options confirmed.

---

## Key Decisions Captured

- Hero gradient: top-to-bottom black-to-warm (user-confirmed exact CSS)
- AOS: included, `duration: 600, once: true, offset: 80`
- Cards: elevated with shadow + orange icon circle badge + hover lift
- Photo placeholder: styled portrait box with camera icon and dimension prompt

---
*Discussion log: 2026-04-11*
