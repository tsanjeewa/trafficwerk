

## Final Cleanup: Domain Portfolio Removal, Modest Figures, Contrast Fix, and Navigation Audit

### 1. Remove Domain Portfolio Section and All References

**Files affected:** `src/pages/Index.tsx`, `src/App.tsx`, `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`

- **Index.tsx**: Remove the `DomainPortfolioSection` import and its `<DomainPortfolioSection />` from the homepage layout.
- **App.tsx**: Remove the `DomainPortfolio` import and the `/domain-portfolio` route.
- **Navbar.tsx**: Remove the entire "Domain Management" category (lines 101-111) from `megaMenuCategories` array. This removes the "Domain Portfolio ansehen", "Hub-and-Spoke Strategie", and "Domain-Checker" links.
- **Footer.tsx**: Remove the "Domain-Portfolio" link from the "Unternehmen" column (line 73-75).

The files `src/pages/DomainPortfolio.tsx`, `src/data/domainPortfolio.ts`, and `src/components/sections/DomainPortfolioSection.tsx` can remain in the repo (unused, tree-shaken out of the bundle) or be deleted for cleanliness.

### 2. Tone Down Aggressive Performance Figures

**File affected:** `src/components/sections/AnalyticsSection.tsx`

The current aggressive figures to replace:
- `+420%` (Sichtbarkeit) -- replace with a more modest `+120%`
- `16x` (Traffic-Wachstum in 12 Monaten) -- replace with `3x`
- `+1.583%` badge on the chart -- replace with a descriptive label like `Wachstumstrend`
- The traffic data chart goes from 820 to 13,800 which is the "16x" claim -- scale it down to a more modest growth curve (e.g., 820 to ~2,500)

The other KPIs (`85%` Keywords Top 10, `100%` datengetriebene Strategie) are qualitative/reasonable and can stay.

### 3. Fix UI Contrast Issues

**Potential white-on-white problems identified:**

- **ResultsSection.tsx** (line 51): Cards use `bg-white` with `border-slate-100` -- these are white cards on a white background. Add a subtle background to the section itself (e.g., `bg-slate-50`) to create separation.
- **AwardsSection.tsx** (line 13, 37): Section is `bg-white` and cards are `bg-white` with only `border-slate-100`. Add `bg-slate-50/50` to cards or a section background.
- **AnalyticsSection.tsx** (line 38, 64, 132): Section `bg-white`, cards `bg-white` -- same pattern. Add subtle section background.
- **TrustSection.tsx**: Marquee text uses `text-muted-foreground/50` which is quite faint. Increase to `text-muted-foreground/70`.
- **IndustrySection.tsx** (line 33): Cards use `bg-card` with `border-border/50` -- the half-opacity border may be too subtle. Change to `border-border`.

Changes:
- Alternate sections between `bg-white` and `bg-slate-50` for clear visual separation.
- Ensure all card borders are at least `border-slate-200` for visibility.
- Bump faint text from `/50` opacity to `/70` minimum.

### 4. Audit Navigation Links

All links in the Navbar and Footer have been reviewed:

- **Navbar top links**: Startseite (/), Uber uns (scroll #about), Team (scroll #team), Wissen (/wissen), FAQ (/faq), Kontakt (/kontakt) -- all correct.
- **Mega menu links**: All point to `/lp/*` landing pages or `/services/*` routes which exist in the router. Verified correct.
- **Footer "Uber uns & Team"** (line 65): Uses `<a href="/#team">` -- this is a plain anchor that causes full page reload. Convert to use `react-router-dom` Link or an onClick handler with `scrollToAnchor` for consistency.
- **CTA button**: Points to `/gratis-analyse` -- correct.
- **"Domain Management" category in mega menu**: Will be removed (see item 1).

### 5. Verify German Umlauts

A scan of all section files shows correct use of Umlaute (ä, ö, ü, ß) throughout. No encoding issues found -- all files use UTF-8 and special characters render correctly. The city name "Röhrmoos" in the Footer is correct. "Häufige Fragen", "Über uns", "Leistungen", "Suchmaschinenoptimierung" etc. all have proper characters.

---

### Technical Summary of Changes

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Remove DomainPortfolioSection import + usage |
| `src/App.tsx` | Remove DomainPortfolio import + route |
| `src/components/layout/Navbar.tsx` | Remove "Domain Management" mega menu category |
| `src/components/layout/Footer.tsx` | Remove Domain-Portfolio link; fix /#team link |
| `src/components/sections/AnalyticsSection.tsx` | Tone down KPI values and chart data |
| `src/components/sections/ResultsSection.tsx` | Add section background for contrast |
| `src/components/sections/AwardsSection.tsx` | Improve card contrast |
| `src/components/sections/TrustSection.tsx` | Increase marquee text opacity |
| `src/components/sections/IndustrySection.tsx` | Strengthen card borders |

