#!/bin/bash

set -e

BUCKET_NAME="equipment-repair-api-deploy"
FUNCTION_NAME="repair-api"
ZIP_PATH="function.zip"
MONGO_URI="mongodb+srv://12345kolt:sSrtDTKOr6klCGzc@lead.5uho2.mongodb.net/?retryWrites=true&w=majority&appName=lead"

echo "📦 Билдим фронтенд..."
cd frontend
npm run build
cd ..

echo "🗂 Копируем фронтенд в Object Storage..."
yc storage s3 cp --recursive frontend/build/ s3://$BUCKET_NAME/

echo "🗜 Упаковываем backend..."
cd backend
rm -f $ZIP_PATH  # удалить старый zip если есть
zip -r $ZIP_PATH * .env
cd ..

echo "⬆️ Загружаем архив в Object Storage..."
yc storage s3 cp backend/$ZIP_PATH s3://$BUCKET_NAME/$ZIP_PATH

echo "🚀 Обновляем Cloud Function..."
yc serverless function version create \
  --function-name=$FUNCTION_NAME \
  --runtime nodejs18 \
  --entrypoint index.handler \
  --memory 256m \
  --execution-timeout 10s \
  --source-path s3://$BUCKET_NAME/$ZIP_PATH \
  --environment MONGO_URI="$MONGO_URI"

echo "✅ Готово"
