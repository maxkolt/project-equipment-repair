# Этап 1: сборка фронтенда
FROM node:18 AS frontend-builder

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
RUN npm run build

# Этап 2: сборка backend и копирование фронта
FROM node:18

WORKDIR /app

COPY backend/package*.json ./backend/
RUN cd backend && npm install

COPY backend ./backend
COPY --from=frontend-builder /app/frontend/build ./backend/public

WORKDIR /app/backend

ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]
