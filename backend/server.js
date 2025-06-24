require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const leadRoutes = require('./routes/leadRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

// Подключение к MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Роуты API
app.use('/api/leads', leadRoutes);

// Отдача фронтенда (собранного React-приложения)
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});