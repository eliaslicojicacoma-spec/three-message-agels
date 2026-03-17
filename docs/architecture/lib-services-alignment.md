# Lib and Services Alignment

## lib (infrastructure / technical helpers)
Expected:
- src/lib/api
- src/lib/external
- src/lib/adapters
- src/lib/clients

## services (domain logic)
Expected:
- src/services/bible
- src/services/books
- src/services/blog
- src/services/studies
- src/services/downloads
- src/services/favorites
- src/services/newsletter
- src/services/donations
- src/services/related-content

## Legacy lib folders still present
- src/lib/bible
- src/lib/bible-import
- src/lib/storage
- src/lib/verse-of-day

## Planned migration
- src/lib/bible -> src/services/bible + src/utils/bible
- src/lib/bible-import -> src/services/bible
- src/lib/storage -> src/services/favorites + src/hooks/use-local-storage
- src/lib/verse-of-day -> src/services/related-content or feature-specific service
