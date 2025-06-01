#!/bin/bash

set -e

echo "📦 1. Удаляю старую сборку..."
rm -rf build

echo "⚙️ 2. Собираю фронтенд..."
npm install
npm run build

echo "☁️ 3. Загружаю в Яндекс Облако..."

# Укажи название своего бакета
BUCKET_NAME="repair-api-deploy"

# Загружаем всю папку build в Object Storage
yc storage s3 cp --recursive ./build s3://$BUCKET_NAME/

echo "✅ Готово! Проверяй: https://storage.yandexcloud.net/$BUCKET_NAME/index.html"
