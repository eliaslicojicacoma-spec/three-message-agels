# Migration Map

## Legacy content folders
- src/content/bible-data -> target: src/content/bible + src/services/bible + src/features/bible
- src/content/bible-import -> target: src/content/bible + src/services/bible
- src/content/bible-search -> target: src/content/bible + src/features/search + src/services/bible
- src/content/download-items -> target: src/content/downloads
- src/content/home -> target: src/features/home
- src/content/library -> target: src/features/library
- src/content/three-angels-message -> target: src/features/three-angels-message
- src/content/verse-of-day -> target: src/content/devotionals or src/features/home depending on usage

## Legacy lib folders
- src/lib/bible -> target: src/services/bible + src/utils/bible
- src/lib/bible-import -> target: src/services/bible
- src/lib/storage -> target: src/services/favorites + src/hooks/use-local-storage
- src/lib/verse-of-day -> target: src/services/related-content or src/features/home

## Legacy components
- src/components/BibleLink.tsx -> src/components/bible/BibleLink.tsx
