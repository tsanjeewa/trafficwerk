

## GDPR Fix: Remove All Google Fonts References

### Problem
Google Fonts are loaded externally, which sends user IP addresses to Google servers — a GDPR violation without explicit consent.

### Changes (4 files, removal only)

#### 1. `index.html` (lines 8-13)
Remove 6 lines: preconnect links, preload, stylesheet link, and noscript fallback for Google Fonts.

#### 2. `src/index.css` (line 1)
Remove the `@import url('https://fonts.googleapis.com/...')` line.

#### 3. `tailwind.config.ts` (lines 17-18)
Replace font stacks:
- `sans`: from `["Inter", "system-ui", "sans-serif"]` → `["-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "Arial", "sans-serif"]`
- `display`: from `["Space Grotesk", "system-ui", "sans-serif"]` → same system stack (removes Space Grotesk dependency)

#### 4. `public/.htaccess` (line 37)
Remove `https://fonts.googleapis.com` from `style-src` and `https://fonts.gstatic.com` from `font-src` in the CSP header.

#### 5. `src/index.css` heading rule (around line 70)
Update the `h1-h6` font-family from `'Space Grotesk'` to the system font stack.

#### NOT touched
- Inline `style={{ fontFamily: "'Space Grotesk'" }}` references in `.tsx` files (FAQ, GEO page, SEOStrategie) — these will naturally fall back to the system stack since Space Grotesk won't be loaded. No functional change needed, but for cleanliness they should be removed too.
- `node_modules/` — not project code.

