# Design system

## Approved direction

Ivory terminal-style personal homepage. Approved by the user in the implementation request. The reference is terminal.shop's SSH interface, not its browser landing page. A visitor reads a short professional introduction at a desk in daylight, with the quiet warmth of ivory HHKB keycaps.

## Color

Restrained warm neutrals, defined in OKLCH: ivory paper, charcoal ink, muted gray labels, fine gray borders. No saturated accent is needed.

## Typography

Self-host New Heterodox Mono Book and Bold for prose and headings. Use Inconsolata Nerd Font Mono Regular for navigation, section labels, and terminal details. Keep font licenses alongside the assets. Body 18px, line height 1.65; name 32px. Monospace fallbacks remain readable.

## Layout

A centered frame approximately 76 body characters wide with generous outer whitespace. One-pixel square borders with a small path label. A compact identity header, About, and Projects. Two-column section labels and prose on desktop, stacked on narrow screens. Body lines stay below 65 characters. Avoid redundant session labels, section numbers, end-of-file labels, and repeated names.

## Interaction

Plain links and visible keyboard focus. A small progressive-enhancement script adds Vim navigation: j/k scroll, gg/G top/bottom, h/l previous/next link, Enter opens the focused link, ? opens an inline guide, Escape closes it. The guide contains a persistent opt-out. Respect editable fields, text selection, modifier keys, and native Tab navigation. Use instant scrolling. With JavaScript unavailable, hide the guide and retain all content and ordinary links. About redirects to the introduction; a matching 404 offers a home link.

## Visual assets

Typography and CSS framing provide the visual identity. No imagery or generated mockups are needed for the approved layout.
