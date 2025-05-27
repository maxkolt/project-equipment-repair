require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const serverless = require('serverless-http');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB подключена'))
  .catch(err => console.error('❌ Ошибка подключения MongoDB:', err));

// Схема + модель
const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const Lead = mongoose.model('Lead', leadSchema);

// Маршруты API
app.post('/api/leads', async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json({ message: 'Lead saved' });
  } catch (err) {
    console.error('❌ Ошибка сохранения:', err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Экспорт обработчика для Yandex Cloud Functions
module.exports.handler = serverless(app);
