# Mobile Improvements & Polish

## 1. Mobile Navigation Drawer

A slide-in drawer panel for mobile (<768px) replacing the hidden nav items.

- **Trigger:** Hamburger icon (3 horizontal lines) in the nav bar, visible only on mobile (`md:hidden`)
- **Drawer:** Slides in from the right, full-height, ~280px wide, backdrop overlay
- **Content:** Existing nav items (Projects, Experience, Testimonials, Contact) + logo + Get in Touch + LanguageToggle
- **Animation:** Drawer slides with `motion.div` `animate={{ x: 0 }}`, overlay fades in
- **Close:** Tap overlay, tap close button (X), or click a nav item

## 2. Carousel — Swipe, Arrows & Indicators

### Touch Swipe
- `onTouchStart`/`onTouchMove`/`onTouchEnd` handlers on the carousel card container
- Minimum swipe distance: 50px
- Swipe left → next, swipe right → previous
- Disables autoplay temporarily during swipe

### Arrow Navigation
- Left/right arrow buttons overlaid on the card area
- Visible on all screen sizes (desktop + mobile)
- Pause autoplay on hover

### Indicators (Dots)
- 4 dots below the carousel card
- Active dot uses `bg-[#62B2FE]`, inactive uses `bg-white/20`
- Clicking a dot navigates to that slide
- Respects autoplay state

## 3. WebP/AVIF Images via `<picture>`

Convert project images to WebP. Use the existing JPGs as fallback.

```html
<picture>
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="..." />
</picture>
```

Images to convert: FrameByFramePic, HourLessonPic, GiftPic, PosingPic

## 4. OG Meta Tags

Using `react-helmet-async`:
- `og:title`, `og:description`, `og:image`, `og:type`
- `twitter:card`, `twitter:title`, `twitter:description`
- Wrapped in a `<HelmetProvider>` at the App root

## 5. Prefers-Reduced-Motion

Add a global CSS rule in `index.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Files Changed

- `src/App.tsx` — HelmetProvider wrap, OG tags
- `src/components/nav.tsx` — hamburger + mobile drawer
- `src/components/feature-carousel.tsx` — swipe, arrows, dots
- `src/index.css` — reduced-motion rule
- `public/photos/*.webp` — new WebP images
