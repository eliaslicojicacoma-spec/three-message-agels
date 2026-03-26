#!/bin/bash

echo "📥 Baixando imagens..."

# BLOG
mkdir -p public/images/blog
curl -L "https://images.unsplash.com/photo-1506744038136-46273834b3fb" -o public/images/blog/cover-1.jpg
curl -L "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" -o public/images/blog/cover-2.jpg
curl -L "https://images.unsplash.com/photo-1493244040629-496f6d136cc3" -o public/images/blog/cover-3.jpg

# BOOKS (sem pessoas)
mkdir -p public/images/books
curl -L "https://images.unsplash.com/photo-1512820790803-83ca734da794" -o public/images/books/book-1.jpg
curl -L "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" -o public/images/books/book-2.jpg
curl -L "https://images.unsplash.com/photo-1519681393784-d120267933ba" -o public/images/books/book-3.jpg

# HEROES (natureza forte)
mkdir -p public/images/heroes
curl -L "https://images.unsplash.com/photo-1501785888041-af3ef285b470" -o public/images/heroes/hero-1.jpg
curl -L "https://images.unsplash.com/photo-1470770841072-f978cf4d019e" -o public/images/heroes/hero-2.jpg

# BANNERS (céu / luz)
mkdir -p public/images/banners
curl -L "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" -o public/images/banners/banner-1.jpg
curl -L "https://images.unsplash.com/photo-1493558103817-58b2924bce98" -o public/images/banners/banner-2.jpg

# CHURCH (arquitetura / espiritual)
mkdir -p public/images/church
curl -L "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" -o public/images/church/church-1.jpg

# DEVOTIONALS (natureza calma)
mkdir -p public/images/devotionals
curl -L "https://images.unsplash.com/photo-1441974231531-c6227db76b6e" -o public/images/devotionals/devotional-1.jpg

echo "✅ Imagens baixadas com sucesso!"
