#!/usr/bin/env bash
set -euo pipefail

# Имя бакета в Yandex Object Storage
BUCKET_NAME="repair-api-deploy"

# 1) Собираем фронтенд
echo "📦 Билдим фронтенд..."
pushd frontend >/dev/null
npm install      # Можно убрать, если зависимости уже стоят
npm run build
popd >/dev/null

echo "🗂 Загружаем фронтенд в Object Storage..."
yc storage s3 cp \
  --recursive \
  frontend/build/ \
  s3://"$BUCKET_NAME"/frontend/

# 2) Упаковываем бэкенд в ZIP (в корне проекта появится function.zip)
echo "🗜 Упаковываем бэкенд в function.zip..."
pushd backend >/dev/null
rm -f ../function.zip
# Упаковываем ВСЁ внутри backend/, включая node_modules/ — чтобы функция сразу могла запуститься без npm install
zip -r ../function.zip . -x "*.git*" -x "*.DS_Store"
popd >/dev/null

# 3) Заливаем этот ZIP в бакет (ключ function.zip)
echo "⬆️ Загружаем function.zip в Object Storage..."
yc storage s3 cp \
  function.zip \
  s3://"$BUCKET_NAME"/function.zip

echo "✅ Функция function.zip загружена в бакет $BUCKET_NAME."
echo "✅ Фронтенд загружен в бакет $BUCKET_NAME/frontend/"
