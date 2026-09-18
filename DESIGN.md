# Design system

## Approved direction

Ivory terminal-style personal homepage. Approved by the user in the implementation request. The reference is terminal.shop's SSH interface, not its browser landing page. A visitor reads a short professional introduction at a desk in daylight, with the quiet warmth of ivory HHKB keycaps.

## Color

Restrained warm neutrals, defined in OKLCH: aged beige paper, dark brown ink, muted tobacco labels, and fine sand-colored borders. Links and hover states use the same dark brown ink, with no rust or brick-red accent. The palette evokes an aged computer manual beside beige keyboard keys.

## Typography

Self-host New Heterodox Mono Book and Bold for prose and headings. Use Inconsolata Nerd Font Mono Regular for navigation, project names, and terminal details. Keep font licenses alongside the assets. Body 16px, line height 1.6; name 28–34px, preserving the capitalization of Erik Scholtz, with tight tracking. Section headings keep the body size and regular weight, distinguished by a muted hash marker and generous whitespace. Project links stay unadorned until hover or focus. Keyboard hints use subtle beige keycap borders. Monospace fallbacks remain readable.

## Layout

A compact, unframed page approximately 84 body characters wide. Warm ivory and charcoal evoke HHKB keycaps through material restraint, not simulated terminal chrome. A plain name and quiet text navigation lead into About and Projects. Project names and descriptions align in two columns, stacking on narrow screens. Body lines stay below 65 characters. Generous whitespace and hash-marked headings establish the main section boundaries without dividers or scale changes; a faint footer rule closes the page. No session bars, command prompts, section numbers, manual suffixes, decorative arrows, dark tabs, or dashed rules. A visitor reads at a desk in daylight.

## Interaction

Plain links and visible keyboard focus. Section-anchor links carry a # prefix; links that leave the site carry a ↗ suffix. A small progressive-enhancement script adds Vim navigation: j/k scroll, gg/G top/bottom, h/l previous/next link, Enter opens the focused link, ? opens an inline guide, Escape closes it. Project rows reveal a quiet shell prompt marker on hover and keyboard focus. The guide contains a persistent opt-out. Respect editable fields, text selection, modifier keys, and native Tab navigation. Use instant scrolling. With JavaScript unavailable, hide the guide and retain all content and ordinary links. About redirects to the introduction; a matching 404 offers a home link.

## Visual assets

Typography and CSS framing provide the visual identity. No imagery or generated mockups are needed for the approved layout.
