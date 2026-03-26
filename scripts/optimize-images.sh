#!/bin/bash
set -e

echo "🔧 Iniciando otimização de imagens..."

TARGET_DIRS=(
  "public/images/blog"
  "public/images/books"
  "public/images/heroes"
  "public/images/banners"
  "public/images/church"
  "public/images/devotionals"
)

for dir in "${TARGET_DIRS[@]}"; do
  if [ -d "$dir" ]; then
    echo "📁 Processando $dir"

    find "$dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
      output="${file%.*}.webp"

      if [ ! -f "$output" ]; then
        cwebp -q 82 "$file" -o "$output" >/dev/null 2>&1 && echo "✅ $(basename "$output")"
      else
        echo "⏭️  Já existe: $(basename "$output")"
      fi
    done
  fi
done

echo "🎉 Otimização concluída."
