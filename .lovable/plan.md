

## Glossary Page: Category Filtering Implementation

### Changes to `src/pages/Wissen.tsx`

1. **Add `activeCategory` state** (line ~142): `useState<string | null>(null)`

2. **Extract unique categories** via `useMemo`: Collect all unique `category` values from `glossaryTerms`, sorted alphabetically.

3. **Add category filter to `filteredTerms`** (line ~156): Before the letter/search filters, filter by `activeCategory` when set.

4. **Add category chip row** between the search input and alphabet filter (after line 211): A horizontal `flex-wrap` row of buttons — one "Alle" chip plus one per unique category. Active chip gets `bg-primary text-primary-foreground`, inactive gets `bg-muted`.

5. **Make card badges clickable** (line 260): Wrap the category `<span>` in a `<button>` with `onClick={() => setActiveCategory(item.category)}` and add `cursor-pointer hover:bg-primary/20` styling.

6. **Search bar contrast**: Add `bg-slate-50 border-slate-300` classes to the search Input (line 210) for accessibility.

