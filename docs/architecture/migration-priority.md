# Migration Priority

## Priority 1 — Devotionals / Verse of the Day
Current:
- src/lib/verse-of-day
- src/components/verse-of-day
- src/app/verse-of-day/page.tsx

Target:
- src/features/devotionals
- src/services/related-content

Reason:
- low risk
- isolated domain
- good first migration target

## Priority 2 — Favorites / Library
Current:
- src/lib/storage
- src/components/bible/*favorites*
- src/app/bible/library/page.tsx
- src/app/bible/verse-favorites/page.tsx

Target:
- src/features/library
- src/features/favorites
- src/services/favorites

Reason:
- medium risk
- clear boundaries
- strong architecture gain

## Priority 3 — Bible
Current:
- src/lib/bible
- src/lib/bible-import
- src/content/bible-data
- src/content/bible-import
- src/app/bible/*
- src/components/bible/*

Target:
- src/features/bible
- src/services/bible
- src/utils/bible
- src/content/bible

Reason:
- high value
- larger migration
- should happen after patterns are established
