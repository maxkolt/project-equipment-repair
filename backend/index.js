require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// ✅ CORS с явной настройкой
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

// ✅ Обрабатываем preflight-запросы
app.options('*', cors());

// ✅ JSON-парсинг
app.use(express.json());

// ✅ Подключение MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB подключена'))
  .catch(err => console.error('❌ Ошибка подключения MongoDB:', err));

// ✅ Схема и модель
const leadSchema = new mongoose.Schema({
  name: String,
  phone: String,
  createdAt: { type: Date, default: Date.now }
});
const Lead = mongoose.model('Lead', leadSchema);

// ✅ POST: /api/leads
app.post('/api/leads', async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json({ message: 'Lead saved' });
  } catch (err) {
    console.error('❌ Ошибка при сохранении:', err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// ✅ Экспорт для Yandex Cloud Functions
module.exports.handler = serverless(app);
