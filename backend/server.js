require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const leadRoutes = require('./routes/leadRoutes');

const app = express();
const PORT = process.env.PORT || 5002;

// Подключение к MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Роуты
app.use('/api/leads', leadRoutes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
