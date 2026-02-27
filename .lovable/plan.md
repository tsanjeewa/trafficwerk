

## Connect Supabase & Dynamic Landing Pages

### Prerequisites (User Action Required)

The project has **no Supabase connection**. You need to connect your Supabase project first:
1. Click the **Supabase** button in the Lovable toolbar (top-right)
2. Connect your existing Supabase project (or create one)
3. This will auto-generate `src/integrations/supabase/client.ts` and type files

### After Connection — Implementation Steps

#### 1. Create `landing_posts` table in Supabase
Table schema matching the existing `LandingPageData` interface:

```text
landing_posts
├── id          uuid (PK, default gen_random_uuid())
├── slug        text (unique, not null)
├── meta_title  text (not null)
├── meta_description text (not null)
├── h1          text (not null)
├── intro       text (not null)
├── benefits    text[] (not null)
├── created_at  timestamptz (default now())
```

Enable RLS with a public SELECT policy (this is public marketing content).

#### 2. Update `src/pages/LandingPage.tsx`
- Replace the static `getLandingPageBySlug(slug)` import with a Supabase query
- Use `useQuery` from `@tanstack/react-query` to fetch from `landing_posts` where `slug` matches
- Add loading skeleton and error states
- Keep the existing UI template (Hero, Benefits, CTA sections) but feed it data from Supabase

#### 3. Remove static data dependency
- The component will no longer import from `src/data/landingPages.ts`
- The static file can remain as a fallback/seed reference

#### 4. Files changed
- `src/pages/LandingPage.tsx` — rewrite data fetching to use Supabase client + react-query

