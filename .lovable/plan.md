text
## Fix mobile menu overlap on Dubai Properties

### Root cause
The site’s global auto-reveal animation adds `transform: translateY(40px)` (and `translateY(0)` once visible) to every `<section>` element, including the hero section that contains the `<Header />`. A transformed ancestor creates a new containing block for `position: fixed` descendants, so the mobile menu overlay and panel are positioned relative to the hero section rather than the viewport. The hero is only ~350 px tall on mobile, so the menu appears behind the lower Dubai Properties cards.

### What we will change
1. **Portal the mobile menu out of the hero section**
   - In `src/components/header.tsx`, render the mobile header, backdrop, and mobile menu panel through a React portal attached to `document.body`.
   - Keep the desktop header inside its caller (the hero section) so it still overlays the hero background.
   - The portal only renders on the client, so SSR stays unaffected.

2. **Verify z-index stacking still works**
   - Mobile header: keep `z-[10000]` (top of everything).
   - Mobile menu overlay: `z-[9999]`.
   - Backdrop: `z-[9990]`.
   - Because the portal renders directly under `<body>`, these elements sit in the root stacking context and are no longer clipped by the hero transform.

3. **Test across pages**
   - `/` (home), `/properties`, `/about-us`, `/services`, `/contact`, `/careers`, `/gallery`, `/blogs`.
   - Open the mobile menu and scroll; confirm the overlay covers the full viewport and no cards overlap the menu or hamburger.

### Files to edit
- `src/components/header.tsx` (add portal for mobile nav elements)
- Optionally `src/styles.css` if any small spacing adjustment is needed after the portal

### Expected result
- On mobile, tapping the three-line menu opens a full-viewport overlay that covers the Dubai Properties section completely.
- No page content overlaps the menu or the hamburger button.
- The fix remains compatible with the existing auto-reveal animations and the desktop header layout.
