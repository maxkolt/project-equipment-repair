#!/bin/bash

# 🔧 Настройки
FRONTEND_DIR="frontend"
BACKEND_DIR="backend"
BUCKET_NAME="equipment-repair-site"
BACKEND_BUCKET="equipment-repair-api-deploy"
FUNCTION_NAME="equipment-repair-api"
FUNCTION_ENTRY="index.handler"
YC_FOLDER_ID="b1g638itvs22c69j54pn"
MONGO_URI="mongodb+srv://12345kolt:sSrtDTKOr6klCGzc@lead.5uho2.mongodb.net/?retryWrites=true&w=majority&appName=lead"

# 🕵️ Проверка ошибок
set -euo pipefail
trap 'echo "❌ Ошибка на строке $LINENO"; exit 1' ERR

# 📦 Сборка frontend
echo "📦 Сборка фронтенда..."
cd "$FRONTEND_DIR"
npm install && npm run build
cd ..

# 🔗 Добавление .env во фронт (если нужно)
API_ID=$(yc serverless function get --name $FUNCTION_NAME --format json | jq -r .id || echo "")
if [ -n "$API_ID" ]; then
  echo "REACT_APP_API_URL=https://functions.yandexcloud.net/$API_ID" > $FRONTEND_DIR/.env
fi

# ☁️ Загрузка фронтенда в Object Storage
echo "🪣 Загрузка фронтенда в бакет $BUCKET_NAME..."
yc storage s3 cp --recursive frontend/build s3://$BUCKET_NAME/ --acl public-read

echo "🌐 Сайт доступен:"
echo "🔗 https://$BUCKET_NAME.website.yandexcloud.net"

# 🛠 Подготовка backend
echo "📁 Подготовка backend..."
rm -rf .tmp-function
mkdir .tmp-function
cp -r $BACKEND_DIR/index.js .tmp-function/
cp -r $BACKEND_DIR/package*.json .tmp-function/
cp -r $BACKEND_DIR/routes .tmp-function/
cp -r $BACKEND_DIR/config .tmp-function/
cp -r $BACKEND_DIR/models .tmp-function/
cd .tmp-function
npm install --omit=dev
cd ..
zip -r function.zip .tmp-function > /dev/null

# 📤 Загрузка архива в Object Storage
echo "🗂 Загрузка backend архива в бакет $BACKEND_BUCKET..."
yc storage bucket create --name "$BACKEND_BUCKET" --default-storage-class STANDARD --max-size 52428800 2>/dev/null || true
yc storage s3 cp function.zip s3://$BACKEND_BUCKET/function.zip

# 🚀 Деплой функции
echo "🚀 Деплой Cloud Function..."
yc serverless function create --name $FUNCTION_NAME --folder-id $YC_FOLDER_ID 2>/dev/null || true

yc serverless function version create \
  --function-name "$FUNCTION_NAME" \
  --runtime nodejs18 \
  --entrypoint "$FUNCTION_ENTRY" \
  --memory 256MB \
  --execution-timeout 30s \
  --source-path "s3://$BACKEND_BUCKET/function.zip" \
  --environment MONGO_URI="$MONGO_URI"

# ✅ Готово
API_URL_FINAL="https://functions.yandexcloud.net/$(yc serverless function get --name $FUNCTION_NAME --format json | jq -r .id)"
echo "✅ Деплой завершён!"
echo "🔗 Ссылка на backend: $API_URL_FINAL"
echo "🌍 Открытие сайта..."

# 🧠 Попытка открыть сайт (для macOS)
if command -v open > /dev/null; then
  open "https://$BUCKET_NAME.website.yandexcloud.net"
fi