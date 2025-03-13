require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const leadRoutes = require('./routes/leadRoutes');

const app = express();
const PORT = process.env.PORT || 8080; // Railway использует 8080

// Подключение к MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Проверка работы API
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Роуты
app.use('/api/leads', leadRoutes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
